import os
from threading import Event, Lock, Thread


class RouteExecutor:
    """Единственный владелец последовательного исполнения маршрута."""

    def __init__(self, state, hardware, route_store):
        self.state = state
        self.hardware = hardware
        self.route_store = route_store
        self.lock = Lock()
        self.stop_event = Event()
        self.thread = None
        self.long_rail_move_mm = max(
            0.0,
            float(os.environ.get("BERETS_RAIL_LONG_MOVE_MM", "80")),
        )
        self.long_rail_speed_percent = max(
            1,
            min(
                100,
                int(os.environ.get("BERETS_RAIL_LONG_MOVE_SPEED_PERCENT", "90")),
            ),
        )

    @property
    def running(self):
        return bool(self.thread and self.thread.is_alive())

    def start(
        self,
        route_name,
        full_level,
        empty_level,
        rail_speed_percent,
        checkpoint=None,
        on_complete=None,
        continue_after_preposition=None,
    ):
        with self.lock:
            if self.running:
                raise RuntimeError("Маршрут уже выполняется")
            snapshot = self.state.snapshot()
            automatic_preposition = (
                continue_after_preposition is not None and on_complete is not None
            )
            if (
                snapshot["system"]["operational"]
                or snapshot["cycle"]["running"]
            ) and not automatic_preposition:
                raise RuntimeError("Сначала остановите сортировку")
            if snapshot.get("container_exchange", {}).get("active") and on_complete is None:
                raise RuntimeError("Автоматическая замена контейнера уже выполняется")
            if not self.hardware.servo_bus:
                raise RuntimeError("UART манипулятора не подключён")
            if not self.hardware.rail_axis or not self.hardware.rail_axis.homed:
                raise RuntimeError("Рельса должна быть подключена и иметь HOME")
            points = self.route_store.resolved_route(
                route_name,
                full_level=full_level,
                empty_level=empty_level,
            )
            if not points:
                raise RuntimeError("В маршруте нет точек")
            self.stop_event.clear()
            self.thread = Thread(
                target=self._run,
                args=(
                    route_name,
                    points,
                    rail_speed_percent,
                    checkpoint,
                    on_complete,
                    continue_after_preposition,
                ),
                name="berets-route-executor",
                daemon=True,
            )
            self.thread.start()

    def stop(self, emergency=True):
        self.stop_event.set()
        if emergency:
            self.hardware.emergency_stop()

    def _set_state(self, **values):
        with self.state.lock:
            self.state.data["route_execution"].update(values)

    def _rail_speed_for_target(self, target, normal_speed_percent):
        axis = getattr(self.hardware, "rail_axis", None)
        current = float(getattr(axis, "position_mm", 0.0))
        distance = abs(float(target) - current)
        if distance >= self.long_rail_move_mm:
            return self.long_rail_speed_percent
        return int(normal_speed_percent)

    def _run(
        self,
        route_name,
        points,
        rail_speed_percent,
        checkpoint=None,
        on_complete=None,
        continue_after_preposition=None,
    ):
        self._set_state(
            running=True,
            route=route_name,
            point_index=0,
            point_count=len(points),
            phase="запуск",
            fault=None,
        )
        self.state.log(f"Запущен маршрут «{route_name}»: {len(points)} точек")
        try:
            start_index = 0
            if len(points) >= 3:
                rail_errors = []

                def preposition_rail():
                    try:
                        preposition_speed = self._rail_speed_for_target(
                            points[2]["rail"], rail_speed_percent
                        )
                        self.hardware.set_rail(
                            points[2]["rail"],
                            speed_percent=preposition_speed,
                        )
                    except Exception as error:
                        rail_errors.append(error)

                rail_worker = Thread(
                    target=preposition_rail,
                    name="berets-route-preposition",
                    daemon=True,
                )
                rail_worker.start()
                for index in (0, 1):
                    point = points[index]
                    self._set_state(point_index=index + 1, phase=point["name"])
                    self.hardware.set_joints(point["joints"], time_ms=point["time_ms"])
                    if self.stop_event.wait(point["time_ms"] / 1000.0):
                        raise RuntimeError("Маршрут остановлен оператором")
                    if checkpoint:
                        checkpoint(index + 1, point)
                rail_worker.join()
                if rail_errors:
                    raise rail_errors[0]
                if continue_after_preposition is not None:
                    self._set_state(
                        point_index=2,
                        phase="ожидание остановки конвейера перед точкой 3",
                    )
                    while not continue_after_preposition.wait(0.05):
                        if self.stop_event.is_set():
                            raise RuntimeError("Маршрут остановлен оператором")
                start_index = 2

            for index in range(start_index, len(points)):
                point = points[index]
                if self.stop_event.is_set():
                    raise RuntimeError("Маршрут остановлен оператором")
                self._set_state(point_index=index + 1, phase=point["name"])
                point_rail_speed = self._rail_speed_for_target(
                    point["rail"], rail_speed_percent
                )
                self.hardware.move_route_point(
                    point,
                    rail_speed_percent=point_rail_speed,
                    overlap=False,
                )
                if self.stop_event.wait(max(0.0, point["time_ms"] / 1000.0)):
                    raise RuntimeError("Маршрут остановлен оператором")
                if checkpoint:
                    checkpoint(index + 1, point)
            self._set_state(running=False, phase="завершён")
            self.state.log(f"Маршрут «{route_name}» завершён")
            if on_complete:
                try:
                    on_complete(True, None)
                except Exception as callback_error:
                    self.state.log(
                        f"Ошибка обработчика завершения маршрута: {callback_error}",
                        "warning",
                    )
        except Exception as error:
            if self.hardware.rail_axis:
                self.hardware.rail_axis.request_stop()
            self._set_state(running=False, phase="остановлен", fault=str(error))
            self.state.log(f"Маршрут остановлен: {error}", "warning")
            if on_complete:
                try:
                    on_complete(False, error)
                except Exception as callback_error:
                    self.state.log(
                        f"Ошибка обработчика остановки маршрута: {callback_error}",
                        "warning",
                    )

    def close(self):
        self.stop(emergency=False)
        if self.thread and self.thread.is_alive():
            self.thread.join(timeout=2)
