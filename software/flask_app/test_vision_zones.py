import json
from pathlib import Path
import tempfile
import unittest

from vision_zones import VisionZoneStore, empty_config, is_complete, validate_config


class VisionZoneTests(unittest.TestCase):
    def test_six_valid_polygons_are_complete_and_persisted(self):
        config = empty_config()
        triangle = [[0.1, 0.1], [0.2, 0.1], [0.15, 0.2]]
        for color in ("red", "green", "yellow"):
            for phase in ("open", "close"):
                config["zones"][color][phase] = triangle

        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "vision_zones.json"
            store = VisionZoneStore(path)
            saved = store.save(config)
            self.assertTrue(saved["complete"])
            loaded = json.loads(path.read_text(encoding="utf-8"))
            self.assertEqual(loaded["origin"], "bottom-left")

    def test_partial_draft_is_allowed_but_not_complete(self):
        config = empty_config()
        config["zones"]["red"]["open"] = [
            [0.1, 0.1],
            [0.2, 0.1],
            [0.15, 0.2],
        ]
        clean = validate_config(config)
        self.assertFalse(is_complete(clean))

    def test_polygon_with_two_points_is_rejected(self):
        config = empty_config()
        config["zones"]["red"]["open"] = [[0.1, 0.1], [0.2, 0.2]]
        with self.assertRaisesRegex(ValueError, "минимум 3"):
            validate_config(config)

    def test_out_of_frame_coordinate_is_rejected(self):
        config = empty_config()
        config["zones"]["yellow"]["close"] = [
            [0.1, 0.1],
            [1.1, 0.2],
            [0.3, 0.3],
        ]
        with self.assertRaisesRegex(ValueError, "от 0 до 1"):
            validate_config(config)

    def test_old_config_is_migrated_with_empty_ignore_zones(self):
        config = empty_config()
        config.pop("ignore_zones")
        config["version"] = 1
        clean = validate_config(config)
        self.assertEqual(clean["version"], 2)
        self.assertEqual(clean["ignore_zones"], [[], [], [], [], [], []])

    def test_multiple_ignore_polygons_are_validated(self):
        config = empty_config()
        config["ignore_zones"][0] = [
            [0.1, 0.1],
            [0.2, 0.1],
            [0.2, 0.2],
        ]
        config["ignore_zones"][1] = [
            [0.7, 0.7],
            [0.8, 0.7],
            [0.8, 0.8],
        ]
        clean = validate_config(config)
        self.assertEqual(len(clean["ignore_zones"][0]), 3)
        self.assertEqual(len(clean["ignore_zones"][1]), 3)


if __name__ == "__main__":
    unittest.main()
