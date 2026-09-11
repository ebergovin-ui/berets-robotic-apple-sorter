#!/usr/bin/env python3
"""Проверка трёх NO-датчиков контейнеров без запуска приводов."""

import time


PINS = {"красный": 17, "зелёный": 16, "жёлтый": 25}


def main():
    try:
        from gpiozero import DigitalInputDevice
    except ImportError as error:
        raise SystemExit("Установите gpiozero: sudo apt install python3-gpiozero") from error

    devices = {
        name: DigitalInputDevice(pin, pull_up=True, bounce_time=0.05)
        for name, pin in PINS.items()
    }
    print("Проверка датчиков контейнеров. Ctrl+C — выход.")
    print("NO: контейнер нажал датчик = установлен, отпущен = отсутствует.")
    last = None
    try:
        while True:
            current = {
                name: ("установлен" if device.is_active else "отсутствует")
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
