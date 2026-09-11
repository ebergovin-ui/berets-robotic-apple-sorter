from copy import deepcopy
from datetime import datetime
from threading import RLock
import os
import time


class SystemState:
    """Единое потокобезопасное состояние роботизированной системы."""

    def __init__(self):
        self.lock = RLock()
        self.data = {
            "system": {
                "operational": False,
                "controller_connected": True,
                "current_operator": "не назначен",
                "mode_name": "Сортировка яблок по цветам",
                "updated_at": self.now(),
                "notifications": [],
            },
            "manipulator": {
                "connected": False,
                "homed": False,
                "moving": False,
                "joints": {"1": 500, "10": 500, "11": 375, "16": 500},
                "pose": {"x": 280.0, "y": 0.0, "z": 330.0, "phi": 0.0},
                "target": None,
            },
            "aux_servos": {
                "3": {"name": "жёлтая заслонка · третья", "position": 500},
                "4": {"name": "красная заслонка · первая", "position": 500},
                "5": {"name": "зелёная заслонка · вторая", "position": 500},
                "6": {"name": "дозатор", "position": 500},
            },
            "cycle": {
                "running": False,
                "phase": "ожидание",
                "fault": None,
            },
            "route_execution": {
                "running": False,
                "route": None,
                "point_index": 0,
                "point_count": 0,
                "phase": "ожидание",
                "fault": None,
            },
            "container_exchange": {
                "active": False,
                "color": None,
                "full_level": None,
                "empty_level": None,
                "phase": "ожидание",
                "fault": None,
            },
            "dispenser": {
                "running": False,
                "phase": "остановлен",
                "fault": None,
                "position": 500,
                "feed_position": 200,
                "home_position": 500,
                "cycle_seconds": 6.0,
                "return_at_seconds": 2.5,
                "rate_apples_min": 10.0,
            },
            "zone_sorting": {
                "running": False,
                "phase": "остановлена",
                "fault": None,
                "active_tracks": 0,
                "automatic_outputs": False,
                "container_service": {
                    "active": False,
                    "color": None,
                    "phase": "не требуется",
                    "absence_seconds": 0.0,
                },
                "gates": {
                    "3": "неизвестно",
                    "4": "неизвестно",
                    "5": "неизвестно",
                },
            },
            "rail": {
                "connected": False,
                "homed": False,
                "moving": False,
                "position": 0.0,
                "target": 0.0,
                "limit_left": False,
                "limit_right": False,
                "speed_percent": 100,
                "speed_steps_s": 2000.0,
                "max_speed_steps_s": 2000,
            },
            "conveyor": {
                "connected": False,
                "running": False,
                "dosage_rate": 10,
                "current_apple": {
                    "present": False,
                    "label": None,
                    "position": 0.0,
                },
            },
            "vision": {
                "connected": False,
                "model": "apple_sorter_v1",
                "fps": 0.0,
                "last_detection": "ожидание",
                "confidence": 0.0,
                "last_heartbeat": 0.0,
                "counts": {"красное": 0, "зелёное": 0, "жёлтое": 0},
                "seen_event_ids": [],
            },
            "containers": {
                "sensors_connected": False,
                "presence": {
                    "красное": False,
                    "зелёное": False,
                    "жёлтое": False,
                },
                "sorting": {
                    "красное": 0,
                    "зелёное": 0,
                    "жёлтое": 0,
                    "capacity": 2,
                },
                "full_stacks": {
                    "красное": 0,
                    "зелёное": 0,
                    "жёлтое": 0,
                },
                "empty_stack": 0,
                "empty_stack_max": 6,
                "inventory_initialized": False,
                "service_required": None,
                "sorting_containers_ready": False,
            },
            "logs": [],
        }
        self.log("Панель управления BERETS запущена")

    @staticmethod
    def now():
        return datetime.now().strftime("%H:%M:%S")

    def log(self, message, level="info"):
        with self.lock:
            self.data["logs"].insert(
                0,
                {"time": self.now(), "level": level, "message": message},
            )
            self.data["logs"] = self.data["logs"][:80]
            self.data["system"]["updated_at"] = self.now()

    def refresh_notifications(self):
        containers = self.data["containers"]
        notifications = []

        require_empty_stack = os.environ.get(
            "BERETS_REQUIRE_EMPTY_STACK", "0"
        ).strip().lower() in {"1", "true", "yes", "on"}
        if require_empty_stack:
            if containers["empty_stack"] == 0:
                notifications.append({
                    "level": "warning",
                    "message": "Установите пустые контейнеры",
                })
            elif containers["empty_stack"] <= 1:
                notifications.append({
                    "level": "warning",
                    "message": "Запас пустых контейнеров заканчивается",
                })
        service = containers.get("service_required")
        if service and service.get("type") != "reconcile":
            notifications.append({"level": "warning", "message": service.get("message", "Требуется обслуживание стопок")})

        if not containers["sorting_containers_ready"]:
            if containers["sensors_connected"]:
                presence_labels = (
                    ("красное", "красный"),
                    ("зелёное", "зелёный"),
                    ("жёлтое", "жёлтый"),
                )
                missing = [
                    label
                    for color, label in presence_labels
                    if not containers["presence"].get(color, False)
                ]
                message = "Отсутствуют контейнеры: " + ", ".join(missing)
            else:
                message = "Установите по одному контейнеру для каждого цвета"
            notifications.append({
                "level": "warning",
                "message": message,
            })

        service_color_names = {
            "red": "красное",
            "green": "зелёное",
            "yellow": "жёлтое",
        }
        stack_labels = {
            "красное": "красных",
            "зелёное": "зелёных",
            "жёлтое": "жёлтых",
        }
        serviced_full_color = (
            service_color_names.get(service.get("color"))
            if service and service.get("type") == "clear_full"
            else None
        )
        for color, count in containers["full_stacks"].items():
            if count >= 4:
                if color == serviced_full_color:
                    continue
                notifications.append({
                    "level": "warning",
                    "message": f"Заберите контейнеры из стопки полных: {stack_labels.get(color, color)}",
                })

        capacity = containers["sorting"]["capacity"]
        suppress_current_full = bool(service or self.data["container_exchange"]["active"])
        for color, count in containers["sorting"].items():
            if color != "capacity" and count >= capacity:
                if suppress_current_full:
                    continue
                notifications.append({
                    "level": "warning",
                    "message": f"Контейнер «{color}» заполнен — замените его",
                })

        self.data["system"]["notifications"] = notifications

    def snapshot(self):
        with self.lock:
            heartbeat = self.data["vision"]["last_heartbeat"]
            timeout = float(os.environ.get("BERETS_VISION_TIMEOUT", "3.0"))
            if heartbeat and time.monotonic() - heartbeat > timeout:
                self.data["vision"]["connected"] = False
                self.data["vision"]["fps"] = 0.0
            self.refresh_notifications()
            return deepcopy(self.data)
