"""Предстартовая диагностика BERETS без движения приводов."""

import os


def _configured(*names):
    return all(os.environ.get(name) not in (None, "") for name in names)


def system_readiness(state, hardware):
    snapshot = state.snapshot()
    containers = snapshot["containers"]
    presence_labels = (
        ("красное", "красный"),
        ("зелёное", "зелёный"),
        ("жёлтое", "жёлтый"),
    )
    missing_sorting = [
        label
        for color, label in presence_labels
        if not containers["presence"].get(color, False)
    ]
    if containers["sorting_containers_ready"]:
        sorting_detail = "все три установлены"
    elif containers["sensors_connected"]:
        sorting_detail = "отсутствуют: " + ", ".join(missing_sorting)
    else:
        sorting_detail = "не подтверждены"
    arm = snapshot["manipulator"]
    rail = snapshot["rail"]
    vision = snapshot["vision"]
    cycle_enabled = os.environ.get("BERETS_REAL_CYCLE", "0") == "1"
    dispenser_enabled = os.environ.get(
        "BERETS_REAL_DISPENSER", "1" if cycle_enabled else "0"
    ) == "1"

    checks = [
        {
            "id": "servo_bus",
            "label": "UART сервоприводов",
            "ready": hardware.servo_bus is not None,
            "detail": "подключена" if hardware.servo_bus else "нет связи",
        },
        {
            "id": "container_sensors",
            "label": "Датчики контейнеров",
            "ready": hardware.container_sensors is not None,
            "detail": "подключены" if hardware.container_sensors else "нет связи",
        },
        {
            "id": "sorting_containers",
            "label": "Контейнеры у конвейера",
            "ready": bool(containers["sorting_containers_ready"]),
            "detail": sorting_detail,
        },
        {
            "id": "empty_stack",
            "label": "Запас пустых контейнеров",
            "ready": int(containers["empty_stack"]) > 0,
            "detail": f"{containers['empty_stack']} шт."
            if int(containers["empty_stack"]) > 0
            else "запас отсутствует",
        },
        {
            "id": "conveyor",
            "label": "MOSFET конвейера",
            "ready": hardware.conveyor_output is not None,
            "detail": "подключён" if hardware.conveyor_output else "не настроен",
        },
        {
            "id": "arm_home",
            "label": "HOME манипулятора",
            "ready": bool(arm["homed"]),
            "detail": "выполнен" if arm["homed"] else "не выполнен",
        },
        {
            "id": "rail_home",
            "label": "HOME рельсы",
            "ready": bool(rail["homed"]),
            "detail": "выполнен" if rail["homed"] else "не выполнен",
        },
        {
            "id": "vision",
            "label": "Компьютерное зрение",
            "ready": bool(vision["connected"]),
            "detail": "heartbeat получен" if vision["connected"] else "нет heartbeat",
        },
        {
            "id": "gate_calibration",
            "label": "Положения заслонок",
            "ready": all(
                _configured(f"BERETS_GATE_OPEN_{sid}", f"BERETS_GATE_CLOSED_{sid}")
                for sid in ("3", "4", "5")
            ),
            "detail": "заданы" if all(
                _configured(f"BERETS_GATE_OPEN_{sid}", f"BERETS_GATE_CLOSED_{sid}")
                for sid in ("3", "4", "5")
            ) else "требуется калибровка",
        },
        {
            "id": "dispenser_calibration",
            "label": "Положения дозатора ID6",
            "ready": (not dispenser_enabled) or _configured(
                "BERETS_DISPENSER_OPEN", "BERETS_DISPENSER_CLOSED"
            ),
            "detail": (
                "не требуется"
                if not dispenser_enabled
                else "заданы"
                if _configured("BERETS_DISPENSER_OPEN", "BERETS_DISPENSER_CLOSED")
                else "требуется калибровка"
            ),
        },
    ]
    return {
        "ready": all(check["ready"] for check in checks),
        "cycle_enabled": cycle_enabled,
        "checks": checks,
    }
