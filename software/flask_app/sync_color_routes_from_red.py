"""Однократно копирует настроенный 29-точечный красный цикл в другие цвета."""

import json
import sys
from copy import deepcopy
from pathlib import Path


STATION_RAIL = {"red": 316.0, "green": 169.0, "yellow": 14.0}
BLOCK_LAYOUT = (
    (0, 8, "pickup_common", None),
    (8, 15, "full_level", "full"),
    (15, 16, "transition_common", None),
    (16, 20, "empty_level", "empty"),
    (20, 21, "return_to_station", None),
    (21, 28, "delivery_color", None),
    (28, 29, "home", None),
)
ACTIONS = {3: "take_full", 10: "place_full", 17: "take_empty", 24: "place_empty"}


def resolved_red(data):
    points = deepcopy(data["routes"]["red"])
    profiles = data.get("profiles", {}).get("red", {})
    selected = {"full": "1", "empty": "6"}
    for index, point in enumerate(points):
        kind = point.get("group")
        override = profiles.get(kind, {}).get(selected.get(kind, ""), {}).get(point["id"])
        if override:
            points[index] = deepcopy(override)
    return points


def tag(points):
    for low, high, block, group in BLOCK_LAYOUT:
        for point in points[low:high]:
            point["block"] = block
            if group:
                point["group"] = group
            else:
                point.pop("group", None)
    for index, point in enumerate(points):
        point["action"] = ACTIONS.get(index, "none")
        point["shared_key"] = f"cycle-{index + 1:02d}"
    return points


def translated_rail(red_rail, color, block):
    if block in {"transition_common", "empty_level", "home"}:
        return float(red_rail)
    if block == "return_to_station":
        return STATION_RAIL[color]
    delta = STATION_RAIL[color] - STATION_RAIL["red"]
    return round(max(0.0, min(347.0, float(red_rail) + delta)), 2)


def synchronize(data):
    red = tag(resolved_red(data))
    if len(red) != 29:
        raise ValueError(f"Для синхронизации нужен красный цикл из 29 точек, получено {len(red)}")
    data["routes"]["red"] = red
    profiles = data.setdefault("profiles", {})
    red_profiles = profiles.setdefault("red", {"full": {}, "empty": {}})
    red_profiles["full"] = {
        "1": {point["id"]: deepcopy(point) for point in red if point.get("group") == "full"}
    }
    red_profiles["empty"] = {
        "6": {point["id"]: deepcopy(point) for point in red if point.get("group") == "empty"}
    }

    for color in ("green", "yellow"):
        copied = []
        for index, source in enumerate(red):
            point = deepcopy(source)
            point["id"] = f"{color}-cycle-{index + 1:02d}"
            point["rail"] = translated_rail(source["rail"], color, source["block"])
            copied.append(point)
        data["routes"][color] = copied

        color_profiles = profiles.setdefault(color, {"full": {}, "empty": {}})
        color_profiles["full"] = {
            "1": {point["id"]: deepcopy(point) for point in copied if point.get("group") == "full"}
        }
        color_profiles["empty"] = {
            "6": {point["id"]: deepcopy(point) for point in copied if point.get("group") == "empty"}
        }

    data["version"] = max(3, int(data.get("version", 1)))
    return data


def main():
    if len(sys.argv) != 2:
        raise SystemExit("Использование: python3 sync_color_routes_from_red.py manipulator_routes.json")
    path = Path(sys.argv[1])
    data = json.loads(path.read_text(encoding="utf-8"))
    synchronize(data)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print("Маршруты синхронизированы:", {name: len(points) for name, points in data["routes"].items()})


if __name__ == "__main__":
    main()
