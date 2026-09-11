#!/usr/bin/env python3
"""Безопасный поиск ID сервопривода LX-224/LX-16A.

Программа не умеет автоматически отличить ответившую серву от отсутствующей:
она отправляет короткое движение на каждый адрес, а оператор смотрит, какой
механизм реально повернулся. Подключайте для поиска только одну неизвестную
серву. Известные ID манипулятора по умолчанию пропускаются.
"""

import argparse
import time

import serial


def checksum(packet):
    return (~sum(packet[2:packet[3] + 2])) & 0xFF


def move_servo(ser, servo_id, position, time_ms=350):
    position = max(0, min(1000, int(position)))
    time_ms = max(0, min(30000, int(time_ms)))
    packet = [
        0x55, 0x55, int(servo_id), 7, 1,
        position & 0xFF, (position >> 8) & 0xFF,
        time_ms & 0xFF, (time_ms >> 8) & 0xFF, 0,
    ]
    packet[9] = checksum(packet)
    ser.write(bytearray(packet))
    ser.flush()


def parse_ids(raw):
    return {
        int(item.strip())
        for item in raw.split(",")
        if item.strip()
    }


def main():
    parser = argparse.ArgumentParser(
        description="Перебор ID сервоприводов LX-224/LX-16A с коротким движением"
    )
    parser.add_argument("--port", default="/dev/ttyAMA0")
    parser.add_argument("--min-id", type=int, default=1)
    parser.add_argument("--max-id", type=int, default=20)
    parser.add_argument(
        "--skip",
        default="1,10,11,16",
        help="ID, которые не нужно трогать (по умолчанию ID манипулятора)",
    )
    parser.add_argument(
        "--no-skip",
        action="store_true",
        help="проверять также известные ID; используйте только при отключённом манипуляторе",
    )
    parser.add_argument(
        "--step",
        type=int,
        default=35,
        help="амплитуда проверки в единицах положения (по умолчанию 35)",
    )
    args = parser.parse_args()

    if not 1 <= args.min_id <= args.max_id <= 253:
        parser.error("диапазон ID должен быть от 1 до 253")
    if not 1 <= args.step <= 150:
        parser.error("--step должен быть от 1 до 150")

    skipped = set() if args.no_skip else parse_ids(args.skip)
    candidates = [sid for sid in range(args.min_id, args.max_id + 1) if sid not in skipped]

    print(f"Порт: {args.port}")
    print(f"Проверяем ID: {args.min_id}..{args.max_id}")
    if skipped:
        print("Пропущены известные ID: " + ", ".join(map(str, sorted(skipped))))
    print("Подключите одну неизвестную серву без нагрузки.")
    print("Для остановки нажмите Ctrl+C. Если серва двинулась, запишите ID из строки.")
    print()

    try:
        with serial.Serial(args.port, 115200, timeout=0.5, write_timeout=0.5) as ser:
            for servo_id in candidates:
                print(f"Проверяю ID {servo_id}: 500 -> {500 + args.step} -> 500", flush=True)
                move_servo(ser, servo_id, 500, time_ms=300)
                time.sleep(0.15)
                move_servo(ser, servo_id, 500 + args.step, time_ms=350)
                time.sleep(0.45)
                move_servo(ser, servo_id, 500, time_ms=350)
                time.sleep(0.55)
    except KeyboardInterrupt:
        print("\nСканирование остановлено оператором.")
    except serial.SerialException as error:
        print(f"Ошибка UART: {error}")
        raise SystemExit(1)

    print("Готово. Если движение не замечено, повторите с другим диапазоном ID.")


if __name__ == "__main__":
    main()
