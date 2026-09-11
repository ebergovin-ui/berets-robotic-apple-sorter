import json
import os
import tempfile
from copy import deepcopy
from pathlib import Path
from threading import RLock
from uuid import uuid4


ROUTE_NAMES = ("red", "green", "yellow", "service")
PROFILE_ROUTE_NAMES = ("red", "green", "yellow")
PROFILE_KINDS = {
    "full": (1, 4),
    "empty": (1, 6),
}
ROUTE_BLOCKS = (
    "pickup_common",
    "full_level",
    "transition_common",
    "empty_level",
    "return_to_station",
    "delivery_color",
    "home",
)
POINT_ACTIONS = ("none", "take_full", "place_full", "take_empty", "place_empty")
JOINT_LIMITS = {
    "1": (0, 1000),
    "10": (100, 1000),
    "11": (0, 1000),
    "16": (0, 900),
}
RAIL_LIMITS = (0.0, 347.0)
STATION_RAIL = {"red": 316.0, "green": 169.0, "yellow": 14.0}

ROUTE_STEP_NAMES = (
    "Подойти к полному контейнеру",
    "Ввести вилы под полный контейнер",
    "Поджать и подтянуть полный контейнер",
    "Поднять груз к оси плеча",
    "Поставить полный контейнер в стопку",
    "Вывести вилы из полного контейнера",
    "Подойти к верхнему пустому контейнеру",
    "Ввести вилы под пустой контейнер",
    "Поджать и поднять пустой контейнер",
    "Поставить пустой контейнер на станцию",
    "Вывести вилы из нового контейнера",
    "HOME — ожидание",
)
ROUTE_DURATIONS_MS = (1600, 850, 1300, 1500, 1800, 850, 1700, 850, 1400, 1800, 850, 1600)
ROUTE_ACTION_INDEXES = {
    3: "take_full",   # после завершения точки 4
    10: "place_full", # после завершения точки 11
    17: "take_empty", # после завершения точки 18
    24: "place_empty",# после завершения точки 25
}


def _default_route(color, station_rail, exit_rail):
    """Базовый 12-точечный черновик из последней версии цифрового двойника."""
    poses = (
        (station_rail, 875, 926, 831, 0),
        (station_rail, 875, 905, 696, 156),
        (station_rail, 875, 796, 901, 0),
        (station_rail, 875, 100, 1000, 563),
        (station_rail, 125, 905, 696, 156),
        (exit_rail, 125, 926, 831, 0),
        (343, 500, 408, 734, 608),
        (343, 500, 603, 538, 608),
        (343, 500, 174, 1000, 426),
        (station_rail, 875, 905, 696, 156),
        (exit_rail, 875, 926, 831, 0),
        (0, 500, 500, 375, 500),
    )
    return [
        {
            "id": f"{color}-{index + 1:02d}",
            "name": f"{index + 1:02d}. {ROUTE_STEP_NAMES[index]}",
            "rail": rail,
            "joints": {"1": j1, "10": j10, "11": j11, "16": j16},
            "speed_percent": 15,
            "time_ms": ROUTE_DURATIONS_MS[index],
        }
        for index, (rail, j1, j10, j11, j16) in enumerate(poses)
    ]


DEFAULT_ROUTES = {
    "red": _default_route("red", 334, 343),
    "green": _default_route("green", 180, 189),
    "yellow": _default_route("yellow", 26, 35),
    "service": [],
}


class RouteStore:
    """Потокобезопасное JSON-хранилище обучаемых маршрутных точек."""

    def __init__(self, path=None):
        configured = path or os.environ.get("BERETS_MANIPULATOR_ROUTES_FILE")
        self.path = Path(configured or Path(__file__).with_name("manipulator_routes.json"))
        self.lock = RLock()
        self.data = self._load()

    @staticmethod
    def limits():
        return {
            "rail": list(RAIL_LIMITS),
            "joints": {key: list(value) for key, value in JOINT_LIMITS.items()},
            "speed_percent": [1, 100],
            "time_ms": [100, 30000],
        }

    def _empty(self):
        return {
            "version": 2,
            "routes": deepcopy(DEFAULT_ROUTES),
            "profiles": {
                name: {kind: {} for kind in PROFILE_KINDS}
                for name in PROFILE_ROUTE_NAMES
            },
        }

    def _load(self):
        if not self.path.exists():
            return self._empty()
        try:
            raw = json.loads(self.path.read_text(encoding="utf-8"))
            routes = raw.get("routes", {})
            result = self._empty()
            for name in ROUTE_NAMES:
                result["routes"][name] = self._tag_legacy_groups(
                    self.validate_route(routes.get(name, []))
                )
            raw_profiles = raw.get("profiles", {})
            for name in PROFILE_ROUTE_NAMES:
                route_by_id = {point["id"]: point for point in result["routes"][name]}
                route_ids = set(route_by_id)
                for kind, (low, high) in PROFILE_KINDS.items():
                    levels = (raw_profiles.get(name, {}).get(kind, {}) or {})
                    for level_text, overrides in levels.items():
                        try:
                            level = int(level_text)
                        except (TypeError, ValueError):
                            continue
                        if not low <= level <= high or not isinstance(overrides, dict):
                            continue
                        normalized = {}
                        for point_id, point in overrides.items():
                            if point_id not in route_ids:
                                continue
                            validated = self.validate_point(point)
                            if validated.get("group") != kind:
                                continue
                            base_point = route_by_id[point_id]
                            if base_point.get("shared_key"):
                                validated.setdefault("shared_key", base_point["shared_key"])
                            if "block" not in point:
                                validated["block"] = base_point.get("block")
                            if validated.get("block") is None:
                                validated.pop("block", None)
                            # События захвата привязаны к номеру технологической
                            # точки, а не к старому значению в JSON профиля.
                            validated["action"] = base_point.get("action", "none")
                            normalized[point_id] = validated
                        if normalized:
                            result["profiles"][name][kind][str(level)] = normalized
            return result
        except (OSError, ValueError, TypeError, json.JSONDecodeError):
            return self._empty()

    def snapshot(self):
        with self.lock:
            return deepcopy(self.data)

    def replace_route(self, name, points):
        if name not in ROUTE_NAMES:
            raise ValueError("Неизвестный маршрут")
        validated = self._tag_legacy_groups(self.validate_route(points))
        self._deduplicate_shared_keys(validated)
        with self.lock:
            old_empty = [
                deepcopy(point)
                for point in self.data["routes"].get(name, [])
                if point.get("block") == "empty_level"
            ]
            new_empty = [
                deepcopy(point)
                for point in validated
                if point.get("block") == "empty_level"
            ]
            self.data["routes"][name] = validated
            if name in PROFILE_ROUTE_NAMES:
                if new_empty != old_empty:
                    self._synchronize_shared_route(name)
                self._remove_orphan_profiles()
            self._save_locked()
            return deepcopy(validated)

    def replace_profile_point(self, name, kind, level, point):
        if name not in PROFILE_ROUTE_NAMES:
            raise ValueError("Профили уровней доступны только цветным маршрутам")
        if kind not in PROFILE_KINDS:
            raise ValueError("Неизвестный тип профиля")
        low, high = PROFILE_KINDS[kind]
        if not low <= int(level) <= high:
            raise ValueError(f"Уровень должен быть от {low} до {high}")
        validated = self.validate_point(point)
        if validated.get("group") != kind:
            raise ValueError("Точка не относится к выбранной части маршрута")
        with self.lock:
            base = {item["id"]: item for item in self.data["routes"][name]}
            if validated["id"] not in base:
                raise ValueError("Маршрутная точка не найдена")
            levels = self.data["profiles"][name][kind]
            overrides = levels.setdefault(str(int(level)), {})
            overrides[validated["id"]] = validated
            if kind == "empty" and validated.get("block") == "empty_level":
                self._synchronize_shared_profile(name, kind, int(level), validated)
            self._save_locked()
            return deepcopy(validated)

    @staticmethod
    def _deduplicate_shared_keys(points):
        seen = set()
        for point in points:
            key = point.get("shared_key")
            if not key:
                continue
            if key in seen:
                point["shared_key"] = f"shared-{uuid4().hex}"
            seen.add(point["shared_key"])

    @staticmethod
    def _copy_shared_fields(source, target):
        for field in (
            "name",
            "joints",
            "speed_percent",
            "time_ms",
            "action",
            "block",
            "group",
            "shared_key",
        ):
            if field in source:
                target[field] = deepcopy(source[field])
            else:
                target.pop(field, None)
        return target

    @staticmethod
    def _translated_rail(source_rail, source_name, target_name, block):
        if block in {"transition_common", "empty_level", "home"}:
            return float(source_rail)
        if block == "return_to_station":
            return STATION_RAIL[target_name]
        delta = STATION_RAIL[target_name] - STATION_RAIL[source_name]
        return round(max(RAIL_LIMITS[0], min(RAIL_LIMITS[1], float(source_rail) + delta)), 2)

    def _synchronize_shared_route(self, source_name):
        """Mirrors only the shared empty-stack pickup block between colors."""
        source = [
            point
            for point in self.data["routes"][source_name]
            if point.get("block") == "empty_level"
        ]
        if not source or not all(point.get("shared_key") for point in source):
            return
        for target_name in PROFILE_ROUTE_NAMES:
            if target_name == source_name:
                continue
            existing = {
                point.get("shared_key"): point
                for point in self.data["routes"][target_name]
                if point.get("shared_key")
            }
            synchronized = []
            for source_point in source:
                key = source_point["shared_key"]
                target = deepcopy(existing.get(key) or {})
                if not target:
                    target = deepcopy(source_point)
                    target["id"] = f"{target_name}-{uuid4().hex}"
                    target["rail"] = self._translated_rail(
                        source_point["rail"], source_name, target_name, source_point.get("block")
                    )
                else:
                    target_rail = target["rail"]
                    self._copy_shared_fields(source_point, target)
                    target["rail"] = target_rail
                synchronized.append(target)
            target_route = self.data["routes"][target_name]
            empty_indexes = [
                index
                for index, point in enumerate(target_route)
                if point.get("block") == "empty_level"
            ]
            if empty_indexes:
                first_empty = empty_indexes[0]
                insert_at = sum(
                    1
                    for point in target_route[:first_empty]
                    if point.get("block") != "empty_level"
                )
            else:
                insert_at = len(target_route)
            independent = [
                point
                for point in target_route
                if point.get("block") != "empty_level"
            ]
            self.data["routes"][target_name] = (
                independent[:insert_at] + synchronized + independent[insert_at:]
            )

    def _synchronize_shared_profile(self, source_name, kind, level, source_point):
        key = source_point.get("shared_key")
        if not key:
            return
        level_text = str(level)
        for target_name in PROFILE_ROUTE_NAMES:
            if target_name == source_name:
                continue
            target_base = next(
                (point for point in self.data["routes"][target_name] if point.get("shared_key") == key),
                None,
            )
            if target_base is None:
                continue
            target_levels = self.data["profiles"][target_name][kind]
            target_overrides = target_levels.setdefault(level_text, {})
            target = deepcopy(target_overrides.get(target_base["id"], target_base))
            target_rail = target["rail"]
            self._copy_shared_fields(source_point, target)
            target["id"] = target_base["id"]
            target["rail"] = target_rail
            target_overrides[target["id"]] = target

    def _remove_orphan_profiles(self):
        for name in PROFILE_ROUTE_NAMES:
            valid_ids = {point["id"] for point in self.data["routes"][name]}
            for kind in PROFILE_KINDS:
                for overrides in self.data["profiles"][name][kind].values():
                    for point_id in list(overrides):
                        if point_id not in valid_ids:
                            del overrides[point_id]

    def resolved_route(self, name, full_level=1, empty_level=6):
        if name not in ROUTE_NAMES:
            raise ValueError("Неизвестный маршрут")
        with self.lock:
            result = deepcopy(self.data["routes"][name])
            if name not in PROFILE_ROUTE_NAMES:
                return result
            selected = {
                "full": str(int(full_level)),
                "empty": str(int(empty_level)),
            }
            for index, point in enumerate(result):
                kind = point.get("group")
                if kind not in PROFILE_KINDS:
                    continue
                override = (
                    self.data["profiles"][name][kind]
                    .get(selected[kind], {})
                    .get(point["id"])
                )
                if override:
                    result[index] = deepcopy(override)
            return result

    def point(self, route_name, point_id, full_level=1, empty_level=6):
        if route_name not in ROUTE_NAMES:
            raise ValueError("Неизвестный маршрут")
        with self.lock:
            points = self.resolved_route(route_name, full_level, empty_level)
            for point in points:
                if point["id"] == point_id:
                    return deepcopy(point)
        raise ValueError("Маршрутная точка не найдена")

    def validate_route(self, points):
        if not isinstance(points, list):
            raise ValueError("Маршрут должен быть списком точек")
        if len(points) > 200:
            raise ValueError("В одном маршруте допускается не более 200 точек")
        result = []
        identifiers = set()
        for index, point in enumerate(points):
            validated = self.validate_point(point, index)
            if validated["id"] in identifiers:
                validated["id"] = uuid4().hex
            identifiers.add(validated["id"])
            result.append(validated)
        return result

    @staticmethod
    def _tag_legacy_groups(points):
        """Помечает блоки 29-точечного цикла и старые профильные участки."""
        if len(points) >= 29:
            # После первичной миграции блок принадлежит самой точке. Это важно
            # при копировании, вставке и перестановке: границы не должны
            # пересчитываться только из-за изменения порядкового номера.
            if all(point.get("block") in ROUTE_BLOCKS for point in points):
                for index, point in enumerate(points):
                    point.setdefault("shared_key", f"cycle-{index + 1:02d}")
                return points
            layout = (
                (0, 8, "pickup_common", None),
                (8, 15, "full_level", "full"),
                (15, 16, "transition_common", None),
                (16, 20, "empty_level", "empty"),
                (20, 21, "return_to_station", None),
                (21, 28, "delivery_color", None),
                (28, len(points), "home", None),
            )
            for low, high, block, group in layout:
                for point in points[low:high]:
                    point["block"] = block
                    if group:
                        point["group"] = group
                    else:
                        point.pop("group", None)
            for index, point in enumerate(points):
                point["action"] = ROUTE_ACTION_INDEXES.get(index, "none")
                point.setdefault("shared_key", f"cycle-{index + 1:02d}")
            return points
        if len(points) < 17:
            return points
        for index, point in enumerate(points):
            if point.get("group"):
                continue
            if 4 <= index <= 11:
                point["group"] = "full"
            elif 12 <= index <= 16:
                point["group"] = "empty"
        return points

    @staticmethod
    def validate_point(point, index=0):
        if not isinstance(point, dict):
            raise ValueError(f"Точка {index + 1} должна быть объектом")
        name = str(point.get("name", f"Точка {index + 1}")).strip()[:60]
        if not name:
            raise ValueError(f"У точки {index + 1} отсутствует название")
        point_id = str(point.get("id") or uuid4().hex)
        if len(point_id) > 80:
            raise ValueError("Слишком длинный идентификатор точки")

        def number(value, label, low, high, integer=False):
            try:
                value = float(value)
            except (TypeError, ValueError):
                raise ValueError(f"Точка «{name}»: поле {label} должно быть числом")
            if not low <= value <= high:
                raise ValueError(
                    f"Точка «{name}»: {label} должно быть от {low:g} до {high:g}"
                )
            return int(round(value)) if integer else round(value, 2)

        joints = point.get("joints") or {}
        if not isinstance(joints, dict):
            raise ValueError(f"Точка «{name}»: joints должен быть объектом")
        normalized_joints = {}
        for servo_id, (low, high) in JOINT_LIMITS.items():
            normalized_joints[servo_id] = number(
                joints.get(servo_id, point.get(f"j{servo_id}")),
                f"ID{servo_id}",
                low,
                high,
                integer=True,
            )
        rail = number(point.get("rail"), "рельса", *RAIL_LIMITS)
        speed = number(
            point.get("speed_percent", 20), "скорость", 1, 100, integer=True
        )
        time_ms = number(
            point.get("time_ms", 1500), "время", 100, 30000, integer=True
        )
        group = point.get("group")
        if group not in {None, "", "full", "empty"}:
            raise ValueError(f"Точка «{name}»: неизвестная группа уровня")
        block = point.get("block")
        if block not in {None, "", *ROUTE_BLOCKS}:
            raise ValueError(f"Точка «{name}»: неизвестный технологический блок")
        action = str(point.get("action", "none"))
        if action not in POINT_ACTIONS:
            raise ValueError(f"Точка «{name}»: неизвестное действие с контейнером")

        result = {
            "id": point_id,
            "name": name,
            "rail": rail,
            "joints": normalized_joints,
            "speed_percent": speed,
            "time_ms": time_ms,
            "action": action,
        }
        shared_key = str(point.get("shared_key", "")).strip()
        if shared_key:
            if len(shared_key) > 80:
                raise ValueError("Слишком длинный общий идентификатор маршрутной точки")
            result["shared_key"] = shared_key
        if group:
            result["group"] = group
        if block:
            result["block"] = block
        return result

    def _save_locked(self):
        self.path.parent.mkdir(parents=True, exist_ok=True)
        handle, temporary = tempfile.mkstemp(
            prefix=f".{self.path.name}.", suffix=".tmp", dir=str(self.path.parent)
        )
        try:
            with os.fdopen(handle, "w", encoding="utf-8") as stream:
                json.dump(self.data, stream, ensure_ascii=False, indent=2)
                stream.write("\n")
            os.replace(temporary, self.path)
        except Exception:
            try:
                os.unlink(temporary)
            except OSError:
                pass
            raise
