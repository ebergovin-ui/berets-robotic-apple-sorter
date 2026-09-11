#!/usr/bin/env python3
"""Защищённая ручная проверка направления и калибровки рельсы TMC2209."""

import time

from gpiozero import DigitalInputDevice, OutputDevice


STEP_PIN = 18
DIR_PIN = 23
ENABLE_PIN = 24
MIN_PIN = 5
MAX_PIN = 6

MIN_PULSES_PER_SECOND = 20.0
MAX_PULSES_PER_SECOND = 2000.0


def limit_triggered(device):
    # NC отпущен: контакт замкнут на GND, is_active=True.
    # Нажатие или обрыв: вход HIGH, is_active=False.
    return not bool(device.is_active)


def speed_to_pps(percent):
    if not 1 <= percent <= 100:
        raise ValueError("Скорость должна быть от 1 до 100")
    return MIN_PULSES_PER_SECOND + (
        (percent - 1)
        * (MAX_PULSES_PER_SECOND - MIN_PULSES_PER_SECOND)
        / 99
    )


def main():
    step = OutputDevice(STEP_PIN, initial_value=False)
    direction = OutputDevice(DIR_PIN, initial_value=False)
    enable = OutputDevice(ENABLE_PIN, active_high=False, initial_value=False)
    min_limit = DigitalInputDevice(MIN_PIN, pull_up=True, bounce_time=0.02)
    max_limit = DigitalInputDevice(MAX_PIN, pull_up=True, bounce_time=0.02)

    print("Защищённая ручная проверка рельсы")
    print("Положительные импульсы: DIR=HIGH")
    print("Отрицательные импульсы: DIR=LOW")
    print("Скорость 1...100: примерно 20...2000 имп/с")
    print("0 импульсов — выход.\n")

    try:
        while True:
            min_before = limit_triggered(min_limit)
            max_before = limit_triggered(max_limit)
            print(
                f"Концевики: MIN={'СРАБОТАЛ' if min_before else 'норма'}, "
                f"MAX={'СРАБОТАЛ' if max_before else 'норма'}"
            )

            raw_steps = input(
                "Введите импульсы со знаком, например 20 или -20: "
            ).strip()
            try:
                signed_steps = int(raw_steps)
            except ValueError:
                print("Нужно ввести целое число.\n")
                continue
            if signed_steps == 0:
                break

            if min_before or max_before:
                print(
                    "Движение заблокировано: один из концевиков нажат или его "
                    "NC-цепь разомкнута. При выключенном силовом питании "
                    "освободите концевик и повторите тест.\n"
                )
                continue

            raw_speed = input("Введите скорость 1...100: ").strip()
            try:
                pulses_per_second = speed_to_pps(int(raw_speed))
            except ValueError as error:
                print(f"{error}\n")
                continue

            positive = signed_steps > 0
            # При DIR=HIGH ожидаем движение к MAX, при DIR=LOW — к MIN.
            # Если фактическая механика направлена наоборот, тест остановится по
            # противоположному концевику, после чего во Flask задаётся DIR_INVERTED=1.
            direction.on() if positive else direction.off()
            time.sleep(0.02)
            half_period = 0.5 / pulses_per_second
            completed = 0

            try:
                enable.on()
                for _ in range(abs(signed_steps)):
                    min_now = limit_triggered(min_limit)
                    max_now = limit_triggered(max_limit)

                    if min_now:
                        print("СТОП: MIN сработал или обнаружен обрыв.")
                        break
                    if max_now:
                        print("СТОП: MAX сработал или обнаружен обрыв.")
                        break

                    step.on()
                    time.sleep(half_period)
                    step.off()
                    time.sleep(half_period)
                    completed += 1
            finally:
                step.off()
                enable.off()

            print(f"Выполнено импульсов: {completed}\n")
    except KeyboardInterrupt:
        print("\nОстановлено пользователем.")
    finally:
        step.off()
        enable.off()
        for device in (step, direction, enable, min_limit, max_limit):
            device.close()
        print("TMC2209 отключён.")


if __name__ == "__main__":
    main()
