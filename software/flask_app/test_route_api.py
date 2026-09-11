import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch


FLASK_AVAILABLE = True
try:
    os.environ.setdefault("BERETS_REAL_MANIPULATOR", "0")
    os.environ.setdefault("BERETS_REAL_CONTAINER_SENSORS", "0")
    os.environ.setdefault("BERETS_REAL_CONVEYOR", "0")
    os.environ.setdefault("BERETS_REAL_RAIL", "0")
    os.environ.setdefault("BERETS_REAL_CYCLE", "0")
    os.environ.setdefault("BERETS_REAL_DISPENSER", "0")
    os.environ.setdefault("BERETS_SECRET_KEY", "test-only-secret-key")
    os.environ.setdefault("BERETS_SYSTEM_PASSWORD", "test-only-system-password")
    os.environ.setdefault("BERETS_CSRF_ENABLED", "0")
    import app as app_module
    from route_store import RouteStore
except ImportError:
    FLASK_AVAILABLE = False


@unittest.skipUnless(FLASK_AVAILABLE, "Flask is not installed")
class RouteApiTests(unittest.TestCase):
    def setUp(self):
        self.tempdir = tempfile.TemporaryDirectory()
        self.original_store = app_module.route_store
        app_module.route_store = RouteStore(Path(self.tempdir.name) / "routes.json")
        self.client = app_module.app.test_client()
        with self.client.session_transaction() as session:
            session["authenticated"] = True
            session["user"] = {
                "username": "route-test",
                "display_name": "Route test",
                "role": "admin",
            }
        with app_module.state.lock:
            app_module.state.data["system"]["operational"] = False
            app_module.state.data["cycle"]["running"] = False
            app_module.state.data["dispenser"]["running"] = False
            app_module.state.data["zone_sorting"]["running"] = False
            app_module.state.data["conveyor"]["running"] = False
            app_module.state.data["manipulator"]["connected"] = False
            app_module.state.data["rail"]["connected"] = False
            app_module.state.data["rail"]["homed"] = False

    def tearDown(self):
        app_module.route_store = self.original_store
        self.tempdir.cleanup()

    @staticmethod
    def point():
        return {
            "id": "approach",
            "name": "Approach",
            "rail": 120,
            "joints": {"1": 500, "10": 600, "11": 400, "16": 500},
            "speed_percent": 80,
            "time_ms": 500,
        }

    def save_point(self):
        response = self.client.put(
            "/api/manipulator/routes/red", json={"points": [self.point()]}
        )
        self.assertEqual(response.status_code, 200)
        return response.get_json()["points"][0]

    def test_route_page_and_crud_api_are_available(self):
        page = self.client.get("/manipulator/routes")
        self.assertEqual(page.status_code, 200)
        self.assertIn(b"route-calibration-scope", page.data)
        self.assertIn(b"route-export-json", page.data)
        point = self.save_point()
        payload = self.client.get("/api/manipulator/routes").get_json()
        self.assertEqual(payload["data"]["routes"]["red"][0]["id"], point["id"])
        self.assertEqual(payload["limits"]["rail"], [0.0, 347.0])

    def test_route_export_downloads_importable_json(self):
        response = self.client.get("/api/manipulator/routes/export")
        self.assertEqual(response.status_code, 200)
        self.assertIn("attachment", response.headers["Content-Disposition"])
        payload = response.get_json()
        self.assertIn("routes", payload)
        self.assertIn("profiles", payload)

    def test_nonbaseline_level_can_replace_whole_route_in_service_calibration(self):
        response = self.client.put(
            "/api/manipulator/routes/red",
            json={"points": [self.point()], "full_level": 2, "empty_level": 6},
        )
        self.assertEqual(response.status_code, 200)

    def test_baseline_levels_can_replace_whole_route(self):
        response = self.client.put(
            "/api/manipulator/routes/red",
            json={"points": [self.point()], "full_level": 1, "empty_level": 6},
        )
        self.assertEqual(response.status_code, 200)

    def test_physical_move_requires_explicit_confirmation(self):
        point = self.save_point()
        response = self.client.post(
            f"/api/manipulator/routes/red/{point['id']}/move", json={}
        )
        self.assertEqual(response.status_code, 409)

    def test_training_move_is_capped_and_uses_hardware_gateway(self):
        point = self.save_point()
        with app_module.state.lock:
            app_module.state.data["manipulator"]["connected"] = True
            app_module.state.data["rail"]["connected"] = True
            app_module.state.data["rail"]["homed"] = True
        with patch.object(app_module.hardware, "set_joints") as set_joints, patch.object(
            app_module.hardware, "set_rail"
        ) as set_rail:
            response = self.client.post(
                f"/api/manipulator/routes/red/{point['id']}/move",
                json={
                    "confirm": "MOVE_ROUTE_POINT",
                    "move_arm": True,
                    "move_rail": True,
                },
            )
        self.assertEqual(response.status_code, 200)
        set_joints.assert_called_once_with(point["joints"], time_ms=1500)
        set_rail.assert_called_once_with(
            point["rail"], speed_percent=20, allow_max_endpoint=False
        )

    def test_empty_stack_training_point_allows_max_as_scoped_endpoint(self):
        point = self.point()
        point.update({"block": "empty_level", "rail": 343})
        response = self.client.put(
            "/api/manipulator/routes/red", json={"points": [point]}
        )
        saved = response.get_json()["points"][0]
        with app_module.state.lock:
            app_module.state.data["manipulator"]["connected"] = True
            app_module.state.data["rail"]["connected"] = True
            app_module.state.data["rail"]["homed"] = True
        with patch.object(app_module.hardware, "set_joints"), patch.object(
            app_module.hardware, "set_rail"
        ) as set_rail:
            response = self.client.post(
                f"/api/manipulator/routes/red/{saved['id']}/move",
                json={"confirm": "MOVE_ROUTE_POINT"},
            )
        self.assertEqual(response.status_code, 200)
        set_rail.assert_called_once_with(
            343.0, speed_percent=20, allow_max_endpoint=True
        )


if __name__ == "__main__":
    unittest.main()
