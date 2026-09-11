#!/usr/bin/env python3
"""Independent, drift-free controller for the BERETS apple dispenser."""

import os
import threading
import time


def env_flag(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


class DispenserController:
    SERVO_ID = "6"

    def __init__(self, state, hardware):
        self.state = state
        self.hardware = hardware
        self.enabled = env_flag("BERETS_REAL_DISPENSER")
        self.feed_position = int(
            os.environ.get("BERETS_DISPENSER_FEED_POSITION", "200")
        )
        self.home_position = int(
            os.environ.get("BERETS_DISPENSER_HOME_POSITION", "500")
        )
        self.period = float(
            os.environ.get("BERETS_DISPENSER_CYCLE_SECONDS", "6.0")
        )
        configured_rate = os.environ.get("BERETS_DISPENSER_RATE_APM")
        self.rate_apm = (
            float(configured_rate)
            if configured_rate is not None
            else 60.0 / self.period
        )
        if configured_rate is not None:
            self.period = 60.0 / self.rate_apm
        self.return_at = float(
            os.environ.get("BERETS_DISPENSER_RETURN_AT_SECONDS", "2.5")
        )
        self.move_time_ms = int(
            os.environ.get("BERETS_DISPENSER_MOVE_TIME_MS", "1600")
        )
        self._stop = threading.Event()
        self._lock = threading.RLock()
        self._thread = None
        self._validate()
        self._publish(running=False, phase="остановлен", fault=None)

    def _validate(self):
        if not 200 <= self.feed_position <= 500:
            raise ValueError("Позиция подачи ID6 должна быть от 200 до 500")
        if not 200 <= self.home_position <= 500:
            raise ValueError("HOME дозатора ID6 должен быть от 200 до 500")
        if self.period <= 0:
            raise ValueError("Период дозатора должен быть положительным")
        if not 1.0 <= self.rate_apm <= 10.0 and os.environ.get(
            "BERETS_DISPENSER_RATE_APM"
        ):
            raise ValueError("Скорость дозатора должна быть от 1 до 10 яблок/мин")
        if not 0 < self.return_at < self.period:
            raise ValueError("Момент возврата должен находиться внутри цикла")
        if self.move_time_ms <= 0:
            raise ValueError("Время движения дозатора должно быть положительным")

    def _publish(self, **values):
        with self.state.lock:
            dispenser = self.state.data["dispenser"]
            dispenser.update(
                {
                    "feed_position": self.feed_position,
                    "home_position": self.home_position,
                    "cycle_seconds": self.period,
                    "return_at_seconds": self.return_at,
                    "rate_apples_min": self.rate_apm,
                }
            )
            dispenser.update(values)

    @property
    def running(self):
        with self._lock:
            return bool(self._thread and self._thread.is_alive())

    def start(self):
        with self._lock:
            if self._thread and self._thread.is_alive():
                return False
            if not self.enabled:
                raise RuntimeError(
                    "Реальный дозатор отключён: добавьте BERETS_REAL_DISPENSER=1"
                )
            if not self.hardware.servo_bus:
                raise RuntimeError("UART-шина сервоприводов не подключена")

            self._stop.clear()
            self.hardware.set_aux_servo(
                self.SERVO_ID, self.home_position, time_ms=self.move_time_ms
            )
            self._publish(
                running=True,
                phase="запуск",
                position=self.home_position,
                fault=None,
            )
            self._thread = threading.Thread(
                target=self._worker,
                name="berets-independent-dispenser",
                daemon=True,
            )
            self._thread.start()
        self.state.log(
            f"Дозатор запущен: цикл {self.period:.1f} с "
            f"({self.rate_apm:.1f} яблок/мин)"
        )
        return True

    def stop(self, reason="Дозатор остановлен"):
        with self._lock:
            thread = self._thread
            self._stop.set()
        if (
            thread
            and thread.is_alive()
            and thread is not threading.current_thread()
        ):
            thread.join(timeout=2.0)
        with self._lock:
            alive = bool(thread and thread.is_alive())
            if not alive:
                self._thread = None
        if alive:
            self._publish(
                running=False,
                phase="ошибка",
                fault="Поток дозатора не завершился за 2 секунды",
            )
            self.state.log(
                "Поток дозатора не завершился за 2 секунды", "warning"
            )
            return False
        self._publish(
            running=False,
            phase="остановлен",
            position=self.home_position,
        )
        if reason:
            self.state.log(reason)
        return True

    def _wait_until(self, deadline):
        return self._stop.wait(max(0.0, deadline - time.monotonic()))

    def _worker(self):
        next_cycle = time.monotonic()
        try:
            while not self._stop.is_set():
                now = time.monotonic()
                if now >= next_cycle + self.period:
                    skipped = int((now - next_cycle) // self.period)
                    next_cycle += (skipped + 1) * self.period
                    self.state.log(
                        f"Дозатор пропустил {skipped + 1} просроченный цикл",
                        "warning",
                    )
                if self._wait_until(next_cycle):
                    break

                self.hardware.set_aux_servo(
                    self.SERVO_ID,
                    self.feed_position,
                    time_ms=self.move_time_ms,
                )
                self._publish(
                    running=True,
                    phase="подача",
                    position=self.feed_position,
                )

                if self._wait_until(next_cycle + self.return_at):
                    break
                self.hardware.set_aux_servo(
                    self.SERVO_ID,
                    self.home_position,
                    time_ms=self.move_time_ms,
                )
                self._publish(
                    running=True,
                    phase="ожидание",
                    position=self.home_position,
                )
                with self._lock:
                    period = self.period
                next_cycle += period
        except Exception as error:
            self._publish(
                running=False,
                phase="ошибка",
                fault=f"Дозатор остановлен: {error}",
            )
            self.state.log(f"Дозатор остановлен: {error}", "warning")
            self._stop.set()
        finally:
            try:
                if self.enabled and self.hardware.servo_bus:
                    self.hardware.set_aux_servo(
                        self.SERVO_ID,
                        self.home_position,
                        time_ms=self.move_time_ms,
                    )
            except Exception as error:
                self.state.log(
                    f"Не удалось вернуть дозатор в HOME 500: {error}",
                    "warning",
                )
            self._publish(
                running=False,
                phase="остановлен",
                position=self.home_position,
            )

    def close(self):
        self.stop(reason=None)

    def set_rate(self, rate_apm):
        rate_apm = float(rate_apm)
        if not 1.0 <= rate_apm <= 10.0:
            raise ValueError("Скорость должна быть от 1 до 10 яблок/мин")
        with self._lock:
            self.rate_apm = rate_apm
            self.period = 60.0 / rate_apm
            self._publish()
            with self.state.lock:
                self.state.data["conveyor"]["dosage_rate"] = rate_apm
        self.state.log(
            f"Скорость дозатора: {rate_apm:g} яблок/мин; "
            f"период {self.period:.1f} с"
        )
