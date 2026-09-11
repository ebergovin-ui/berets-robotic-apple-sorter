#!/usr/bin/env python3
"""Persistent operator-adjustable settings for BERETS."""

from copy import deepcopy
import json
import math
import os
from pathlib import Path
import threading


MIN_FULL_STOP_DELAY = 0.1
MAX_FULL_STOP_DELAY = 10.0
MIN_RAIL_MAX_SPEED_STEPS_S = 1
MAX_RAIL_MAX_SPEED_STEPS_S = 100000


def validate_full_stop_delay(value):
    try:
        delay = float(value)
    except (TypeError, ValueError) as error:
        raise ValueError("Время задержки должно быть числом") from error
    if not math.isfinite(delay):
        raise ValueError("Время задержки должно быть конечным числом")
    if not MIN_FULL_STOP_DELAY <= delay <= MAX_FULL_STOP_DELAY:
        raise ValueError("Время задержки должно быть от 0,1 до 10 секунд")
    return round(delay, 2)


def validate_rail_max_speed_steps_s(value):
    try:
        speed = float(value)
    except (TypeError, ValueError) as error:
        raise ValueError(
            "Максимальная частота STEP должна быть числом"
        ) from error
    if not math.isfinite(speed) or not speed.is_integer():
        raise ValueError(
            "Максимальная частота STEP должна быть целым числом"
        )
    speed = int(speed)
    if not MIN_RAIL_MAX_SPEED_STEPS_S <= speed <= MAX_RAIL_MAX_SPEED_STEPS_S:
        raise ValueError(
            "Максимальная частота STEP должна быть от 1 до 100000 имп/с"
        )
    return speed


class RuntimeSettingsStore:
    def __init__(self, path=None):
        default_path = Path(__file__).resolve().parent / "runtime_settings.json"
        self.path = Path(
            path or os.environ.get("BERETS_RUNTIME_SETTINGS_FILE", default_path)
        )
        self.lock = threading.RLock()
        self.config = self._defaults()
        self.load()

    @staticmethod
    def _defaults():
        raw_delay = os.environ.get(
            "BERETS_FULL_CONTAINER_STOP_DELAY_SECONDS",
            str(MIN_FULL_STOP_DELAY),
        )
        try:
            delay = float(raw_delay)
        except (TypeError, ValueError):
            delay = MIN_FULL_STOP_DELAY
        delay = min(MAX_FULL_STOP_DELAY, max(MIN_FULL_STOP_DELAY, delay))
        raw_rail_speed = os.environ.get("BERETS_RAIL_SPEED_STEPS_S", "2000")
        try:
            rail_speed = validate_rail_max_speed_steps_s(raw_rail_speed)
        except ValueError:
            rail_speed = 2000
        return {
            "version": 2,
            "full_container_stop_delay_seconds": round(delay, 2),
            "rail_max_speed_steps_s": rail_speed,
        }

    def load(self):
        with self.lock:
            if not self.path.exists():
                return
            try:
                payload = json.loads(self.path.read_text(encoding="utf-8"))
                delay = validate_full_stop_delay(
                    payload.get("full_container_stop_delay_seconds")
                )
                rail_speed = validate_rail_max_speed_steps_s(
                    payload.get(
                        "rail_max_speed_steps_s",
                        self.config["rail_max_speed_steps_s"],
                    )
                )
            except (OSError, json.JSONDecodeError, ValueError, TypeError):
                return
            self.config = {
                "version": 2,
                "full_container_stop_delay_seconds": delay,
                "rail_max_speed_steps_s": rail_speed,
            }

    def snapshot(self):
        with self.lock:
            return deepcopy(self.config)

    def set_full_stop_delay(self, value):
        delay = validate_full_stop_delay(value)
        with self.lock:
            self.config["full_container_stop_delay_seconds"] = delay
            self._save_locked()
            return delay

    def set_rail_max_speed_steps_s(self, value):
        speed = validate_rail_max_speed_steps_s(value)
        with self.lock:
            self.config["rail_max_speed_steps_s"] = speed
            self._save_locked()
            return speed

    def update(self, full_stop_delay, rail_max_speed_steps_s):
        delay = validate_full_stop_delay(full_stop_delay)
        speed = validate_rail_max_speed_steps_s(rail_max_speed_steps_s)
        with self.lock:
            self.config.update({
                "version": 2,
                "full_container_stop_delay_seconds": delay,
                "rail_max_speed_steps_s": speed,
            })
            self._save_locked()
            return self.snapshot()

    def _save_locked(self):
        self.path.parent.mkdir(parents=True, exist_ok=True)
        temporary = self.path.with_suffix(self.path.suffix + ".tmp")
        temporary.write_text(
            json.dumps(self.config, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        os.replace(temporary, self.path)
