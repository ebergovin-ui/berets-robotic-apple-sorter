import json
import tempfile
import unittest
from pathlib import Path

from container_inventory import ContainerInventoryStore


class ContainerInventoryStoreTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.path = Path(self.tempdir.name) / "inventory.json"
        self.store = ContainerInventoryStore(self.path)

    def tearDown(self):
        self.tempdir.cleanup()

    def test_initialize_is_validated_persisted_and_reloaded(self):
        snapshot = self.store.initialize(
            5, {"red": 1, "green": 2, "yellow": 3}
        )
        self.assertTrue(snapshot["initialized"])
        self.assertEqual(snapshot["empty_stack"], 5)
        self.assertEqual(
            ContainerInventoryStore(self.path).snapshot()["full_stacks"],
            {"red": 1, "green": 2, "yellow": 3},
        )
        with self.assertRaises(ValueError):
            self.store.initialize(0, {"red": 0, "green": 0, "yellow": 0})
        with self.assertRaises(ValueError):
            self.store.initialize(6, {"red": 5, "green": 0, "yellow": 0})

    def test_checkpoints_commit_physical_changes_only_once(self):
        self.store.initialize(3, {"red": 1, "green": 0, "yellow": 0})
        job = self.store.prepare_exchange("red")
        self.assertEqual((job["full_level"], job["empty_level"]), (2, 3))
        self.store.checkpoint(job["id"], 11)
        self.store.checkpoint(job["id"], 11)
        self.store.checkpoint(job["id"], 18)
        self.store.checkpoint(job["id"], 18)
        self.store.checkpoint(job["id"], 25)
        self.store.mark_sensor_absent(job["id"])
        result = self.store.finish_exchange(job["id"])
        self.assertEqual(result["full_stacks"]["red"], 2)
        self.assertEqual(result["empty_stack"], 2)
        self.assertIsNone(result["active_job"])
        self.assertIsNone(result["service_required"])

    def test_last_empty_and_fourth_full_require_operator_after_replacement(self):
        self.store.initialize(1, {"red": 3, "green": 0, "yellow": 0})
        job = self.store.prepare_exchange("red")
        for point in (11, 18, 25):
            self.store.checkpoint(job["id"], point)
        self.store.mark_sensor_absent(job["id"])
        result = self.store.finish_exchange(job["id"])
        self.assertEqual(result["empty_stack"], 0)
        self.assertEqual(result["full_stacks"]["red"], 4)
        self.assertEqual(result["service_required"]["type"], "refill_empty")
        result = self.store.replenish_empty(6)
        self.assertEqual(result["service_required"]["type"], "clear_full")
        self.assertEqual(result["service_required"]["color"], "red")
        result = self.store.clear_full("red")
        self.assertIsNone(result["service_required"])

    def test_interrupted_job_requires_reconciliation_after_reload(self):
        self.store.initialize(4, {"red": 0, "green": 0, "yellow": 0})
        job = self.store.prepare_exchange("green")
        self.store.checkpoint(job["id"], 11)
        self.store.fail_exchange(job["id"], "test fault")
        reloaded = ContainerInventoryStore(self.path).snapshot()
        self.assertIsNotNone(reloaded["active_job"])
        self.assertEqual(reloaded["full_stacks"]["green"], 1)
        self.assertEqual(reloaded["service_required"]["type"], "reconcile")

    def test_completed_physical_exchange_fault_migrates_to_full_stack_service(self):
        payload = self.store.empty_state()
        payload.update({
            "initialized": True,
            "empty_stack": 3,
            "full_stacks": {"red": 1, "green": 0, "yellow": 4},
            "active_job": {
                "id": "completed-yellow",
                "color": "yellow",
                "phase": "fault",
                "full_committed": True,
                "empty_committed": True,
                "replacement_placed": True,
                "sensor_seen_absent": True,
                "fault": "Сработал MIN/HOME на 0.35 мм",
            },
        })
        self.path.write_text(json.dumps(payload, ensure_ascii=False), encoding="utf-8")
        migrated = ContainerInventoryStore(self.path).snapshot()
        self.assertIsNone(migrated["active_job"])
        self.assertEqual(migrated["service_required"]["type"], "clear_full")
        self.assertEqual(migrated["service_required"]["color"], "yellow")
        self.assertIn("жёлтых", migrated["service_required"]["message"])

    def test_corrupted_file_fails_closed(self):
        self.path.write_text("{broken", encoding="utf-8")
        snapshot = ContainerInventoryStore(self.path).snapshot()
        self.assertFalse(snapshot["initialized"])
        self.assertEqual(snapshot["service_required"]["type"], "reconcile")

    def test_save_is_atomic_and_leaves_valid_json(self):
        self.store.initialize(6, {"red": 0, "green": 0, "yellow": 0})
        parsed = json.loads(self.path.read_text(encoding="utf-8"))
        self.assertEqual(parsed["empty_stack"], 6)

    def test_manual_empty_addition_respects_six_container_capacity(self):
        self.store.initialize(4, {"red": 0, "green": 0, "yellow": 0})
        result = self.store.add_empty(2)
        self.assertEqual(result["empty_stack"], 6)
        with self.assertRaisesRegex(ValueError, "0"):
            self.store.add_empty(1)

    def test_manual_full_removal_accepts_count_or_all(self):
        self.store.initialize(6, {"red": 4, "green": 3, "yellow": 1})
        result = self.store.remove_full("green", 2)
        self.assertEqual(result["full_stacks"]["green"], 1)
        result = self.store.remove_full("red", "all")
        self.assertEqual(result["full_stacks"]["red"], 0)
        with self.assertRaises(ValueError):
            self.store.remove_full("yellow", 2)
        self.assertEqual(list(self.path.parent.glob("inventory.json.*.tmp")), [])


if __name__ == "__main__":
    unittest.main()
