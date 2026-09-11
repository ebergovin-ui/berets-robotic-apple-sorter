import queue
import os
import threading
import time

try:
    from .container_inventory import COLOR_LABELS
except ImportError:
    from container_inventory import COLOR_LABELS


ROUTE_NAMES = {"red": "red", "green": "green", "yellow": "yellow"}
LABEL_TO_COLOR = {label: color for color, label in COLOR_LABELS.items()}


class ContainerExchangeCoordinator:
    """Последовательно выполняет автоматические замены контейнеров."""

    def __init__(self, state, hardware, dispenser, zone_gates, route_executor, inventory):
        self.state = state
        self.hardware = hardware
        self.dispenser = dispenser
        self.zone_gates = zone_gates
        self.route_executor = route_executor
        self.inventory = inventory
        self.sensor_confirm_seconds = max(
            0.0,
            float(
                os.environ.get(
                    "BERETS_CONTAINER_EXCHANGE_SENSOR_CONFIRM_SECONDS",
                    "0.3",
                )
            ),
        )
        self.jobs = queue.Queue(maxsize=3)
        self.request_lock = threading.Lock()
        self.pending_colors = set()
        self.release_events = {}
        self.stop_event = threading.Event()
        self.thread = threading.Thread(target=self._worker, name="berets-container-exchange", daemon=True)
        self.thread.start()

    def request(self, label):
        color = LABEL_TO_COLOR.get(label)
        if not color:
            raise ValueError("Неизвестный цвет контейнера")
        with self.request_lock:
            inventory = self.inventory.snapshot()
            if not inventory["initialized"]:
                raise RuntimeError("Сначала подтвердите состав стопок")
            if inventory.get("active_job") or inventory.get("service_required"):
                required = inventory.get("service_required") or {}
                raise RuntimeError(required.get("message", "Замена уже выполняется"))
            if color in self.pending_colors:
                raise RuntimeError("Замена этого контейнера уже поставлена в очередь")
            release_event = threading.Event()
            with self.state.lock:
                resume_sorting = bool(self.state.data["system"]["operational"])
            self.release_events[color] = release_event
            self.jobs.put_nowait((color, release_event, resume_sorting))
            self.pending_colors.add(color)
        self._set_state(active=True, color=label, phase="поставлено в очередь", fault=None)

    def release(self, label):
        """Разрешает переход от безопасной подготовки к точке 3 после остановки ленты."""
        color = LABEL_TO_COLOR.get(label)
        if not color:
            return False
        with self.request_lock:
            release_event = self.release_events.get(color)
        if release_event is None:
            return False
        self.zone_gates.stop(reason=None)
        self.dispenser.stop(reason=None)
        if self.hardware.conveyor_output:
            self.hardware.set_conveyor(False)
        with self.state.lock:
            self.state.data["system"]["operational"] = False
        self._set_state(phase="конвейер остановлен; переход к точке 3")
        release_event.set()
        return True

    def _set_state(self, **values):
        with self.state.lock:
            self.state.data["container_exchange"].update(values)

    def _worker(self):
        while not self.stop_event.is_set():
            try:
                color, release_event, resume_sorting = self.jobs.get(timeout=0.2)
            except queue.Empty:
                continue
            try:
                self._run(color, release_event, resume_sorting)
            except Exception as error:
                self._stop_sorting_outputs()
                self._set_state(active=False, phase="ошибка", fault=str(error))
                self.state.log(f"Автоматическая замена остановлена: {error}", "warning")
            finally:
                with self.request_lock:
                    self.pending_colors.discard(color)
                    self.release_events.pop(color, None)
                self.jobs.task_done()

    def _stop_sorting_outputs(self):
        try:
            self.zone_gates.stop(reason=None)
        except Exception:
            pass
        try:
            self.dispenser.stop(reason=None)
        except Exception:
            pass
        try:
            if self.hardware.conveyor_output:
                self.hardware.set_conveyor(False)
        except Exception:
            pass
        with self.state.lock:
            self.state.data["system"]["operational"] = False

    def _start_sorting_outputs(self):
        try:
            self.zone_gates.start(automatic_outputs=True)
            self.hardware.set_conveyor(True)
            self.dispenser.start()
        except Exception:
            self._stop_sorting_outputs()
            raise
        with self.state.lock:
            self.state.data["system"]["operational"] = True

    def _run(self, color, release_event, resume_sorting):
        label = COLOR_LABELS[color]
        with self.state.lock:
            present_at_start = bool(
                self.state.data["containers"]["presence"].get(label)
            )
        if not present_at_start:
            raise RuntimeError(
                f"Датчик не подтверждает исходный контейнер «{label}»"
            )
        job = self.inventory.prepare_exchange(color)
        job_id = job["id"]
        self._sync_inventory_state()
        self._set_state(
            active=True, color=label,
            full_level=job["full_level"], empty_level=job["empty_level"],
            phase="выполнение маршрута", fault=None,
        )
        finished = threading.Event()
        point_26_reached = threading.Event()
        replacement_sensor_ready = threading.Event()
        resume_lock = threading.Lock()
        resume_state = {"done": False}
        result = {"ok": False, "error": "Маршрут не завершён"}

        def maybe_resume_early():
            if not resume_sorting or not point_26_reached.is_set() or not replacement_sensor_ready.is_set():
                return
            with resume_lock:
                if resume_state["done"]:
                    return
                inventory_now = self.inventory.snapshot()
                if (
                    inventory_now["empty_stack"] == 0
                    or inventory_now["full_stacks"][color] >= 4
                ):
                    return
                self._start_sorting_outputs()
                resume_state["done"] = True
                self.state.log(
                    "Новый пустой контейнер подтверждён, вилы выведены; сортировка возобновлена до возврата манипулятора в HOME"
                )

        def checkpoint(point_number, _point):
            self.inventory.checkpoint(job_id, point_number)
            self._sync_inventory_state()
            if point_number >= 26:
                with self.state.lock:
                    self.state.data["containers"]["sorting"][label] = 0
                point_26_reached.set()
                maybe_resume_early()

        def completed(ok, error=None):
            result.update(ok=bool(ok), error=str(error or ""))
            finished.set()

        try:
            self.route_executor.start(
                ROUTE_NAMES[color], job["full_level"], job["empty_level"], 20,
                checkpoint=checkpoint,
                on_complete=completed,
                continue_after_preposition=release_event,
            )
            sensor_absent = False
            absent_since = None
            present_since = None
            while not finished.wait(0.1):
                self.hardware.refresh_inputs(log_changes=False)
                with self.state.lock:
                    present = bool(self.state.data["containers"]["presence"][label])
                if present:
                    absent_since = None
                    if sensor_absent:
                        now = time.monotonic()
                        if present_since is None:
                            present_since = now
                        if now - present_since >= self.sensor_confirm_seconds:
                            replacement_sensor_ready.set()
                            maybe_resume_early()
                else:
                    present_since = None
                    now = time.monotonic()
                    if absent_since is None:
                        absent_since = now
                    if (
                        not sensor_absent
                        and now - absent_since >= self.sensor_confirm_seconds
                    ):
                        sensor_absent = True
                        self.inventory.mark_sensor_absent(job_id)
            if not result["ok"]:
                raise RuntimeError(result["error"] or "Ошибка маршрута")
            deadline = time.monotonic() + 10.0
            present_since = None
            while time.monotonic() < deadline:
                self.hardware.refresh_inputs(log_changes=False)
                with self.state.lock:
                    present = bool(self.state.data["containers"]["presence"][label])
                now = time.monotonic()
                if not present:
                    present_since = None
                    if absent_since is None:
                        absent_since = now
                    if (
                        not sensor_absent
                        and now - absent_since >= self.sensor_confirm_seconds
                    ):
                        sensor_absent = True
                        self.inventory.mark_sensor_absent(job_id)
                elif sensor_absent:
                    if present_since is None:
                        present_since = now
                    if now - present_since >= self.sensor_confirm_seconds:
                        replacement_sensor_ready.set()
                        maybe_resume_early()
                        break
                time.sleep(0.1)
            else:
                raise RuntimeError("Датчик не подтвердил снятие и возврат контейнера")
            inventory = self.inventory.finish_exchange(job_id)
            self._sync_inventory_state()
            required = inventory.get("service_required")
            if required:
                if resume_state["done"]:
                    self._stop_sorting_outputs()
                self._set_state(active=False, phase="ожидание оператора", fault=None)
                self.state.log(required["message"], "warning")
                return
            if resume_sorting and not resume_state["done"]:
                self._start_sorting_outputs()
                resume_state["done"] = True
            self._set_state(active=False, color=None, phase="завершена", fault=None)
            suffix = "; сортировка продолжена" if resume_sorting else "; система оставлена остановленной"
            self.state.log(f"Замена контейнера «{label}» завершена{suffix}")
        except Exception as error:
            try:
                self.inventory.fail_exchange(job_id, error)
            except Exception:
                pass
            self._sync_inventory_state()
            raise

    def _sync_inventory_state(self):
        snapshot = self.inventory.snapshot()
        with self.state.lock:
            containers = self.state.data["containers"]
            containers["inventory_initialized"] = snapshot["initialized"]
            containers["empty_stack"] = snapshot["empty_stack"]
            containers["full_stacks"] = {
                COLOR_LABELS[color]: count for color, count in snapshot["full_stacks"].items()
            }
            containers["service_required"] = snapshot["service_required"]

    def close(self):
        self.stop_event.set()
        if self.route_executor.running:
            self.route_executor.stop(emergency=False)
        if self.thread.is_alive():
            self.thread.join(timeout=2)
