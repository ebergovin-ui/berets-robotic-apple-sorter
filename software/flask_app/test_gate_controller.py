import os
import time
import unittest
from unittest.mock import patch

from gate_controller import ZoneGateController, point_in_polygon
from state import SystemState
from vision_zones import empty_config


class FakeZones:
    def __init__(self):
        self.config = empty_config()
        for color in ("red", "green", "yellow"):
            self.config["zones"][color]["open"] = [
                [0.1, 0.1],
                [0.3, 0.1],
                [0.3, 0.3],
                [0.1, 0.3],
            ]
            self.config["zones"][color]["close"] = [
                [0.6, 0.6],
                [0.8, 0.6],
                [0.8, 0.8],
                [0.6, 0.8],
            ]

    def snapshot(self):
        result = {**self.config, "complete": True}
        return result


class FakeHardware:
    servo_bus = object()
    conveyor_output = None

    def __init__(self):
        self.commands = []

    def refresh_inputs(self):
        pass

    def set_aux_servo(self, servo_id, position, time_ms=None):
        self.commands.append((str(servo_id), int(position)))

    def set_conveyor(self, enabled):
        self.commands.append(("conveyor", bool(enabled)))


class FakeDispenser:
    def __init__(self):
        self.commands = []

    def start(self):
        self.commands.append("start")

    def stop(self, reason=None):
        self.commands.append("stop")


class GateControllerTests(unittest.TestCase):
    def setUp(self):
        self.drop_settle_patch = patch.dict(
            os.environ,
            {
                "BERETS_GATE_DROP_SETTLE_SECONDS": "0",
                "BERETS_FULL_CONTAINER_STOP_DELAY_SECONDS": "0",
            },
            clear=False,
        )
        self.drop_settle_patch.start()
        self.addCleanup(self.drop_settle_patch.stop)

    def ready_state(self):
        state = SystemState()
        with state.lock:
            state.data["vision"]["connected"] = True
            state.data["vision"]["last_heartbeat"] = time.monotonic()
            state.data["containers"]["sensors_connected"] = True
            state.data["containers"]["presence"] = {
                "красное": True,
                "зелёное": True,
                "жёлтое": True,
            }
        return state

    def test_polygon_boundary_is_inside(self):
        polygon = [[0, 0], [1, 0], [1, 1], [0, 1]]
        self.assertTrue(point_in_polygon((0.0, 0.5), polygon))

    def test_red_track_closes_id4_at_trigger_and_reopens_at_release(self):
        state = self.ready_state()
        hardware = FakeHardware()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), FakeZones()
            )
            controller.start()
            controller.update_tracks(
                [
                    {
                        "event_id": "apple-1",
                        "label": "красное",
                        "confidence": 0.9,
                        "x": 0.2,
                        "y": 0.2,
                    }
                ]
            )
            self.assertEqual(
                state.data["containers"]["sorting"]["красное"], 0
            )
            controller.update_tracks(
                [
                    {
                        "event_id": "apple-1",
                        "label": "красное",
                        "confidence": 0.9,
                        "x": 0.9,
                        "y": 0.7,
                    }
                ]
            )
            controller.update_tracks(
                [
                    {
                        "event_id": "apple-1",
                        "label": "красное",
                        "confidence": 0.9,
                        "x": 0.7,
                        "y": 0.7,
                    }
                ]
            )

        self.assertEqual(hardware.commands[:3], [("3", 500), ("4", 500), ("5", 500)])
        self.assertEqual(hardware.commands[3:], [("4", 690), ("4", 500)])
        self.assertEqual(state.data["containers"]["sorting"]["красное"], 1)
        self.assertEqual(state.data["vision"]["counts"]["красное"], 1)
        controller.close()

    def test_changed_yolo_track_id_keeps_same_gate_owner(self):
        state = self.ready_state()
        hardware = FakeHardware()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
                "BERETS_GATE_REID_SECONDS": "3.0",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), FakeZones()
            )
            controller.start()
            first_id = {
                "event_id": "red-old-id",
                "label": "красное",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([first_id])
            controller.update_tracks(
                [{**first_id, "event_id": "red-new-id", "x": 0.25}]
            )
            self.assertTrue(state.data["zone_sorting"]["running"])
            self.assertIsNone(state.data["zone_sorting"]["fault"])
            self.assertEqual(controller.owners["4"], "red-new-id")
            self.assertNotIn("red-old-id", controller.tracks)
            controller.update_tracks(
                [{**first_id, "event_id": "red-new-id", "x": 0.7, "y": 0.7}]
            )
            controller.update_tracks(
                [{**first_id, "event_id": "red-new-id", "x": 0.9, "y": 0.7}]
            )

        self.assertEqual(state.data["containers"]["sorting"]["красное"], 1)
        self.assertEqual(state.data["vision"]["counts"]["красное"], 1)
        controller.close()

    def test_apple_returning_from_release_is_redirected_and_counted_once(self):
        state = self.ready_state()
        hardware = FakeHardware()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
                "BERETS_GATE_DROP_SETTLE_SECONDS": "10",
                "BERETS_GATE_REID_SECONDS": "3.0",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), FakeZones()
            )
            controller.start()
            item = {
                "event_id": "green-before-return",
                "label": "зелёное",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([item])
            controller.update_tracks([{**item, "x": 0.7, "y": 0.7}])
            controller.update_tracks([{**item, "x": 0.9, "y": 0.7}])
            self.assertEqual(
                state.data["containers"]["sorting"]["зелёное"], 0
            )

            returned = {
                **item,
                "event_id": "green-after-return",
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([returned])
            self.assertTrue(state.data["zone_sorting"]["running"])
            self.assertIsNone(state.data["zone_sorting"]["fault"])
            self.assertEqual(controller.owners["5"], "green-after-return")
            self.assertEqual(
                state.data["containers"]["sorting"]["зелёное"], 0
            )

            controller.drop_settle_seconds = 0
            controller.update_tracks([{**returned, "x": 0.7, "y": 0.7}])
            controller.update_tracks([{**returned, "x": 0.9, "y": 0.7}])

        self.assertEqual(state.data["containers"]["sorting"]["зелёное"], 1)
        self.assertEqual(state.data["vision"]["counts"]["зелёное"], 1)
        controller.close()

    def test_full_container_stops_only_after_drop_settle_delay(self):
        state = self.ready_state()
        with state.lock:
            state.data["containers"]["sorting"]["capacity"] = 1
        hardware = FakeHardware()
        hardware.conveyor_output = object()
        dispenser = FakeDispenser()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
                "BERETS_GATE_DROP_SETTLE_SECONDS": "0.05",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, dispenser, FakeZones()
            )
            controller.start(automatic_outputs=True)
            item = {
                "event_id": "apple-settle",
                "label": "красное",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([item])
            controller.update_tracks([{**item, "x": 0.7, "y": 0.7}])
            controller.update_tracks([{**item, "x": 0.9, "y": 0.7}])
            self.assertEqual(
                state.data["containers"]["sorting"]["красное"],
                0,
            )
            self.assertEqual(state.data["vision"]["counts"]["красное"], 0)
            self.assertNotIn(("conveyor", False), hardware.commands)
            time.sleep(0.07)
            with controller.lock:
                controller._release_due_tracks(time.monotonic())

        self.assertEqual(
            state.data["containers"]["sorting"]["красное"],
            1,
        )
        self.assertEqual(state.data["vision"]["counts"]["красное"], 1)
        self.assertIn(("conveyor", False), hardware.commands)
        controller.close()

    def test_full_container_clears_belt_before_stopping_conveyor(self):
        state = self.ready_state()
        with state.lock:
            state.data["containers"]["sorting"]["capacity"] = 1
        hardware = FakeHardware()
        hardware.conveyor_output = object()
        dispenser = FakeDispenser()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
                "BERETS_FULL_CONTAINER_STOP_DELAY_SECONDS": "0.05",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, dispenser, FakeZones()
            )
            controller.start(automatic_outputs=True)
            prepared = []
            released = []
            controller.container_full_prepare_handler = prepared.append
            controller.container_full_handler = lambda label: released.append(label)
            item = {
                "event_id": "apple-belt-clear",
                "label": "жёлтое",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([item])
            controller.update_tracks([{**item, "x": 0.7, "y": 0.7}])
            controller.update_tracks([{**item, "x": 0.9, "y": 0.7}])

            self.assertEqual(
                state.data["containers"]["sorting"]["жёлтое"], 1
            )
            self.assertIsNotNone(controller.pending_full_service)
            self.assertIsNone(controller.container_service)
            self.assertNotIn(("conveyor", False), hardware.commands)
            self.assertEqual(dispenser.commands[-1], "stop")
            self.assertEqual(prepared, ["жёлтое"])
            self.assertEqual(released, [])

            due = controller.pending_full_service["due"]
            self.assertFalse(controller._process_pending_full_service(due - 0.01))
            self.assertNotIn(("conveyor", False), hardware.commands)
            self.assertTrue(controller._process_pending_full_service(due + 0.01))
            self.assertEqual(released, ["жёлтое"])

        self.assertIn(("conveyor", False), hardware.commands)
        self.assertIsNone(controller.container_service)
        controller.close()

    def test_nonfull_container_removed_for_three_seconds_resets_and_resumes(self):
        state = self.ready_state()
        with state.lock:
            state.data["containers"]["sorting"]["зелёное"] = 1
        hardware = FakeHardware()
        hardware.conveyor_output = object()
        dispenser = FakeDispenser()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_CONTAINER_REMOVAL_SECONDS": "3.0",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, dispenser, FakeZones()
            )
            controller.start(automatic_outputs=True)
            base = time.monotonic()
            with state.lock:
                state.data["containers"]["presence"]["зелёное"] = False
                presence = dict(state.data["containers"]["presence"])

            _, confirmed = controller._update_missing_timers(presence, base)
            self.assertEqual(confirmed, [])
            _, confirmed = controller._update_missing_timers(
                presence,
                base + 3.1,
            )
            controller._begin_missing_pause(confirmed)

            self.assertEqual(
                state.data["containers"]["sorting"]["зелёное"], 0
            )
            self.assertIsNotNone(controller.missing_pause)
            self.assertIn(("conveyor", False), hardware.commands)

            with state.lock:
                state.data["containers"]["presence"]["зелёное"] = True
                presence = dict(state.data["containers"]["presence"])
            controller._process_missing_pause(presence, base + 3.2)
            self.assertIsNotNone(controller.missing_pause)
            controller._process_missing_pause(presence, base + 3.6)

        self.assertIsNone(controller.missing_pause)
        self.assertTrue(state.data["zone_sorting"]["running"])
        self.assertIsNone(state.data["zone_sorting"]["fault"])
        self.assertEqual(hardware.commands[-1], ("conveyor", True))
        self.assertEqual(dispenser.commands[-1], "start")
        controller.close()

    def test_lost_directed_track_reopens_gate_without_fault(self):
        state = self.ready_state()
        hardware = FakeHardware()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_LOST_RELEASE_SECONDS": "0.01",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), FakeZones()
            )
            controller.start()
            controller.update_tracks(
                [
                    {
                        "event_id": "apple-lost",
                        "label": "жёлтое",
                        "confidence": 0.9,
                        "x": 0.2,
                        "y": 0.2,
                    }
                ]
            )
            time.sleep(0.02)
            controller.update_tracks([])

        self.assertIn(("3", 690), hardware.commands)
        self.assertEqual(hardware.commands[-1], ("3", 500))
        self.assertTrue(state.data["zone_sorting"]["running"])
        self.assertIsNone(state.data["zone_sorting"]["fault"])
        controller.close()

    def test_release_zone_holds_gate_before_opening(self):
        state = self.ready_state()
        hardware = FakeHardware()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0.02",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), FakeZones()
            )
            controller.start()
            first = {
                "event_id": "apple-hold",
                "label": "зелёное",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([first])
            controller.update_tracks([{**first, "x": 0.7, "y": 0.7}])
            self.assertEqual(hardware.commands[-1], ("5", 690))
            self.assertEqual(state.data["containers"]["sorting"]["зелёное"], 0)
            time.sleep(0.05)
            controller.update_tracks([{**first, "x": 0.7, "y": 0.7}])
            self.assertEqual(
                state.data["containers"]["sorting"]["зелёное"], 0
            )
            controller.update_tracks([{**first, "x": 0.9, "y": 0.7}])

        self.assertEqual(hardware.commands[-1], ("5", 500))
        self.assertEqual(state.data["containers"]["sorting"]["зелёное"], 1)
        controller.close()

    def test_full_container_requires_three_second_removal_then_resumes(self):
        state = self.ready_state()
        with state.lock:
            state.data["containers"]["sorting"]["capacity"] = 1
        hardware = FakeHardware()
        hardware.conveyor_output = object()
        dispenser = FakeDispenser()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_GATE_RELEASE_HOLD_SECONDS": "0",
                "BERETS_CONTAINER_REMOVAL_SECONDS": "3.0",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, dispenser, FakeZones()
            )
            controller.start(automatic_outputs=True)
            item = {
                "event_id": "apple-full",
                "label": "жёлтое",
                "confidence": 0.9,
                "x": 0.2,
                "y": 0.2,
            }
            controller.update_tracks([item])
            controller.update_tracks([{**item, "x": 0.7, "y": 0.7}])
            self.assertNotIn(("conveyor", False), hardware.commands)
            controller.update_tracks([{**item, "x": 0.9, "y": 0.7}])
            self.assertFalse(hardware.commands[-4][1])
            self.assertEqual(state.data["containers"]["sorting"]["жёлтое"], 1)

            base = time.monotonic()
            with state.lock:
                state.data["containers"]["presence"]["жёлтое"] = False
                presence = dict(state.data["containers"]["presence"])
            controller._process_container_service(presence, base)
            controller._process_container_service(presence, base + 2.9)
            self.assertFalse(controller.container_service["removal_confirmed"])
            controller._process_container_service(presence, base + 3.1)
            self.assertTrue(controller.container_service["removal_confirmed"])

            with state.lock:
                state.data["containers"]["presence"]["жёлтое"] = True
                presence = dict(state.data["containers"]["presence"])
            controller._process_container_service(presence, base + 3.2)
            self.assertIsNotNone(controller.container_service)
            controller._process_container_service(presence, base + 3.6)

        self.assertEqual(state.data["containers"]["sorting"]["жёлтое"], 0)
        self.assertEqual(hardware.commands[-1], ("conveyor", True))
        self.assertEqual(dispenser.commands[-1], "start")
        controller.close()

    def test_short_present_spike_does_not_reset_missing_timer(self):
        state = self.ready_state()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
                "BERETS_CONTAINER_REMOVAL_SECONDS": "3.0",
                "BERETS_CONTAINER_RETURN_CONFIRM_SECONDS": "0.3",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, FakeHardware(), FakeDispenser(), FakeZones()
            )
            controller.start()
            base = time.monotonic()
            missing = {"красное": False, "зелёное": True, "жёлтое": True}
            present = {"красное": True, "зелёное": True, "жёлтое": True}
            controller._update_missing_timers(missing, base)
            controller._update_missing_timers(present, base + 2.9)
            still_missing, confirmed = controller._update_missing_timers(
                missing, base + 3.1
            )

        self.assertIn("красное", still_missing)
        self.assertIn("красное", confirmed)
        controller.close()

    def test_new_track_inside_ignore_zone_does_not_move_gate(self):
        state = self.ready_state()
        hardware = FakeHardware()
        zones = FakeZones()
        zones.config["ignore_zones"][0] = [
            [0.15, 0.15],
            [0.25, 0.15],
            [0.25, 0.25],
            [0.15, 0.25],
        ]
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), zones
            )
            controller.start()
            controller.update_tracks(
                [
                    {
                        "event_id": "false-red-part",
                        "label": "красное",
                        "confidence": 0.99,
                        "x": 0.2,
                        "y": 0.2,
                    }
                ]
            )

        self.assertEqual(
            hardware.commands,
            [("3", 500), ("4", 500), ("5", 500)],
        )
        self.assertEqual(
            state.data["containers"]["sorting"]["красное"], 0
        )
        controller.close()


    def test_saved_zones_apply_immediately_to_new_tracks(self):
        state = self.ready_state()
        hardware = FakeHardware()
        zones = FakeZones()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), zones
            )
            controller.start()
            updated = zones.snapshot()
            updated["zones"]["red"]["open"] = [
                [0.7, 0.1],
                [0.9, 0.1],
                [0.9, 0.3],
                [0.7, 0.3],
            ]
            controller.reload_calibration(updated)
            controller.update_tracks(
                [
                    {
                        "event_id": "red-new-zones",
                        "label": "\u043a\u0440\u0430\u0441\u043d\u043e\u0435",
                        "confidence": 0.9,
                        "x": 0.8,
                        "y": 0.2,
                    }
                ]
            )

        self.assertEqual(hardware.commands[-1], ("4", 690))
        controller.close()

    def test_zone_reload_is_rejected_while_gate_owns_an_apple(self):
        state = self.ready_state()
        hardware = FakeHardware()
        zones = FakeZones()
        with patch.dict(
            os.environ,
            {
                "BERETS_REAL_ZONE_SORTING": "1",
                "BERETS_VISION_TOKEN": "test-token",
            },
            clear=False,
        ):
            controller = ZoneGateController(
                state, hardware, FakeDispenser(), zones
            )
            controller.start()
            controller.update_tracks(
                [
                    {
                        "event_id": "active-apple",
                        "label": "\u043a\u0440\u0430\u0441\u043d\u043e\u0435",
                        "confidence": 0.9,
                        "x": 0.2,
                        "y": 0.2,
                    }
                ]
            )
            with self.assertRaises(RuntimeError):
                controller.reload_calibration(zones.snapshot())
        controller.close()


if __name__ == "__main__":
    unittest.main()
