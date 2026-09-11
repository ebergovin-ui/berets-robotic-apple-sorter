import json
import tempfile
import unittest
from pathlib import Path

from yolo_bridge import IgnoreZoneFilter, normalize_label, point_in_polygon


RED = "\u043a\u0440\u0430\u0441\u043d\u043e\u0435"
GREEN = "\u0437\u0435\u043b\u0451\u043d\u043e\u0435"
YELLOW = "\u0436\u0451\u043b\u0442\u043e\u0435"


class YoloLabelMappingTests(unittest.TestCase):
    def test_red_green_can_be_swapped_for_trained_model(self):
        self.assertEqual(normalize_label("red", True), GREEN)
        self.assertEqual(normalize_label("green", True), RED)
        self.assertEqual(normalize_label("yellow", True), YELLOW)

    def test_default_mapping_is_unchanged(self):
        self.assertEqual(normalize_label("red", False), RED)
        self.assertEqual(normalize_label("green", False), GREEN)


class IgnoreZoneFilterTests(unittest.TestCase):
    def test_polygon_boundary_and_inside_are_ignored(self):
        polygon = [[0.1, 0.1], [0.4, 0.1], [0.4, 0.4], [0.1, 0.4]]
        self.assertTrue(point_in_polygon((0.2, 0.2), polygon))
        self.assertTrue(point_in_polygon((0.1, 0.2), polygon))
        self.assertFalse(point_in_polygon((0.8, 0.8), polygon))

    def test_saved_ignore_zones_are_reloaded_without_restart(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "vision_zones.json"
            path.write_text(
                json.dumps({"ignore_zones": []}),
                encoding="utf-8",
            )
            zone_filter = IgnoreZoneFilter(path)
            self.assertFalse(zone_filter.contains((0.2, 0.2)))
            path.write_text(
                json.dumps(
                    {
                        "ignore_zones": [
                            [[0.1, 0.1], [0.4, 0.1], [0.4, 0.4], [0.1, 0.4]]
                        ]
                    }
                ),
                encoding="utf-8",
            )
            zone_filter.refresh(force=True)
            self.assertTrue(zone_filter.contains((0.2, 0.2)))


if __name__ == "__main__":
    unittest.main()
