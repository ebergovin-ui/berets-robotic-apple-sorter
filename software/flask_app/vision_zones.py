#!/usr/bin/env python3
"""Persistent calibration polygons for BERETS camera coordinates."""

from copy import deepcopy
import json
import os
from pathlib import Path
import threading


COLORS = ("red", "green", "yellow")
PHASES = ("open", "close")
IGNORE_ZONE_COUNT = 6


def empty_config():
    return {
        "version": 2,
        "reference": {"width": 640, "height": 480},
        "origin": "bottom-left",
        "zones": {
            color: {phase: [] for phase in PHASES} for color in COLORS
        },
        "ignore_zones": [[] for _ in range(IGNORE_ZONE_COUNT)],
    }


def validate_config(payload):
    if not isinstance(payload, dict):
        raise ValueError("Конфигурация зон должна быть объектом")
    zones = payload.get("zones")
    if not isinstance(zones, dict):
        raise ValueError("Не найден раздел zones")

    clean = empty_config()
    for color in COLORS:
        color_zones = zones.get(color, {})
        if not isinstance(color_zones, dict):
            raise ValueError(f"Некорректные зоны цвета {color}")
        for phase in PHASES:
            polygon = color_zones.get(phase, [])
            if not isinstance(polygon, list):
                raise ValueError(f"Зона {color}/{phase} должна быть списком")
            if polygon and len(polygon) < 3:
                raise ValueError(
                    f"Зона {color}/{phase} должна иметь минимум 3 вершины"
                )
            clean_polygon = []
            for point in polygon:
                if not isinstance(point, (list, tuple)) or len(point) != 2:
                    raise ValueError(
                        f"Вершина {color}/{phase} должна содержать X и Y"
                    )
                try:
                    x, y = float(point[0]), float(point[1])
                except (TypeError, ValueError) as error:
                    raise ValueError(
                        f"Координаты {color}/{phase} должны быть числами"
                    ) from error
                if not 0.0 <= x <= 1.0 or not 0.0 <= y <= 1.0:
                    raise ValueError(
                        f"Координаты {color}/{phase} должны быть от 0 до 1"
                    )
                clean_polygon.append([round(x, 6), round(y, 6)])
            clean["zones"][color][phase] = clean_polygon
    ignore_zones = payload.get("ignore_zones", [])
    if not isinstance(ignore_zones, list):
        raise ValueError("Зоны игнорирования должны быть списком")
    if len(ignore_zones) > IGNORE_ZONE_COUNT:
        raise ValueError(
            f"Допускается не более {IGNORE_ZONE_COUNT} зон игнорирования"
        )
    for index, polygon in enumerate(ignore_zones):
        if not isinstance(polygon, list):
            raise ValueError(
                f"Зона игнорирования {index + 1} должна быть списком"
            )
        if polygon and len(polygon) < 3:
            raise ValueError(
                f"Зона игнорирования {index + 1} должна иметь минимум 3 вершины"
            )
        clean_polygon = []
        for point in polygon:
            if not isinstance(point, (list, tuple)) or len(point) != 2:
                raise ValueError(
                    f"Вершина зоны игнорирования {index + 1} должна содержать X и Y"
                )
            try:
                x, y = float(point[0]), float(point[1])
            except (TypeError, ValueError) as error:
                raise ValueError(
                    f"Координаты зоны игнорирования {index + 1} должны быть числами"
                ) from error
            if not 0.0 <= x <= 1.0 or not 0.0 <= y <= 1.0:
                raise ValueError(
                    f"Координаты зоны игнорирования {index + 1} должны быть от 0 до 1"
                )
            clean_polygon.append([round(x, 6), round(y, 6)])
        clean["ignore_zones"][index] = clean_polygon
    return clean


def is_complete(config):
    return all(
        len(config["zones"][color][phase]) >= 3
        for color in COLORS
        for phase in PHASES
    )


class VisionZoneStore:
    def __init__(self, path=None):
        default_path = Path(__file__).resolve().parent / "vision_zones.json"
        self.path = Path(
            path or os.environ.get("BERETS_VISION_ZONES_FILE", default_path)
        )
        self.lock = threading.RLock()
        self.config = empty_config()
        self.load()

    def load(self):
        with self.lock:
            if not self.path.exists():
                return
            try:
                payload = json.loads(self.path.read_text(encoding="utf-8"))
                self.config = validate_config(payload)
            except (OSError, json.JSONDecodeError, ValueError):
                self.config = empty_config()

    def snapshot(self):
        with self.lock:
            result = deepcopy(self.config)
            result["complete"] = is_complete(result)
            return result

    def save(self, payload):
        clean = validate_config(payload)
        with self.lock:
            self.path.parent.mkdir(parents=True, exist_ok=True)
            temporary = self.path.with_suffix(self.path.suffix + ".tmp")
            temporary.write_text(
                json.dumps(clean, ensure_ascii=False, indent=2) + "\n",
                encoding="utf-8",
            )
            os.replace(temporary, self.path)
            self.config = clean
            return self.snapshot()
