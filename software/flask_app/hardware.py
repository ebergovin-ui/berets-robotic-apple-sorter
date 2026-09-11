import atexit
import os
from threading import Event, Lock
import time


def env_flag(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


class LX224Bus:
    """Минимальный безопасный драйвер команд движения LX-224/LX-16A."""

    def __init__(self, port="/dev/ttyAMA0", baudrate=115200):
        try:
            import serial
        except ImportError as error:
            raise RuntimeError("Не установлен пакет pyserial") from error

        self.port = port
        self._write_lock = Lock()
        self.serial = serial.Serial(
            port=port,
            baudrate=baudrate,
            timeout=0.5,
            write_timeout=0.5,
        )

    @staticmethod
    def checksum(buffer):
        total = sum(buffer[2:buffer[3] + 2])
        return (~total) & 0xFF

    def move(self, servo_id, position, time_ms=350):
        position = max(0, min(1000, int(position)))
        time_ms = max(0, min(30000, int(time_ms)))
        packet = [
            0x55, 0x55, int(servo_id), 7, 1,
            position & 0xFF, (position >> 8) & 0xFF,
            time_ms & 0xFF, (time_ms >> 8) & 0xFF, 0,
        ]
        packet[9] = self.checksum(packet)
        with self._write_lock:
            payload = bytearray(packet)
            written = self.serial.write(payload)
            if written != len(payload):
                raise IOError(
                    f"UART: записано {written} из {len(payload)} байт команды ID{servo_id}"
                )
            self.serial.flush()

    def close(self):
        if self.serial and self.serial.is_open:
            self.serial.close()


class ContainerSensors:
    """Три датчика наличия приёмных контейнеров.

    Фактическое подключение: COM -> GPIO, NO -> GND, внутренняя pull-up.
    Поэтому нажатый датчик (контейнер установлен) читается как логический 0.
    """

    PINS = {
        "красное": 17,
        "зелёное": 16,
        "жёлтое": 25,
    }

    def __init__(self):
        try:
            from gpiozero import DigitalInputDevice
        except ImportError as error:
            raise RuntimeError("Не установлен пакет gpiozero") from error

        self.devices = {
            color: DigitalInputDevice(pin, pull_up=True, bounce_time=0.05)
            for color, pin in self.PINS.items()
        }

    def read(self):
        return {
            # При pull_up=True gpiozero считает низкий уровень активным,
            # поэтому is_active=True означает замкнутый NO-контакт.
            color: bool(device.is_active)
            for color, device in self.devices.items()
        }

    def close(self):
        for device in self.devices.values():
            device.close()


class ConveyorOutput:
    """Безопасный дискретный выход MOSFET конвейера."""

    PIN = 12

    def __init__(self, active_high):
        try:
            from gpiozero import OutputDevice
        except ImportError as error:
            raise RuntimeError("Не установлен пакет gpiozero") from error

        self.device = OutputDevice(
            self.PIN,
            active_high=bool(active_high),
            initial_value=False,
        )

    def set_running(self, running):
        if running:
            self.device.on()
        else:
            self.device.off()

    def close(self):
        self.device.off()
        self.device.close()


class RailAxis:
    """Ось TMC2209 с STEP/DIR/EN и двумя NC-концевиками.

    Нормальное состояние NC-контакта даёт низкий уровень на GPIO при
    включённой pull-up. Разомкнутый контакт считается сработавшим. Все
    параметры, зависящие от конкретной механики, обязательны в окружении.
    """

    STEP_PIN = 18
    DIR_PIN = 23
    ENABLE_PIN = 24
    MIN_PIN = 5
    MAX_PIN = 6
    # 500 mm is the shaft length, not the available carriage translation.
    # The clear span is 472 mm and the carriage footprint is 125 mm:
    # 472 - 125 = 347 mm.  With the measured 40 STEP/mm calibration this is
    # exactly 13_880 commanded STEP pulses from HOME to the far endpoint.
    TRAVEL_MM = 347.0
    CALIBRATED_STEPS_PER_MM = 40.0
    CALIBRATED_MAX_POSITION_STEPS = 13_880
    # An NC contact can briefly open from vibration or cable motion.  When an
    # input changes to the alarm state, pause STEP immediately and confirm it
    # before declaring a limit fault.  No extra pulse is emitted while waiting.
    LIMIT_CONFIRM_SECONDS = 0.01

    def __init__(self, steps_per_mm, speed_steps_s, home_dir, dir_inverted=False):
        if steps_per_mm <= 0 or speed_steps_s <= 0:
            raise ValueError("steps_per_mm и speed_steps_s должны быть больше нуля")
        if home_dir != -1:
            raise ValueError(
                "В текущей схеме HOME закреплён за MIN GPIO5, поэтому "
                "BERETS_RAIL_HOME_DIR должен быть -1"
            )
        try:
            from gpiozero import DigitalInputDevice, OutputDevice
        except ImportError as error:
            raise RuntimeError("Не установлен пакет gpiozero") from error

        self.steps_per_mm = float(steps_per_mm)
        self.max_position_steps = round(self.TRAVEL_MM * self.steps_per_mm)
        self.max_speed_steps_s = float(speed_steps_s)
        self.speed_percent = 100
        self.home_dir = int(home_dir)
        self.dir_inverted = bool(dir_inverted)
        self._lock = Lock()
        self._stop = Event()
        self.position_steps = 0
        self.homed = False
        self.moving = False
        self.step = OutputDevice(self.STEP_PIN, initial_value=False)
        self.direction = OutputDevice(self.DIR_PIN, initial_value=False)
        # TMC2209 EN обычно активен низким уровнем.
        self.enable = OutputDevice(self.ENABLE_PIN, active_high=False, initial_value=False)
        self.min_limit = DigitalInputDevice(self.MIN_PIN, pull_up=True, bounce_time=0.02)
        self.max_limit = DigitalInputDevice(self.MAX_PIN, pull_up=True, bounce_time=0.02)
        self.disable()

    @property
    def min_triggered(self):
        return not bool(self.min_limit.is_active)

    @property
    def max_triggered(self):
        return not bool(self.max_limit.is_active)

    @property
    def position_mm(self):
        return self.position_steps / self.steps_per_mm

    @property
    def speed_steps_s(self):
        return self.max_speed_steps_s * self.speed_percent / 100.0

    def set_speed_percent(self, percent):
        percent = int(percent)
        if not 1 <= percent <= 100:
            raise ValueError("Скорость рельсы должна быть от 1 до 100%")
        with self._lock:
            if self.moving:
                raise RuntimeError("Нельзя менять скорость во время движения рельсы")
            self.speed_percent = percent

    def set_max_speed_steps_s(self, speed_steps_s):
        speed_steps_s = int(speed_steps_s)
        if not 1 <= speed_steps_s <= 100000:
            raise ValueError(
                "Максимальная частота STEP должна быть от 1 до 100000 имп/с"
            )
        with self._lock:
            if self.moving:
                raise RuntimeError(
                    "Нельзя менять предел STEP во время движения рельсы"
                )
            self.max_speed_steps_s = float(speed_steps_s)

    def enable_output(self):
        self.enable.on()

    def disable(self):
        self.enable.off()
        self.step.off()

    def request_stop(self):
        """Немедленно снимает EN и просит текущий цикл STEP завершиться."""
        self._stop.set()
        self.disable()

    def _raise_if_stopped(self):
        if self._stop.is_set():
            self.step.off()
            raise RuntimeError("Движение рельсы остановлено")

    def _set_direction(self, direction):
        physical = direction > 0
        if self.dir_inverted:
            physical = not physical
        if physical:
            self.direction.on()
        else:
            self.direction.off()

    def _limit_for_direction(self, direction):
        return self.max_triggered if direction > 0 else self.min_triggered

    def _confirmed_limit_for_direction(self, direction):
        if not self._limit_for_direction(direction):
            return False
        time.sleep(self.LIMIT_CONFIRM_SECONDS)
        return self._limit_for_direction(direction)

    @staticmethod
    def _limit_name(direction):
        return "MAX (GPIO6)" if direction > 0 else "MIN/HOME (GPIO5)"

    def _pulse(self):
        self._raise_if_stopped()
        half_period = 0.5 / self.speed_steps_s
        self.step.on()
        time.sleep(half_period)
        self._raise_if_stopped()
        self.step.off()
        time.sleep(half_period)

    def move_to(self, target_mm, allow_max_endpoint=False, allow_min_endpoint=False):
        target_mm = float(target_mm)
        if not 0 <= target_mm <= self.TRAVEL_MM:
            raise ValueError(
                f"Положение рельсы должно быть от 0 до {self.TRAVEL_MM:g} мм"
            )
        if not self.homed:
            raise RuntimeError("Сначала выполните HOME рельсы")
        with self._lock:
            if self.moving:
                raise RuntimeError("Рельса уже движется")
            target_steps = round(target_mm * self.steps_per_mm)
            if not 0 <= target_steps <= self.max_position_steps:
                raise ValueError(
                    f"Команда рельсы должна быть от 0 до {self.max_position_steps} импульсов"
                )
            delta = target_steps - self.position_steps
            if delta == 0:
                # A positioned carriage must remain electrically locked even
                # when the requested coordinate is already current.
                self.enable_output()
                return {
                    "reached_target": True,
                    "stopped_at_allowed_max": False,
                    "stopped_at_allowed_min": False,
                    "position": round(self.position_mm, 2),
                }
            direction = 1 if delta > 0 else -1
            count = abs(delta)
            opposite_was_triggered = (
                self.min_triggered if direction > 0 else self.max_triggered
            )
            self._stop.clear()
            self.moving = True

        completed = False
        stopped_at_allowed_max = False
        stopped_at_allowed_min = False
        try:
            self.enable_output()
            self._set_direction(direction)
            for _ in range(count):
                self._raise_if_stopped()
                if self._confirmed_limit_for_direction(direction):
                    if direction > 0 and allow_max_endpoint:
                        stopped_at_allowed_max = True
                        completed = True
                        break
                    if direction < 0 and allow_min_endpoint and target_steps == 0:
                        stopped_at_allowed_min = True
                        self.position_steps = 0
                        completed = True
                        break
                    raise RuntimeError(
                        f"Сработал {self._limit_name(direction)} рельсы на "
                        f"{self.position_mm:.2f} мм"
                    )
                opposite_triggered = (
                    self.min_triggered if direction > 0 else self.max_triggered
                )
                if opposite_triggered and not opposite_was_triggered:
                    time.sleep(self.LIMIT_CONFIRM_SECONDS)
                    opposite_triggered = (
                        self.min_triggered if direction > 0 else self.max_triggered
                    )
                    if opposite_triggered:
                        raise RuntimeError(
                            "Сработал противоположный концевик рельсы: "
                            "проверьте направление DIR_INVERTED"
                        )
                self._pulse()
                self.position_steps += direction
            completed = True
        finally:
            # Keep EN asserted after a successful move so the stepper holds
            # the carriage.  Faults and emergency stop still release EN.
            self.step.off()
            if not completed:
                self.disable()
            with self._lock:
                self.moving = False
        return {
            "reached_target": not stopped_at_allowed_max,
            "stopped_at_allowed_max": stopped_at_allowed_max,
            "stopped_at_allowed_min": stopped_at_allowed_min,
            "position": round(self.position_mm, 2),
        }

    def home_axis(self):
        with self._lock:
            if self.moving:
                raise RuntimeError("Рельса уже движется")
            self._stop.clear()
            self.moving = True

        # Never search past the calibrated usable travel.  On this machine the
        # value is 13_880 pulses (347 mm * 40 STEP/mm).
        max_steps = self.max_position_steps
        completed = False
        try:
            self.enable_output()
            self._set_direction(self.home_dir)
            wrong_limit_was_triggered = self.max_triggered
            if not self._limit_for_direction(self.home_dir):
                for _ in range(max_steps):
                    self._raise_if_stopped()
                    if self._limit_for_direction(self.home_dir):
                        break
                    if self.max_triggered and not wrong_limit_was_triggered:
                        raise RuntimeError(
                            "При HOME сработал MAX вместо MIN: "
                            "остановка, проверьте DIR_INVERTED"
                        )
                    self._pulse()
                else:
                    raise RuntimeError(
                        f"HOME не найден за пределами {self.TRAVEL_MM:g} мм "
                        f"({self.max_position_steps} импульсов)"
                    )
            if not self.min_triggered:
                raise RuntimeError(
                    "HOME_DIR должен приводить к MIN-концевику GPIO5"
                )
            self.position_steps = 0
            self.homed = True
            completed = True
        finally:
            self.step.off()
            if not completed:
                self.disable()
            with self._lock:
                self.moving = False

    def status(self):
        return {
            "connected": True,
            "homed": self.homed,
            "moving": self.moving,
            "holding": bool(self.enable.value) and not self.moving,
            "position": round(self.position_mm, 2),
            "target": round(self.position_mm, 2),
            "limit_left": self.min_triggered,
            "limit_right": self.max_triggered,
            "speed_percent": self.speed_percent,
            "speed_steps_s": round(self.speed_steps_s, 1),
            "max_speed_steps_s": round(self.max_speed_steps_s),
            "travel_mm": self.TRAVEL_MM,
            "max_position_steps": self.max_position_steps,
            "zero_reference": "жёлтый контейнер",
        }

    def close(self):
        self.request_stop()
        for device in (
            self.step,
            self.direction,
            self.enable,
            self.min_limit,
            self.max_limit,
        ):
            device.close()


class HardwareGateway:
    """Аппаратный шлюз манипулятора, рельсы и конвейера.

    Реальный UART включается явно переменной BERETS_REAL_MANIPULATOR=1.
    При выключенном режиме веб-интерфейс остаётся безопасным программным макетом.
    Запуск Flask сам по себе не отправляет ни одной команды сервам.
    """

    HOME = {"1": 500, "10": 500, "11": 375, "16": 500}
    JOINT_LIMITS = {
        "1": (0, 1000),
        "10": (100, 1000),
        "11": (0, 1000),
        "16": (0, 900),
    }
    # LX-224 receives the desired travel duration in milliseconds. The previous
    # 350 ms was too abrupt for a first live test, so use a much smoother speed.
    MOVE_TIME_MS = 1600
    HOME_TIME_MS = 5000
    AUX_LIMITS = {
        "3": (500, 850),
        "4": (500, 850),
        "5": (500, 850),
        "6": (200, 500),
    }

    def __init__(self, state):
        self.state = state
        self.servo_bus = None
        self.container_sensors = None
        self.conveyor_output = None
        self.rail_axis = None
        self._last_container_presence = None
        enabled = env_flag("BERETS_REAL_MANIPULATOR")
        port = os.environ.get("BERETS_SERVO_PORT", "/dev/ttyAMA0")

        if enabled:
            try:
                self.servo_bus = LX224Bus(port=port)
                with self.state.lock:
                    self.state.data["manipulator"]["connected"] = True
                self.state.log(f"Шина сервоприводов подключена: {port}")
            except Exception as error:
                self.state.log(f"Не удалось открыть шину сервоприводов: {error}", "warning")

        if env_flag("BERETS_REAL_CONTAINER_SENSORS"):
            try:
                self.container_sensors = ContainerSensors()
                with self.state.lock:
                    self.state.data["containers"]["sensors_connected"] = True
                self.refresh_inputs(log_changes=False)
                self.state.log("Датчики трёх приёмных контейнеров подключены")
            except Exception as error:
                self.state.log(f"Не удалось открыть датчики контейнеров: {error}", "warning")

        if env_flag("BERETS_REAL_CONVEYOR"):
            active_level = os.environ.get("BERETS_CONVEYOR_ACTIVE_HIGH")
            if active_level is None:
                self.state.log(
                    "Конвейер заблокирован: не задан "
                    "BERETS_CONVEYOR_ACTIVE_HIGH=0 или 1",
                    "warning",
                )
            else:
                try:
                    self.conveyor_output = ConveyorOutput(
                        active_high=env_flag("BERETS_CONVEYOR_ACTIVE_HIGH")
                    )
                    with self.state.lock:
                        self.state.data["conveyor"]["connected"] = True
                        self.state.data["conveyor"]["running"] = False
                    self.state.log("Выход MOSFET конвейера подключён: GPIO12")
                except Exception as error:
                    self.state.log(
                        f"Не удалось открыть выход конвейера: {error}",
                        "warning",
                    )

        if env_flag("BERETS_REAL_RAIL"):
            try:
                if not env_flag("BERETS_RAIL_COMMISSIONED"):
                    raise RuntimeError(
                        "не подтверждён безопасный ввод: "
                        "BERETS_RAIL_COMMISSIONED=1 отсутствует"
                    )
                required = (
                    "BERETS_RAIL_STEPS_PER_MM",
                    "BERETS_RAIL_HOME_DIR",
                )
                missing = [name for name in required if not os.environ.get(name)]
                if missing:
                    raise RuntimeError(
                        "не заданы параметры: " + ", ".join(missing)
                    )
                self.rail_axis = RailAxis(
                    steps_per_mm=float(os.environ["BERETS_RAIL_STEPS_PER_MM"]),
                    speed_steps_s=float(
                        os.environ.get("BERETS_RAIL_SPEED_STEPS_S", "2000")
                    ),
                    home_dir=int(os.environ["BERETS_RAIL_HOME_DIR"]),
                    dir_inverted=env_flag("BERETS_RAIL_DIR_INVERTED"),
                )
                with self.state.lock:
                    self.state.data["rail"]["connected"] = True
                self.state.log("Драйвер TMC2209 и концевики рельсы подключены")
            except Exception as error:
                self.state.log(f"Рельса заблокирована: {error}", "warning")
        atexit.register(self.close)

    @property
    def real_manipulator(self):
        return self.servo_bus is not None

    def close(self):
        if self.conveyor_output:
            self.conveyor_output.close()
            self.conveyor_output = None
        if self.container_sensors:
            self.container_sensors.close()
            self.container_sensors = None
        if self.rail_axis:
            self.rail_axis.close()
            self.rail_axis = None
        if self.servo_bus:
            self.servo_bus.close()
            self.servo_bus = None

    def refresh_inputs(self, log_changes=True):
        """Обновляет входы GPIO без отправки каких-либо команд движения."""
        if not self.container_sensors:
            return
        presence = self.container_sensors.read()
        with self.state.lock:
            containers = self.state.data["containers"]
            containers["presence"].update(presence)
            containers["sorting_containers_ready"] = all(presence.values())

        if (
            log_changes
            and self._last_container_presence is not None
            and presence != self._last_container_presence
        ):
            labels = {
                "красное": "красного канала",
                "зелёное": "зелёного канала",
                "жёлтое": "жёлтого канала",
            }
            for color, present in presence.items():
                if self._last_container_presence.get(color) != present:
                    self.state.log(
                        f"Контейнер {labels[color]}: "
                        f"{'установлен' if present else 'отсутствует'}",
                        "info" if present else "warning",
                    )
        self._last_container_presence = dict(presence)

    def _send_positions(self, joints, time_ms=None, repeats=None):
        if not self.servo_bus:
            return
        if time_ms is None:
            time_ms = self.MOVE_TIME_MS
        if repeats is None:
            repeats = int(os.environ.get("BERETS_SERVO_COMMAND_REPEATS", "2"))
        repeats = max(1, min(3, int(repeats)))
        repeat_delay = max(
            0.015,
            min(
                0.2,
                float(os.environ.get("BERETS_SERVO_REPEAT_DELAY_SECONDS", "0.035")),
            ),
        )
        # Текущая аппаратная схема передаёт команды по TX без чтения ответа.
        # Два одинаковых прохода снижают вероятность пропуска одной команды
        # из-за помех на общей UART-линии. Это не заменяет проверку питания.
        for pass_index in range(repeats):
            for servo_id, position in joints.items():
                self.servo_bus.move(servo_id, position, time_ms=time_ms)
                time.sleep(0.015)
            if pass_index + 1 < repeats:
                time.sleep(repeat_delay)

    def home(self):
        if not self.servo_bus:
            raise RuntimeError("UART манипулятора не подключён; HOME не выполнен")
        self._send_positions(self.HOME, time_ms=self.HOME_TIME_MS)
        with self.state.lock:
            arm = self.state.data["manipulator"]
            arm["moving"] = True
            arm["joints"] = dict(self.HOME)
            arm["homed"] = True
            arm["moving"] = False
        self.state.log("Манипулятор переведён в HOME")

    def emergency_stop(self):
        # Протокол движения LX-224 не даёт универсальной аппаратной команды
        # останова для всех ревизий. Состояние блокируется программно; питание
        # привода при опасном движении следует отключить физической кнопкой.
        with self.state.lock:
            self.state.data["system"]["operational"] = False
            self.state.data["manipulator"]["moving"] = False
            self.state.data["rail"]["moving"] = False
            self.state.data["conveyor"]["running"] = False
        if self.conveyor_output:
            self.conveyor_output.set_running(False)
        if self.rail_axis:
            self.rail_axis.request_stop()
        self.state.log("Выполнена экстренная остановка", "warning")

    def set_joints(self, joints, time_ms=None, repeats=None):
        normalized = {}
        for servo_id, position in joints.items():
            servo_id = str(servo_id)
            if servo_id not in self.JOINT_LIMITS:
                raise ValueError(f"Неизвестный ID сервопривода: {servo_id}")
            try:
                position = int(position)
            except (TypeError, ValueError) as error:
                raise ValueError(f"Положение ID{servo_id} должно быть целым") from error
            low, high = self.JOINT_LIMITS[servo_id]
            if not low <= position <= high:
                raise ValueError(
                    f"Положение ID{servo_id} должно быть от {low} до {high}"
                )
            normalized[servo_id] = position
        if repeats is None:
            self._send_positions(normalized, time_ms=time_ms or self.MOVE_TIME_MS)
        else:
            self._send_positions(
                normalized,
                time_ms=time_ms or self.MOVE_TIME_MS,
                repeats=repeats,
            )
        with self.state.lock:
            arm = self.state.data["manipulator"]
            arm["joints"].update(normalized)
            # Маршрут завершается той же подтверждённой позой, что и ручной
            # HOME. Не сбрасываем готовность только из-за того, что поза была
            # достигнута маршрутной точкой, а не отдельной командой home().
            arm["homed"] = all(
                int(arm["joints"].get(servo_id, -1)) == position
                for servo_id, position in self.HOME.items()
            )
        self.state.log("Изменено положение манипулятора")

    def move_route_point(self, point, rail_speed_percent=None, overlap=False):
        """Выполняет одну точку; при overlap рельса и UART идут параллельно."""
        joints = point["joints"]
        time_ms = int(point["time_ms"])
        target = float(point["rail"])
        allow_max_endpoint = (
            point.get("block") == "empty_level" and target >= 340.0
        )
        allow_min_endpoint = point.get("block") == "home" and target == 0.0
        if not overlap:
            self.set_rail(
                target,
                speed_percent=rail_speed_percent,
                allow_max_endpoint=allow_max_endpoint,
                allow_min_endpoint=allow_min_endpoint,
            )
            self.set_joints(joints, time_ms=time_ms)
            return

        from threading import Thread

        errors = []

        def run_rail():
            try:
                self.set_rail(
                    target,
                    speed_percent=rail_speed_percent,
                    allow_max_endpoint=allow_max_endpoint,
                    allow_min_endpoint=allow_min_endpoint,
                )
            except Exception as error:
                errors.append(error)

        worker = Thread(target=run_rail, name="berets-route-rail", daemon=True)
        worker.start()
        try:
            self.set_joints(joints, time_ms=time_ms)
        except Exception as error:
            errors.append(error)
            if self.rail_axis:
                self.rail_axis.request_stop()
        worker.join()
        if errors:
            raise errors[0]

    def set_aux_servo(self, servo_id, position, time_ms=None):
        """Управляет дозатором или одной из трёх сортировочных заслонок."""
        servo_id = str(servo_id)
        if servo_id not in {"3", "4", "5", "6"}:
            raise ValueError("Допустимы только дополнительные ID 3, 4, 5 и 6")
        position = int(position)
        minimum, maximum = self.AUX_LIMITS[servo_id]
        if not minimum <= position <= maximum:
            raise ValueError(
                f"Для ID{servo_id} допустимо положение "
                f"от {minimum} до {maximum}"
            )
        # Для быстродействующих заслонок и дозатора достаточно одного пакета:
        # их команды регулярно повторяются самим технологическим циклом.
        self._send_positions(
            {servo_id: position},
            time_ms=time_ms or self.MOVE_TIME_MS,
            repeats=1,
        )
        with self.state.lock:
            self.state.data["aux_servos"][servo_id]["position"] = position
        names = {
            "3": "жёлтая заслонка, третья от дозатора",
            "4": "красная заслонка, первая от дозатора",
            "5": "зелёная заслонка, вторая от дозатора",
            "6": "дозатор",
        }
        self.state.log(f"Изменено положение: {names[servo_id]}")

    def set_conveyor(self, running):
        if not self.conveyor_output:
            raise RuntimeError(
                "Реальный выход конвейера не подключён или не настроен"
            )
        self.conveyor_output.set_running(bool(running))
        with self.state.lock:
            self.state.data["conveyor"]["running"] = bool(running)
        self.state.log(
            "Конвейерная лента запущена"
            if running
            else "Конвейерная лента остановлена"
        )

    def set_dosage_rate(self, rate):
        with self.state.lock:
            self.state.data["conveyor"]["dosage_rate"] = int(rate)
        self.state.log(f"Подача дозатора: {int(rate)} яблок/мин")

    def set_rail_speed(self, percent):
        percent = int(percent)
        if not 1 <= percent <= 100:
            raise ValueError("Скорость рельсы должна быть от 1 до 100%")
        if self.rail_axis:
            self.rail_axis.set_speed_percent(percent)
            status = self.rail_axis.status()
        else:
            with self.state.lock:
                maximum = self.state.data["rail"].get(
                    "max_speed_steps_s", 2000
                )
            status = {
                "speed_percent": percent,
                "speed_steps_s": round(maximum * percent / 100.0, 1),
            }
        with self.state.lock:
            self.state.data["rail"].update(status)
        self.state.log(
            f"Скорость рельсы: {percent}% "
            f"({status['speed_steps_s']:.1f} имп/с)"
        )

    def set_rail_max_speed_steps_s(self, speed_steps_s):
        speed_steps_s = int(speed_steps_s)
        if not 1 <= speed_steps_s <= 100000:
            raise ValueError(
                "Максимальная частота STEP должна быть от 1 до 100000 имп/с"
            )
        if self.rail_axis:
            self.rail_axis.set_max_speed_steps_s(speed_steps_s)
            status = self.rail_axis.status()
        else:
            with self.state.lock:
                percent = self.state.data["rail"].get("speed_percent", 100)
            status = {
                "max_speed_steps_s": speed_steps_s,
                "speed_steps_s": round(speed_steps_s * percent / 100.0, 1),
            }
        with self.state.lock:
            self.state.data["rail"].update(status)

    def set_rail(
        self,
        target,
        speed_percent=None,
        allow_max_endpoint=False,
        allow_min_endpoint=False,
    ):
        if not self.rail_axis:
            raise RuntimeError(
                "Рельса заблокирована до установки и проверки обоих NC-концевиков, "
                "HOME и калибровки шагов/мм"
            )
        if speed_percent is not None:
            self.rail_axis.set_speed_percent(speed_percent)
        result = self.rail_axis.move_to(
            target,
            allow_max_endpoint=bool(allow_max_endpoint),
            allow_min_endpoint=bool(allow_min_endpoint),
        )
        with self.state.lock:
            self.state.data["rail"].update(self.rail_axis.status())
        if result.get("stopped_at_allowed_max"):
            self.state.log(
                f"MAX достигнут штатно в блоке пустой стопки: "
                f"{result['position']:.2f} мм; дальнейшие STEP к MAX не выдавались"
            )
        elif result.get("stopped_at_allowed_min"):
            self.state.log(
                "MIN/HOME достигнут штатно в финальной точке маршрута; "
                "координата рельсы принята равной 0 мм"
            )
        else:
            self.state.log(f"Положение рельсы: {float(target):.1f} мм")
        return result

    def home_rail(self):
        if not self.rail_axis:
            raise RuntimeError(
                "Драйвер рельсы не подключён или параметры калибровки не заданы"
            )
        self.rail_axis.home_axis()
        with self.state.lock:
            self.state.data["rail"].update(self.rail_axis.status())
        self.state.log("HOME рельсы выполнен")
