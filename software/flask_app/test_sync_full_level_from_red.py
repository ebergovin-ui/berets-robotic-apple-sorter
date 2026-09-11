import unittest

from sync_full_level_from_red import synchronize


def point(pid, rail, j1, group="full"):
    return {
        "id": pid,
        "name": pid,
        "rail": rail,
        "joints": {"1": j1, "10": 500, "11": 500, "16": 500},
        "speed_percent": 20,
        "time_ms": 1000,
        "group": group,
        "block": "full_level",
        "action": "none",
    }


class SyncFullLevelTest(unittest.TestCase):
    def test_copies_red_motion_but_keeps_target_rail(self):
        data = {
            "routes": {
                "red": [point("r1", 318, 111), point("r2", 326, 222)],
                "green": [point("g1", 171, 1), point("g2", 179, 2)],
                "yellow": [point("y1", 16, 3), point("y2", 24, 4)],
            },
            "profiles": {
                "red": {"full": {"2": {"r1": point("r1", 318, 700), "r2": point("r2", 326, 800)}}},
                "green": {"full": {"2": {"g1": point("g1", 170, 10), "g2": point("g2", 180, 20)}}},
                "yellow": {"full": {}},
            },
        }
        changed = synchronize(data, 2)
        green = data["profiles"]["green"]["full"]["2"]
        yellow = data["profiles"]["yellow"]["full"]["2"]
        self.assertEqual(green["g1"]["rail"], 170)
        self.assertEqual(green["g1"]["joints"]["1"], 700)
        self.assertEqual(yellow["y1"]["rail"], 16)
        self.assertEqual(yellow["y2"]["rail"], 24)
        self.assertEqual(yellow["y2"]["joints"]["1"], 800)
        self.assertEqual(changed["green"], [170.0, 180.0])


if __name__ == "__main__":
    unittest.main()
