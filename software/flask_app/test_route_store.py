import tempfile
import unittest
from copy import deepcopy
from pathlib import Path

from route_store import RouteStore


class RouteStoreTests(unittest.TestCase):
    def point(self, **updates):
        value = {
            "name": "Подход",
            "rail": 120,
            "joints": {"1": 500, "10": 500, "11": 500, "16": 500},
            "speed_percent": 20,
            "time_ms": 1500,
        }
        value.update(updates)
        return value

    def test_route_is_persisted_and_reloaded(self):
        with tempfile.TemporaryDirectory() as folder:
            path = Path(folder) / "routes.json"
            store = RouteStore(path)
            saved = store.replace_route("red", [self.point()])
            self.assertTrue(saved[0]["id"])
            restored = RouteStore(path).snapshot()["routes"]["red"]
            self.assertEqual(restored, saved)

    def test_new_store_contains_three_twelve_point_draft_routes(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            routes = store.snapshot()["routes"]
            self.assertEqual(len(routes["red"]), 12)
            self.assertEqual(len(routes["green"]), 12)
            self.assertEqual(len(routes["yellow"]), 12)
            self.assertEqual(routes["red"][0]["rail"], 334)
            self.assertEqual(routes["green"][0]["rail"], 180)
            self.assertEqual(routes["yellow"][0]["rail"], 26)
            self.assertEqual(routes["red"][-1]["joints"]["11"], 375)

    def test_joint_limits_are_enforced(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            invalid = self.point(
                joints={"1": 500, "10": 99, "11": 500, "16": 500}
            )
            with self.assertRaisesRegex(ValueError, "ID10"):
                store.replace_route("red", [invalid])

    def test_point_can_be_selected_by_server_identifier(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            saved = store.replace_route("service", [self.point(name="HOME")])
            self.assertEqual(store.point("service", saved[0]["id"])["name"], "HOME")

    def test_level_profile_changes_only_selected_level(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = store.snapshot()["routes"]["red"]
            points[4]["group"] = "full"
            store.replace_route("red", points)
            base = store.snapshot()["routes"]["red"][4]
            override = dict(base)
            override["rail"] = 123
            store.replace_profile_point("red", "full", 3, override)
            self.assertEqual(store.resolved_route("red", full_level=3)[4]["rail"], 123)
            self.assertEqual(store.resolved_route("red", full_level=2)[4]["rail"], base["rail"])

    def test_empty_profiles_allow_six_levels(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = store.snapshot()["routes"]["green"]
            points[7]["group"] = "empty"
            store.replace_route("green", points)
            override = dict(store.snapshot()["routes"]["green"][7])
            override["joints"] = dict(override["joints"], **{"10": 777})
            store.replace_profile_point("green", "empty", 6, override)
            self.assertEqual(store.resolved_route("green", empty_level=6)[7]["joints"]["10"], 777)
            with self.assertRaisesRegex(ValueError, "от 1 до 6"):
                store.replace_profile_point("green", "empty", 7, override)

    def test_inserting_point_keeps_explicit_block_and_action_with_original_point(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = [
                self.point(
                    name=f"Point {index + 1}",
                    block="pickup_common" if index < 8 else "delivery_color",
                    action="take_full" if index == 5 else "none",
                )
                for index in range(29)
            ]
            saved = store.replace_route("red", points)
            action_id = saved[5]["id"]
            inserted = dict(saved[0])
            inserted.pop("id")
            inserted["name"] = "Inserted copy"
            saved.insert(0, inserted)

            updated = store.replace_route("red", saved)
            original_action = next(point for point in updated if point["id"] == action_id)
            self.assertEqual(original_action["action"], "take_full")
            self.assertEqual(original_action["block"], "pickup_common")
            self.assertEqual(updated[8]["block"], "pickup_common")

    def test_container_actions_follow_confirmed_route_point_numbers(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = [
                self.point(
                    name=f"Point {index + 1}",
                    action="take_full" if index == 5 else "none",
                )
                for index in range(29)
            ]
            saved = store.replace_route("red", points)
            actions = {index + 1: point["action"] for index, point in enumerate(saved) if point["action"] != "none"}
            self.assertEqual(
                actions,
                {4: "take_full", 11: "place_full", 18: "take_empty", 25: "place_empty"},
            )

    def test_delivery_color_change_stays_independent_between_colors(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = [
                self.point(
                    name=f"Point {index + 1}",
                    rail=316,
                    block="delivery_color",
                    shared_key=f"cycle-{index + 1:02d}",
                )
                for index in range(29)
            ]
            store.replace_route("red", points)
            before = store.snapshot()
            red_rail = before["routes"]["red"][3]["rail"]
            green_rail = before["routes"]["green"][3]["rail"]
            yellow_rail = before["routes"]["yellow"][3]["rail"]

            green = before["routes"]["green"]
            green[3]["joints"]["10"] = 777
            green[3]["time_ms"] = 2345
            store.replace_route("green", green)
            after = store.snapshot()["routes"]

            self.assertEqual(after["green"][3]["joints"]["10"], 777)
            self.assertEqual(after["green"][3]["time_ms"], 2345)
            for color in ("red", "yellow"):
                self.assertNotEqual(after[color][3]["joints"]["10"], 777)
                self.assertNotEqual(after[color][3]["time_ms"], 2345)
            self.assertEqual(after["red"][3]["rail"], red_rail)
            self.assertEqual(after["green"][3]["rail"], green_rail)
            self.assertEqual(after["yellow"][3]["rail"], yellow_rail)

    def test_full_height_profile_change_stays_independent_between_colors(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            points = [
                self.point(
                    name=f"Point {index + 1}",
                    rail=316,
                    group="full" if 8 <= index < 15 else None,
                    block="full_level" if 8 <= index < 15 else "pickup_common",
                    shared_key=f"cycle-{index + 1:02d}",
                )
                for index in range(29)
            ]
            store.replace_route("red", points)
            snapshot = store.snapshot()
            source = dict(snapshot["routes"]["red"][9])
            source["joints"] = dict(source["joints"], **{"11": 812})
            source["rail"] = 330
            store.replace_profile_point("red", "full", 2, source)

            red = store.resolved_route("red", full_level=2)[9]
            green = store.resolved_route("green", full_level=2)[9]
            yellow = store.resolved_route("yellow", full_level=2)[9]
            self.assertEqual(red["joints"]["11"], 812)
            self.assertNotEqual(green["joints"]["11"], 812)
            self.assertNotEqual(yellow["joints"]["11"], 812)
            self.assertEqual(red["rail"], 330)
            self.assertNotEqual(green["rail"], 330)
            self.assertNotEqual(yellow["rail"], 330)

    def test_empty_height_profile_change_is_shared_between_colors(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            with store.lock:
                for color, rail in (("red", 343), ("green", 342), ("yellow", 341)):
                    point = store.data["routes"][color][7]
                    point["group"] = "empty"
                    point["block"] = "empty_level"
                    point["shared_key"] = "shared-empty-pickup"
                    point["rail"] = rail
            source = deepcopy(store.snapshot()["routes"]["red"][7])
            source["joints"]["11"] = 812
            source["time_ms"] = 1500
            store.replace_profile_point("red", "empty", 6, source)

            for color, rail in (("red", 343), ("green", 342), ("yellow", 341)):
                resolved = store.resolved_route(color, empty_level=6)[7]
                self.assertEqual(resolved["joints"]["11"], 812)
                self.assertEqual(resolved["time_ms"], 1500)
                self.assertEqual(resolved["rail"], rail)

    def test_empty_pickup_insert_delete_and_reorder_are_shared_by_stable_key(self):
        with tempfile.TemporaryDirectory() as folder:
            store = RouteStore(Path(folder) / "routes.json")
            layout = (
                ["pickup_common"] * 8
                + ["full_level"] * 7
                + ["transition_common"]
                + ["empty_level"] * 4
                + ["return_to_station"]
                + ["delivery_color"] * 7
                + ["home"]
            )
            with store.lock:
                for color in ("red", "green", "yellow"):
                    route = []
                    for index, block in enumerate(layout):
                        point = self.point(
                            id=f"{color}-{index + 1}",
                            name=f"{color} Point {index + 1}",
                            rail=316,
                            block=block,
                            shared_key=f"cycle-{index + 1:02d}",
                        )
                        if block == "empty_level":
                            point["group"] = "empty"
                        route.append(point)
                    store.data["routes"][color] = store.validate_route(route)
            green = store.snapshot()["routes"]["green"]
            inserted = deepcopy(green[17])
            inserted.pop("id")
            inserted["name"] = "Inserted"
            green.insert(18, inserted)
            green.pop(20)
            green[16], green[17] = green[17], green[16]
            store.replace_route("green", green)

            routes = store.snapshot()["routes"]
            expected_keys = [
                point["shared_key"]
                for point in routes["green"]
                if point["block"] == "empty_level"
            ]
            self.assertEqual(len(expected_keys), 4)
            self.assertEqual(len(set(expected_keys)), 4)
            for color in ("red", "yellow"):
                self.assertEqual(
                    [
                        point["shared_key"]
                        for point in routes[color]
                        if point["block"] == "empty_level"
                    ],
                    expected_keys,
                )
                self.assertTrue(any(point["name"] == "Inserted" for point in routes[color]))
                self.assertTrue(routes[color][21]["name"].startswith(color))


if __name__ == "__main__":
    unittest.main()
