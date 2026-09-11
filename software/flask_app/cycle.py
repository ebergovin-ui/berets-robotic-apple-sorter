#!/usr/bin/env python3
"""Безопасный диспетчер технологического цикла сортировки."""

import os
import queue
import threading


def env_flag(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


class SortCycle:
    """Очередь событий YOLO и последовательность управления заслонкой."""

    GATES = {"красное": "4", "зелёное": "5", "жёлтое": "3"}
    DISPENSER_ID = "6"

    def __init__(self, state, hardware):
        self.state = state
        self.hardware = hardware
        self.enabled = env_flag("BERETS_REAL_CYCLE")
        self.dispenser_enabled = env_flag("BERETS_REAL_DISPENSER", self.enabled)
        self.min_confidence = float(os.environ.get("BERETS_MIN_CONFIDENCE", "0.65"))
        self.hold_seconds = float(
            os.environ.get("BERETS_GATE_HOLD_SECONDS", "0.50")
        )
        self.events = queue.Queue(maxsize=32)
        self.stop_event = threading.Event()
        self.thread = None
        self.dispenser_thread = None

    def _set_cycle(self, **values):
        with self.state.lock:
            self.state.data["cycle"].update(values)

    def _required_gate_positions(self, gate_id):
        open_name = f"BERETS_GATE_OPEN_{gate_id}"
        close_name = f"BERETS_GATE_CLOSED_{gate_id}"
        if not os.environ.get(open_name) or not os.environ.get(close_name):
            raise RuntimeError(f"не заданы {open_name} и {close_name}")
        return int(os.environ[open_name]), int(os.environ[close_name])

    def _required_dispenser_positions(self):
        if not os.environ.get("BERETS_DISPENSER_OPEN") or not os.environ.get(
            "BERETS_DISPENSER_CLOSED"
        ):
            raise RuntimeError(
                "не заданы BERETS_DISPENSER_OPEN и BERETS_DISPENSER_CLOSED"
            )
        return (
            int(os.environ["BERETS_DISPENSER_OPEN"]),
            int(os.environ["BERETS_DISPENSER_CLOSED"]),
        )

    def start(self):
        self.hardware.refresh_inputs()
        with self.state.lock:
            containers = self.state.data["containers"]
            if containers["empty_stack"] < 1:
                raise RuntimeError("Нет пустых контейнеров")
            if not containers["sorting_containers_ready"]:
                raise RuntimeError("Не установлены три контейнера сортировки")
            if self.state.data["cycle"]["running"]:
                return
        if self.enabled:
            if not self.hardware.conveyor_output:
                raise RuntimeError("Реальный конвейер не подключён")
            if not self.hardware.servo_bus:
                raise RuntimeError("UART-шина сервоприводов не подключена")
            if not self.hardware.container_sensors:
                raise RuntimeError("Датчики контейнеров не подключены")
            with self.state.lock:
                arm_homed = self.state.data["manipulator"]["homed"]
                rail_homed = self.state.data["rail"]["homed"]
                vision_connected = self.state.data["vision"]["connected"]
            if not arm_homed:
                raise RuntimeError("Манипулятор не переведён в HOME")
            if not rail_homed:
                raise RuntimeError("Рельса не переведена в HOME")
            if not vision_connected:
                raise RuntimeError("Нет heartbeat компьютерного зрения")
            if self.dispenser_enabled:
                self._required_dispenser_positions()
            for gate_id in self.GATES.values():
                self._required_gate_positions(gate_id)
        self.stop_event.clear()
        self._set_cycle(running=True, phase="sorting", fault=None)
        if self.enabled:
            self.thread = threading.Thread(
                target=self._worker, name="berets-sort-cycle", daemon=True
            )
            self.thread.start()
            if self.dispenser_enabled:
                self.dispenser_thread = threading.Thread(
                    target=self._dispenser_worker,
                    name="berets-dispenser",
                    daemon=True,
                )
                self.dispenser_thread.start()
            self.hardware.set_conveyor(True)
        self.state.log("Цикл сортировки запущен")

    def stop(self, reason="Цикл остановлен"):
        self.stop_event.set()
        self._set_cycle(running=False, phase="stopped")
        if self.hardware.conveyor_output:
            self.hardware.set_conveyor(False)
        self.state.log(reason, "warning" if "авар" in reason.lower() else "info")

    def submit(self, label, confidence, event_id):
        if not self.enabled:
            return
        with self.state.lock:
            if not self.state.data["cycle"]["running"]:
                return
        try:
            self.events.put_nowait(
                {"label": label, "confidence": confidence, "event_id": event_id}
            )
        except queue.Full:
            self._fault("Переполнена очередь событий YOLO")

    def _fault(self, message):
        self._set_cycle(running=False, phase="fault", fault=message)
        if self.hardware.conveyor_output:
            self.hardware.set_conveyor(False)
        self.state.log(message, "warning")
        self.stop_event.set()

    def _worker(self):
        while not self.stop_event.is_set():
            try:
                event = self.events.get(timeout=0.2)
            except queue.Empty:
                continue
            try:
                self._process(event)
            except Exception as error:
                self._fault(f"Цикл остановлен: {error}")

    def _dispenser_worker(self):
        opened, closed = self._required_dispenser_positions()
        while not self.stop_event.is_set():
            self.hardware.set_aux_servo(self.DISPENSER_ID, opened)
            if self.stop_event.wait(0.25):
                break
            self.hardware.set_aux_servo(self.DISPENSER_ID, closed)
            with self.state.lock:
                rate = max(1, int(self.state.data["conveyor"]["dosage_rate"]))
            interval = max(0.5, 60.0 / rate - 0.25)
            if self.stop_event.wait(interval):
                break
        try:
            self.hardware.set_aux_servo(self.DISPENSER_ID, closed)
        except Exception:
            pass

    def set_rate(self, rate):
        with self.state.lock:
            self.state.data["conveyor"]["dosage_rate"] = int(rate)

    def _process(self, event):
        label = event["label"]
        confidence = float(event["confidence"])
        if confidence < self.min_confidence:
            self.state.log(
                f"Объект пропущен: низкая уверенность {confidence:.1%}", "warning"
            )
            return
        with self.state.lock:
            containers = self.state.data["containers"]
            count = containers["sorting"][label]
            capacity = containers["sorting"]["capacity"]
            if count >= capacity:
                raise RuntimeError(f"Контейнер для класса «{label}» уже заполнен")
        gate_id = self.GATES[label]
        opened, closed = self._required_gate_positions(gate_id)
        self._set_cycle(phase=f"открытие заслонки ID{gate_id}")
        self.hardware.set_aux_servo(gate_id, opened)
        if self.stop_event.wait(self.hold_seconds):
            return
        self.hardware.set_aux_servo(gate_id, closed)
        with self.state.lock:
            self.state.data["containers"]["sorting"][label] += 1
            self.state.data["vision"]["counts"][label] += 1
            new_count = self.state.data["containers"]["sorting"][label]
        self.state.log(
            f"{label.capitalize()} яблоко направлено в контейнер "
            f"({new_count}/{capacity})"
        )
        if new_count >= capacity:
            self.hardware.set_conveyor(False)
            self.stop_event.set()
            self._set_cycle(running=False, phase="container_full", fault=None)
            self.state.log(
                f"Контейнер «{label}» заполнен — требуется замена", "warning"
            )
        else:
            self._set_cycle(phase="sorting")

    def close(self):
        self.stop_event.set()
        if self.thread and self.thread.is_alive():
            self.thread.join(timeout=1.0)
        if self.dispenser_thread and self.dispenser_thread.is_alive():
            self.dispenser_thread.join(timeout=1.0)
