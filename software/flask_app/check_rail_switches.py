#!/usr/bin/env python3
"""Проверка двух NC-концевиков рельсы без запуска шагового двигателя."""

import time


PINS = {"MIN/HOME": 5, "MAX": 6}


def main():
    try:
        from gpiozero import DigitalInputDevice
    except ImportError as error:
        raise SystemExit("Установите gpiozero: sudo apt install python3-gpiozero") from error

    devices = {
        name: DigitalInputDevice(pin, pull_up=True, bounce_time=0.05)
        for name, pin in PINS.items()
    }
    print("Проверка NC-концевиков. Нажмите Ctrl+C для выхода.")
    print("Норма NC: отпущен = замкнут, сработал = разомкнут.")
    last = None
    try:
        while True:
            current = {
                name: ("СРАБОТАЛ" if not device.is_active else "замкнут")
                for name, device in devices.items()
            }
            if current != last:
                print(" | ".join(f"{name}: {value}" for name, value in current.items()))
                last = current
            time.sleep(0.1)
    except KeyboardInterrupt:
        print("\nПроверка завершена")
    finally:
        for device in devices.values():
            device.close()


if __name__ == "__main__":
    main()
