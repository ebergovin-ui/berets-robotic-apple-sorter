import json
import os
import tempfile
from copy import deepcopy
from pathlib import Path
from threading import RLock
from uuid import uuid4


COLORS = ("red", "green", "yellow")
COLOR_LABELS = {"red": "красное", "green": "зелёное", "yellow": "жёлтое"}
COLOR_STACK_LABELS = {"red": "красных", "green": "зелёных", "yellow": "жёлтых"}


class ContainerInventoryStore:
    """Постоянный учёт физических стопок и незавершённой замены."""

    def __init__(self, path=None):
        configured = path or os.environ.get("BERETS_CONTAINER_INVENTORY_FILE")
        self.path = Path(configured or Path(__file__).with_name("container_inventory.json"))
        self.lock = RLock()
        self.data = self._load()

    @staticmethod
    def empty_state():
        return {
            "version": 1,
            "initialized": False,
            "empty_stack": 0,
            "full_stacks": {color: 0 for color in COLORS},
            "active_job": None,
            "service_required": None,
            "revision": 0,
        }

    def _load(self):
        if not self.path.exists():
            return self.empty_state()
        try:
            raw = json.loads(self.path.read_text(encoding="utf-8"))
            result = self.empty_state()
            result["initialized"] = bool(raw.get("initialized"))
            result["empty_stack"] = self._empty_count(raw.get("empty_stack", 0), allow_zero=True)
            full = raw.get("full_stacks", {})
            result["full_stacks"] = {color: self._full_count(full.get(color, 0)) for color in COLORS}
            job = raw.get("active_job")
            result["active_job"] = deepcopy(job) if isinstance(job, dict) else None
            service = raw.get("service_required")
            result["service_required"] = deepcopy(service) if isinstance(service, dict) else None
            result["revision"] = max(0, int(raw.get("revision", 0)))
            if result["active_job"]:
                job = result["active_job"]
                physical_exchange_complete = all((
                    job.get("full_committed"),
                    job.get("empty_committed"),
                    job.get("replacement_placed"),
                    job.get("sensor_seen_absent"),
                ))
                if physical_exchange_complete:
                    color = job.get("color")
                    result["active_job"] = None
                    if result["empty_stack"] == 0:
                        result["service_required"] = {
                            "type": "refill_empty",
                            "color": None,
                            "message": "Пополните стопку пустых контейнеров",
                        }
                    elif color in COLORS and result["full_stacks"][color] >= 4:
                        result["service_required"] = {
                            "type": "clear_full",
                            "color": color,
                            "message": f"Заберите контейнеры из стопки полных: {COLOR_STACK_LABELS[color]}",
                        }
                    else:
                        result["service_required"] = {
                            "type": "reconcile",
                            "color": color,
                            "message": "Обмен завершён, но возврат в HOME прерван: выполните HOME и сверьте стопки",
                        }
                else:
                    result["service_required"] = {
                        "type": "reconcile",
                        "color": job.get("color"),
                        "message": "Незавершённая замена: требуется сверка стопок оператором",
                    }
            return result
        except (OSError, ValueError, TypeError, json.JSONDecodeError):
            result = self.empty_state()
            result["service_required"] = {
                "type": "reconcile",
                "color": None,
                "message": "Файл учёта повреждён: требуется повторная инициализация",
            }
            return result

    @staticmethod
    def _empty_count(value, allow_zero=False):
        count = int(value)
        low = 0 if allow_zero else 1
        if not low <= count <= 6:
            raise ValueError(f"Пустых контейнеров должно быть от {low} до 6")
        return count

    @staticmethod
    def _full_count(value):
        count = int(value)
        if not 0 <= count <= 4:
            raise ValueError("Полных контейнеров должно быть от 0 до 4")
        return count

    def snapshot(self):
        with self.lock:
            return deepcopy(self.data)

    def initialize(self, empty_stack, full_stacks):
        if not isinstance(full_stacks, dict):
            raise ValueError("Нужно указать три полные стопки")
        with self.lock:
            self.data.update({
                "initialized": True,
                "empty_stack": self._empty_count(empty_stack),
                "full_stacks": {color: self._full_count(full_stacks.get(color)) for color in COLORS},
                "active_job": None,
                "service_required": None,
            })
            self._save_locked()
            return self.snapshot()

    def prepare_exchange(self, color):
        if color not in COLORS:
            raise ValueError("Неизвестный цвет")
        with self.lock:
            if not self.data["initialized"]:
                raise RuntimeError("Сначала подтвердите состав стопок")
            if self.data["active_job"]:
                raise RuntimeError("Другая замена уже выполняется")
            if self.data["service_required"]:
                raise RuntimeError(self.data["service_required"]["message"])
            empty_level = self.data["empty_stack"]
            full_level = self.data["full_stacks"][color] + 1
            if empty_level < 1:
                raise RuntimeError("Стопка пустых контейнеров пуста")
            if full_level > 4:
                raise RuntimeError("Стопка полных контейнеров заполнена")
            job = {
                "id": uuid4().hex,
                "color": color,
                "full_level": full_level,
                "empty_level": empty_level,
                "phase": "prepared",
                "full_committed": False,
                "empty_committed": False,
                "replacement_placed": False,
                "sensor_seen_absent": False,
            }
            self.data["active_job"] = job
            self._save_locked()
            return deepcopy(job)

    def checkpoint(self, job_id, point_number):
        with self.lock:
            job = self._job(job_id)
            if point_number >= 11 and not job["full_committed"]:
                self.data["full_stacks"][job["color"]] += 1
                job["full_committed"] = True
                job["phase"] = "full_stacked"
            if point_number >= 18 and not job["empty_committed"]:
                self.data["empty_stack"] -= 1
                job["empty_committed"] = True
                job["phase"] = "empty_taken"
            if point_number >= 25:
                job["replacement_placed"] = True
                job["phase"] = "replacement_placed"
            self._save_locked()
            return deepcopy(job)

    def mark_sensor_absent(self, job_id):
        with self.lock:
            job = self._job(job_id)
            job["sensor_seen_absent"] = True
            self._save_locked()

    def finish_exchange(self, job_id):
        with self.lock:
            job = self._job(job_id)
            if not all((job["full_committed"], job["empty_committed"], job["replacement_placed"], job["sensor_seen_absent"])):
                raise RuntimeError("Замена или подтверждение датчика не завершены")
            color = job["color"]
            self.data["active_job"] = None
            self.data["service_required"] = self._next_service_locked(
                preferred_color=color
            )
            self._save_locked()
            return self.snapshot()

    def fail_exchange(self, job_id, message):
        with self.lock:
            job = self._job(job_id)
            job["phase"] = "fault"
            job["fault"] = str(message)
            self.data["service_required"] = {
                "type": "reconcile", "color": job["color"],
                "message": "Замена прервана: сверьте фактические стопки",
            }
            self._save_locked()

    def replenish_empty(self, count):
        with self.lock:
            if self.data["active_job"]:
                raise RuntimeError("Сначала завершите сверку незавершённой замены")
            self.data["empty_stack"] = self._empty_count(count)
            self.data["service_required"] = self._next_service_locked()
            self._save_locked()
            return self.snapshot()

    def add_empty(self, amount):
        with self.lock:
            if self.data["active_job"]:
                raise RuntimeError("Нельзя менять стопку во время замены")
            amount = int(amount)
            if amount < 1:
                raise ValueError("Добавляемое количество должно быть не меньше 1")
            available = 6 - self.data["empty_stack"]
            if amount > available:
                raise ValueError(
                    f"В стопку можно добавить не более {available} контейнеров"
                )
            self.data["empty_stack"] += amount
            self.data["service_required"] = self._next_service_locked()
            self._save_locked()
            return self.snapshot()

    def clear_full(self, color):
        if color not in COLORS:
            raise ValueError("Неизвестный цвет")
        with self.lock:
            if self.data["active_job"]:
                raise RuntimeError("Сначала завершите сверку незавершённой замены")
            self.data["full_stacks"][color] = 0
            self.data["service_required"] = self._next_service_locked()
            self._save_locked()
            return self.snapshot()

    def remove_full(self, color, amount):
        if color not in COLORS:
            raise ValueError("Неизвестный цвет")
        with self.lock:
            if self.data["active_job"]:
                raise RuntimeError("Нельзя менять стопку во время замены")
            current = self.data["full_stacks"][color]
            if amount == "all":
                amount = current
            else:
                amount = int(amount)
            if amount < 1:
                raise ValueError("Количество снятых контейнеров должно быть не меньше 1")
            if amount > current:
                raise ValueError(
                    f"В стопке только {current} полных контейнеров"
                )
            self.data["full_stacks"][color] -= amount
            self.data["service_required"] = self._next_service_locked()
            self._save_locked()
            return self.snapshot()

    def _job(self, job_id):
        job = self.data.get("active_job")
        if not job or job.get("id") != job_id:
            raise RuntimeError("Активная замена не найдена")
        return job

    def _next_service_locked(self, preferred_color=None):
        if self.data["empty_stack"] == 0:
            return {
                "type": "refill_empty",
                "color": None,
                "message": "Пополните стопку пустых контейнеров",
            }
        colors = list(COLORS)
        if preferred_color in colors:
            colors.remove(preferred_color)
            colors.insert(0, preferred_color)
        for color in colors:
            if self.data["full_stacks"][color] >= 4:
                return {
                    "type": "clear_full",
                    "color": color,
                    "message": (
                        f"Заберите контейнеры из стопки полных: {COLOR_STACK_LABELS[color]}"
                    ),
                }
        return None

    def _save_locked(self):
        self.data["revision"] = int(self.data.get("revision", 0)) + 1
        self.path.parent.mkdir(parents=True, exist_ok=True)
        fd, temp_name = tempfile.mkstemp(prefix=self.path.name + ".", suffix=".tmp", dir=self.path.parent)
        try:
            with os.fdopen(fd, "w", encoding="utf-8") as handle:
                json.dump(self.data, handle, ensure_ascii=False, indent=2)
                handle.write("\n")
                handle.flush()
                os.fsync(handle.fileno())
            os.replace(temp_name, self.path)
        finally:
            if os.path.exists(temp_name):
                os.unlink(temp_name)
