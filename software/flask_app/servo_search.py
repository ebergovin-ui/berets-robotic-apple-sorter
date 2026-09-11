#!/usr/bin/env python3
"""Визуальный поиск ID одной UART-сервы перебором адресов 0...253."""

import argparse
import os
import sys
import time
from pathlib import Path


APP_DIR = Path(__file__).resolve().parent
VENV_PYTHON = APP_DIR / ".venv" / "bin" / "python"
if (
    VENV_PYTHON.exists()
    and Path(os.path.realpath(sys.executable))
    != Path(os.path.realpath(VENV_PYTHON))
):
    os.execv(
        str(VENV_PYTHON),
        [str(VENV_PYTHON), str(Path(__file__).resolve()), *sys.argv[1:]],
    )

import serial


PORT = os.environ.get("BERETS_SERVO_PORT", "/dev/ttyAMA0")
BAUDRATE = 115200
CENTER = 500
MOVE_TIME_MS = 800


def checksum(packet):
    return (~sum(packet[2 : packet[3] + 2])) & 0xFF


def move_packet(servo_id, position, time_ms=MOVE_TIME_MS):
    servo_id = int(servo_id)
    position = int(position)
    time_ms = int(time_ms)
    if not 0 <= servo_id <= 253:
        raise ValueError("ID должен быть от 0 до 253")
    if not 0 <= position <= 1000:
        raise ValueError("Позиция должна быть от 0 до 1000")
    packet = [
        0x55,
        0x55,
        servo_id,
        7,
        1,
        position & 0xFF,
        (position >> 8) & 0xFF,
        time_ms & 0xFF,
        (time_ms >> 8) & 0xFF,
        0,
    ]
    packet[-1] = checksum(packet)
    return bytes(packet)


def send_move(serial_port, servo_id, position):
    serial_port.write(move_packet(servo_id, position))
    serial_port.flush()


def open_uart(port):
    try:
        return serial.Serial(
            port,
            BAUDRATE,
            timeout=0.5,
            write_timeout=0.5,
            exclusive=True,
        )
    except TypeError as error:
        raise RuntimeError(
            "Версия pyserial не поддерживает exclusive; нельзя гарантировать "
            "единственного владельца UART"
        ) from error


def build_parser():
    parser = argparse.ArgumentParser(
        description="Визуальный поиск ID UART-сервы перебором 0...253"
    )
    parser.add_argument("--port", default=PORT)
    parser.add_argument("--start-id", type=int, default=0)
    parser.add_argument("--end-id", type=int, default=253)
    parser.add_argument(
        "--step",
        type=int,
        default=30,
        help="амплитуда малого движения около 500 (1...100)",
    )
    return parser


def main():
    parser = build_parser()
    args = parser.parse_args()
    if not 0 <= args.start_id <= args.end_id <= 253:
        parser.error("диапазон должен удовлетворять 0 <= start-id <= end-id <= 253")
    if not 1 <= args.step <= 100:
        parser.error("--step должен быть от 1 до 100")

    print("ПОИСК ID UART-СЕРВЫ")
    print(f"Будут проверены ID {args.start_id}...{args.end_id} по порядку.")
    print(f"Каждый ID получает команды 500 -> {CENTER + args.step} -> 500.")
    print("Как только серва двинется, запомните ID на экране и нажмите Ctrl+C.")
    print("ВАЖНО: подключите только одну серву без качалки и нагрузки.")
    print("Flask, servo_test.py и другие владельцы UART должны быть остановлены.")
    print("Первый переход к 500 может быть большим, если серва стояла далеко от центра.\n")
    if input("Для начала введите SEARCH: ").strip() != "SEARCH":
        raise SystemExit("Сканирование отменено.")

    current_id = None
    try:
        with open_uart(args.port) as serial_port:
            for servo_id in range(args.start_id, args.end_id + 1):
                current_id = servo_id
                print(
                    f">>> ID {servo_id}: 500 -> {CENTER + args.step} -> 500",
                    flush=True,
                )
                send_move(serial_port, servo_id, CENTER)
                time.sleep(0.25)
                send_move(serial_port, servo_id, CENTER + args.step)
                time.sleep(1.0)
                send_move(serial_port, servo_id, CENTER)
                time.sleep(1.2)
    except KeyboardInterrupt:
        print()
        if current_id is not None:
            print(f"Остановлено во время проверки ID {current_id}.")
            print(
                "Для подтверждения повторите только его: "
                f"python3 servo_search.py --start-id {current_id} "
                f"--end-id {current_id}"
            )
        return
    except (serial.SerialException, RuntimeError) as error:
        raise SystemExit(f"Ошибка UART {args.port}: {error}") from error

    print(f"Проверены все ID {args.start_id}...{args.end_id}.")
    print("Если движения не было, проверьте питание, общий GND и сигнальную линию.")


if __name__ == "__main__":
    main()
