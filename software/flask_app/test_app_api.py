import os
import tempfile
import unittest
from unittest.mock import patch


FLASK_AVAILABLE = True
try:
    os.environ.setdefault("BERETS_REAL_MANIPULATOR", "0")
    os.environ.setdefault("BERETS_REAL_CONTAINER_SENSORS", "0")
    os.environ.setdefault("BERETS_REAL_CONVEYOR", "0")
    os.environ.setdefault("BERETS_REAL_RAIL", "0")
    os.environ.setdefault("BERETS_REAL_CYCLE", "0")
    os.environ.setdefault("BERETS_SECRET_KEY", "test-only-secret-key")
    os.environ.setdefault("BERETS_SYSTEM_PASSWORD", "test-only-system-password")
    os.environ.setdefault("BERETS_CSRF_ENABLED", "0")
    _users_file = tempfile.NamedTemporaryFile(delete=False)
    _users_file.close()
    os.environ["BERETS_USERS_FILE"] = _users_file.name
    from app import (
        app,
        container_exchange,
        container_inventory,
        hardware,
        runtime_settings,
        state,
        zone_gates,
    )
except ImportError:
    FLASK_AVAILABLE = False


@unittest.skipUnless(FLASK_AVAILABLE, "Flask не установлен в локальном окружении")
class VisionApiTests(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        with self.client.session_transaction() as session:
            session["authenticated"] = True
            session["user"] = {
                "username": "test",
                "display_name": "Тест",
                "role": "admin",
            }
        with state.lock:
            state.data["system"]["operational"] = False
            state.data["zone_sorting"]["running"] = False
            state.data["container_exchange"]["active"] = False
            state.data["vision"]["counts"] = {
                "красное": 0,
                "зелёное": 0,
                "жёлтое": 0,
            }
            state.data["vision"]["seen_event_ids"] = []

    def test_detection_is_accepted_once_but_not_counted_before_drop(self):
        payload = {
            "event_id": "test-track-1",
            "label": "red",
            "confidence": 0.94,
            "position": 0.40,
            "fps": 8,
        }
        first = self.client.post("/api/vision/detection", json=payload)
        second = self.client.post("/api/vision/detection", json=payload)
        self.assertEqual(first.status_code, 200)
        self.assertEqual(second.status_code, 200)
        self.assertTrue(first.get_json()["accepted"])
        self.assertFalse(first.get_json()["counted"])
        self.assertFalse(second.get_json()["accepted"])
        self.assertFalse(second.get_json()["counted"])
        with state.lock:
            self.assertEqual(state.data["vision"]["counts"]["красное"], 0)

    def test_unknown_class_is_rejected(self):
        response = self.client.post(
            "/api/vision/detection",
            json={
                "event_id": "test-unknown",
                "label": "blue",
                "confidence": 0.99,
                "position": 0.2,
                "fps": 8,
            },
        )
        self.assertEqual(response.status_code, 400)

    def test_detection_below_display_threshold_is_not_shown_or_counted(self):
        with state.lock:
            state.data["vision"]["last_detection"] = "waiting"
            state.data["vision"]["confidence"] = 0
        with patch.dict(
            os.environ,
            {"BERETS_VISION_DISPLAY_CONFIDENCE": "0.50"},
            clear=False,
        ):
            response = self.client.post(
                "/api/vision/detection",
                json={
                    "event_id": "low-false-red",
                    "label": "red",
                    "confidence": 0.40,
                    "position": 0.2,
                    "fps": 18,
                },
            )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.get_json()["filtered"])
        with state.lock:
            self.assertEqual(state.data["vision"]["last_detection"], "waiting")
            self.assertEqual(
                state.data["vision"]["counts"][
                    "\u043a\u0440\u0430\u0441\u043d\u043e\u0435"
                ],
                0,
            )

    def test_local_bridge_heartbeat_does_not_require_browser_session(self):
        bridge_client = app.test_client()
        response = bridge_client.post(
            "/api/vision/heartbeat",
            json={"fps": 7.5},
        )
        self.assertEqual(response.status_code, 200)

    def test_frame_upload_uses_token_without_browser_session(self):
        bridge_client = app.test_client()
        jpeg = b"\xff\xd8test-frame\xff\xd9"
        with patch.dict(
            os.environ,
            {"BERETS_VISION_TOKEN": "test-vision-token"},
            clear=False,
        ):
            rejected = bridge_client.post(
                "/api/vision/frame",
                data=jpeg,
                content_type="image/jpeg",
            )
            accepted = bridge_client.post(
                "/api/vision/frame",
                data=jpeg,
                content_type="image/jpeg",
                headers={"X-BERETS-VISION-TOKEN": "test-vision-token"},
            )
        self.assertEqual(rejected.status_code, 403)
        self.assertEqual(accepted.status_code, 204)

    def test_runtime_delay_is_applied_to_zone_controller(self):
        with patch.object(
            runtime_settings,
            "update",
            return_value={
                "version": 2,
                "full_container_stop_delay_seconds": 2.5,
                "rail_max_speed_steps_s": 3200,
            },
        ), patch.object(
            runtime_settings,
            "snapshot",
            return_value={
                "version": 2,
                "full_container_stop_delay_seconds": 2.5,
                "rail_max_speed_steps_s": 3200,
            },
        ), patch.object(
            hardware,
            "set_rail_max_speed_steps_s",
        ):
            response = self.client.post(
                "/api/settings/runtime",
                json={
                    "full_container_stop_delay_seconds": 2.5,
                    "rail_max_speed_steps_s": 3200,
                },
            )
        self.assertEqual(response.status_code, 200)
        self.assertEqual(zone_gates.full_stop_delay_seconds, 2.5)

    def test_confirmed_manual_exchange_selects_requested_color(self):
        with state.lock:
            state.data["system"]["operational"] = False
            state.data["zone_sorting"]["running"] = False
            state.data["container_exchange"]["active"] = False
        with patch("app.validate_container_exchange_hardware"), patch.object(container_exchange, "request") as request_exchange, patch.object(
            container_exchange, "release", return_value=True
        ) as release_exchange:
            response = self.client.post(
                "/api/containers/exchange/green",
                json={"confirm": "FULL_CONTAINER_PRESENT"},
            )
        self.assertEqual(response.status_code, 200)
        request_exchange.assert_called_once_with("зелёное")
        release_exchange.assert_called_once_with("зелёное")

    def test_manual_exchange_is_blocked_while_sorting_runs(self):
        with state.lock:
            state.data["system"]["operational"] = True
            state.data["zone_sorting"]["running"] = True
        response = self.client.post(
            "/api/containers/exchange/green",
            json={"confirm": "FULL_CONTAINER_PRESENT"},
        )
        self.assertEqual(response.status_code, 409)

    def test_required_empty_refill_resumes_sorting_automatically(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
            container_inventory.data.update({
                "initialized": True,
                "empty_stack": 0,
                "full_stacks": {"red": 0, "green": 0, "yellow": 0},
                "service_required": {
                    "type": "refill_empty",
                    "color": None,
                    "message": "refill",
                },
            })
        with patch("app.validate_inventory_for_start"), patch(
            "app.start_sorting_system"
        ) as start:
            response = self.client.post(
                "/api/containers/inventory/replenish-empty",
                json={"confirm": "EMPTY_STACK_REPLENISHED", "count": 4},
            )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.get_json()["resumed"])
        start.assert_called_once_with()

    def test_required_full_removal_resumes_after_partial_clear(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
            container_inventory.data.update({
                "initialized": True,
                "empty_stack": 5,
                "full_stacks": {"red": 4, "green": 0, "yellow": 0},
                "service_required": {
                    "type": "clear_full",
                    "color": "red",
                    "message": "clear",
                },
            })
        with patch("app.validate_inventory_for_start"), patch(
            "app.start_sorting_system"
        ) as start:
            response = self.client.post(
                "/api/containers/inventory/clear-full/red",
                json={"confirm": "FULL_STACK_CLEARED", "count": 2},
            )
        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.get_json()["resumed"])
        self.assertEqual(response.get_json()["inventory"]["full_stacks"]["red"], 2)
        start.assert_called_once_with()

    def test_sidebar_stock_adjustments_enforce_real_capacity(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
            container_inventory.data.update({
                "initialized": True,
                "empty_stack": 4,
                "full_stacks": {"red": 0, "green": 3, "yellow": 0},
            })
        too_many = self.client.post(
            "/api/containers/inventory/add-empty",
            json={"confirm": "EMPTY_STACK_ADDED", "amount": 3},
        )
        added = self.client.post(
            "/api/containers/inventory/add-empty",
            json={"confirm": "EMPTY_STACK_ADDED", "amount": 2},
        )
        removed = self.client.post(
            "/api/containers/inventory/remove-full/green",
            json={"confirm": "FULL_STACK_REMOVED", "amount": 2},
        )
        self.assertEqual(too_many.status_code, 409)
        self.assertEqual(added.status_code, 200)
        self.assertEqual(added.get_json()["inventory"]["empty_stack"], 6)
        self.assertEqual(removed.status_code, 200)
        self.assertEqual(removed.get_json()["inventory"]["full_stacks"]["green"], 1)

    def test_sidebar_contains_controls_for_all_stacks(self):
        response = self.client.get("/")
        page = response.get_data(as_text=True)
        self.assertIn('data-stock-action="add-empty"', page)
        for color in ("red", "green", "yellow"):
            self.assertIn(f'data-stock-color="{color}"', page)

    def test_inventory_confirmation_is_shown_once_after_entering_site(self):
        with self.client.session_transaction() as session:
            session["show_inventory_on_entry"] = True
        first = self.client.get("/").get_data(as_text=True)
        second = self.client.get("/").get_data(as_text=True)
        self.assertIn('data-inventory-on-entry="1"', first)
        self.assertIn('data-inventory-on-entry="0"', second)

    def test_full_stack_service_modal_accepts_count_or_all(self):
        page = self.client.get("/").get_data(as_text=True)
        self.assertIn('id="inventory-full-remove-count"', page)
        self.assertIn('id="inventory-service-all"', page)

    def test_home_start_dialog_is_available_for_automatic_start_resume(self):
        page = self.client.get("/").get_data(as_text=True)
        self.assertIn('id="home-start-modal"', page)
        self.assertIn('id="home-start-confirm"', page)
        self.assertIn("Выполнить HOME и запустить", page)

    def test_top_view_has_no_visible_text_and_uses_confirmed_geometry(self):
        template_path = os.path.join(
            os.path.dirname(__file__), "templates", "_cell_scheme.html"
        )
        with open(template_path, encoding="utf-8") as source:
            scheme = source.read()
        self.assertNotIn("<text", scheme)
        self.assertIn('x="438" y="494" width="64" height="20"', scheme)
        self.assertIn('cx="470" cy="504"', scheme)
        self.assertIn('id="cell-robot" transform="translate(736 0)"', scheme)

    def test_dashboard_uses_interactive_digital_twin(self):
        page = self.client.get("/").get_data(as_text=True)
        self.assertIn('id="dashboard-twin-frame"', page)
        self.assertIn("digital_twin/index.html", page)
        self.assertIn("surface=dashboard", page)
        self.assertNotIn("{% include '_cell_scheme.html' %}", page)

    def test_top_view_rail_mapping_uses_both_physical_supports(self):
        script_path = os.path.join(
            os.path.dirname(__file__), "static", "js", "app.js"
        )
        with open(script_path, encoding="utf-8") as source:
            script = source.read()
        self.assertIn(
            "const x = 736 - value * (352 / RAIL_TRAVEL_MM);",
            script,
        )

    def test_rail_move_forwards_selected_speed_percent(self):
        with patch.object(hardware, "set_rail") as move:
            response = self.client.post(
                "/api/command",
                json={"action": "rail", "target": 125, "speed": 37},
            )
        self.assertEqual(response.status_code, 200)
        move.assert_called_once_with(125.0, speed_percent=37)

    def test_viewer_cannot_start_or_move_but_can_send_stop(self):
        with self.client.session_transaction() as session:
            user = dict(session["user"])
            user["role"] = "viewer"
            session["user"] = user
        with patch.object(hardware, "set_rail") as move:
            rejected = self.client.post(
                "/api/command",
                json={"action": "rail", "target": 10, "speed": 10},
            )
        self.assertEqual(rejected.status_code, 403)
        move.assert_not_called()

        with patch("app.cycle.stop") as stop:
            accepted = self.client.post(
                "/api/command",
                json={"action": "cycle_stop"},
            )
        self.assertEqual(accepted.status_code, 200)
        stop.assert_called_once_with()

    def test_manual_joint_command_uses_confirmed_joint_limits(self):
        with patch.object(hardware, "set_joints") as move:
            move.side_effect = ValueError("Положение ID16 должно быть от 0 до 900")
            response = self.client.post(
                "/api/command",
                json={"action": "joint", "id": 16, "position": 901},
            )
        self.assertEqual(response.status_code, 400)
        self.assertIn("ID16", response.get_json()["error"])

    def test_manual_wrist_command_uses_offset_but_keeps_logical_ui_position(self):
        with patch.object(hardware, "set_joints") as move:
            response = self.client.post(
                "/api/command",
                json={"action": "joint", "id": 16, "position": 613},
            )
        self.assertEqual(response.status_code, 200)
        move.assert_called_once_with({"16": 570}, time_ms=None)
        self.assertEqual(response.get_json()["state"]["manipulator"]["joints"]["16"], 613)

    def test_manual_non_wrist_command_is_not_offset(self):
        with patch.object(hardware, "set_joints") as move:
            response = self.client.post(
                "/api/command",
                json={"action": "joint", "id": 10, "position": 366},
            )
        self.assertEqual(response.status_code, 200)
        move.assert_called_once_with({"10": 366}, time_ms=None)

    def test_live_manual_wrist_command_is_fast_and_not_repeated(self):
        with patch.object(hardware, "set_joints") as move:
            response = self.client.post(
                "/api/command",
                json={
                    "action": "joint",
                    "id": 16,
                    "position": 613,
                    "live": True,
                },
            )
        self.assertEqual(response.status_code, 200)
        move.assert_called_once_with({"16": 570}, time_ms=1600, repeats=1)

    def test_rail_api_accepts_347_mm_and_rejects_larger_target(self):
        with patch.object(hardware, "set_rail") as move:
            accepted = self.client.post(
                "/api/command",
                json={"action": "rail", "target": 347, "speed": 100},
            )
            rejected = self.client.post(
                "/api/command",
                json={"action": "rail", "target": 347.01, "speed": 100},
            )
        self.assertEqual(accepted.status_code, 200)
        self.assertEqual(rejected.status_code, 400)
        self.assertIn("0 до 347 мм", rejected.get_json()["error"])
        move.assert_called_once_with(347.0, speed_percent=100)

    def test_manipulator_page_has_precise_rail_mm_controls(self):
        response = self.client.get("/manipulator")
        self.assertEqual(response.status_code, 200)
        page = response.get_data(as_text=True)
        self.assertIn('id="rail-current-mm"', page)
        self.assertIn('id="rail-target-mm"', page)
        self.assertIn('id="rail-move"', page)
        self.assertIn('max="347"', page)

    def test_guide_describes_real_homing_and_power_loss_limits(self):
        response = self.client.get("/guide")
        self.assertEqual(response.status_code, 200)
        page = response.get_data(as_text=True)
        self.assertIn("после HOME", page)
        self.assertIn("не заменяет аппаратное снятие силового питания", page)

    def test_system_restart_resets_all_sorting_counters(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
            container_inventory.data.update({
                "initialized": True,
                "empty_stack": 6,
                "full_stacks": {"red": 1, "green": 2, "yellow": 3},
            })
        with state.lock:
            state.data["system"]["operational"] = True
            state.data["vision"]["counts"] = {
                "красное": 3,
                "зелёное": 2,
                "жёлтое": 1,
            }
            state.data["vision"]["seen_event_ids"] = ["old-track"]
            state.data["vision"]["last_detection"] = "красное яблоко"
            state.data["vision"]["confidence"] = 0.91
            state.data["containers"]["sorting"].update(
                {"красное": 2, "зелёное": 1, "жёлтое": 1}
            )
            state.data["containers"]["full_stacks"].update(
                {"красное": 1, "зелёное": 2, "жёлтое": 3}
            )
        with patch("app.validate_container_exchange_hardware"), patch("app.stop_sorting_system"), patch(
            "app.start_sorting_system"
        ):
            response = self.client.post(
                "/api/command", json={"action": "system_restart"}
            )

        self.assertEqual(response.status_code, 200)
        with state.lock:
            self.assertEqual(
                state.data["vision"]["counts"],
                {"красное": 0, "зелёное": 0, "жёлтое": 0},
            )
            self.assertEqual(state.data["vision"]["seen_event_ids"], [])
            self.assertEqual(state.data["vision"]["last_detection"], "ожидание")
            self.assertEqual(state.data["vision"]["confidence"], 0.0)
            for color in ("красное", "зелёное", "жёлтое"):
                self.assertEqual(state.data["containers"]["sorting"][color], 0)
            self.assertEqual(
                state.data["containers"]["full_stacks"],
                {"красное": 1, "зелёное": 2, "жёлтое": 3},
            )

    def test_system_start_requires_initialized_inventory(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
        with state.lock:
            state.data["system"]["operational"] = False
        with patch("app.start_sorting_system") as start:
            response = self.client.post(
                "/api/command", json={"action": "system_start"}
            )
        self.assertEqual(response.status_code, 409)
        self.assertIn("состав стопок", response.get_json()["error"])
        start.assert_not_called()

    def test_inventory_initialize_requires_confirmation_and_operator_role(self):
        payload = {
            "empty_stack": 6,
            "full_stacks": {"red": 0, "green": 0, "yellow": 0},
        }
        response = self.client.post(
            "/api/containers/inventory/initialize", json=payload
        )
        self.assertEqual(response.status_code, 409)
        with self.client.session_transaction() as session:
            user = dict(session["user"])
            user["role"] = "viewer"
            session["user"] = user
        payload["confirm"] = "INITIALIZE_SHIFT"
        response = self.client.post(
            "/api/containers/inventory/initialize", json=payload
        )
        self.assertEqual(response.status_code, 403)

    def test_system_restart_is_blocked_by_unreconciled_inventory(self):
        with container_inventory.lock:
            container_inventory.data = container_inventory.empty_state()
            container_inventory.data.update({
                "initialized": True,
                "empty_stack": 4,
                "service_required": {
                    "type": "reconcile",
                    "color": "red",
                    "message": "Требуется сверка",
                },
            })
        with patch("app.stop_sorting_system"), patch(
            "app.start_sorting_system"
        ) as start:
            response = self.client.post(
                "/api/command", json={"action": "system_restart"}
            )
        self.assertEqual(response.status_code, 409)
        self.assertIn("Требуется сверка", response.get_json()["error"])
        start.assert_not_called()

    def test_system_restart_stops_active_route_and_requires_reconciliation(self):
        with state.lock:
            state.data["container_exchange"]["active"] = True
        try:
            with patch("app.route_executor.stop") as stop_route, patch(
                "app.stop_sorting_system"
            ):
                response = self.client.post(
                    "/api/command", json={"action": "system_restart"}
                )
            self.assertEqual(response.status_code, 409)
            stop_route.assert_called_once_with(emergency=True)
        finally:
            with state.lock:
                state.data["container_exchange"]["active"] = False


if __name__ == "__main__":
    unittest.main()
