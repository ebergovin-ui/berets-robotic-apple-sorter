#!/usr/bin/env python3
"""Интерактивная смена ID одной UART-сервы Hiwonder/LewanSoul."""

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
ID_WRITE = 13


def checksum(packet):
    return (~sum(packet[2 : packet[3] + 2])) & 0xFF


def id_write_packet(current_id, new_id):
    current_id = int(current_id)
    new_id = int(new_id)
    if not 0 <= current_id <= 253 or not 0 <= new_id <= 253:
        raise ValueError("ID должен быть от 0 до 253")
    packet = [0x55, 0x55, current_id, 4, ID_WRITE, new_id, 0]
    packet[-1] = checksum(packet)
    return bytes(packet)


def read_id(prompt):
    while True:
        try:
            value = int(input(prompt).strip())
        except ValueError:
            print("Нужно ввести целое число от 0 до 253.")
            continue
        if 0 <= value <= 253:
            return value
        print("ID должен находиться в диапазоне от 0 до 253.")


def open_uart():
    try:
        return serial.Serial(
            PORT,
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


def main():
    print("СМЕНА ID UART-СЕРВЫ")
    print("- подключите только одну серву;")
    print("- снимите с неё механическую нагрузку;")
    print("- остановите Flask, servo_test.py и другие программы UART;")
    print("- не отключайте сигнальный провод или питание во время записи.\n")

    current_id = read_id("Введите текущий ID сервы: ")
    new_id = read_id("Введите новый ID сервы: ")
    if current_id == new_id:
        print("Текущий и новый ID совпадают — запись не требуется.")
        return

    expected = f"CHANGE {current_id} TO {new_id}"
    actual = input(f"Для записи введите: {expected}\n> ").strip()
    if actual != expected:
        raise SystemExit("Операция отменена, ID не изменён.")

    try:
        with open_uart() as serial_port:
            serial_port.write(id_write_packet(current_id, new_id))
            serial_port.flush()
            time.sleep(0.4)
    except (serial.SerialException, RuntimeError) as error:
        raise SystemExit(f"Ошибка UART {PORT}: {error}") from error

    print(f"Команда записи отправлена: ID {current_id} -> ID {new_id}.")
    print("Выключите питание сервы минимум на 5 секунд и включите снова.")
    print(
        "Для визуальной проверки выполните: "
        f"python3 servo_search.py --start-id {new_id} --end-id {new_id}"
    )


if __name__ == "__main__":
    main()
