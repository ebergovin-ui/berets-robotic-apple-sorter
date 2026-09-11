#!/usr/bin/env python3
"""Удерживает TMC2209 в безопасном состоянии без импульсов STEP.

Запускать при включённой Raspberry Pi и снятом силовом питании VMOT. Скрипт
не двигает двигатель: STEP=LOW, DIR=LOW, EN/ENN=HIGH (выходы отключены).
"""

import signal
from threading import Event

from gpiozero import OutputDevice


STEP_BCM = 18  # физический pin 12
DIR_BCM = 23   # физический pin 16
EN_BCM = 24    # физический pin 18; ENN активен LOW


def main():
    stopped = Event()
    step = OutputDevice(STEP_BCM, initial_value=False)
    direction = OutputDevice(DIR_BCM, initial_value=False)
    enable = OutputDevice(EN_BCM, initial_value=True)

    def stop(*_args):
        stopped.set()

    signal.signal(signal.SIGINT, stop)
    signal.signal(signal.SIGTERM, stop)
    try:
        step.off()
        direction.off()
        enable.on()
        print("SAFE IDLE: STEP GPIO18/pin12=LOW")
        print("SAFE IDLE: DIR  GPIO23/pin16=LOW")
        print("SAFE IDLE: ENN  GPIO24/pin18=HIGH — TMC2209 отключён")
        print("Импульсы STEP не формируются. Для выхода нажмите Ctrl+C.")
        while not stopped.wait(1.0):
            # Повторно фиксируем безопасные уровни на случай внешнего сбоя.
            step.off()
            enable.on()
    finally:
        step.off()
        enable.on()
        step.close()
        direction.close()
        enable.close()


if __name__ == "__main__":
    main()
