import hmac
import os
import queue
import atexit
import json
import secrets
import time
from collections import defaultdict, deque
from datetime import timedelta
from threading import RLock

from flask import (
    Flask,
    Response,
    jsonify,
    redirect,
    render_template,
    request,
    session,
    stream_with_context,
    url_for,
)

try:
    from .accounts import AccountStore
    from .cycle import SortCycle
    from .dispenser import DispenserController
    from .gate_controller import ZoneGateController
    from .hardware import HardwareGateway, RailAxis
    from .readiness import system_readiness
    from .runtime_settings import (
        RuntimeSettingsStore,
        validate_full_stop_delay,
        validate_rail_max_speed_steps_s,
    )
    from .route_store import RouteStore, ROUTE_NAMES
    from .route_executor import RouteExecutor
    from .container_inventory import ContainerInventoryStore, COLORS, COLOR_LABELS
    from .container_exchange import ContainerExchangeCoordinator
    from .ik import inverse_kinematics
    from .state import SystemState
    from .vision_stream import LatestFrameStore
    from .vision_zones import VisionZoneStore
except ImportError:
    from accounts import AccountStore
    from cycle import SortCycle
    from dispenser import DispenserController
    from gate_controller import ZoneGateController
    from hardware import HardwareGateway, RailAxis
    from readiness import system_readiness
    from runtime_settings import (
        RuntimeSettingsStore,
        validate_full_stop_delay,
        validate_rail_max_speed_steps_s,
    )
    from route_store import RouteStore, ROUTE_NAMES
    from route_executor import RouteExecutor
    from container_inventory import ContainerInventoryStore, COLORS, COLOR_LABELS
    from container_exchange import ContainerExchangeCoordinator
    from ik import inverse_kinematics
    from state import SystemState
    from vision_stream import LatestFrameStore
    from vision_zones import VisionZoneStore


def required_environment_secret(name):
    value = os.environ.get(name, "").strip()
    if not value:
        raise RuntimeError(
            f"Не задан {name}; запуск с общим паролем/ключом по умолчанию запрещён"
        )
    return value


app = Flask(__name__)
app.config.update(
    SECRET_KEY=required_environment_secret("BERETS_SECRET_KEY"),
    # Сессия дополнительно привязана к вкладке через sessionStorage (см. base.html).
    # Ограничение по времени остаётся запасным уровнем защиты.
    PERMANENT_SESSION_LIFETIME=timedelta(hours=2),
    SESSION_COOKIE_HTTPONLY=True,
    SESSION_COOKIE_SAMESITE="Strict",
    SESSION_COOKIE_NAME="berets_session",
    SESSION_COOKIE_SECURE=os.environ.get("BERETS_HTTPS", "0").strip().lower()
    in {"1", "true", "yes", "on"},
)
SYSTEM_PASSWORD = required_environment_secret("BERETS_SYSTEM_PASSWORD")

# Компенсация установочного угла новой кистевой сервы применяется только к
# ручным командам. Маршрутные точки, их просмотр и HOME передаются без неё.
MANUAL_WRIST_COMMAND_OFFSET = int(
    os.environ.get("BERETS_MANUAL_WRIST_COMMAND_OFFSET", "-43")
)
if not -200 <= MANUAL_WRIST_COMMAND_OFFSET <= 200:
    raise RuntimeError(
        "BERETS_MANUAL_WRIST_COMMAND_OFFSET должен быть от -200 до 200"
    )
MANUAL_LIVE_MOVE_MS = int(os.environ.get("BERETS_MANUAL_LIVE_MOVE_MS", "1600"))
if not 80 <= MANUAL_LIVE_MOVE_MS <= 30000:
    raise RuntimeError("BERETS_MANUAL_LIVE_MOVE_MS должен быть от 80 до 30000")


class LoginAttemptLimiter:
    """Небольшой локальный ограничитель перебора без внешней БД."""

    def __init__(self, limit=5, window_seconds=300, lock_seconds=300):
        self.limit = max(1, int(limit))
        self.window_seconds = max(1, int(window_seconds))
        self.lock_seconds = max(1, int(lock_seconds))
        self._attempts = defaultdict(deque)
        self._blocked_until = {}
        self._lock = RLock()

    def retry_after(self, key, now=None):
        now = time.monotonic() if now is None else float(now)
        with self._lock:
            blocked_until = self._blocked_until.get(key, 0)
            if blocked_until <= now:
                self._blocked_until.pop(key, None)
                return 0
            return max(1, int(blocked_until - now + 0.999))

    def failure(self, key, now=None):
        now = time.monotonic() if now is None else float(now)
        with self._lock:
            attempts = self._attempts[key]
            while attempts and attempts[0] <= now - self.window_seconds:
                attempts.popleft()
            attempts.append(now)
            if len(attempts) >= self.limit:
                self._blocked_until[key] = now + self.lock_seconds
                attempts.clear()
                return self.lock_seconds
            return 0

    def success(self, key):
        with self._lock:
            self._attempts.pop(key, None)
            self._blocked_until.pop(key, None)


login_limiter = LoginAttemptLimiter(
    limit=os.environ.get("BERETS_LOGIN_ATTEMPTS", "5"),
    window_seconds=os.environ.get("BERETS_LOGIN_WINDOW_SECONDS", "300"),
    lock_seconds=os.environ.get("BERETS_LOGIN_LOCK_SECONDS", "300"),
)


def csrf_token():
    token = session.get("_csrf_token")
    if not token:
        token = secrets.token_urlsafe(32)
        session["_csrf_token"] = token
    return token


def csrf_protection_enabled():
    return os.environ.get("BERETS_CSRF_ENABLED", "1").strip().lower() not in {
        "0",
        "false",
        "no",
        "off",
    }


def valid_csrf_token():
    expected = session.get("_csrf_token", "")
    supplied = request.headers.get("X-CSRF-Token", "") or request.form.get(
        "csrf_token", ""
    )
    return bool(expected and supplied and hmac.compare_digest(expected, supplied))
state = SystemState()
hardware = HardwareGateway(state)
accounts = AccountStore()
cycle = SortCycle(state, hardware)
dispenser = DispenserController(state, hardware)
# ID6 is owned exclusively by the independent drift-free controller above.
cycle.dispenser_enabled = False
# The legacy fixed-delay gate cycle must never compete with zone-driven gates.
cycle.enabled = False
vision_frames = LatestFrameStore()
vision_zones = VisionZoneStore()
runtime_settings = RuntimeSettingsStore()
route_store = RouteStore()
container_inventory = ContainerInventoryStore()
route_executor = RouteExecutor(state, hardware, route_store)
hardware.set_rail_max_speed_steps_s(
    runtime_settings.snapshot()["rail_max_speed_steps_s"]
)
zone_gates = ZoneGateController(state, hardware, dispenser, vision_zones)
zone_gates.full_stop_delay_seconds = runtime_settings.snapshot()[
    "full_container_stop_delay_seconds"
]
container_exchange = ContainerExchangeCoordinator(
    state, hardware, dispenser, zone_gates, route_executor, container_inventory
)
AUTO_CONTAINER_EXCHANGE = os.environ.get(
    "BERETS_AUTO_CONTAINER_EXCHANGE", "0"
).strip().lower() in {"1", "true", "yes", "on"}
if AUTO_CONTAINER_EXCHANGE:
    zone_gates.container_full_prepare_handler = container_exchange.request
    zone_gates.container_full_handler = container_exchange.release
container_exchange._sync_inventory_state()
atexit.register(cycle.close)
atexit.register(dispenser.close)
atexit.register(zone_gates.close)
atexit.register(route_executor.close)
atexit.register(container_exchange.close)


@app.before_request
def require_login():
    """Ограничивает страницы и API локальной авторизацией панели."""
    exempt_endpoints = {
        "login",
        "login_create_profile",
        "static",
        "api_vision_detection",
        "api_vision_heartbeat",
        "api_vision_frame",
        "api_vision_tracks",
    }
    if request.endpoint not in exempt_endpoints and not session.get("authenticated"):
        if request.path.startswith("/api/") or request.path == "/health":
            return jsonify({"ok": False, "error": "Требуется вход в панель"}), 401
        return redirect(url_for("login", next=request.path))

    if (
        csrf_protection_enabled()
        and request.method not in {"GET", "HEAD", "OPTIONS"}
        and request.endpoint
        not in {
            "api_vision_detection",
            "api_vision_heartbeat",
            "api_vision_frame",
            "api_vision_tracks",
        }
        and not valid_csrf_token()
    ):
        if request.path.startswith("/api/"):
            return jsonify({"ok": False, "error": "Защитный токен устарел. Обновите страницу."}), 403
        return Response("Защитный токен устарел. Обновите страницу.", status=403)
    return None


@app.after_request
def apply_browser_security_headers(response):
    response.headers.setdefault("X-Content-Type-Options", "nosniff")
    digital_twin = request.path.startswith("/static/digital_twin/")
    response.headers.setdefault("X-Frame-Options", "SAMEORIGIN" if digital_twin else "DENY")
    response.headers.setdefault("Referrer-Policy", "no-referrer")
    response.headers.setdefault(
        "Permissions-Policy",
        "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
    )
    response.headers.setdefault("Cross-Origin-Opener-Policy", "same-origin")
    response.headers.setdefault(
        "Content-Security-Policy",
        "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; "
        "img-src 'self' data: blob:; media-src 'self' blob:; connect-src 'self'; "
        "font-src 'self'; object-src 'none'; base-uri 'self'; "
        +
        ("frame-ancestors 'self'; " if digital_twin else "frame-ancestors 'none'; ")
        + "form-action 'self'",
    )
    if request.endpoint != "static":
        response.headers.setdefault("Cache-Control", "no-store")
    return response


def json_error(message, status=400):
    return jsonify({"ok": False, "error": message}), status


def set_manual_joints(joints, time_ms=None, repeats=None):
    """Передаёт ручную позу с компенсацией ID16, сохраняя логическое состояние UI."""
    logical = {str(servo_id): int(position) for servo_id, position in joints.items()}
    for servo_id, position in logical.items():
        if servo_id not in hardware.JOINT_LIMITS:
            raise ValueError(f"Неизвестный ID сервопривода: {servo_id}")
        low, high = hardware.JOINT_LIMITS[servo_id]
        if not low <= position <= high:
            raise ValueError(
                f"Положение ID{servo_id} должно быть от {low} до {high}"
            )
    physical = dict(logical)
    if "16" in physical:
        physical["16"] += MANUAL_WRIST_COMMAND_OFFSET

    if repeats is None:
        hardware.set_joints(physical, time_ms=time_ms)
    else:
        hardware.set_joints(physical, time_ms=time_ms, repeats=repeats)

    # Цифровой двойник показывает заданную оператором геометрическую позу, а
    # не скорректированную аппаратную команду новой сервы.
    with state.lock:
        arm = state.data["manipulator"]
        arm["joints"].update(logical)
        arm["homed"] = False


@app.context_processor
def inject_globals():
    return {
        "app_name": "BERETS",
        "current_user": session.get("user"),
        "csrf_token": csrf_token(),
        "security_status": {
            "csrf": csrf_protection_enabled(),
            "secure_cookie": bool(app.config["SESSION_COOKIE_SECURE"]),
            "vision_token": bool(os.environ.get("BERETS_VISION_TOKEN")),
            "session_hours": 2,
        },
        "show_inventory_on_entry": bool(session.pop("show_inventory_on_entry", False)),
        "role_labels": {
            "admin": "Администратор",
            "operator": "Оператор",
            "viewer": "Наблюдатель",
        },
    }


@app.route("/login", methods=["GET", "POST"])
def login():
    if session.get("authenticated"):
        return redirect(url_for("dashboard"))

    error = None
    preauth = bool(session.get("preauth"))
    created_name = None
    if request.method == "POST":
        stage = request.form.get("stage", "system")
        remote = request.remote_addr or "unknown"
        rate_key = f"{remote}:{stage}"
        retry_after = login_limiter.retry_after(rate_key)
        if retry_after:
            state.log("Вход временно заблокирован после серии неудачных попыток", "warning")
            response = render_template(
                "login.html",
                error=f"Слишком много попыток. Повторите через {retry_after} с",
                users=accounts.list_public(),
                preauth=preauth,
                created_name=created_name,
                next_url=request.args.get("next", "/"),
            )
            return Response(response, status=429, headers={"Retry-After": str(retry_after)})
        if stage == "system":
            system_password = request.form.get("system_password", "")
            if hmac.compare_digest(system_password, SYSTEM_PASSWORD):
                session.clear()
                session.permanent = True
                session["preauth"] = True
                preauth = True
                login_limiter.success(rate_key)
            else:
                login_limiter.failure(rate_key)
                state.log("Неудачная попытка ввода общего пароля", "warning")
                error = "Общий пароль указан неверно"
        elif stage == "profile" and session.get("preauth"):
            username = request.form.get("username", "")
            password = request.form.get("password", "")
            user = accounts.verify(username, password)
            if user:
                session.clear()
                session.permanent = True
                session["authenticated"] = True
                session["user"] = user
                session["show_inventory_on_entry"] = True
                login_limiter.success(rate_key)
                state.log(
                    f"Вход в систему: {user['display_name']} "
                    f"({role_name(user['role'])})"
                )
                if user["role"] in {"admin", "operator"}:
                    with state.lock:
                        state.data["system"]["current_operator"] = user["display_name"]
                next_url = request.form.get("next", "/")
                if not next_url.startswith("/") or next_url.startswith("//"):
                    next_url = "/"
                # Фрагмент URL не отправляется серверу и используется только один раз
                # скриптом в base.html для регистрации новой вкладки. После закрытия
                # вкладки sessionStorage исчезает, поэтому повторный вход потребует
                # общий и персональный пароль.
                return redirect(f"{next_url}#berets-tab")
            login_limiter.failure(rate_key)
            state.log("Неудачная попытка входа в профиль", "warning")
            error = "Пароль профиля указан неверно"
        else:
            error = "Сначала введите общий пароль"
    return render_template(
        "login.html",
        error=error,
        users=accounts.list_public(),
        preauth=preauth,
        created_name=created_name,
        next_url=request.args.get("next", "/"),
    )


@app.post("/login/create-profile")
def login_create_profile():
    if not session.get("preauth"):
        return redirect(url_for("login"))
    try:
        display_name = request.form.get("display_name", "")
        password = request.form.get("password", "")
        user = accounts.create_profile(display_name, password)
    except ValueError as error:
        return render_template(
            "login.html",
            error=str(error),
            users=accounts.list_public(),
            preauth=True,
            next_url=request.form.get("next", "/"),
        )
    state.log(f"Создан профиль сотрудника: {user['display_name']}")
    return render_template(
        "login.html",
        error=None,
        users=accounts.list_public(),
        preauth=True,
        created_name=user["display_name"],
        next_url=request.form.get("next", "/"),
    )


@app.route("/logout", methods=["GET", "POST"])
def logout():
    user = session.get("user")
    if user:
        state.log(f"Выход из системы: {user['display_name']}")
        with state.lock:
            if state.data["system"].get("current_operator") == user["display_name"]:
                state.data["system"]["current_operator"] = "не назначен"
    session.clear()
    return redirect(url_for("login"))


def role_name(role):
    return {
        "admin": "Администратор",
        "operator": "Оператор",
        "viewer": "Наблюдатель",
    }.get(role, role)


@app.route("/")
def dashboard():
    return render_template("dashboard.html", active="dashboard")


@app.route("/manipulator")
def manipulator():
    return render_template("manipulator.html", active="manipulator")


@app.route("/manipulator/routes")
def manipulator_routes():
    return render_template("route_editor.html", active="manipulator")


@app.get("/api/manipulator/routes")
def api_manipulator_routes_get():
    return jsonify({
        "ok": True,
        "data": route_store.snapshot(),
        "limits": route_store.limits(),
    })


@app.get("/api/manipulator/routes/export")
def api_manipulator_routes_export():
    body = json.dumps(route_store.snapshot(), ensure_ascii=False, indent=2) + "\n"
    return Response(
        body,
        content_type="application/json; charset=utf-8",
        headers={
            "Content-Disposition": "attachment; filename=berets_manipulator_routes.json",
            "Cache-Control": "no-store",
        },
    )


@app.put("/api/manipulator/routes/<route_name>")
def api_manipulator_routes_put(route_name):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Изменять маршрут может оператор или администратор", 403)
    if route_name not in ROUTE_NAMES:
        return json_error("Неизвестный маршрут", 404)
    payload = request.get_json(silent=True) or {}
    try:
        before = route_store.snapshot()
        points = route_store.replace_route(route_name, payload.get("points"))
    except (OSError, ValueError) as error:
        return json_error(str(error))
    state.log(f"Сохранён маршрут «{route_name}»: {len(points)} точек")
    after = route_store.snapshot()
    shared_updated = route_name in {"red", "green", "yellow"} and any(
        before["routes"][color] != after["routes"][color]
        for color in {"red", "green", "yellow"} - {route_name}
    )
    return jsonify({
        "ok": True,
        "route": route_name,
        "points": points,
        "data": after,
        "shared_updated": shared_updated,
    })


@app.put("/api/manipulator/routes/<route_name>/profiles/<kind>/<int:level>")
def api_manipulator_route_profile_put(route_name, kind, level):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Изменять маршрут может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    try:
        before = route_store.snapshot()
        point = route_store.replace_profile_point(
            route_name, kind, level, payload.get("point")
        )
    except (OSError, TypeError, ValueError) as error:
        return json_error(str(error))
    state.log(
        f"Сохранена точка уровня {level} профиля {kind} маршрута «{route_name}»"
    )
    after = route_store.snapshot()
    shared_updated = route_name in {"red", "green", "yellow"} and any(
        before["profiles"][color] != after["profiles"][color]
        for color in {"red", "green", "yellow"} - {route_name}
    )
    return jsonify({
        "ok": True,
        "route": route_name,
        "kind": kind,
        "level": level,
        "point": point,
        "data": after,
        "shared_updated": shared_updated,
    })


@app.post("/api/manipulator/routes/<route_name>/<point_id>/move")
def api_manipulator_route_point_move(route_name, point_id):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Двигать манипулятор может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "MOVE_ROUTE_POINT":
        return json_error("Требуется явное подтверждение движения", 409)
    try:
        full_level = int(payload.get("full_level", 1))
        empty_level = int(payload.get("empty_level", 6))
        point = route_store.point(
            route_name,
            point_id,
            full_level=full_level,
            empty_level=empty_level,
        )
    except ValueError as error:
        return json_error(str(error), 404)

    snapshot = state.snapshot()
    if (
        snapshot["system"]["operational"]
        or snapshot["cycle"]["running"]
        or snapshot["dispenser"]["running"]
        or snapshot["zone_sorting"]["running"]
        or snapshot["conveyor"]["running"]
    ):
        return json_error(
            "Сначала полностью остановите сортировку, конвейер и дозатор", 409
        )

    move_arm = payload.get("move_arm", True) is not False
    move_rail = payload.get("move_rail", True) is not False
    if not move_arm and not move_rail:
        return json_error("Не выбрана ни одна ось для движения")
    if move_arm and not snapshot["manipulator"]["connected"]:
        return json_error("UART манипулятора не подключён", 503)
    if move_rail:
        if not snapshot["rail"]["connected"]:
            return json_error("Рельса не подключена", 503)
        if not snapshot["rail"]["homed"]:
            return json_error("Перед движением маршрутной точки выполните HOME рельсы", 409)

    # Режим обучения намеренно ограничен низкой скоростью и плавным временем.
    # Точка задаёт конечное состояние, но не доказывает безопасность перехода.
    preview_speed = min(20, int(point["speed_percent"]))
    preview_time = max(1500, int(point["time_ms"]))
    try:
        if move_arm:
            hardware.set_joints(point["joints"], time_ms=preview_time)
        if move_rail:
            hardware.set_rail(
                point["rail"],
                speed_percent=preview_speed,
                allow_max_endpoint=(
                    point.get("block") == "empty_level"
                    and float(point["rail"]) >= 340.0
                ),
            )
    except (RuntimeError, ValueError) as error:
        return json_error(str(error), 503)
    state.log(
        f"Учебный переход в точку «{point['name']}» "
        f"(скорость рельсы не выше {preview_speed}%)",
        "warning",
    )
    return jsonify({
        "ok": True,
        "point": point,
        "preview_speed_percent": preview_speed,
        "preview_time_ms": preview_time,
        "state": state.snapshot(),
    })


@app.post("/api/manipulator/routes/<route_name>/run")
def api_manipulator_route_run(route_name):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Запускать маршрут может оператор или администратор", 403)
    if route_name not in {"red", "green", "yellow"}:
        return json_error("Автоматический цикл доступен только для цветных маршрутов", 404)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "RUN_FULL_ROUTE":
        return json_error("Требуется явное подтверждение полного маршрута", 409)
    try:
        route_executor.start(
            route_name,
            full_level=int(payload.get("full_level", 1)),
            empty_level=int(payload.get("empty_level", 6)),
            rail_speed_percent=int(payload.get("rail_speed_percent", 15)),
        )
    except (TypeError, ValueError, RuntimeError) as error:
        return json_error(str(error), 503)
    return jsonify({"ok": True, "state": state.snapshot()})


@app.post("/api/manipulator/routes/stop")
def api_manipulator_route_stop():
    route_executor.stop(emergency=True)
    return jsonify({"ok": True, "state": state.snapshot()})


@app.route("/conveyor")
def conveyor():
    return render_template("conveyor.html", active="conveyor")


@app.route("/vision")
def vision():
    return render_template("vision.html", active="vision")


@app.route("/system")
def system():
    return render_template("system.html", active="system")


@app.route("/guide")
def guide():
    return render_template("guide.html", active="guide")


@app.route("/settings")
def settings():
    return render_template(
        "settings.html",
        active="settings",
        users=accounts.list_public(),
    )


@app.get("/api/settings/runtime")
def api_runtime_settings_get():
    return jsonify({"ok": True, "settings": runtime_settings.snapshot()})


def ensure_inventory_edit_safe():
    snapshot = state.snapshot()
    if snapshot["system"]["operational"] or snapshot["route_execution"]["running"] or snapshot["container_exchange"]["active"]:
        raise RuntimeError("Изменять стопки можно только при полностью остановленной системе")


def resume_after_required_inventory_service(previous_service, inventory):
    if not previous_service or inventory.get("service_required"):
        return False
    try:
        validate_inventory_for_start()
        start_sorting_system()
    except Exception as error:
        state.log(
            f"Стопки обновлены, но автозапуск невозможен: {error}",
            "warning",
        )
        return False
    state.log("Обслуживание стопок подтверждено; сортировка возобновлена")
    return True


@app.get("/api/containers/inventory")
def api_container_inventory_get():
    return jsonify({"ok": True, "inventory": container_inventory.snapshot(), "state": state.snapshot()})


def validate_container_exchange_hardware():
    snapshot = state.snapshot()
    if not hardware.servo_bus:
        raise RuntimeError("UART манипулятора не подключён")
    if not snapshot["manipulator"]["homed"]:
        raise RuntimeError("Перед автозаменой выполните HOME манипулятора")
    if not hardware.rail_axis or not hardware.rail_axis.homed:
        raise RuntimeError("Перед автозаменой выполните HOME рельсы")


@app.post("/api/containers/exchange/<color>")
def api_container_exchange_now(color):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Замену контейнера может подтвердить оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "FULL_CONTAINER_PRESENT":
        return json_error("Подтвердите, что в цветном контейнере физически находятся два яблока", 409)
    if color not in COLORS:
        return json_error("Неизвестный цвет контейнера", 404)
    snapshot = state.snapshot()
    if snapshot["system"]["operational"] or snapshot["zone_sorting"]["running"]:
        return json_error("Сначала остановите сортировку и конвейер", 409)
    try:
        validate_container_exchange_hardware()
        label = COLOR_LABELS[color]
        container_exchange.request(label)
        if not container_exchange.release(label):
            raise RuntimeError("Не удалось разрешить запуск маршрута")
    except (RuntimeError, ValueError, queue.Full) as error:
        return json_error(str(error), 409)
    state.log(f"Оператор подтвердил ручной запуск замены: {COLOR_LABELS[color]}")
    return jsonify({"ok": True, "state": state.snapshot()})


@app.post("/api/containers/inventory/initialize")
def api_container_inventory_initialize():
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Настраивать стопки может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "INITIALIZE_SHIFT":
        return json_error("Требуется подтверждение состава стопок", 409)
    try:
        ensure_inventory_edit_safe()
        inventory = container_inventory.initialize(payload.get("empty_stack"), payload.get("full_stacks"))
        container_exchange._sync_inventory_state()
    except (RuntimeError, TypeError, ValueError) as error:
        return json_error(str(error), 409)
    state.log("Оператор подтвердил исходный состав стопок")
    return jsonify({"ok": True, "inventory": inventory, "state": state.snapshot()})


@app.post("/api/containers/inventory/replenish-empty")
def api_container_inventory_replenish_empty():
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Пополнять стопку может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "EMPTY_STACK_REPLENISHED":
        return json_error("Подтвердите фактическое пополнение", 409)
    try:
        ensure_inventory_edit_safe()
        previous_service = container_inventory.snapshot().get("service_required")
        inventory = container_inventory.replenish_empty(payload.get("count"))
        container_exchange._sync_inventory_state()
        resumed = resume_after_required_inventory_service(previous_service, inventory)
    except (RuntimeError, TypeError, ValueError) as error:
        return json_error(str(error), 409)
    state.log(f"Стопка пустых контейнеров пополнена: {inventory['empty_stack']}")
    return jsonify({"ok": True, "inventory": inventory, "resumed": resumed, "state": state.snapshot()})


@app.post("/api/containers/inventory/clear-full/<color>")
def api_container_inventory_clear_full(color):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Освобождать стопку может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "FULL_STACK_CLEARED":
        return json_error("Подтвердите фактическое освобождение стопки", 409)
    try:
        ensure_inventory_edit_safe()
        previous_service = container_inventory.snapshot().get("service_required")
        remove_count = payload.get("count", "all")
        inventory = container_inventory.remove_full(color, remove_count)
        container_exchange._sync_inventory_state()
        resumed = resume_after_required_inventory_service(previous_service, inventory)
    except (RuntimeError, TypeError, ValueError) as error:
        return json_error(str(error), 409)
    state.log(f"Полная стопка освобождена: {COLOR_LABELS.get(color, color)}")
    return jsonify({"ok": True, "inventory": inventory, "resumed": resumed, "state": state.snapshot()})


@app.post("/api/containers/inventory/add-empty")
def api_container_inventory_add_empty():
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Пополнять стопку может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "EMPTY_STACK_ADDED":
        return json_error("Подтвердите фактическое пополнение", 409)
    try:
        ensure_inventory_edit_safe()
        if container_inventory.snapshot().get("service_required"):
            raise RuntimeError("Сначала выполните обязательное действие из активного уведомления")
        inventory = container_inventory.add_empty(payload.get("amount"))
        container_exchange._sync_inventory_state()
    except (RuntimeError, TypeError, ValueError) as error:
        return json_error(str(error), 409)
    state.log(f"В стопку добавлено пустых контейнеров: {payload.get('amount')}")
    return jsonify({"ok": True, "inventory": inventory, "state": state.snapshot()})


@app.post("/api/containers/inventory/remove-full/<color>")
def api_container_inventory_remove_full(color):
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error("Освобождать стопку может оператор или администратор", 403)
    payload = request.get_json(silent=True) or {}
    if payload.get("confirm") != "FULL_STACK_REMOVED":
        return json_error("Подтвердите фактическое снятие контейнеров", 409)
    try:
        ensure_inventory_edit_safe()
        if container_inventory.snapshot().get("service_required"):
            raise RuntimeError("Сначала выполните обязательное действие из активного уведомления")
        inventory = container_inventory.remove_full(color, payload.get("amount"))
        container_exchange._sync_inventory_state()
    except (RuntimeError, TypeError, ValueError) as error:
        return json_error(str(error), 409)
    state.log(f"Из полной стопки сняты контейнеры: {COLOR_LABELS.get(color, color)}")
    return jsonify({"ok": True, "inventory": inventory, "state": state.snapshot()})


@app.post("/api/settings/runtime")
def api_runtime_settings_update():
    if session["user"]["role"] not in {"admin", "operator"}:
        return json_error(
            "Изменять параметры сортировки может оператор или администратор",
            403,
        )
    payload = request.get_json(silent=True) or {}
    current = runtime_settings.snapshot()
    try:
        delay = validate_full_stop_delay(
            payload.get(
                "full_container_stop_delay_seconds",
                current["full_container_stop_delay_seconds"],
            )
        )
        rail_max_speed = validate_rail_max_speed_steps_s(
            payload.get(
                "rail_max_speed_steps_s",
                current["rail_max_speed_steps_s"],
            )
        )
        hardware.set_rail_max_speed_steps_s(rail_max_speed)
        settings = runtime_settings.update(delay, rail_max_speed)
    except (RuntimeError, ValueError) as error:
        return json_error(str(error))
    zone_gates.full_stop_delay_seconds = delay
    state.log(
        f"Настройки сохранены: задержка {delay:.1f} с; "
        f"максимум рельсы {rail_max_speed} имп/с"
    )
    return jsonify({
        "ok": True,
        "settings": settings,
        "state": state.snapshot(),
    })


@app.get("/api/state")
def api_state():
    hardware.refresh_inputs()
    return jsonify({"ok": True, "state": state.snapshot()})


@app.get("/api/logs")
def api_logs():
    return jsonify({"ok": True, "logs": state.snapshot()["logs"]})


@app.get("/api/readiness")
def api_readiness():
    return jsonify({"ok": True, "readiness": system_readiness(state, hardware)})


@app.get("/api/vision/zones")
def api_vision_zones_get():
    return jsonify({"ok": True, "calibration": vision_zones.snapshot()})


@app.post("/api/vision/zones")
def api_vision_zones_save():
    if session.get("user", {}).get("role") != "admin":
        return json_error("Сохранять зоны может только администратор", 403)
    payload = request.get_json(silent=True) or {}
    try:
        zone_gates.ensure_calibration_reload_safe()
        calibration = vision_zones.save(payload)
        zone_gates.reload_calibration(calibration)
    except RuntimeError as error:
        return json_error(str(error), 409)
    except ValueError as error:
        return json_error(str(error))
    state.log(
        "Зоны камеры сохранены"
        if calibration["complete"]
        else "Черновик зон камеры сохранён"
    )
    return jsonify({"ok": True, "calibration": calibration})


@app.post("/api/vision/detection")
def api_vision_detection():
    """Принимает одно событие от локального процесса OpenCV/YOLO.

    event_id обязателен: один и тот же объект может находиться в кадре много
    кадров, но должен учитываться статистикой только один раз.
    """
    configured_token = os.environ.get("BERETS_VISION_TOKEN")
    if configured_token:
        supplied_token = request.headers.get("X-BERETS-VISION-TOKEN", "")
        if not hmac.compare_digest(supplied_token, configured_token):
            return json_error("Неверный токен видеомодуля", 403)

    payload = request.get_json(silent=True) or {}
    aliases = {
        "red": "красное",
        "green": "зелёное",
        "yellow": "жёлтое",
        "красное": "красное",
        "зелёное": "зелёное",
        "жёлтое": "жёлтое",
    }
    label = aliases.get(str(payload.get("label", "")).strip().lower())
    event_id = str(payload.get("event_id", "")).strip()
    if not label or not event_id:
        return json_error("Нужны label и уникальный event_id")
    try:
        confidence = float(payload.get("confidence", 0))
        position = float(payload.get("position", 0))
        fps = float(payload.get("fps", 0))
    except (TypeError, ValueError):
        return json_error("confidence, position и fps должны быть числами")
    if not 0 <= confidence <= 1:
        return json_error("confidence должна быть от 0 до 1")
    if not 0 <= position <= 1:
        return json_error("position должна быть от 0 до 1")
    if fps < 0:
        return json_error("fps не может быть отрицательной")

    min_confidence = float(os.environ.get("BERETS_MIN_CONFIDENCE", "0.65"))
    display_confidence = float(
        os.environ.get("BERETS_VISION_DISPLAY_CONFIDENCE", "0.50")
    )
    if confidence < display_confidence:
        return jsonify({
            "ok": True,
            "counted": False,
            "filtered": True,
            "state": state.snapshot(),
        })
    with state.lock:
        vision = state.data["vision"]
        vision["connected"] = True
        vision["last_heartbeat"] = time.monotonic()
        vision["fps"] = fps
        vision["last_detection"] = f"{label} яблоко"
        vision["confidence"] = confidence
        conveyor = state.data["conveyor"]
        conveyor["current_apple"] = {
            "present": True,
            "label": label,
            "position": position,
        }
        seen = vision["seen_event_ids"]
        is_new = event_id not in seen
        if is_new:
            seen.append(event_id)
            del seen[:-200]

    if is_new:
        state.log(f"YOLO: {label} яблоко, confidence={confidence:.1%}")
        cycle.submit(label, confidence, event_id)
    return jsonify({
        "ok": True,
        "accepted": bool(is_new and confidence >= min_confidence),
        "counted": False,
        "state": state.snapshot(),
    })


@app.post("/api/vision/heartbeat")
def api_vision_heartbeat():
    configured_token = os.environ.get("BERETS_VISION_TOKEN")
    if configured_token:
        supplied_token = request.headers.get("X-BERETS-VISION-TOKEN", "")
        if not hmac.compare_digest(supplied_token, configured_token):
            return json_error("Неверный токен видеомодуля", 403)
    payload = request.get_json(silent=True) or {}
    try:
        fps = float(payload.get("fps", 0))
    except (TypeError, ValueError):
        return json_error("fps должен быть числом")
    if fps < 0:
        return json_error("fps не может быть отрицательным")
    with state.lock:
        state.data["vision"]["connected"] = True
        state.data["vision"]["last_heartbeat"] = time.monotonic()
        state.data["vision"]["fps"] = fps
    return jsonify({"ok": True})


@app.post("/api/vision/frame")
def api_vision_frame():
    """Принимает последний JPEG от единственного процесса YOLO."""
    configured_token = os.environ.get("BERETS_VISION_TOKEN")
    if configured_token:
        supplied_token = request.headers.get("X-BERETS-VISION-TOKEN", "")
        if not hmac.compare_digest(supplied_token, configured_token):
            return json_error("Неверный токен видеомодуля", 403)
    if request.mimetype != "image/jpeg":
        return json_error("Кадр должен иметь Content-Type image/jpeg", 415)

    max_bytes = int(os.environ.get("BERETS_VISION_MAX_FRAME_BYTES", "750000"))
    if request.content_length is not None and request.content_length > max_bytes:
        return json_error("JPEG-кадр слишком большой", 413)
    frame = request.get_data(cache=False)
    if not frame:
        return json_error("Получен пустой JPEG-кадр")
    if len(frame) > max_bytes:
        return json_error("JPEG-кадр слишком большой", 413)
    if not frame.startswith(b"\xff\xd8") or not frame.endswith(b"\xff\xd9"):
        return json_error("Некорректный JPEG-кадр")

    vision_frames.publish(frame)
    return ("", 204)


@app.post("/api/vision/tracks")
def api_vision_tracks():
    configured_token = os.environ.get("BERETS_VISION_TOKEN")
    if configured_token:
        supplied_token = request.headers.get("X-BERETS-VISION-TOKEN", "")
        if not hmac.compare_digest(supplied_token, configured_token):
            return json_error("Неверный токен видеомодуля", 403)
    payload = request.get_json(silent=True) or {}
    raw_tracks = payload.get("tracks", [])
    if not isinstance(raw_tracks, list) or len(raw_tracks) > 32:
        return json_error("tracks должен быть списком максимум из 32 объектов")
    aliases = {
        "red": "красное",
        "green": "зелёное",
        "yellow": "жёлтое",
        "красное": "красное",
        "зелёное": "зелёное",
        "жёлтое": "жёлтое",
    }
    clean_tracks = []
    for item in raw_tracks:
        if not isinstance(item, dict):
            return json_error("Каждый трек должен быть объектом")
        event_id = str(item.get("event_id", "")).strip()
        label = aliases.get(str(item.get("label", "")).strip().lower())
        try:
            confidence = float(item.get("confidence", 0))
            x = float(item["x"])
            y = float(item["y"])
        except (KeyError, TypeError, ValueError):
            return json_error("Треку нужны числовые confidence, x и y")
        if not event_id or not label:
            return json_error("Треку нужны event_id и известный label")
        if not 0 <= confidence <= 1 or not 0 <= x <= 1 or not 0 <= y <= 1:
            return json_error("confidence, x и y должны быть от 0 до 1")
        clean_tracks.append(
            {
                "event_id": event_id,
                "label": label,
                "confidence": confidence,
                "x": x,
                "y": y,
            }
        )
    zone_gates.update_tracks(clean_tracks)
    return jsonify({"ok": True})


@app.get("/vision/stream")
def vision_stream():
    """Отдаёт авторизованной панели поток последних JPEG без повторного кодирования."""

    @stream_with_context
    def generate():
        sequence = -1
        while True:
            item = vision_frames.wait_after(sequence, timeout=2.0)
            if item is None:
                continue
            sequence, frame, _updated_at = item
            yield (
                b"--frame\r\n"
                b"Content-Type: image/jpeg\r\n"
                + f"Content-Length: {len(frame)}\r\n\r\n".encode("ascii")
                + frame
                + b"\r\n"
            )

    response = Response(
        generate(),
        mimetype="multipart/x-mixed-replace; boundary=frame",
    )
    response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate"
    response.headers["X-Accel-Buffering"] = "no"
    return response


@app.get("/health")
def health():
    snapshot = state.snapshot()
    return jsonify({
        "ok": True,
        "operational": snapshot["system"]["operational"],
    })


@app.post("/api/account/password")
def change_account_password():
    payload = request.get_json(silent=True) or {}
    current_password = str(payload.get("current_password", ""))
    new_password = str(payload.get("new_password", ""))
    confirmation = str(payload.get("confirmation", ""))
    if new_password != confirmation:
        return json_error("Новые пароли не совпадают")
    try:
        accounts.change_password(
            session["user"]["username"],
            current_password,
            new_password,
        )
    except ValueError as error:
        return json_error(str(error))
    state.log(f"Пароль изменён: {session['user']['display_name']}")
    return jsonify({"ok": True})


@app.post("/api/accounts")
def create_account():
    if session["user"]["role"] != "admin":
        return json_error("Добавлять сотрудников может только администратор", 403)
    payload = request.get_json(silent=True) or {}
    try:
        user = accounts.create(
            str(payload.get("username", "")),
            str(payload.get("display_name", "")),
            str(payload.get("role", "operator")),
            str(payload.get("password", "")),
        )
    except ValueError as error:
        return json_error(str(error))
    state.log(
        f"Добавлена учётная запись: {user['display_name']} "
        f"({role_name(user['role'])})"
    )
    return jsonify({"ok": True, "user": user})


@app.delete("/api/accounts/<username>")
def delete_account(username):
    if session["user"]["role"] != "admin":
        return json_error("Удалять сотрудников может только администратор", 403)
    payload = request.get_json(silent=True) or {}
    try:
        target = accounts.get_public(username)
        accounts.delete(
            username,
            session["user"]["username"],
            str(payload.get("current_password", "")),
        )
    except ValueError as error:
        return json_error(str(error))
    state.log(
        f"Удалена учётная запись: "
        f"{target['display_name'] if target else username}"
    )
    return jsonify({"ok": True})


def stop_sorting_system():
    zone_gates.stop(reason=None)
    dispenser.stop(reason=None)
    try:
        hardware.set_conveyor(False)
    except RuntimeError:
        pass
    with state.lock:
        state.data["system"]["operational"] = False


def start_sorting_system():
    try:
        hardware.refresh_inputs()
        zone_gates.start(automatic_outputs=True)
        hardware.set_conveyor(True)
        dispenser.start()
    except Exception:
        stop_sorting_system()
        raise
    with state.lock:
        state.data["system"]["operational"] = True


def validate_inventory_for_start():
    inventory = container_inventory.snapshot()
    if not inventory["initialized"]:
        raise RuntimeError("Сначала подтвердите состав стопок")
    if inventory["active_job"] or inventory["service_required"]:
        required = inventory.get("service_required") or {}
        raise RuntimeError(
            required.get("message", "Есть незавершённая замена")
        )
    if inventory["empty_stack"] < 1:
        raise RuntimeError("Пополните стопку пустых контейнеров")
    full = [
        COLOR_LABELS[color]
        for color, count in inventory["full_stacks"].items()
        if count >= 4
    ]
    if full:
        raise RuntimeError("Освободите полные стопки: " + ", ".join(full))
    if AUTO_CONTAINER_EXCHANGE:
        validate_container_exchange_hardware()
    return inventory


def reset_sorting_counters():
    """Сбрасывает результаты смены, не меняя калибровку и настройки."""
    colors = ("красное", "зелёное", "жёлтое")
    with state.lock:
        for color in colors:
            state.data["vision"]["counts"][color] = 0
            state.data["containers"]["sorting"][color] = 0
        state.data["vision"]["seen_event_ids"] = []
        state.data["vision"]["last_detection"] = "ожидание"
        state.data["vision"]["confidence"] = 0.0
        state.data["conveyor"]["current_apple"] = {
            "present": False,
            "label": None,
            "position": 0.0,
        }


@app.post("/api/command")
def api_command():
    payload = request.get_json(silent=True) or {}
    action = payload.get("action")

    # Любой вошедший пользователь может остановить механизм, но запуск и
    # движение доступны только оператору или администратору.
    viewer_stop_actions = {
        "stop",
        "system_stop",
        "cycle_stop",
        "dispenser_stop",
        "zone_sorting_stop",
    }
    if (
        session.get("user", {}).get("role") not in {"admin", "operator"}
        and action not in viewer_stop_actions
    ):
        return json_error(
            "Команды запуска и движения доступны оператору или администратору",
            403,
        )

    if action == "system_start":
        with state.lock:
            if state.data["system"]["operational"]:
                return json_error("Система сортировки уже работает", 409)
        try:
            validate_inventory_for_start()
            start_sorting_system()
        except RuntimeError as error:
            return json_error(str(error), 409)
        except Exception as error:
            return json_error(str(error), 503)
        with state.lock:
            state.data["system"]["operational"] = True
        state.log(
            "Система сортировки запущена одной командой: "
            "отслеживание зон, конвейер и дозатор включены; "
            "манипулятор и рельса не участвуют"
        )
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "system_stop":
        if route_executor.running:
            route_executor.stop(emergency=True)
        stop_sorting_system()
        state.log("Система сортировки остановлена оператором", "warning")
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "system_restart":
        if route_executor.running or state.snapshot()["container_exchange"]["active"]:
            route_executor.stop(emergency=True)
            stop_sorting_system()
            return json_error(
                "Активная замена остановлена; перед новым запуском сверьте стопки",
                409,
            )
        stop_sorting_system()
        reset_sorting_counters()
        try:
            validate_inventory_for_start()
            start_sorting_system()
        except RuntimeError as error:
            state.log(
                f"Счётчики обнулены, но запуск заблокирован: {error}",
                "warning",
            )
            return json_error(
                f"Счётчики обнулены. Сортировка не запущена: {error}",
                409,
            )
        except Exception as error:
            state.log(
                "Счётчики обнулены, но сортировка после перезагрузки не "
                f"запущена: {error}",
                "warning",
            )
            return json_error(
                f"Счётчики обнулены. Сортировка не запущена: {error}",
                503,
            )
        state.log(
            "Сортировочная система полностью перезапущена, все счётчики "
            "обнулены; зоны, конвейер и дозатор запущены; "
            "манипулятор и рельса не двигались",
            "warning",
        )
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "home":
        hardware.home()
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "stop":
        route_executor.stop(emergency=True)
        zone_gates.stop(reason=None)
        dispenser.stop(reason=None)
        cycle.stop("Выполнена экстренная остановка")
        hardware.emergency_stop()
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "cycle_stop":
        cycle.stop()
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "joint":
        sid = str(payload.get("id", ""))
        if sid not in {"1", "10", "11", "16"}:
            return json_error("Неизвестный ID сервопривода")
        try:
            position = int(payload["position"])
        except (KeyError, TypeError, ValueError):
            return json_error("Положение должно быть целым числом")
        live = payload.get("live") is True
        try:
            set_manual_joints(
                {sid: position},
                time_ms=MANUAL_LIVE_MOVE_MS if live else None,
                repeats=1 if live else None,
            )
        except ValueError as error:
            return json_error(str(error))
        except RuntimeError as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "aux_servo":
        sid = str(payload.get("id", ""))
        if sid not in {"3", "4", "5", "6"}:
            return json_error("Неизвестный дополнительный сервопривод")
        try:
            position = int(payload["position"])
        except (KeyError, TypeError, ValueError):
            return json_error("Положение должно быть целым числом")
        if not 0 <= position <= 1000:
            return json_error("Положение должно быть в диапазоне 0–1000")
        if sid == "6" and dispenser.running:
            return json_error(
                "Сначала остановите автоматический дозатор", 409
            )
        try:
            hardware.set_aux_servo(sid, position)
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "dispenser_start":
        try:
            dispenser.start()
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "dispenser_stop":
        with state.lock:
            operational = state.data["system"]["operational"]
        if operational:
            zone_gates.stop(reason=None)
            state.log(
                "Рабочая сортировка остановлена ручной остановкой дозатора",
                "warning",
            )
        dispenser.stop()
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "dispenser_rate":
        try:
            rate = float(payload["rate"])
            dispenser.set_rate(rate)
        except (KeyError, TypeError, ValueError) as error:
            return json_error(str(error))
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "gate_preset":
        sid = str(payload.get("id", ""))
        preset = str(payload.get("preset", ""))
        if sid not in {"3", "4", "5"}:
            return json_error("Допустимы только заслонки ID3, ID4 и ID5")
        if preset not in {"open", "closed"}:
            return json_error("Положение заслонки: open или closed")
        if zone_gates.running:
            return json_error(
                "Сначала остановите автоматическую зонную сортировку", 409
            )
        try:
            hardware.set_aux_servo(
                sid,
                500 if preset == "open" else 690,
                time_ms=int(os.environ.get("BERETS_GATE_MOVE_TIME_MS", "100")),
            )
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        with state.lock:
            state.data["zone_sorting"]["gates"][sid] = (
                "открыта" if preset == "open" else "закрыта"
            )
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "dispenser_preset":
        preset = str(payload.get("preset", ""))
        if preset not in {"capture", "feed"}:
            return json_error("Положение дозатора: capture или feed")
        if dispenser.running:
            return json_error(
                "Сначала остановите автоматический дозатор", 409
            )
        try:
            hardware.set_aux_servo("6", 500 if preset == "capture" else 200)
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "zone_sorting_start":
        try:
            zone_gates.start(automatic_outputs=False)
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "zone_sorting_stop":
        with state.lock:
            operational = state.data["system"]["operational"]
        zone_gates.stop()
        if operational:
            state.log(
                "Рабочая сортировка остановлена ручной остановкой отслеживания",
                "warning",
            )
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "pose":
        try:
            x = float(payload["x"])
            y = float(payload["y"])
            z = float(payload["z"])
            phi = float(payload.get("phi", 0))
        except (KeyError, TypeError, ValueError):
            return json_error("Координаты должны быть числами")

        solution = inverse_kinematics(x, y, z, phi)
        if solution is None:
            return json_error(
                "Точка недостижима или выходит за диапазон сервоприводов",
                422,
            )

        live = payload.get("live") is True
        try:
            set_manual_joints(
                solution["joints"],
                time_ms=MANUAL_LIVE_MOVE_MS if live else None,
                repeats=1 if live else None,
            )
        except ValueError as error:
            return json_error(str(error))
        except RuntimeError as error:
            return json_error(str(error), 503)
        with state.lock:
            state.data["manipulator"]["pose"] = {
                "x": x,
                "y": y,
                "z": z,
                "phi": phi,
            }
            state.data["manipulator"]["target"] = solution
        state.log(f"Задана точка ({x:.1f}, {y:.1f}, {z:.1f}) мм")
        return jsonify({
            "ok": True,
            "solution": solution,
            "state": state.snapshot(),
        })

    if action == "conveyor":
        command = payload.get("command")
        if command not in {"start", "stop"}:
            return json_error("Неизвестная команда конвейера")
        try:
            with state.lock:
                operational = state.data["system"]["operational"]
            if command == "stop" and operational:
                zone_gates.stop(reason=None)
                state.log(
                    "Рабочая сортировка остановлена ручной остановкой ленты",
                    "warning",
                )
            else:
                hardware.set_conveyor(command == "start")
        except RuntimeError as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "dosage_rate":
        try:
            rate = int(payload["rate"])
        except (KeyError, TypeError, ValueError):
            return json_error("Подача дозатора должна быть целым числом")
        if not 1 <= rate <= 20:
            return json_error("Подача должна быть от 1 до 20 яблок/мин")
        hardware.set_dosage_rate(rate)
        cycle.set_rate(rate)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "rail":
        try:
            target = float(payload["target"])
            speed = int(payload.get("speed", 100))
        except (KeyError, TypeError, ValueError):
            return json_error("Положение и скорость рельсы должны быть числами")
        if not 0 <= target <= RailAxis.TRAVEL_MM:
            return json_error(
                f"Положение рельсы должно быть от 0 до {RailAxis.TRAVEL_MM:g} мм"
            )
        if not 1 <= speed <= 100:
            return json_error("Скорость рельсы должна быть от 1 до 100%")
        try:
            hardware.set_rail(target, speed_percent=speed)
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "rail_speed":
        try:
            speed = int(payload["speed"])
            hardware.set_rail_speed(speed)
        except (KeyError, TypeError, RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    if action == "rail_home":
        try:
            hardware.home_rail()
        except (RuntimeError, ValueError) as error:
            return json_error(str(error), 503)
        return jsonify({"ok": True, "state": state.snapshot()})

    return json_error("Неизвестная команда")


if __name__ == "__main__":
    app.run(
        host=os.environ.get("FLASK_HOST", "0.0.0.0"),
        port=int(os.environ.get("FLASK_PORT", "5000")),
        debug=False,
    )
