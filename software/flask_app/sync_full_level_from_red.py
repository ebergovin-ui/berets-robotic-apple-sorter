"""Копирует один профиль полной стопки из красного маршрута.

Координаты и времена сервоприводов копируются в зелёный и жёлтый маршруты,
а координаты рельсы целевых цветов сохраняются. Если целевого профиля ещё
нет, рельса получается переносом красной координаты относительно станции.
Перед записью создаётся резервная копия исходного JSON.
"""

from __future__ import annotations

import argparse
from copy import deepcopy
from datetime import datetime
import json
from pathlib import Path
import tempfile


STATION_RAIL = {"red": 316.0, "green": 169.0, "yellow": 14.0}


def full_points(route):
    return [
        point for point in route
        if point.get("group") == "full" or point.get("block") == "full_level"
    ]


def synchronize(data, level=2):
    level_text = str(int(level))
    routes = data["routes"]
    profiles = data.setdefault("profiles", {})
    red_base = full_points(routes["red"])
    red_overrides = profiles.setdefault("red", {}).setdefault("full", {}).get(level_text, {})
    if not red_base:
        raise ValueError("В красном маршруте не найден блок полной стопки")

    source = [deepcopy(red_overrides.get(point["id"], point)) for point in red_base]
    changed = {}
    for color in ("green", "yellow"):
        target_base = full_points(routes[color])
        if len(target_base) != len(source):
            raise ValueError(
                f"Число точек полной стопки не совпадает: red={len(source)}, "
                f"{color}={len(target_base)}"
            )
        target_profiles = profiles.setdefault(color, {}).setdefault("full", {})
        target_level = target_profiles.setdefault(level_text, {})
        rails = []
        for src, base in zip(source, target_base):
            existing = target_level.get(base["id"], base)
            translated = round(
                float(src["rail"]) + STATION_RAIL[color] - STATION_RAIL["red"],
                2,
            )
            rail = float(existing.get("rail", translated))
            item = deepcopy(src)
            item["id"] = base["id"]
            item["rail"] = rail
            if base.get("shared_key"):
                item["shared_key"] = base["shared_key"]
            else:
                item.pop("shared_key", None)
            target_level[item["id"]] = item
            rails.append(rail)
        changed[color] = rails
    return changed


def atomic_write(path, data):
    with tempfile.NamedTemporaryFile(
        "w", encoding="utf-8", dir=path.parent, delete=False, suffix=".tmp"
    ) as stream:
        json.dump(data, stream, ensure_ascii=False, indent=2)
        stream.write("\n")
        temp_path = Path(stream.name)
    temp_path.replace(path)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--file", default="manipulator_routes.json")
    parser.add_argument("--level", type=int, default=2, choices=range(1, 5))
    args = parser.parse_args()
    path = Path(args.file).resolve()
    data = json.loads(path.read_text(encoding="utf-8"))
    stamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup = path.with_name(f"{path.stem}.before_full_level_{args.level}_{stamp}{path.suffix}")
    backup.write_bytes(path.read_bytes())
    changed = synchronize(data, args.level)
    atomic_write(path, data)
    print(f"Готово. Профиль полной стопки, уровень {args.level}, скопирован из красного.")
    for color, rails in changed.items():
        print(f"{color}: рельса {rails}")
    print(f"Резервная копия: {backup}")


if __name__ == "__main__":
    main()
