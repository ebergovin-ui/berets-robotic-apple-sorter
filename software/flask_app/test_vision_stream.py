import unittest

from vision_stream import LatestFrameStore


class LatestFrameStoreTests(unittest.TestCase):
    def test_only_newest_frame_is_returned(self):
        store = LatestFrameStore()
        first_sequence = store.publish(b"first")
        second_sequence = store.publish(b"second")

        sequence, frame, updated_at = store.wait_after(first_sequence, timeout=0)

        self.assertEqual(sequence, second_sequence)
        self.assertEqual(frame, b"second")
        self.assertGreater(updated_at, 0)

    def test_timeout_without_frame_returns_none(self):
        store = LatestFrameStore()
        self.assertIsNone(store.wait_after(0, timeout=0))
