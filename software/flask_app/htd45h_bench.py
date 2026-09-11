#!/usr/bin/env python3
"""Изолированная стендовая подготовка Hiwonder HTD-45H для плеча BERETS.

Подключается только одна новая серва без качалки и нагрузки. Программа
использует только передачу UART 115200 и не требует подключения RX.
"""

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
FACTORY_ID = 1
SHOULDER_ID = 10
CENTER = 500

MOVE_TIME_WRITE = 1
ID_WRITE = 13
ANGLE_OFFSET_ADJUST = 17
ANGLE_OFFSET_WRITE = 18


def checksum(packet):
    return (~sum(packet[2 : packet[3] + 2])) & 0xFF


def build_packet(servo_id, command, *parameters):
    servo_id = int(servo_id)
    if not 0 <= servo_id <= 253:
        raise ValueError("ID должен быть от 0 до 253")
    packet = [
        0x55,
        0x55,
        servo_id,
        len(parameters) + 3,
        int(command),
        *(int(value) & 0xFF for value in parameters),
        0,
    ]
    packet[-1] = checksum(packet)
    return bytes(packet)


def move_packet(servo_id, position, time_ms):
    position = int(position)
    time_ms = int(time_ms)
    if not 0 <= position <= 1000:
        raise ValueError("Позиция должна быть от 0 до 1000")
    if not 100 <= time_ms <= 30000:
        raise ValueError("Время движения должно быть от 100 до 30000 мс")
    return build_packet(
        servo_id,
        MOVE_TIME_WRITE,
        position & 0xFF,
        (position >> 8) & 0xFF,
        time_ms & 0xFF,
        (time_ms >> 8) & 0xFF,
    )


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


def send(serial_port, packet, settle=0.3):
    serial_port.write(packet)
    serial_port.flush()
    time.sleep(settle)


def move(serial_port, servo_id, position, time_ms=2500):
    send(serial_port, move_packet(servo_id, position, time_ms))
    time.sleep(time_ms / 1000.0)


def require_confirmation(expected):
    actual = input(f"Для продолжения введите {expected}: ").strip()
    if actual != expected:
        raise SystemExit("Операция отменена.")


def print_safety():
    print("HTD-45H — ИЗОЛИРОВАННАЯ СТЕНДОВАЯ ПРОВЕРКА")
    print("- подключена только одна новая серва;")
    print("- качалка, кронштейн и нагрузка сняты;")
    print("- корпус закреплён, вал может свободно поворачиваться;")
    print("- Flask и другие программы UART остановлены;")
    print("- питание 11.1 В, начальный предел тока 1.0 А;")
    print("- при треске, рывках, нагреве или ограничении тока сразу выключить БП.")
    print()


def command_center(args):
    print_safety()
    require_confirmation(f"CENTER{args.id}")
    with open_uart(args.port) as serial_port:
        print(f"ID{args.id} -> 500 за 3000 мс")
        move(serial_port, args.id, CENTER, 3000)
    print("Готово. Вал должен остановиться и удерживать положение 500.")


def command_wiggle(args):
    print_safety()
    require_confirmation(f"WIGGLE{args.id}")
    positions = (CENTER, CENTER + 20, CENTER - 20, CENTER)
    with open_uart(args.port) as serial_port:
        for position in positions:
            print(f"ID{args.id} -> {position} за 1800 мс")
            move(serial_port, args.id, position, 1800)
    print("Готово. Выполнены только малые движения 480–520.")


def command_prepare(args):
    print_safety()
    if args.current_id == SHOULDER_ID:
        raise SystemExit("Серва уже имеет ID10; повторная запись не требуется.")
    require_confirmation(f"PREPARE{args.current_id}TO10")
    with open_uart(args.port) as serial_port:
        send(
            serial_port,
            build_packet(args.current_id, ANGLE_OFFSET_ADJUST, 0),
        )
        send(serial_port, build_packet(args.current_id, ANGLE_OFFSET_WRITE))
        print(f"ID{args.current_id}: deviation=0 записан в память.")

        print(f"ID{args.current_id} -> 500 за 3000 мс")
        move(serial_port, args.current_id, CENTER, 3000)

        require_confirmation("CHANGE10")
        send(
            serial_port,
            build_packet(args.current_id, ID_WRITE, SHOULDER_ID),
        )
    print(f"Команда изменения ID{args.current_id} -> ID10 отправлена.")
    print("Выключите питание сервы минимум на 5 секунд.")
    print("После включения выполните: python3 htd45h_bench.py wiggle --id 10")


def build_parser():
    parser = argparse.ArgumentParser(
        description="Безопасная стендовая подготовка Hiwonder HTD-45H"
    )
    parser.add_argument("--port", default=PORT)
    subparsers = parser.add_subparsers(dest="command", required=True)

    center = subparsers.add_parser("center", help="медленно перейти в 500")
    center.add_argument("--id", type=int, default=FACTORY_ID)
    center.set_defaults(handler=command_center)

    wiggle = subparsers.add_parser(
        "wiggle", help="малое движение 500 -> 520 -> 480 -> 500"
    )
    wiggle.add_argument("--id", type=int, default=FACTORY_ID)
    wiggle.set_defaults(handler=command_wiggle)

    prepare = subparsers.add_parser(
        "prepare-shoulder",
        help="deviation=0, центр 500 и смена текущего ID на 10",
    )
    prepare.add_argument("--current-id", type=int, default=FACTORY_ID)
    prepare.set_defaults(handler=command_prepare)
    return parser


def main():
    args = build_parser().parse_args()
    if not 0 <= getattr(args, "id", getattr(args, "current_id", 0)) <= 253:
        raise SystemExit("ID должен быть от 0 до 253")
    try:
        args.handler(args)
    except serial.SerialException as error:
        raise SystemExit(
            f"Ошибка UART {args.port}: {error}. Убедитесь, что Flask остановлен."
        ) from error
    except RuntimeError as error:
        raise SystemExit(str(error)) from error


if __name__ == "__main__":
    main()
