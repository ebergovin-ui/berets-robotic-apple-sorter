import tempfile
import threading
import time
import unittest
from pathlib import Path

from container_exchange import ContainerExchangeCoordinator
from container_inventory import ContainerInventoryStore
from state import SystemState


class FakeHardware:
    def __init__(self, state, presence_sequence=None):
        self.state = state
        self.conveyor_output = True
        self.presence_sequence = list(presence_sequence or [])
        self.conveyor_commands = []

    def set_conveyor(self, enabled):
        self.conveyor_output = bool(enabled)
        self.conveyor_commands.append(bool(enabled))

    def refresh_inputs(self, log_changes=False):
        if self.presence_sequence:
            present = self.presence_sequence.pop(0)
            with self.state.lock:
                for label in ("красное", "зелёное", "жёлтое"):
                    self.state.data["containers"]["presence"][label] = present


class FakeDispenser:
    def __init__(self):
        self.started = 0
        self.stopped = 0

    def start(self):
        self.started += 1

    def stop(self, reason=None):
        self.stopped += 1


class FakeZoneGates:
    def __init__(self):
        self.started = 0
        self.stopped = 0

    def start(self, automatic_outputs=False):
        self.started += 1

    def stop(self, reason=None):
        self.stopped += 1


class FakeRouteExecutor:
    def __init__(self, fail_after=None):
        self.fail_after = fail_after
        self.calls = []
        self.running = False

    def start(
        self,
        route,
        full_level,
        empty_level,
        speed,
        checkpoint,
        on_complete,
        continue_after_preposition=None,
    ):
        self.calls.append((route, full_level, empty_level, speed))
        self.running = True
        if continue_after_preposition is not None:
            if not continue_after_preposition.wait(1.0):
                self.running = False
                on_complete(False, "preposition was not released")
                return
        for point in (11, 18, 25):
            if self.fail_after is not None and point > self.fail_after:
                break
            checkpoint(point, {"name": f"point {point}"})
        self.running = False
        if self.fail_after is None:
            on_complete(True, None)
        else:
            on_complete(False, "route fault")

    def stop(self, emergency=False):
        self.running = False


class SlowReturnRouteExecutor:
    def __init__(self):
        self.running = False
        self.return_home_finished = threading.Event()
        self.thread = None

    def start(
        self,
        route,
        full_level,
        empty_level,
        speed,
        checkpoint,
        on_complete,
        continue_after_preposition=None,
    ):
        self.running = True

        def run():
            if continue_after_preposition is not None:
                continue_after_preposition.wait(1.0)
            for point in (11, 18, 25, 26):
                checkpoint(point, {"name": f"point {point}"})
            time.sleep(0.35)
            checkpoint(29, {"name": "HOME"})
            self.return_home_finished.set()
            self.running = False
            on_complete(True, None)

        self.thread = threading.Thread(target=run, daemon=True)
        self.thread.start()

    def stop(self, emergency=False):
        self.running = False


class ContainerExchangeCoordinatorTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.state = SystemState()
        with self.state.lock:
            self.state.data["system"]["operational"] = True
            self.state.data["containers"]["presence"].update({
                "красное": True, "зелёное": True, "жёлтое": True,
            })
        self.inventory = ContainerInventoryStore(
            Path(self.tempdir.name) / "inventory.json"
        )
        self.hardware = FakeHardware(self.state, [False, True])
        self.dispenser = FakeDispenser()
        self.zone_gates = FakeZoneGates()
        self.route = FakeRouteExecutor()
        self.coordinator = None

    def tearDown(self):
        if self.coordinator:
            self.coordinator.close()
        self.tempdir.cleanup()

    def make_coordinator(self):
        self.coordinator = ContainerExchangeCoordinator(
            self.state,
            self.hardware,
            self.dispenser,
            self.zone_gates,
            self.route,
            self.inventory,
        )
        self.coordinator.sensor_confirm_seconds = 0.0
        return self.coordinator

    def wait_until_idle(self):
        deadline = time.monotonic() + 2.0
        while time.monotonic() < deadline:
            if self.coordinator.jobs.unfinished_tasks == 0:
                return
            time.sleep(0.01)
        self.fail("coordinator did not become idle")

    def test_success_uses_inventory_levels_and_resumes_sorting(self):
        self.inventory.initialize(2, {"red": 1, "green": 0, "yellow": 0})
        coordinator = self.make_coordinator()
        coordinator.request("красное")
        coordinator.release("красное")
        self.wait_until_idle()
        snapshot = self.inventory.snapshot()
        self.assertEqual(self.route.calls, [("red", 2, 2, 20)])
        self.assertEqual(snapshot["full_stacks"]["red"], 2)
        self.assertEqual(snapshot["empty_stack"], 1)
        self.assertIsNone(snapshot["active_job"])
        self.assertEqual(self.zone_gates.started, 1)
        self.assertEqual(self.dispenser.started, 1)
        self.assertTrue(self.hardware.conveyor_commands[-1])

    def test_last_empty_finishes_replacement_but_does_not_resume(self):
        self.inventory.initialize(1, {"red": 0, "green": 0, "yellow": 0})
        coordinator = self.make_coordinator()
        coordinator.request("красное")
        coordinator.release("красное")
        self.wait_until_idle()
        snapshot = self.inventory.snapshot()
        self.assertEqual(snapshot["empty_stack"], 0)
        self.assertEqual(snapshot["service_required"]["type"], "refill_empty")
        self.assertEqual(self.zone_gates.started, 0)
        self.assertEqual(self.dispenser.started, 0)

    def test_route_failure_preserves_committed_checkpoint_and_requires_reconcile(self):
        self.inventory.initialize(3, {"red": 0, "green": 0, "yellow": 0})
        self.route = FakeRouteExecutor(fail_after=11)
        coordinator = self.make_coordinator()
        coordinator.request("красное")
        coordinator.release("красное")
        self.wait_until_idle()
        snapshot = self.inventory.snapshot()
        self.assertEqual(snapshot["full_stacks"]["red"], 1)
        self.assertEqual(snapshot["empty_stack"], 3)
        self.assertIsNotNone(snapshot["active_job"])
        self.assertEqual(snapshot["service_required"]["type"], "reconcile")
        self.assertEqual(self.zone_gates.started, 0)

    def test_missing_initial_container_fails_before_route_or_inventory_change(self):
        self.inventory.initialize(3, {"red": 0, "green": 0, "yellow": 0})
        with self.state.lock:
            self.state.data["containers"]["presence"]["красное"] = False
        coordinator = self.make_coordinator()
        coordinator.request("красное")
        coordinator.release("красное")
        self.wait_until_idle()
        snapshot = self.inventory.snapshot()
        self.assertEqual(self.route.calls, [])
        self.assertIsNone(snapshot["active_job"])
        self.assertEqual(snapshot["empty_stack"], 3)

    def test_green_uses_second_full_level_and_sixth_empty_level(self):
        self.inventory.initialize(6, {"red": 0, "green": 1, "yellow": 1})
        coordinator = self.make_coordinator()
        coordinator.request("зелёное")
        coordinator.release("зелёное")
        self.wait_until_idle()
        self.assertEqual(self.route.calls, [("green", 2, 6, 20)])

    def test_route_waits_for_release_after_preposition(self):
        self.inventory.initialize(6, {"red": 0, "green": 1, "yellow": 1})
        coordinator = self.make_coordinator()
        coordinator.request("зелёное")
        time.sleep(0.05)
        self.assertEqual(self.inventory.snapshot()["full_stacks"]["green"], 1)
        self.assertTrue(coordinator.release("зелёное"))
        self.wait_until_idle()
        self.assertEqual(self.inventory.snapshot()["full_stacks"]["green"], 2)

    def test_manual_recovery_does_not_restart_stopped_sorting(self):
        self.inventory.initialize(6, {"red": 0, "green": 1, "yellow": 1})
        with self.state.lock:
            self.state.data["system"]["operational"] = False
        coordinator = self.make_coordinator()
        coordinator.request("зелёное")
        coordinator.release("зелёное")
        self.wait_until_idle()
        self.assertEqual(self.inventory.snapshot()["full_stacks"]["green"], 2)
        self.assertEqual(self.zone_gates.started, 0)
        self.assertEqual(self.dispenser.started, 0)
        self.assertFalse(self.state.snapshot()["system"]["operational"])

    def test_sorting_resumes_after_point_26_before_home_finishes(self):
        self.inventory.initialize(6, {"red": 0, "green": 1, "yellow": 1})
        with self.state.lock:
            self.state.data["containers"]["sorting"]["зелёное"] = 2
        self.route = SlowReturnRouteExecutor()
        coordinator = self.make_coordinator()
        coordinator.request("зелёное")
        coordinator.release("зелёное")
        deadline = time.monotonic() + 2.0
        while time.monotonic() < deadline and self.zone_gates.started == 0:
            time.sleep(0.01)
        self.assertEqual(self.zone_gates.started, 1)
        self.assertFalse(self.route.return_home_finished.is_set())
        self.assertTrue(self.state.snapshot()["system"]["operational"])
        self.assertEqual(
            self.state.snapshot()["containers"]["sorting"]["зелёное"],
            0,
        )
        self.wait_until_idle()


if __name__ == "__main__":
    unittest.main()
