import os
import time
import unittest
from unittest.mock import patch

from dispenser import DispenserController
from state import SystemState


class FakeHardware:
    servo_bus = object()

    def __init__(self):
        self.commands = []

    def set_aux_servo(self, servo_id, position, time_ms=None):
        self.commands.append((str(servo_id), int(position), int(time_ms)))


class DispenserControllerTests(unittest.TestCase):
    def variables(self):
        return {
            "BERETS_REAL_DISPENSER": "1",
            "BERETS_DISPENSER_FEED_POSITION": "200",
            "BERETS_DISPENSER_HOME_POSITION": "500",
            "BERETS_DISPENSER_CYCLE_SECONDS": "0.08",
            "BERETS_DISPENSER_RETURN_AT_SECONDS": "0.03",
            "BERETS_DISPENSER_MOVE_TIME_MS": "10",
        }

    def test_cycle_is_500_200_500_and_stop_returns_500(self):
        state = SystemState()
        hardware = FakeHardware()
        with patch.dict(os.environ, self.variables(), clear=False):
            controller = DispenserController(state, hardware)
            self.assertTrue(controller.start())
            time.sleep(0.055)
            controller.stop(reason=None)

        positions = [position for _sid, position, _time_ms in hardware.commands]
        self.assertEqual(positions[:3], [500, 200, 500])
        self.assertEqual(positions[-1], 500)
        self.assertFalse(state.data["dispenser"]["running"])
        self.assertEqual(state.data["dispenser"]["position"], 500)

    def test_repeated_start_does_not_create_second_worker(self):
        state = SystemState()
        hardware = FakeHardware()
        with patch.dict(os.environ, self.variables(), clear=False):
            controller = DispenserController(state, hardware)
            self.assertTrue(controller.start())
            self.assertFalse(controller.start())
            time.sleep(0.01)
            controller.stop(reason=None)

        self.assertEqual(
            [position for _sid, position, _time_ms in hardware.commands].count(200),
            1,
        )

    def test_rate_from_one_to_ten_changes_only_cycle_period(self):
        state = SystemState()
        hardware = FakeHardware()
        variables = self.variables()
        variables["BERETS_DISPENSER_CYCLE_SECONDS"] = "6.0"
        with patch.dict(os.environ, variables, clear=False):
            controller = DispenserController(state, hardware)
            controller.set_rate(5)
            self.assertEqual(controller.period, 12.0)
            self.assertEqual(state.data["dispenser"]["rate_apples_min"], 5.0)
            self.assertEqual(state.data["dispenser"]["return_at_seconds"], 0.03)
            with self.assertRaisesRegex(ValueError, "от 1 до 10"):
                controller.set_rate(11)


if __name__ == "__main__":
    unittest.main()
