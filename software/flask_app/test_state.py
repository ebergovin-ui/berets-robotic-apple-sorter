import time
import unittest
from unittest.mock import patch

from state import SystemState


class VisionHeartbeatTests(unittest.TestCase):
    def test_stale_heartbeat_marks_camera_disconnected(self):
        state = SystemState()
        with state.lock:
            state.data["vision"]["connected"] = True
            state.data["vision"]["last_heartbeat"] = time.monotonic() - 10
        snapshot = state.snapshot()
        self.assertFalse(snapshot["vision"]["connected"])
        self.assertEqual(snapshot["vision"]["fps"], 0.0)

    def test_recent_heartbeat_keeps_camera_connected(self):
        state = SystemState()
        with state.lock:
            state.data["vision"]["connected"] = True
            state.data["vision"]["last_heartbeat"] = time.monotonic()
        snapshot = state.snapshot()
        self.assertTrue(snapshot["vision"]["connected"])


class ContainerNotificationTests(unittest.TestCase):
    def test_reconcile_service_does_not_create_blocking_notification(self):
        state = SystemState()
        with state.lock:
            state.data["containers"]["sorting_containers_ready"] = True
            state.data["containers"]["service_required"] = {
                "type": "reconcile",
                "color": None,
                "message": "Замена прервана: сверьте фактические стопки",
            }
        messages = [
            item["message"]
            for item in state.snapshot()["system"]["notifications"]
        ]
        self.assertNotIn(
            "Замена прервана: сверьте фактические стопки",
            messages,
        )

    def test_missing_sorting_containers_are_named(self):
        state = SystemState()
        with state.lock:
            state.data["containers"]["sensors_connected"] = True
            state.data["containers"]["presence"] = {
                "красное": True,
                "зелёное": False,
                "жёлтое": False,
            }
            state.data["containers"]["sorting_containers_ready"] = False
        messages = [
            item["message"]
            for item in state.snapshot()["system"]["notifications"]
        ]
        self.assertIn("Отсутствуют контейнеры: зелёный, жёлтый", messages)

    def test_stack_service_suppresses_duplicate_and_stale_container_full_notices(self):
        state = SystemState()
        with state.lock:
            containers = state.data["containers"]
            containers["sorting_containers_ready"] = True
            containers["full_stacks"]["жёлтое"] = 4
            containers["sorting"]["зелёное"] = 2
            containers["sorting"]["жёлтое"] = 2
            containers["service_required"] = {
                "type": "clear_full",
                "color": "yellow",
                "message": "Заберите контейнеры из стопки полных: жёлтых",
            }
        messages = [
            item["message"]
            for item in state.snapshot()["system"]["notifications"]
        ]
        self.assertEqual(
            messages.count("Заберите контейнеры из стопки полных: жёлтых"),
            1,
        )
        self.assertFalse(any("замените его" in message for message in messages))
