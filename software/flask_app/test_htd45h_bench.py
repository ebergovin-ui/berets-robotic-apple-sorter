import unittest

from htd45h_bench import (
    ANGLE_OFFSET_ADJUST,
    ID_WRITE,
    MOVE_TIME_WRITE,
    build_packet,
    checksum,
    move_packet,
)


class Htd45hBenchTests(unittest.TestCase):
    def test_move_packet_matches_hiwonder_bus_format(self):
        packet = list(move_packet(1, 500, 3000))
        self.assertEqual(packet[:5], [0x55, 0x55, 1, 7, MOVE_TIME_WRITE])
        self.assertEqual(packet[5:9], [0xF4, 0x01, 0xB8, 0x0B])
        self.assertEqual(packet[-1], checksum(packet))

    def test_id_write_packet_uses_command_13(self):
        packet = list(build_packet(1, ID_WRITE, 10))
        self.assertEqual(packet[:6], [0x55, 0x55, 1, 4, 13, 10])
        self.assertEqual(packet[-1], checksum(packet))

    def test_zero_offset_packet_uses_command_17(self):
        packet = list(build_packet(1, ANGLE_OFFSET_ADJUST, 0))
        self.assertEqual(packet[:6], [0x55, 0x55, 1, 4, 17, 0])
        self.assertEqual(packet[-1], checksum(packet))

    def test_rejects_unsafe_values(self):
        with self.assertRaises(ValueError):
            move_packet(1, 1001, 1000)
        with self.assertRaises(ValueError):
            move_packet(1, 500, 50)
        with self.assertRaises(ValueError):
            build_packet(254, 1)


if __name__ == "__main__":
    unittest.main()
