#!/usr/bin/env python3
"""Safe zone-driven controller for the three BERETS sorting gates."""

import os
import threading
import time


GATES = {"красное": "4", "зелёное": "5", "жёлтое": "3"}
ZONE_KEYS = {"красное": "red", "зелёное": "green", "жёлтое": "yellow"}
OPEN_POSITION = 500
CLOSED_POSITION = 690


def env_flag(name, default=False):
    value = os.environ.get(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def point_in_polygon(point, polygon):
    x, y = point
    inside = False
    size = len(polygon)
    for index in range(size):
        x1, y1 = polygon[index]
        x2, y2 = polygon[(index + 1) % size]
        cross = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1)
        if abs(cross) < 1e-9 and min(x1, x2) <= x <= max(x1, x2) and min(
            y1, y2
        ) <= y <= max(y1, y2):
            return True
        if (y1 > y) != (y2 > y):
            crossing_x = (x2 - x1) * (y - y1) / (y2 - y1) + x1
            if x < crossing_x:
                inside = not inside
    return inside


def _orientation(a, b, c):
    value = (b[0] - a[0]) * (c[1] - a[1]) - (
        b[1] - a[1]
    ) * (c[0] - a[0])
    if abs(value) < 1e-9:
        return 0
    return 1 if value > 0 else -1


def segment_intersects_polygon(start, end, polygon):
    if point_in_polygon(start, polygon) or point_in_polygon(end, polygon):
        return True
    for index in range(len(polygon)):
        a = polygon[index]
        b = polygon[(index + 1) % len(polygon)]
        if (
            _orientation(start, end, a) != _orientation(start, end, b)
            and _orientation(a, b, start) != _orientation(a, b, end)
        ):
            return True
    return False


class ZoneGateController:
    def __init__(self, state, hardware, dispenser, zone_store):
        self.state = state
        self.hardware = hardware
        self.dispenser = dispenser
        self.zone_store = zone_store
        self.enabled = env_flag("BERETS_REAL_ZONE_SORTING")
        self.packet_timeout = float(
            os.environ.get("BERETS_GATE_PACKET_TIMEOUT_SECONDS", "2.0")
        )
        self.lost_release_seconds = float(
            os.environ.get("BERETS_GATE_LOST_RELEASE_SECONDS", "0.7")
        )
        self.release_hold_seconds = float(
            os.environ.get("BERETS_GATE_RELEASE_HOLD_SECONDS", "0.5")
        )
        self.drop_settle_seconds = float(
            os.environ.get("BERETS_GATE_DROP_SETTLE_SECONDS", "1.5")
        )
        self.reid_seconds = float(
            os.environ.get("BERETS_GATE_REID_SECONDS", "3.0")
        )
        self.full_stop_delay_seconds = float(
            os.environ.get(
                "BERETS_FULL_CONTAINER_STOP_DELAY_SECONDS",
                "0",
            )
        )
        self.container_removal_seconds = float(
            os.environ.get("BERETS_CONTAINER_REMOVAL_SECONDS", "3.0")
        )
        self.container_return_confirm_seconds = float(
            os.environ.get(
                "BERETS_CONTAINER_RETURN_CONFIRM_SECONDS", "0.3"
            )
        )
        self.min_confidence = float(
            os.environ.get("BERETS_MIN_CONFIDENCE", "0.65")
        )
        self.move_time_ms = int(
            os.environ.get("BERETS_GATE_MOVE_TIME_MS", "100")
        )
        self.lock = threading.RLock()
        self.tracks = {}
        self.owners = {servo_id: None for servo_id in GATES.values()}
        self.calibration = None
        self.ignore_zones = []
        self.last_packet = 0.0
        self.automatic_outputs = False
        self.container_service = None
        self.pending_full_service = None
        self.missing_pause = None
        self.missing_since = {}
        self.present_since = {}
        self.container_full_handler = None
        self.container_full_prepare_handler = None
        self._watchdog_stop = threading.Event()
        self._watchdog_thread = threading.Thread(
            target=self._watchdog_worker,
            name="berets-zone-gate-watchdog",
            daemon=True,
        )
        self._watchdog_thread.start()

    @property
    def running(self):
        with self.state.lock:
            return bool(self.state.data["zone_sorting"]["running"])

    def _set_state(self, **values):
        with self.state.lock:
            self.state.data["zone_sorting"].update(values)

    def _set_gate(self, servo_id, opened):
        position = OPEN_POSITION if opened else CLOSED_POSITION
        self.hardware.set_aux_servo(
            servo_id, position, time_ms=self.move_time_ms
        )
        with self.state.lock:
            self.state.data["zone_sorting"]["gates"][servo_id] = (
                "открыта" if opened else "закрыта"
            )

    def _safe_outputs(self):
        if self.hardware.conveyor_output:
            try:
                self.hardware.set_conveyor(False)
            except Exception:
                pass
        if self.hardware.servo_bus:
            for servo_id in ("3", "4", "5"):
                try:
                    self._set_gate(servo_id, True)
                except Exception:
                    pass
        self.dispenser.stop(reason=None)

    def start(self, automatic_outputs=False):
        with self.lock:
            if self.running:
                return False
            if not self.enabled:
                raise RuntimeError(
                    "Зонная сортировка отключена: добавьте "
                    "BERETS_REAL_ZONE_SORTING=1"
                )
            if not os.environ.get("BERETS_VISION_TOKEN"):
                raise RuntimeError(
                    "Для реальной зонной сортировки обязателен BERETS_VISION_TOKEN"
                )
            calibration = self.zone_store.snapshot()
            if not calibration["complete"]:
                raise RuntimeError("Сначала сохраните все шесть зон")
            self.hardware.refresh_inputs()
            with self.state.lock:
                vision_connected = self.state.data["vision"]["connected"]
                sensors_connected = self.state.data["containers"][
                    "sensors_connected"
                ]
                presence = dict(self.state.data["containers"]["presence"])
            if not self.hardware.servo_bus:
                raise RuntimeError("UART-шина заслонок не подключена")
            if not vision_connected:
                raise RuntimeError("Камера и YOLO не подключены")
            if not sensors_connected:
                raise RuntimeError("Датчики сортировочных контейнеров не подключены")
            missing = [color for color, ready in presence.items() if not ready]
            if missing:
                raise RuntimeError(
                    "Нет контейнеров: " + ", ".join(missing)
                )
            self.tracks.clear()
            self.owners = {servo_id: None for servo_id in GATES.values()}
            self.automatic_outputs = bool(automatic_outputs)
            self.container_service = None
            self.pending_full_service = None
            self.missing_pause = None
            self.missing_since.clear()
            self.present_since.clear()
            self.calibration = calibration["zones"]
            self.ignore_zones = calibration.get("ignore_zones", [])
            self.last_packet = time.monotonic()
            for servo_id in ("3", "4", "5"):
                self._set_gate(servo_id, True)
            self._set_state(
                running=True,
                phase="ожидание яблока",
                fault=None,
                active_tracks=0,
                automatic_outputs=self.automatic_outputs,
                container_service={
                    "active": False,
                    "color": None,
                    "phase": "не требуется",
                    "absence_seconds": 0.0,
                },
            )
        self.state.log("Зонная сортировка запущена; все заслонки открыты в 500")
        return True

    def stop(self, reason="Зонная сортировка остановлена"):
        with self.lock:
            was_running = self.running
            self._set_state(
                running=False, phase="остановлена", active_tracks=0
            )
            self.tracks.clear()
            self.owners = {servo_id: None for servo_id in GATES.values()}
            self.calibration = None
            self.ignore_zones = []
            was_automatic = self.automatic_outputs
            self.automatic_outputs = False
            self.container_service = None
            self.pending_full_service = None
            self.missing_pause = None
            self.missing_since.clear()
            self.present_since.clear()
            self._set_state(
                automatic_outputs=False,
                container_service={
                    "active": False,
                    "color": None,
                    "phase": "не требуется",
                    "absence_seconds": 0.0,
                },
            )
            if self.enabled:
                self._safe_outputs()
            if was_automatic:
                with self.state.lock:
                    self.state.data["system"]["operational"] = False
        if was_running and reason:
            self.state.log(reason)

    def _fault(self, message):
        with self.lock:
            if not self.running:
                return
            self._set_state(running=False, phase="ошибка", fault=message)
            self.automatic_outputs = False
            with self.state.lock:
                self.state.data["system"]["operational"] = False
            self._safe_outputs()
            self.state.log(message, "warning")

    def ensure_calibration_reload_safe(self):
        with self.lock:
            if not self.running:
                return
            active = [
                track
                for track in self.tracks.values()
                if track.get("phase")
                in {
                    "closed",
                    "release_delay",
                    "waiting_release_exit",
                    "drop_settle",
                }
            ]
            if (
                active
                or self.container_service is not None
                or self.pending_full_service is not None
                or self.missing_pause is not None
                or any(owner is not None for owner in self.owners.values())
            ):
                raise RuntimeError(
                    "Дождитесь выхода текущего яблока из зоны сброса "
                    "или остановите систему"
                )

    def reload_calibration(self, calibration):
        with self.lock:
            if not self.running:
                return
            if not calibration.get("complete"):
                raise ValueError("Для сортировки нужны все шесть цветных зон")
            self.ensure_calibration_reload_safe()
            self.calibration = calibration["zones"]
            self.ignore_zones = calibration.get("ignore_zones", [])
            self.tracks.clear()
            self.owners = {servo_id: None for servo_id in GATES.values()}
            self._set_state(
                phase="зоны обновлены; ожидание яблока",
                active_tracks=0,
            )
        self.state.log("Новые зоны применены без перезапуска сортировки")

    def _reuse_recent_track(self, event_id, label, now):
        candidates = []
        for previous_id, track in self.tracks.items():
            if previous_id == event_id or track.get("label") != label:
                continue
            if track.get("phase") == "done":
                continue
            age = now - track.get("last_seen", 0.0)
            if age <= self.reid_seconds:
                owned = self.owners.get(GATES[label]) == previous_id
                candidates.append((owned, track["last_seen"], previous_id, track))
        if not candidates:
            return None
        _, _, previous_id, track = max(candidates)
        self.tracks.pop(previous_id, None)
        self.tracks[event_id] = track
        servo_id = GATES[label]
        if self.owners.get(servo_id) == previous_id:
            self.owners[servo_id] = event_id
        track["last_seen"] = now
        self.state.log(
            f"YOLO сменил track ID {previous_id} → {event_id}; "
            f"яблоко «{label}» продолжает считаться одним"
        )
        return track

    def _restart_returned_track(
        self,
        event_id,
        track,
        servo_id,
        label,
        previous,
        current,
        trigger_polygon,
        now,
    ):
        if track.get("phase") not in {
            "release_delay",
            "waiting_release_exit",
            "drop_settle",
        }:
            return False
        release_seen_at = track.get("release_seen_at")
        if (
            release_seen_at is None
            or now - release_seen_at > self.reid_seconds
            or not segment_intersects_polygon(
                previous, current, trigger_polygon
            )
        ):
            return False
        if track["phase"] != "release_delay":
            self._set_gate(servo_id, False)
        self.owners[servo_id] = event_id
        track["phase"] = "closed"
        track["closed_at"] = now
        track["previous"] = current
        track["last_seen"] = now
        for key in (
            "release_due",
            "release_was_inside",
            "release_exit_observed",
            "drop_due",
            "drop_fallback",
        ):
            track.pop(key, None)
        self._set_state(
            phase=f"яблоко «{label}» вернулось; заслонка ID{servo_id} закрыта"
        )
        self.state.log(
            f"Яблоко «{label}» вернулось из коридора сброса в течение "
            f"{self.reid_seconds:.1f} с: это то же яблоко, повторный счёт отменён"
        )
        return True

    def update_tracks(self, tracks):
        if not self.running:
            return
        now = time.monotonic()
        seen = set()
        try:
            with self.lock:
                self.last_packet = now
                if (
                    self.container_service is not None
                    or self.pending_full_service is not None
                    or self.missing_pause is not None
                ):
                    self._set_state(active_tracks=0)
                    return
                calibration = self.calibration
                if calibration is None:
                    raise RuntimeError("Калибровка зон не зафиксирована")
                self._update_tracks_locked(tracks, calibration, now, seen)
        except Exception as error:
            self._fault(f"Ошибка зонной сортировки: {error}")

    def _update_tracks_locked(self, tracks, calibration, now, seen):
            for item in tracks:
                event_id = item["event_id"]
                seen.add(event_id)
                current = (item["x"], item["y"])
                track = self.tracks.get(event_id)
                if track is None:
                    if item["confidence"] < self.min_confidence:
                        continue
                    if any(
                        len(polygon) >= 3
                        and point_in_polygon(current, polygon)
                        for polygon in self.ignore_zones
                    ):
                        continue
                    track = self._reuse_recent_track(
                        event_id,
                        item["label"],
                        now,
                    )
                    if track is None:
                        track = {
                            "label": item["label"],
                            "phase": "waiting_trigger",
                            "previous": current,
                            "last_seen": now,
                        }
                        self.tracks[event_id] = track
                track["last_seen"] = now
                label = track["label"]
                servo_id = GATES[label]
                previous = track["previous"]
                trigger_polygon = calibration[ZONE_KEYS[label]]["open"]

                if self._restart_returned_track(
                    event_id,
                    track,
                    servo_id,
                    label,
                    previous,
                    current,
                    trigger_polygon,
                    now,
                ):
                    continue

                if track["phase"] == "waiting_trigger":
                    # Existing lower polygons were saved under the historic
                    # "open" key. Mechanically they are the trigger zones:
                    # close the diagonal gate to direct the apple.
                    if segment_intersects_polygon(
                        previous, current, trigger_polygon
                    ):
                        self.hardware.refresh_inputs()
                        with self.state.lock:
                            present = self.state.data["containers"]["presence"][
                                label
                            ]
                            count = self.state.data["containers"]["sorting"][
                                label
                            ]
                            capacity = self.state.data["containers"]["sorting"][
                                "capacity"
                            ]
                        if not present:
                            self._fault(f"Нет контейнера для класса «{label}»")
                            return
                        if count >= capacity:
                            self._fault(
                                f"Контейнер класса «{label}» заполнен"
                            )
                            return
                        owner = self.owners[servo_id]
                        if owner not in {None, event_id}:
                            self._fault(
                                f"Конфликт яблок у заслонки ID{servo_id}"
                            )
                            return
                        self._set_gate(servo_id, False)
                        self.owners[servo_id] = event_id
                        track["phase"] = "closed"
                        track["closed_at"] = now
                        self._set_state(
                            phase=f"закрыта заслонка ID{servo_id}"
                        )
                        track["previous"] = current
                        continue

                elif track["phase"] == "closed":
                    # Existing upper polygons are release zones: once the
                    # directed apple reaches one, free the belt again.
                    polygon = calibration[ZONE_KEYS[label]]["close"]
                    if segment_intersects_polygon(previous, current, polygon):
                        inside = point_in_polygon(current, polygon)
                        track["release_seen_at"] = now
                        track["release_was_inside"] = True
                        track["release_exit_observed"] = not inside
                        if self.release_hold_seconds <= 0:
                            self._open_gate_after_release(
                                event_id,
                                track,
                                servo_id,
                                label,
                                fallback=False,
                                now=now,
                            )
                            if self.container_service is not None:
                                return
                        else:
                            track["phase"] = "release_delay"
                            track["release_due"] = (
                                now + self.release_hold_seconds
                            )
                            self._set_state(
                                phase=(
                                    f"заслонка ID{servo_id} удерживается "
                                    f"{self.release_hold_seconds:.1f} с"
                                )
                            )
                elif track["phase"] in {
                    "release_delay",
                    "waiting_release_exit",
                }:
                    polygon = calibration[ZONE_KEYS[label]]["close"]
                    inside = point_in_polygon(current, polygon)
                    if inside:
                        track["release_was_inside"] = True
                    elif track.get("release_was_inside"):
                        track["release_exit_observed"] = True
                    if (
                        track["phase"] == "waiting_release_exit"
                        and track.get("release_exit_observed")
                    ):
                        self._complete_track(
                            event_id,
                            track,
                            servo_id,
                            label,
                            fallback=False,
                            now=now,
                        )
                        if self.container_service is not None:
                            return
                track["previous"] = current

            for event_id, track in list(self.tracks.items()):
                if (
                    track["phase"] == "release_delay"
                    and now >= track["release_due"]
                ):
                    label = track["label"]
                    self._open_gate_after_release(
                        event_id,
                        track,
                        GATES[label],
                        label,
                        fallback=False,
                        now=now,
                    )
                    if self.container_service is not None:
                        return
                if (
                    track["phase"] == "closed"
                    and event_id not in seen
                    and now - track["last_seen"] > self.lost_release_seconds
                ):
                    label = track["label"]
                    self._open_gate_after_release(
                        event_id,
                        track,
                        GATES[label],
                        label,
                        fallback=True,
                        now=now,
                    )
                    if self.container_service is not None:
                        return
                if (
                    track["phase"] == "waiting_release_exit"
                    and event_id not in seen
                    and now - track["last_seen"] > self.lost_release_seconds
                ):
                    label = track["label"]
                    self._complete_track(
                        event_id,
                        track,
                        GATES[label],
                        label,
                        fallback=True,
                        now=now,
                    )
                    if self.container_service is not None:
                        return
                if (
                    track["phase"] in {"waiting_trigger", "done"}
                    and now - track["last_seen"] > 4.0
                ):
                    self.tracks.pop(event_id, None)
            self._set_state(active_tracks=len(tracks))

    def _open_gate_after_release(
        self, event_id, track, servo_id, label, fallback, now
    ):
        if track["phase"] not in {"closed", "release_delay"}:
            return
        self._set_gate(servo_id, True)
        self.owners[servo_id] = None
        track["phase"] = "waiting_release_exit"
        track.setdefault("release_seen_at", now)
        track["gate_opened_at"] = now
        self._set_state(
            phase=f"заслонка ID{servo_id} открыта — ожидание выхода яблока"
        )
        self.state.log(
            f"Заслонка ID{servo_id} открыта в 500; "
            f"ожидается выход яблока «{label}» из зоны сброса"
        )
        if (
            fallback
            or track.get("release_exit_observed")
            or now - track["last_seen"] > self.lost_release_seconds
        ):
            self._complete_track(
                event_id,
                track,
                servo_id,
                label,
                fallback=fallback,
                now=now,
            )

    def _complete_track(
        self, event_id, track, servo_id, label, fallback, now
    ):
        if track["phase"] != "waiting_release_exit":
            return
        track["phase"] = "drop_settle"
        track["drop_due"] = now + max(0.0, self.drop_settle_seconds)
        track["drop_fallback"] = bool(fallback)
        self._set_state(
            phase=(
                f"яблоко «{label}» скатывается в контейнер "
                f"({self.drop_settle_seconds:.1f} с)"
            )
        )
        if self.drop_settle_seconds <= 0:
            self._finalize_track(event_id, track, servo_id, label)

    def _finalize_track(self, event_id, track, servo_id, label):
        if track["phase"] != "drop_settle":
            return
        fallback = bool(track.get("drop_fallback"))
        track["phase"] = "done"
        with self.state.lock:
            self.state.data["containers"]["sorting"][label] += 1
            self.state.data["vision"]["counts"][label] += 1
            count = self.state.data["containers"]["sorting"][label]
            capacity = self.state.data["containers"]["sorting"]["capacity"]
        if count >= capacity:
            self.dispenser.stop(reason=None)
            self.pending_full_service = {
                "color": label,
                "due": time.monotonic() + max(
                    0.0, self.full_stop_delay_seconds
                ),
            }
            if self.container_full_prepare_handler:
                try:
                    self.container_full_prepare_handler(label)
                except Exception as error:
                    self.state.log(
                        f"Не удалось начать подготовку автозамены: {error}",
                        "warning",
                    )
            self._set_state(
                phase=(
                    f"контейнер «{label}» заполнен; очистка коридора "
                    f"{self.full_stop_delay_seconds:.1f} с"
                ),
                container_service={
                    "active": True,
                    "color": label,
                    "phase": "очистка коридора",
                    "absence_seconds": 0.0,
                },
            )
            self.state.log(
                f"Контейнер «{label}» заполнен: дозатор остановлен, "
                f"конвейер очищает коридор ещё "
                f"{self.full_stop_delay_seconds:.1f} с"
            )
            if self.full_stop_delay_seconds <= 0:
                self._begin_container_service(label)
        else:
            self._set_state(phase="ожидание яблока")
        suffix = " (резервное открытие)" if fallback else ""
        self.state.log(
            f"{label.capitalize()} яблоко докатилось в контейнер и засчитано; "
            f"заслонка ID{servo_id}{suffix}"
        )

    def _begin_container_service(self, label):
        self.pending_full_service = None
        if self.hardware.conveyor_output:
            self.hardware.set_conveyor(False)
        self.dispenser.stop(reason=None)
        for servo_id in ("3", "4", "5"):
            self._set_gate(servo_id, True)
        self.tracks.clear()
        self.owners = {servo_id: None for servo_id in GATES.values()}
        if self.container_full_handler:
            self._set_state(
                phase=f"контейнер «{label}» заполнен — автоматическая замена",
                active_tracks=0,
                container_service={
                    "active": True,
                    "color": label,
                    "phase": "передано манипулятору",
                    "absence_seconds": 0.0,
                },
            )
            if self.container_full_handler(label) is not False:
                return
        self.container_service = {
            "color": label,
            "absent_since": None,
            "removal_confirmed": False,
            "extra_confirmed": set(),
            "replacement_reset": False,
        }
        self._set_state(
            phase=f"контейнер «{label}» заполнен — снимите его",
            active_tracks=0,
            container_service={
                "active": True,
                "color": label,
                "phase": "ожидание снятия",
                "absence_seconds": 0.0,
            },
        )
        self.state.log(
            f"Контейнер «{label}» заполнен: конвейер и дозатор остановлены. "
            f"Снимите контейнер не менее чем на "
            f"{self.container_removal_seconds:.1f} с",
            "warning",
        )

    def _process_pending_full_service(self, now):
        pending = self.pending_full_service
        if pending is None:
            return False
        if now < pending["due"]:
            remaining = max(0.0, pending["due"] - now)
            self._set_state(
                phase=(
                    f"контейнер «{pending['color']}» заполнен; "
                    f"очистка коридора {remaining:.1f} с"
                ),
                container_service={
                    "active": True,
                    "color": pending["color"],
                    "phase": f"очистка коридора {remaining:.1f} с",
                    "absence_seconds": 0.0,
                },
            )
            return False
        self._begin_container_service(pending["color"])
        return True

    def _update_missing_timers(self, presence, now):
        for color, ready in presence.items():
            if not ready:
                self.present_since.pop(color, None)
                self.missing_since.setdefault(color, now)
                continue
            if color not in self.missing_since:
                self.present_since.pop(color, None)
                continue
            self.present_since.setdefault(color, now)
            stable_for = now - self.present_since[color]
            if stable_for >= self.container_return_confirm_seconds:
                self.missing_since.pop(color, None)
                self.present_since.pop(color, None)
        missing = [
            color
            for color, ready in presence.items()
            if not ready or color in self.missing_since
        ]
        confirmed = [
            color
            for color in missing
            if now - self.missing_since[color]
            >= self.container_removal_seconds
        ]
        return missing, confirmed

    def _begin_missing_pause(self, confirmed_colors):
        confirmed = set(confirmed_colors)
        if not confirmed:
            return
        if self.hardware.conveyor_output:
            self.hardware.set_conveyor(False)
        self.dispenser.stop(reason=None)
        for servo_id in ("3", "4", "5"):
            self._set_gate(servo_id, True)
        self.tracks.clear()
        self.owners = {servo_id: None for servo_id in GATES.values()}
        with self.state.lock:
            for color in confirmed:
                self.state.data["containers"]["sorting"][color] = 0
        self.missing_pause = {"cleared": confirmed}
        names = ", ".join(sorted(confirmed))
        self._set_state(
            phase=f"пауза: отсутствуют контейнеры {names}",
            active_tracks=0,
            container_service={
                "active": True,
                "color": names,
                "phase": "ожидание возврата контейнеров",
                "absence_seconds": self.container_removal_seconds,
            },
        )
        self.state.log(
            f"Контейнеры отсутствуют более "
            f"{self.container_removal_seconds:.1f} с: {names}. "
            "Сортировка поставлена на паузу, их счётчики сброшены",
            "warning",
        )

    def _process_missing_pause(self, presence, now):
        pause = self.missing_pause
        if pause is None:
            return False
        missing, confirmed = self._update_missing_timers(presence, now)
        newly_confirmed = set(confirmed) - pause["cleared"]
        if newly_confirmed:
            with self.state.lock:
                for color in newly_confirmed:
                    self.state.data["containers"]["sorting"][color] = 0
            pause["cleared"].update(newly_confirmed)
            self.state.log(
                "Также очищены контейнеры: "
                + ", ".join(sorted(newly_confirmed))
            )
        if missing:
            names = ", ".join(sorted(missing))
            self._set_state(
                phase=f"пауза: установите контейнеры {names}",
                container_service={
                    "active": True,
                    "color": names,
                    "phase": "ожидание возврата контейнеров",
                    "absence_seconds": round(
                        max(
                            now - self.missing_since.get(color, now)
                            for color in missing
                        ),
                        1,
                    ),
                },
            )
            return True

        self.missing_pause = None
        self.missing_since.clear()
        self.present_since.clear()
        self._set_state(
            phase="ожидание яблока",
            container_service={
                "active": False,
                "color": None,
                "phase": "контейнеры возвращены",
                "absence_seconds": 0.0,
            },
        )
        if self.automatic_outputs:
            self.hardware.set_conveyor(True)
            self.dispenser.start()
        self.state.log(
            "Все контейнеры установлены; сортировка автоматически продолжена"
        )
        return True

    def _process_container_service(self, presence, now):
        service = self.container_service
        if service is None:
            return False
        label = service["color"]
        missing, confirmed_missing = self._update_missing_timers(presence, now)
        present = label not in missing
        other_missing = [
            color for color in missing if color != label
        ]
        confirmed_other_missing = [
            color for color in confirmed_missing if color != label
        ]
        if confirmed_other_missing:
            newly_confirmed = set(confirmed_other_missing) - service[
                "extra_confirmed"
            ]
            if newly_confirmed:
                with self.state.lock:
                    for color in newly_confirmed:
                        self.state.data["containers"]["sorting"][color] = 0
                service["extra_confirmed"].update(newly_confirmed)
                self.state.log(
                    "Во время паузы также очищены контейнеры: "
                    + ", ".join(sorted(newly_confirmed))
                )

        if not service["removal_confirmed"]:
            absence = (
                now - self.missing_since[label]
                if label in self.missing_since
                else 0.0
            )
            if label in confirmed_missing:
                service["removal_confirmed"] = True
                self._set_state(
                    phase=f"контейнер «{label}» снят — установите пустой"
                )
                self.state.log(
                    f"Снятие контейнера «{label}» подтверждено; "
                    "ожидается пустой контейнер"
                )
            phase = (
                "ожидание пустого контейнера"
                if service["removal_confirmed"]
                else "подтверждение снятия"
            )
            self._set_state(
                container_service={
                    "active": True,
                    "color": label,
                    "phase": phase,
                    "absence_seconds": round(absence, 1),
                }
            )
            return True

        if not present:
            return True

        if not service["replacement_reset"]:
            with self.state.lock:
                self.state.data["containers"]["sorting"][label] = 0
            service["replacement_reset"] = True
            self.state.log(
                f"Пустой контейнер «{label}» установлен; счётчик сброшен"
            )
        if other_missing:
            self._set_state(
                phase=(
                    "пауза: установите контейнеры "
                    + ", ".join(other_missing)
                ),
                container_service={
                    "active": True,
                    "color": ", ".join(other_missing),
                    "phase": "ожидание возврата контейнеров",
                    "absence_seconds": 0.0,
                },
            )
            return True

        self.container_service = None
        self.missing_since.clear()
        self.present_since.clear()
        self._set_state(
            phase="ожидание яблока",
            container_service={
                "active": False,
                "color": None,
                "phase": "замена завершена",
                "absence_seconds": 0.0,
            },
        )
        if self.automatic_outputs:
            self.hardware.set_conveyor(True)
            self.dispenser.start()
            self.state.log(
                "Сортировка автоматически продолжена после замены контейнера"
            )
        return True

    def _release_due_tracks(self, now):
        for event_id, track in list(self.tracks.items()):
            if (
                track["phase"] == "release_delay"
                and now >= track["release_due"]
            ):
                label = track["label"]
                self._open_gate_after_release(
                    event_id,
                    track,
                    GATES[label],
                    label,
                    fallback=False,
                    now=now,
                )
                if self.container_service is not None:
                    break
            if (
                track["phase"] == "drop_settle"
                and now >= track["drop_due"]
            ):
                label = track["label"]
                self._finalize_track(
                    event_id,
                    track,
                    GATES[label],
                    label,
                )
                if self.container_service is not None:
                    break

    def _watchdog_worker(self):
        while not self._watchdog_stop.wait(0.1):
            if not self.running:
                continue
            now = time.monotonic()
            try:
                if now - self.last_packet > self.packet_timeout:
                    self._fault("Пропал поток координат YOLO")
                    continue
                with self.state.lock:
                    heartbeat = self.state.data["vision"]["last_heartbeat"]
                vision_timeout = float(
                    os.environ.get("BERETS_VISION_TIMEOUT", "3.0")
                )
                if not heartbeat or now - heartbeat > vision_timeout:
                    self._fault("Пропал heartbeat камеры")
                    continue
                self.hardware.refresh_inputs()
                with self.state.lock:
                    presence = dict(
                        self.state.data["containers"]["presence"]
                    )
                with self.lock:
                    self._release_due_tracks(now)
                    if self._process_pending_full_service(now):
                        continue
                    if self._process_container_service(presence, now):
                        continue
                    if self._process_missing_pause(presence, now):
                        continue
                    _, confirmed_missing = self._update_missing_timers(
                        presence,
                        now,
                    )
                    if confirmed_missing:
                        if self.pending_full_service is not None:
                            label = self.pending_full_service["color"]
                            self._begin_container_service(label)
                            self._process_container_service(presence, now)
                        else:
                            self._begin_missing_pause(confirmed_missing)
                        continue
            except Exception as error:
                self._fault(f"Ошибка watchdog зонной сортировки: {error}")

    def close(self):
        self._watchdog_stop.set()
        if self._watchdog_thread.is_alive():
            self._watchdog_thread.join(timeout=1.0)
        self.stop(reason=None)
