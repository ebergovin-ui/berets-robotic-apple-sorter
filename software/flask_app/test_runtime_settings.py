import os
from pathlib import Path
import tempfile
import unittest
from unittest.mock import patch

from runtime_settings import (
    RuntimeSettingsStore,
    validate_full_stop_delay,
    validate_rail_max_speed_steps_s,
)


class RuntimeSettingsTests(unittest.TestCase):
    def test_environment_zero_is_clamped_to_interface_minimum(self):
        with tempfile.TemporaryDirectory() as directory, patch.dict(
            os.environ,
            {"BERETS_FULL_CONTAINER_STOP_DELAY_SECONDS": "0"},
            clear=False,
        ):
            store = RuntimeSettingsStore(Path(directory) / "settings.json")
        self.assertEqual(
            store.snapshot()["full_container_stop_delay_seconds"],
            0.1,
        )

    def test_saved_delay_is_persistent(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "settings.json"
            store = RuntimeSettingsStore(path)
            self.assertEqual(store.set_full_stop_delay(2.7), 2.7)
            self.assertEqual(store.set_rail_max_speed_steps_s(3200), 3200)
            reloaded = RuntimeSettingsStore(path)
            self.assertEqual(
                reloaded.snapshot()["full_container_stop_delay_seconds"],
                2.7,
            )
            self.assertEqual(
                reloaded.snapshot()["rail_max_speed_steps_s"], 3200
            )

    def test_delay_must_be_between_point_one_and_ten(self):
        for value in (0, 0.09, 10.1, float("inf"), "text"):
            with self.subTest(value=value):
                with self.assertRaises(ValueError):
                    validate_full_stop_delay(value)
        self.assertEqual(validate_full_stop_delay(0.1), 0.1)
        self.assertEqual(validate_full_stop_delay(10), 10.0)

    def test_rail_max_step_frequency_must_be_positive_integer(self):
        for value in (0, -1, 1.5, 100001, float("inf"), "text"):
            with self.subTest(value=value):
                with self.assertRaises(ValueError):
                    validate_rail_max_speed_steps_s(value)
        self.assertEqual(validate_rail_max_speed_steps_s(1), 1)
        self.assertEqual(validate_rail_max_speed_steps_s(2000), 2000)
        self.assertEqual(validate_rail_max_speed_steps_s(100000), 100000)


if __name__ == "__main__":
    unittest.main()
