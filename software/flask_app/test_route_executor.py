import json
import tempfile
import threading
import time
import unittest
from pathlib import Path

from route_executor import RouteExecutor
from route_store import RouteStore
from state import SystemState
from sync_color_routes_from_red import synchronize


def point(index, rail=10):
    return {
        "id": f"p-{index}",
        "name": f"Точка {index}",
        "rail": rail,
        "joints": {"1": 500, "10": 500, "11": 375, "16": 500},
        "speed_percent": 15,
        "time_ms": 100,
    }


class FakeAxis:
    homed = True
    position_mm = 0.0

    def request_stop(self):
        pass


class FakeHardware:
    def __init__(self):
        self.servo_bus = object()
        self.rail_axis = FakeAxis()
        self.calls = []

    def set_rail(self, target, speed_percent=None):
        self.calls.append(("rail", target, speed_percent))
        self.rail_axis.position_mm = float(target)

    def set_joints(self, joints, time_ms=None):
        self.calls.append(("joints", dict(joints), time_ms))

    def move_route_point(self, route_point, rail_speed_percent=None, overlap=False):
        self.calls.append(("point", route_point["id"], rail_speed_percent, overlap))
        self.rail_axis.position_mm = float(route_point["rail"])

    def emergency_stop(self):
        self.calls.append(("stop",))


class FakeStore:
    def __init__(self, points):
        self.points = points

    def resolved_route(self, *_args, **_kwargs):
        return self.points


class RouteExecutionTests(unittest.TestCase):
    def test_first_two_arm_points_overlap_single_rail_preposition(self):
        state = SystemState()
        hardware = FakeHardware()
        points = [point(1, 1), point(2, 2), point(3, 30), point(4, 40)]
        executor = RouteExecutor(state, hardware, FakeStore(points))
        executor.start("red", 1, 6, 20)
        executor.thread.join(timeout=2)
        self.assertFalse(executor.running)
        self.assertIn(("rail", 30.0, 20), hardware.calls)
        self.assertEqual(
            [call[0] for call in hardware.calls[:3]].count("joints"),
            2,
        )
        self.assertIn(("point", "p-3", 20, False), hardware.calls)
        self.assertIn(("point", "p-4", 20, False), hardware.calls)

    def test_automatic_preposition_waits_before_point_three(self):
        state = SystemState()
        with state.lock:
            state.data["system"]["operational"] = True
            state.data["container_exchange"]["active"] = True
        hardware = FakeHardware()
        points = [point(1, 1), point(2, 2), point(3, 30), point(4, 40)]
        executor = RouteExecutor(state, hardware, FakeStore(points))
        release = threading.Event()
        completed = []
        executor.start(
            "green",
            2,
            6,
            20,
            on_complete=lambda ok, error=None: completed.append((ok, error)),
            continue_after_preposition=release,
        )
        deadline = time.monotonic() + 1.0
        while time.monotonic() < deadline:
            if len([call for call in hardware.calls if call[0] == "joints"]) >= 2:
                break
            time.sleep(0.01)
        self.assertEqual(len([call for call in hardware.calls if call[0] == "joints"]), 2)
        self.assertNotIn(("point", "p-3", 20, False), hardware.calls)
        release.set()
        executor.thread.join(timeout=2)
        self.assertIn(("point", "p-3", 20, False), hardware.calls)
        self.assertIn(("point", "p-4", 20, False), hardware.calls)
        self.assertEqual(completed, [(True, None)])

    def test_long_rail_moves_use_ninety_percent_and_short_moves_keep_route_speed(self):
        state = SystemState()
        hardware = FakeHardware()
        points = [
            point(1, 0),
            point(2, 0),
            point(3, 160),
            point(4, 175),
            point(5, 20),
        ]
        executor = RouteExecutor(state, hardware, FakeStore(points))
        executor.start("green", 1, 6, 20)
        executor.thread.join(timeout=2)
        self.assertFalse(executor.running)
        self.assertIn(("rail", 160.0, 90), hardware.calls)
        self.assertIn(("point", "p-3", 20, False), hardware.calls)
        self.assertIn(("point", "p-4", 20, False), hardware.calls)
        self.assertIn(("point", "p-5", 90, False), hardware.calls)

    def test_sync_copies_29_point_blocks_and_height_profiles(self):
        red = [point(index + 1, 316 if index < 8 else 335) for index in range(29)]
        data = {
            "version": 2,
            "routes": {"red": red, "green": [], "yellow": [], "service": []},
            "profiles": {
                color: {"full": {}, "empty": {}}
                for color in ("red", "green", "yellow")
            },
        }
        result = synchronize(data)
        self.assertEqual(len(result["routes"]["green"]), 29)
        self.assertEqual(len(result["routes"]["yellow"]), 29)
        self.assertEqual(result["routes"]["green"][2]["rail"], 169)
        self.assertEqual(result["routes"]["yellow"][2]["rail"], 14)
        self.assertEqual(result["routes"]["green"][15]["rail"], 335)
        self.assertEqual(len(result["profiles"]["green"]["full"]["1"]), 7)
        self.assertEqual(len(result["profiles"]["yellow"]["empty"]["6"]), 4)


if __name__ == "__main__":
    unittest.main()
