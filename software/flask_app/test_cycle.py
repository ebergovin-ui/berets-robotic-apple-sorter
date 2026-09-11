import os
import time
import unittest
from unittest.mock import patch

from cycle import SortCycle
from state import SystemState


class FakeHardware:
    servo_bus = object()
    conveyor_output = object()
    container_sensors = object()

    def __init__(self):
        self.gate_commands = []
        self.conveyor_commands = []

    def set_aux_servo(self, servo_id, position, time_ms=None):
        self.gate_commands.append((str(servo_id), int(position)))

    def set_conveyor(self, running):
        self.conveyor_commands.append(bool(running))

    def refresh_inputs(self):
        pass


class MissingHardware:
    servo_bus = None
    conveyor_output = None
    container_sensors = None

    @staticmethod
    def refresh_inputs():
        pass


class CycleSafetyTests(unittest.TestCase):
    def test_real_cycle_refuses_missing_hardware(self):
        state = SystemState()
        with patch.dict(os.environ, {"BERETS_REAL_CYCLE": "1"}, clear=False):
            cycle = SortCycle(state, MissingHardware())
            with state.lock:
                state.data["containers"]["empty_stack"] = 2
                state.data["containers"]["sorting_containers_ready"] = True
                state.data["manipulator"]["homed"] = True
                state.data["rail"]["homed"] = True
                state.data["vision"]["connected"] = True
            with self.assertRaisesRegex(RuntimeError, "конвейер"):
                cycle.start()
            cycle.close()

    def test_mock_cycle_starts_without_sending_hardware_commands(self):
        state = SystemState()
        with patch.dict(os.environ, {"BERETS_REAL_CYCLE": "0"}, clear=False):
            cycle = SortCycle(state, FakeHardware())
            with state.lock:
                state.data["containers"]["empty_stack"] = 2
                state.data["containers"]["sorting_containers_ready"] = True
                state.data["manipulator"]["homed"] = True
                state.data["rail"]["homed"] = True
                state.data["vision"]["connected"] = True
            cycle.start()
            self.assertTrue(state.data["cycle"]["running"])
            cycle.stop()
            self.assertFalse(state.data["cycle"]["running"])
            cycle.close()

    def test_two_events_open_correct_gate_and_stop_conveyor(self):
        state = SystemState()
        hardware = FakeHardware()
        variables = {
            "BERETS_REAL_CYCLE": "1",
            "BERETS_REAL_DISPENSER": "0",
            "BERETS_GATE_OPEN_4": "700",
            "BERETS_GATE_CLOSED_4": "500",
            "BERETS_GATE_OPEN_5": "710",
            "BERETS_GATE_CLOSED_5": "510",
            "BERETS_GATE_OPEN_3": "720",
            "BERETS_GATE_CLOSED_3": "520",
            "BERETS_GATE_HOLD_SECONDS": "0.01",
        }
        with patch.dict(os.environ, variables, clear=False):
            cycle = SortCycle(state, hardware)
            with state.lock:
                state.data["containers"]["empty_stack"] = 2
                state.data["containers"]["sorting_containers_ready"] = True
                state.data["manipulator"]["homed"] = True
                state.data["rail"]["homed"] = True
                state.data["vision"]["connected"] = True
            cycle.start()
            cycle.submit("красное", 0.95, "one")
            cycle.submit("красное", 0.96, "two")
            deadline = time.time() + 1
            while time.time() < deadline and state.data["cycle"]["running"]:
                time.sleep(0.01)
            cycle.close()

        self.assertEqual(state.data["containers"]["sorting"]["красное"], 2)
        self.assertEqual(state.data["vision"]["counts"]["красное"], 2)
        self.assertEqual(
            hardware.gate_commands,
            [("4", 700), ("4", 500), ("4", 700), ("4", 500)],
        )
        self.assertEqual(hardware.conveyor_commands, [True, False])
        self.assertEqual(state.data["cycle"]["phase"], "container_full")

    def test_low_confidence_event_is_not_sent_to_gate(self):
        state = SystemState()
        hardware = FakeHardware()
        variables = {
            "BERETS_REAL_CYCLE": "1",
            "BERETS_REAL_DISPENSER": "0",
            "BERETS_GATE_OPEN_4": "700",
            "BERETS_GATE_CLOSED_4": "500",
            "BERETS_GATE_OPEN_5": "710",
            "BERETS_GATE_CLOSED_5": "510",
            "BERETS_GATE_OPEN_3": "720",
            "BERETS_GATE_CLOSED_3": "520",
        }
        with patch.dict(os.environ, variables, clear=False):
            cycle = SortCycle(state, hardware)
            with state.lock:
                state.data["containers"]["empty_stack"] = 2
                state.data["containers"]["sorting_containers_ready"] = True
                state.data["manipulator"]["homed"] = True
                state.data["rail"]["homed"] = True
                state.data["vision"]["connected"] = True
            cycle.start()
            cycle.submit("зелёное", 0.40, "uncertain")
            time.sleep(0.05)
            cycle.close()

        self.assertEqual(hardware.gate_commands, [])
        self.assertEqual(state.data["containers"]["sorting"]["зелёное"], 0)


if __name__ == "__main__":
    unittest.main()
