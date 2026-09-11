import os
import sys
import types
import unittest
from unittest.mock import patch

from hardware import ConveyorOutput, HardwareGateway, RailAxis
from state import SystemState


class FakeInput:
    values = {16: 1, 17: 1, 25: 1}

    def __init__(self, pin, **_kwargs):
        self.pin = pin

    @property
    def value(self):
        return self.values[self.pin]

    @property
    def is_active(self):
        return self.values[self.pin] == 0

    def close(self):
        pass


class FakeOutput:
    instances = []

    def __init__(self, pin, active_high=True, initial_value=False):
        self.pin = pin
        self.active_high = active_high
        self.value = bool(initial_value)
        self.closed = False
        self.__class__.instances.append(self)

    def on(self):
        self.value = True

    def off(self):
        self.value = False

    def close(self):
        self.closed = True


FAKE_GPIOZERO = types.SimpleNamespace(
    DigitalInputDevice=FakeInput,
    OutputDevice=FakeOutput,
)


class HardwareGatewayTests(unittest.TestCase):
    def setUp(self):
        FakeInput.values = {16: 1, 17: 1, 25: 1}
        FakeOutput.instances = []

    def make_gateway(self, **environment):
        variables = {
            "BERETS_REAL_MANIPULATOR": "0",
            "BERETS_REAL_CONTAINER_SENSORS": "0",
            "BERETS_REAL_CONVEYOR": "0",
        }
        variables.update(environment)
        modules = {"gpiozero": FAKE_GPIOZERO}
        with patch.dict(os.environ, variables, clear=False), patch.dict(
            sys.modules, modules
        ):
            state = SystemState()
            gateway = HardwareGateway(state)
        self.addCleanup(gateway.close)
        return state, gateway

    def test_container_presence_is_active_low(self):
        state, gateway = self.make_gateway(
            BERETS_REAL_CONTAINER_SENSORS="1",
        )
        FakeInput.values = {16: 0, 17: 0, 25: 0}
        gateway.refresh_inputs()
        self.assertTrue(state.data["containers"]["sorting_containers_ready"])
        self.assertEqual(
            state.data["containers"]["presence"],
            {"красное": True, "зелёное": True, "жёлтое": True},
        )

    def test_red_and_green_container_pins_match_physical_positions(self):
        state, gateway = self.make_gateway(
            BERETS_REAL_CONTAINER_SENSORS="1",
        )
        FakeInput.values = {16: 0, 17: 1, 25: 1}
        gateway.refresh_inputs()
        self.assertEqual(
            state.data["containers"]["presence"],
            {
                "\u043a\u0440\u0430\u0441\u043d\u043e\u0435": False,
                "\u0437\u0435\u043b\u0451\u043d\u043e\u0435": True,
                "\u0436\u0451\u043b\u0442\u043e\u0435": False,
            },
        )
        FakeInput.values = {16: 1, 17: 0, 25: 1}
        gateway.refresh_inputs()
        self.assertEqual(
            state.data["containers"]["presence"],
            {
                "\u043a\u0440\u0430\u0441\u043d\u043e\u0435": True,
                "\u0437\u0435\u043b\u0451\u043d\u043e\u0435": False,
                "\u0436\u0451\u043b\u0442\u043e\u0435": False,
            },
        )

    def test_conveyor_starts_off_and_stops_on_emergency(self):
        state, gateway = self.make_gateway(
            BERETS_REAL_CONVEYOR="1",
            BERETS_CONVEYOR_ACTIVE_HIGH="1",
        )
        output = FakeOutput.instances[-1]
        self.assertFalse(output.value)
        gateway.set_conveyor(True)
        self.assertTrue(output.value)
        gateway.emergency_stop()
        self.assertFalse(output.value)
        self.assertFalse(state.data["conveyor"]["running"])

    def test_conveyor_requires_explicit_active_level(self):
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_MANIPULATOR": "0",
                "BERETS_REAL_CONTAINER_SENSORS": "0",
                "BERETS_REAL_CONVEYOR": "1",
            },
            clear=False,
        ):
            os.environ.pop("BERETS_CONVEYOR_ACTIVE_HIGH", None)
            state = SystemState()
            gateway = HardwareGateway(state)
        self.addCleanup(gateway.close)
        self.assertIsNone(gateway.conveyor_output)
        self.assertFalse(state.data["conveyor"]["connected"])

    def test_route_home_pose_restores_manipulator_homed_state(self):
        state, gateway = self.make_gateway()
        gateway.servo_bus = types.SimpleNamespace(close=lambda: None)
        with patch.object(gateway, "_send_positions"):
            gateway.set_joints(gateway.HOME, time_ms=1600)
            self.assertTrue(state.data["manipulator"]["homed"])
            gateway.set_joints({"10": 501}, time_ms=850)
            self.assertFalse(state.data["manipulator"]["homed"])

    def test_manipulator_joint_commands_are_repeated_on_tx_only_bus(self):
        _state, gateway = self.make_gateway()
        moves = []
        gateway.servo_bus = types.SimpleNamespace(
            move=lambda servo_id, position, time_ms: moves.append(
                (str(servo_id), position, time_ms)
            ),
            close=lambda: None,
        )
        with patch("hardware.time.sleep"):
            gateway.set_joints({"1": 510, "10": 520}, time_ms=900)
        self.assertEqual(
            moves,
            [
                ("1", 510, 900),
                ("10", 520, 900),
                ("1", 510, 900),
                ("10", 520, 900),
            ],
        )

    def test_rail_remains_blocked_until_homing_is_implemented(self):
        _state, gateway = self.make_gateway()
        with self.assertRaises(RuntimeError):
            gateway.set_rail(100)

    def test_rail_home_reads_nc_min_limit_and_requires_negative_home_direction(self):
        FakeInput.values.update({5: 1, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(
                steps_per_mm=10,
                speed_steps_s=1000,
                home_dir=-1,
            )
        self.addCleanup(axis.close)
        axis.home_axis()
        self.assertTrue(axis.homed)
        self.assertEqual(axis.position_mm, 0)
        self.assertTrue(axis.min_triggered)
        self.assertTrue(axis.enable.value)
        self.assertTrue(axis.status()["holding"])
        axis.set_speed_percent(25)
        self.assertEqual(axis.speed_steps_s, 250)
        axis.set_max_speed_steps_s(2000)
        self.assertEqual(axis.speed_steps_s, 500)
        self.assertEqual(axis.status()["speed_percent"], 25)
        self.assertEqual(axis.status()["max_speed_steps_s"], 2000)
        self.assertEqual(axis.TRAVEL_MM, 347.0)
        self.assertEqual(axis.max_position_steps, 3470)
        self.assertEqual(axis.status()["zero_reference"], "жёлтый контейнер")
        with self.assertRaises(ValueError):
            RailAxis(10, 1000, home_dir=1)

    def test_rail_calibration_limits_position_to_13880_pulses(self):
        FakeInput.values.update({5: 1, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(
                steps_per_mm=40,
                speed_steps_s=1000,
                home_dir=-1,
            )
        self.addCleanup(axis.close)
        self.assertEqual(axis.max_position_steps, 13880)
        self.assertEqual(axis.status()["travel_mm"], 347.0)
        with self.assertRaisesRegex(ValueError, "0 до 347 мм"):
            axis.move_to(347.01)

    def test_rail_stop_interrupts_active_step_loop_and_disables_output(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(
                steps_per_mm=1,
                speed_steps_s=1000,
                home_dir=-1,
            )
        self.addCleanup(axis.close)
        axis.homed = True

        original_pulse = axis._pulse
        pulse_count = 0

        def stop_after_first_pulse():
            nonlocal pulse_count
            original_pulse()
            pulse_count += 1
            axis.request_stop()

        with patch.object(axis, "_pulse", side_effect=stop_after_first_pulse):
            with self.assertRaisesRegex(RuntimeError, "остановлено"):
                axis.move_to(10)

        self.assertEqual(pulse_count, 1)
        self.assertFalse(axis.moving)
        self.assertFalse(axis.enable.value)
        self.assertFalse(axis.step.value)

    def test_rail_holds_position_after_successful_move(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(
                steps_per_mm=1,
                speed_steps_s=1000,
                home_dir=-1,
            )
        self.addCleanup(axis.close)
        axis.homed = True

        axis.move_to(2)
        self.assertEqual(axis.position_mm, 2)
        self.assertFalse(axis.moving)
        self.assertTrue(axis.enable.value)
        self.assertTrue(axis.status()["holding"])
        self.assertFalse(axis.step.value)

    def test_rail_ignores_only_a_transient_limit_open_without_emitting_extra_step(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=1, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        samples = iter((True, False))
        with patch.object(
            axis,
            "_limit_for_direction",
            side_effect=lambda _direction: next(samples, False),
        ), patch("hardware.time.sleep"):
            axis.move_to(1)
        self.assertEqual(axis.position_mm, 1)
        self.assertTrue(axis.status()["holding"])

    def test_rail_still_stops_on_confirmed_max_limit(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=1, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        with patch.object(axis, "_limit_for_direction", return_value=True), patch(
            "hardware.time.sleep"
        ):
            with self.assertRaisesRegex(RuntimeError, "MAX .*GPIO6.*0.00"):
                axis.move_to(1)
        self.assertEqual(axis.position_mm, 0)
        self.assertFalse(axis.enable.value)

    def test_empty_stack_endpoint_stops_pulses_at_max_and_keeps_holding(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=1, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        calls = 0

        def max_after_two_steps(_direction):
            nonlocal calls
            calls += 1
            return calls >= 3

        with patch.object(axis, "_limit_for_direction", side_effect=max_after_two_steps), patch(
            "hardware.time.sleep"
        ):
            result = axis.move_to(343, allow_max_endpoint=True)

        self.assertTrue(result["stopped_at_allowed_max"])
        self.assertFalse(result["reached_target"])
        self.assertEqual(axis.position_mm, 2)
        self.assertTrue(axis.enable.value)
        self.assertTrue(axis.status()["holding"])

    def test_allowed_max_endpoint_is_never_enabled_for_normal_move(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=1, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        with patch.object(axis, "_limit_for_direction", return_value=True), patch(
            "hardware.time.sleep"
        ):
            with self.assertRaisesRegex(RuntimeError, "MAX"):
                axis.move_to(343, allow_max_endpoint=False)

    def test_final_home_endpoint_accepts_min_and_sets_exact_zero(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=10, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        axis.position_steps = 4
        samples = iter((False, True, True))
        with patch.object(
            axis,
            "_limit_for_direction",
            side_effect=lambda _direction: next(samples, True),
        ), patch("hardware.time.sleep"):
            result = axis.move_to(0, allow_min_endpoint=True)
        self.assertTrue(result["stopped_at_allowed_min"])
        self.assertTrue(result["reached_target"])
        self.assertEqual(axis.position_mm, 0)
        self.assertTrue(axis.status()["holding"])

    def test_min_endpoint_remains_fault_for_non_home_move(self):
        FakeInput.values.update({5: 0, 6: 0})
        with patch.dict(sys.modules, {"gpiozero": FAKE_GPIOZERO}):
            axis = RailAxis(steps_per_mm=10, speed_steps_s=1000, home_dir=-1)
        self.addCleanup(axis.close)
        axis.homed = True
        axis.position_steps = 20
        with patch.object(axis, "_limit_for_direction", return_value=True), patch(
            "hardware.time.sleep"
        ):
            with self.assertRaisesRegex(RuntimeError, "MIN/HOME"):
                axis.move_to(1, allow_min_endpoint=False)

    def test_real_rail_requires_explicit_commissioning_gate(self):
        state, gateway = self.make_gateway(
            BERETS_REAL_RAIL="1",
            BERETS_RAIL_COMMISSIONED="0",
            BERETS_RAIL_STEPS_PER_MM="40",
            BERETS_RAIL_HOME_DIR="-1",
        )
        self.assertIsNone(gateway.rail_axis)
        self.assertFalse(state.data["rail"]["connected"])

    def test_manual_joint_limits_are_enforced_in_hardware_gateway(self):
        _state, gateway = self.make_gateway()
        with self.assertRaisesRegex(ValueError, "ID10.*100 до 1000"):
            gateway.set_joints({"10": 99})
        with self.assertRaisesRegex(ValueError, "ID16.*0 до 900"):
            gateway.set_joints({"16": 901})

    def test_home_pose_uses_physical_elbow_reference_375(self):
        state = SystemState()
        self.assertEqual(
            HardwareGateway.HOME,
            {"1": 500, "10": 500, "11": 375, "16": 500},
        )
        self.assertEqual(state.data["manipulator"]["joints"], HardwareGateway.HOME)


if __name__ == "__main__":
    unittest.main()
