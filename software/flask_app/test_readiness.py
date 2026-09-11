import os
import unittest
from unittest.mock import patch

from readiness import system_readiness
from state import SystemState


class FakeHardware:
    servo_bus = object()
    container_sensors = object()
    conveyor_output = object()


class ReadinessTests(unittest.TestCase):
    def test_missing_home_and_vision_are_reported(self):
        state = SystemState()
        with state.lock:
            state.data["containers"]["sorting_containers_ready"] = True
            state.data["containers"]["empty_stack"] = 2
        with patch.dict(os.environ, {"BERETS_REAL_CYCLE": "0"}, clear=False):
            result = system_readiness(state, FakeHardware())
        self.assertFalse(result["ready"])
        failed = {item["id"] for item in result["checks"] if not item["ready"]}
        self.assertIn("arm_home", failed)
        self.assertIn("rail_home", failed)
        self.assertIn("vision", failed)

    def test_all_checks_pass_when_mock_state_is_complete(self):
        state = SystemState()
        with state.lock:
            state.data["containers"]["sorting_containers_ready"] = True
            state.data["containers"]["empty_stack"] = 2
            state.data["manipulator"]["homed"] = True
            state.data["rail"]["homed"] = True
            state.data["vision"]["connected"] = True
        variables = {
            "BERETS_REAL_CYCLE": "0",
            "BERETS_REAL_DISPENSER": "0",
            "BERETS_GATE_OPEN_4": "700",
            "BERETS_GATE_CLOSED_4": "500",
            "BERETS_GATE_OPEN_5": "710",
            "BERETS_GATE_CLOSED_5": "510",
            "BERETS_GATE_OPEN_3": "720",
            "BERETS_GATE_CLOSED_3": "520",
        }
        with patch.dict(os.environ, variables, clear=False):
            result = system_readiness(state, FakeHardware())
        self.assertTrue(result["ready"])
