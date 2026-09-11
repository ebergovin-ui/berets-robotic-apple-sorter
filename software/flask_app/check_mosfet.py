#!/usr/bin/env python3
"""Безопасная проверка логического входа MOSFET конвейера.

Сначала отключите яблоки и уберите руки от механизма. Программа подаёт
сигнал на GPIO12 только на несколько секунд и в любом случае выключает его
при выходе.
"""

import time


PIN = 12


def main():
    try:
        from gpiozero import OutputDevice
    except ImportError as error:
        raise SystemExit("Установите gpiozero: sudo apt install python3-gpiozero") from error

    answer = input("Активный уровень MOSFET (1=HIGH, 0=LOW): ").strip()
    if answer not in {"0", "1"}:
        raise SystemExit("Введите только 0 или 1")
    active_high = answer == "1"
    device = OutputDevice(PIN, active_high=active_high, initial_value=False)
    try:
        print(f"GPIO12 выключен. active_high={active_high}")
        input("Убедитесь, что зона свободна, затем Enter для запуска на 2 с: ")
        device.on()
        print("GPIO12 включён на 2 секунды")
        time.sleep(2)
    except KeyboardInterrupt:
        print("\nПрервано оператором")
    finally:
        device.off()
        device.close()
        print("GPIO12 выключен")


if __name__ == "__main__":
    main()
