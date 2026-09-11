const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

const POS_PER_DEG = 1000 / 240;
const RAIL_TRAVEL_MM = 347;
const L1 = 200.346;
const L2 = 176.245;
const L3 = 190.713;
const L4 = 39.614;
const BASE_Z = 114.85;

let latestState = null;
let confirmCallback = null;
let manualControlUnlocked = false;
let dragKind = null;
const timers = {};
const liveCommandChannels = {};
let visionZones = {
    version: 2,
    reference: {width: 640, height: 480},
    origin: "bottom-left",
    zones: {
        red: {open: [], close: []},
        green: {open: [], close: []},
        yellow: {open: [], close: []},
    },
    ignore_zones: [[], [], [], [], [], []],
};

function toast(message, error = false) {
    const node = $("#toast");
    if (!node) return;
    node.textContent = message;
    node.style.background = error ? "#c93636" : "#202124";
    node.classList.add("show");
    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => node.classList.remove("show"), 2800);
}

async function postJson(url, payload) {
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
    });
    const result = await response.json();
    if (!result.ok) throw new Error(result.error || "Команда отклонена");
    return result;
}

function setText(selector, value) {
    const node = $(selector);
    if (node) node.textContent = value;
}

function setDot(selector, active) {
    const node = $(selector);
    if (node) node.className = "dot " + (active ? "green" : "gray");
}

function showConfirm(message, callback) {
    const modal = $("#confirm-modal");
    if (!modal) return callback();
    setText("#confirm-message", message);
    modal.hidden = false;
    confirmCallback = callback;
}

function closeConfirm() {
    const modal = $("#confirm-modal");
    if (modal) modal.hidden = true;
    confirmCallback = null;
}

function systemIsRunning() {
    return Boolean(latestState && latestState.system.operational);
}

async function startConfirmedContainerExchange(color) {
    try {
        await postJson(`/api/containers/exchange/${color}`, {
            confirm: "FULL_CONTAINER_PRESENT",
        });
        toast("Замена контейнера запущена");
    } catch (error) {
        toast(error.message, true);
    }
}

function guarded(message, action) {
    if (systemIsRunning()) showConfirm(message, action);
    else action();
}

async function openInventoryModal() {
    try {
        const response = await fetch("/api/containers/inventory");
        const result = await response.json();
        if (!result.ok) throw new Error(result.error || "Не удалось прочитать стопки");
        const inventory = result.inventory;
        if (inventory.service_required && inventory.service_required.type !== "reconcile") {
            showInventoryService(inventory.service_required, inventory);
            return;
        }
        $("#inventory-empty").value = Math.max(1, Number(inventory.empty_stack || 6));
        ["red", "green", "yellow"].forEach(color => {
            $("#inventory-full-" + color).value = Number(inventory.full_stacks?.[color] || 0);
        });
        $("#inventory-modal").hidden = false;
    } catch (error) { toast(error.message, true); }
}

async function initializeInventoryAndStart() {
    try {
        const payload = {
            confirm: "INITIALIZE_SHIFT",
            empty_stack: Number($("#inventory-empty").value),
            full_stacks: {
                red: Number($("#inventory-full-red").value),
                green: Number($("#inventory-full-green").value),
                yellow: Number($("#inventory-full-yellow").value),
            },
        };
        await postJson("/api/containers/inventory/initialize", payload);
        $("#inventory-modal").hidden = true;
        await startSystemWithHomeFallback("Состав стопок подтверждён, сортировка запущена");
    } catch (error) { toast(error.message, true); }
}

async function startSystemWithHomeFallback(message = "Сортировка запущена") {
    try {
        const result = await postJson("/api/command", {action: "system_start"});
        renderState(result.state);
        toast(message);
        return result;
    } catch (error) {
        if (/HOME/i.test(error.message || "")) {
            setText("#home-start-message", error.message);
            $("#home-start-modal").hidden = false;
            return null;
        }
        toast(error.message, true);
        return null;
    }
}

async function performHomeAndStart() {
    const button = $("#home-start-confirm");
    if (!button || button.disabled) return;
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Выполняется HOME…";
    try {
        const armResult = await postJson("/api/command", {action: "home"});
        renderState(armResult.state);
        const railResult = await postJson("/api/command", {action: "rail_home"});
        renderState(railResult.state);
        const startResult = await postJson("/api/command", {action: "system_start"});
        renderState(startResult.state);
        $("#home-start-modal").hidden = true;
        toast("HOME выполнен, сортировка запущена");
    } catch (error) {
        toast(error.message, true);
    } finally {
        button.disabled = false;
        button.textContent = originalText;
    }
}

function showInventoryService(service, inventory = null) {
    const modal = $("#inventory-service-modal");
    if (!modal || !service || systemIsRunning()) return;
    if (service.type === "reconcile") {
        modal.hidden = true;
        return;
    }
    const opening = modal.hidden || modal.dataset.type !== (service.type || "") || modal.dataset.color !== (service.color || "");
    modal.dataset.type = service.type || "";
    modal.dataset.color = service.color || "";
    setText("#inventory-service-message", service.message || "Требуется обслуживание стопок");
    $("#inventory-refill-field").hidden = service.type !== "refill_empty";
    $("#inventory-full-remove-field").hidden = service.type !== "clear_full";
    $("#inventory-service-all").hidden = service.type !== "clear_full";
    if (opening && service.type === "clear_full") {
        const stackLabels = {red: "красное", green: "зелёное", yellow: "жёлтое"};
        const source = inventory?.full_stacks || latestState?.containers?.full_stacks || {};
        const current = Number(source[service.color] ?? source[stackLabels[service.color]] ?? 0);
        $("#inventory-full-remove-count").max = Math.max(1, current);
        $("#inventory-full-remove-count").value = Math.max(1, current);
    }
    setText("#inventory-service-confirm", service.type === "clear_full" ? "Подтвердить снятие" : "Подтвердить пополнение");
    modal.hidden = false;
}

async function confirmInventoryService(removeAll = false) {
    const modal = $("#inventory-service-modal");
    const type = modal.dataset.type;
    try {
        if (type === "refill_empty") {
            const result = await postJson("/api/containers/inventory/replenish-empty", {confirm: "EMPTY_STACK_REPLENISHED", count: Number($("#inventory-refill-count").value)});
            modal.hidden = true;
            if (result.resumed) {
                toast("Стопка пополнена. Сортировка возобновлена");
            } else if (!result.inventory?.service_required) {
                await startSystemWithHomeFallback("Стопка пополнена. Сортировка возобновлена");
            } else {
                toast("Стопка пополнена");
            }
            return;
        } else if (type === "clear_full") {
            const count = removeAll ? "all" : Number($("#inventory-full-remove-count").value);
            const result = await postJson(`/api/containers/inventory/clear-full/${modal.dataset.color}`, {confirm: "FULL_STACK_CLEARED", count});
            modal.hidden = true;
            if (result.resumed) {
                toast("Стопка освобождена. Сортировка возобновлена");
            } else if (!result.inventory?.service_required) {
                await startSystemWithHomeFallback("Стопка освобождена. Сортировка возобновлена");
            } else {
                toast("Стопка освобождена");
            }
            return;
        }
        modal.hidden = true;
        toast("Обслуживание подтверждено. Можно запускать сортировку");
    } catch (error) { toast(error.message, true); }
}

function openStockAdjustment(action, color = "") {
    const modal = $("#stock-adjust-modal");
    if (!modal || !latestState) return;
    const input = $("#stock-adjust-amount");
    const allButton = $("#stock-adjust-all");
    modal.dataset.action = action;
    modal.dataset.color = color;
    if (action === "add-empty") {
        const current = Number(latestState.containers.empty_stack || 0);
        const available = Math.max(0, 6 - current);
        setText("#stock-adjust-title", "Пополнить стопку пустых");
        setText("#stock-adjust-message", `Сейчас ${current} из 6. Можно добавить от 1 до ${available}.`);
        setText("#stock-adjust-label", "Сколько пустых добавлено");
        input.max = available;
        input.value = Math.min(1, available);
        allButton.hidden = true;
    } else {
        const labels = {red: "красных", green: "зелёных", yellow: "жёлтых"};
        const stateLabels = {red: "красное", green: "зелёное", yellow: "жёлтое"};
        const current = Number(latestState.containers.full_stacks[stateLabels[color]] || 0);
        setText("#stock-adjust-title", `Освободить стопку ${labels[color]}`);
        setText("#stock-adjust-message", `Сейчас в стопке ${current}. Укажите, сколько фактически снято.`);
        setText("#stock-adjust-label", "Снято полных контейнеров");
        input.max = current;
        input.value = Math.min(1, current);
        allButton.hidden = false;
    }
    modal.hidden = false;
}

async function confirmStockAdjustment(removeAll = false) {
    const modal = $("#stock-adjust-modal");
    const action = modal.dataset.action;
    const amount = removeAll ? "all" : Number($("#stock-adjust-amount").value);
    try {
        if (action === "add-empty") {
            await postJson("/api/containers/inventory/add-empty", {confirm: "EMPTY_STACK_ADDED", amount});
        } else {
            await postJson(`/api/containers/inventory/remove-full/${modal.dataset.color}`, {confirm: "FULL_STACK_REMOVED", amount});
        }
        modal.hidden = true;
        toast("Фактический состав стопки обновлён");
    } catch (error) { toast(error.message, true); }
}

function renderLogs(logs, selector, compact = false) {
    const node = $(selector);
    if (!node) return;
    node.innerHTML = "";
    logs.slice(0, compact ? 5 : 80).forEach((item) => {
        const row = document.createElement("div");
        row.className = "log-row";
        row.innerHTML = "<span>" + item.time + "</span><span class=\"log-level " +
            item.level + "\">" + (item.level === "warning" ? "важно" : "info") +
            "</span><span>" + item.message + "</span>";
        node.appendChild(row);
    });
}

function renderNotifications(notifications) {
    const node = $("#sidebar-notifications");
    if (!node) return;
    node.innerHTML = "";
    if (!notifications.length) {
        node.innerHTML = '<div class="sidebar-notice empty">Нет активных уведомлений</div>';
        return;
    }
    notifications.slice(0, 3).forEach((item) => {
        const notice = document.createElement("div");
        notice.className = "sidebar-notice";
        notice.textContent = item.message;
        node.appendChild(notice);
    });
    window.dispatchEvent(new CustomEvent("berets:notifications", {
        detail: {notifications: notifications.slice(0, 10)},
    }));
}

function fillStack(selector, count, max = 6) {
    const node = $(selector);
    if (!node) return;
    node.innerHTML = "";
    for (let i = 0; i < Math.min(Number(count) || 0, max); i += 1) {
        const box = document.createElement("span");
        box.className = "stack-box";
        node.appendChild(box);
    }
}

function renderBeltApple(conveyor) {
    const group = $("#cell-apple-group");
    const overview = $("#cell-apple");
    const label = conveyor.current_apple && conveyor.current_apple.label;
    const present = Boolean(conveyor.current_apple && conveyor.current_apple.present);
    const position = Number(conveyor.current_apple && conveyor.current_apple.position) || 0;
    const colors = {"красное": "red", "зелёное": "green", "жёлтое": "yellow"};
    const color = colors[label] || "red";

    if (group) group.hidden = !present;
    if (overview) {
        overview.setAttribute("class", "belt-apple " + color);
        overview.setAttribute("cx", String(180 + position * 480));
    }
    const apple = $("#cell-apple");
    if (apple) {
        apple.setAttribute("class", "belt-apple " + color);
        apple.setAttribute("cx", String(180 + position * 480));
    }
    setText("#belt-current-apple", present ? label + " яблоко" : "яблок нет");
}

function renderRailPosition(position) {
    const value = Math.max(0, Math.min(RAIL_TRAVEL_MM, Number(position) || 0));
    // 0 мм: правая грань каретки касается правой жёлтой опоры.
    // 347 мм: левая грань каретки касается левой жёлтой опоры.
    const x = 736 - value * (352 / RAIL_TRAVEL_MM);
    ["#cell-robot"].forEach((selector) => {
        const node = $(selector);
        if (node) node.setAttribute("transform", "translate(" + x.toFixed(1) + " 0)");
    });
}

function renderArm(joints) {
    const p = joints || {"1": 500, "10": 500, "11": 375, "16": 500};
    const q1 = (Number(p["1"]) - 500) / POS_PER_DEG * Math.PI / 180;
    const q2 = (90 - (Number(p["10"]) - 500) / POS_PER_DEG) * Math.PI / 180;
    const q3 = (375 - Number(p["11"])) / POS_PER_DEG * Math.PI / 180;
    const q4 = (500 - Number(p["16"])) / POS_PER_DEG * Math.PI / 180;
    const a23 = q2 + q3;
    const phi = a23 + q4;
    const rElbow = L2 * Math.cos(q2);
    const zElbow = L1 + L2 * Math.sin(q2);
    const rWrist = rElbow + L3 * Math.cos(a23);
    const zWrist = zElbow + L3 * Math.sin(a23);
    const rTool = rWrist + L4 * Math.cos(phi);
    const zTool = zWrist + L4 * Math.sin(phi);
    const normal = phi - Math.PI / 2;
    const forkOffset = 39.5;
    const forkLength = 120;
    const forkWidth = 7;
    const rFork = rTool + forkOffset * Math.cos(normal);
    const zFork = zTool + forkOffset * Math.sin(normal);
    const rEnd = rFork + forkLength * Math.cos(phi);
    const zEnd = zFork + forkLength * Math.sin(phi);

    const side = (r, z) => [78 + r * .54, 420 - (z - BASE_Z) * .54];
    const sideShoulder = side(0, BASE_Z + L1);
    const sideElbow = side(rElbow, BASE_Z + zElbow);
    const sideWrist = side(rWrist, BASE_Z + zWrist);
    const sideTool = side(rTool, BASE_Z + zTool);

    const path = (a, b) => "M " + a[0].toFixed(1) + " " + a[1].toFixed(1) + " L " + b[0].toFixed(1) + " " + b[1].toFixed(1);
    const setPath = (selector, value) => { const node = $(selector); if (node) node.setAttribute("d", value); };
    const setCircle = (selector, point) => { const node = $(selector); if (node) { node.setAttribute("cx", point[0]); node.setAttribute("cy", point[1]); } };

    setCircle("#side-shoulder", sideShoulder);
    setCircle("#side-elbow", sideElbow);
    setCircle("#side-wrist", sideWrist);
    setCircle("#side-tool", sideTool);
    setPath("#side-l2", path(sideShoulder, sideElbow));
    setPath("#side-l3", path(sideElbow, sideWrist));
    setPath("#side-l4", path(sideWrist, sideTool));
    // Строго связываем вилы с концом последнего звена в боковой проекции.
    // Короткое крепление перпендикулярно L4, затем две вилы идут параллельно L4.
    const screenScale = .54;
    const screenDirection = [Math.cos(phi), -Math.sin(phi)];
    const screenNormal = [Math.sin(phi), Math.cos(phi)];
    const sideForkCenter = [
        sideTool[0] + screenNormal[0] * forkOffset * screenScale,
        sideTool[1] + screenNormal[1] * forkOffset * screenScale,
    ];
    const sideFork = sideForkCenter;
    const sideEnd = [
        sideForkCenter[0] + screenDirection[0] * forkLength * screenScale,
        sideForkCenter[1] + screenDirection[1] * forkLength * screenScale,
    ];
    setPath("#side-mount", path(sideTool, sideForkCenter));
    const sideForkA = [sideForkCenter[0] + screenNormal[0] * forkWidth * screenScale, sideForkCenter[1] + screenNormal[1] * forkWidth * screenScale];
    const sideForkB = [sideForkCenter[0] - screenNormal[0] * forkWidth * screenScale, sideForkCenter[1] - screenNormal[1] * forkWidth * screenScale];
    const sideEndA = [sideEnd[0] + screenNormal[0] * forkWidth * screenScale, sideEnd[1] + screenNormal[1] * forkWidth * screenScale];
    const sideEndB = [sideEnd[0] - screenNormal[0] * forkWidth * screenScale, sideEnd[1] - screenNormal[1] * forkWidth * screenScale];
    setPath("#side-forks-a", path(sideForkA, sideEndA));
    setPath("#side-forks-b", path(sideForkB, sideEndB));
    setPath("#side-crossbar", path(sideForkA, sideForkB));

    // В SVG ось Y направлена вниз. Поэтому для вида сверху положительное
    // увеличение ID 1 (физически против часовой стрелки) отображаем с
    // инвертированным экранным углом. Остальные проекции не меняем.
    const q1Top = -q1;
    const top = (r) => [660 + r * .30 * Math.cos(q1Top), 240 + r * .30 * Math.sin(q1Top)];
    const topShoulder = top(0), topElbow = top(rElbow), topWrist = top(rWrist), topTool = top(rTool);
    const topFork = top(rFork), topEnd = top(rEnd);
    setPath("#top-l2", path(topShoulder, topElbow));
    setPath("#top-l3", path(topElbow, topWrist));
    setPath("#top-l4", path(topWrist, topTool));
    setPath("#top-forks-a", path(topFork, topEnd));
    const topForkB = [topFork[0] + 4 * Math.sin(q1Top), topFork[1] - 4 * Math.cos(q1Top)];
    const topEndB = [topEnd[0] + 4 * Math.sin(q1Top), topEnd[1] - 4 * Math.cos(q1Top)];
    setPath("#top-forks-b", path(topForkB, topEndB));
    setPath("#top-crossbar", path(topFork, topForkB));
    setCircle("#top-shoulder", topShoulder);
    setCircle("#top-elbow", topElbow);
    setCircle("#top-wrist", topWrist);
    setCircle("#top-tool", topTool);

    const project = (r, z) => {
        const x = r * Math.cos(q1);
        const y = r * Math.sin(q1);
        return [1100 + (x - y) * .34, 420 - (z - BASE_Z) * .34 + (x + y) * .09];
    };
    const isoShoulder = project(0, BASE_Z + L1);
    const isoElbow = project(rElbow, BASE_Z + zElbow);
    const isoWrist = project(rWrist, BASE_Z + zWrist);
    const isoTool = project(rTool, BASE_Z + zTool);
    const isoFork = project(rFork, BASE_Z + zFork);
    const isoEnd = project(rEnd, BASE_Z + zEnd);
    setPath("#iso-base", "M 1100 420 L " + isoShoulder[0].toFixed(1) + " " + isoShoulder[1].toFixed(1));
    setPath("#iso-l2", path(isoShoulder, isoElbow));
    setPath("#iso-l3", path(isoElbow, isoWrist));
    setPath("#iso-l4", path(isoWrist, isoTool));
    setPath("#iso-mount", path(isoTool, isoFork));
    setPath("#iso-forks-a", path(isoFork, isoEnd));
    const isoForkB = [isoFork[0] + 3, isoFork[1]];
    const isoEndB = [isoEnd[0] + 3, isoEnd[1]];
    setPath("#iso-forks-b", path(isoForkB, isoEndB));
    setPath("#iso-crossbar", path(isoFork, isoForkB));
    setCircle("#iso-shoulder", isoShoulder);
    setCircle("#iso-elbow", isoElbow);
    setCircle("#iso-wrist", isoWrist);
    setCircle("#iso-tool", isoTool);
}

function updateJointInputs(joints) {
    Object.entries(joints || {}).forEach(([sid, value]) => {
        const slider = $("[data-joint=\"" + sid + "\"]");
        const output = $("[data-output=\"" + sid + "\"]");
        if (slider && document.activeElement !== slider) slider.value = value;
        if (output) output.textContent = value;
    });
}

function updateAuxServoInputs(auxServos) {
    Object.entries(auxServos || {}).forEach(([sid, item]) => {
        const value = Number(item && item.position);
        const slider = $("[data-aux-servo=\"" + sid + "\"]");
        const output = $("[data-aux-output=\"" + sid + "\"]");
        if (slider && document.activeElement !== slider) slider.value = value;
        if (output) output.textContent = value;
    });
}

function dashboardTwinApi() {
    const frame = $("#dashboard-twin-frame");
    try {
        return frame?.contentWindow?.BERETSRoutePreview || null;
    } catch (error) {
        return null;
    }
}

function syncDashboardTwin(data) {
    const frame = $("#dashboard-twin-frame");
    const status = $("#dashboard-twin-status");
    if (!frame || !status) return;
    const preview = dashboardTwinApi();
    if (!preview?.ready) {
        status.textContent = "загрузка 3D";
        status.className = "status-chip inactive";
        return;
    }
    const joints = data?.manipulator?.joints || {};
    preview.setPose({
        rail: Number(data?.rail?.position || 0),
        j1: Number(joints["1"] ?? 500),
        j10: Number(joints["10"] ?? 500),
        j11: Number(joints["11"] ?? 375),
        j16: Number(joints["16"] ?? 500),
    });
    const connected = Boolean(data?.manipulator?.connected || data?.rail?.connected);
    status.textContent = connected ? "текущее положение" : "демонстрационный режим";
    status.className = "status-chip " + (connected ? "active" : "inactive");
}

function renderState(data) {
    latestState = data;
    syncDashboardTwin(data);
    if (data.containers?.service_required?.type === "reconcile") {
        const serviceModal = $("#inventory-service-modal");
        if (serviceModal) serviceModal.hidden = true;
    } else if (data.containers?.service_required) {
        showInventoryService(data.containers.service_required);
    }
    const operational = Boolean(data.system.operational);
    const armActive = operational && data.manipulator.connected;
    const beltActive = operational && data.conveyor.connected && data.conveyor.running;
    const visionActive = operational && data.vision.connected;
    setText("#metric-arm", armActive ? "Активен" : "Неактивен");
    setText("#metric-conveyor", beltActive ? "Активен" : "Неактивен");
    setText("#metric-vision", visionActive ? "Активно" : "Неактивно");
    setDot("#metric-arm-dot", armActive);
    setDot("#metric-conveyor-dot", beltActive);
    setDot("#metric-vision-dot", visionActive);
    setText("#system-mode-status", operational ? "активен" : "неактивен");
    const modeStatus = $("#system-mode-status");
    if (modeStatus) modeStatus.className = "status-chip " + (operational ? "active" : "inactive");
    setText("#mode-system-state", operational ? "система работает" : "ожидание запуска");
    const startSystem = $("#start-system");
    if (startSystem) {
        startSystem.textContent = operational ? "Сортировка запущена" : "Запустить сортировку";
        startSystem.disabled = operational;
    }
    setText("#last-event", data.logs[0] ? data.logs[0].message : "—");
    setText("#current-operator", data.system.current_operator || "не назначен");
    setText("#last-update", "обновлено " + data.system.updated_at);
    const total = Object.values(data.vision.counts || {}).reduce((sum, value) => sum + Number(value || 0), 0);
    setText("#hero-total", total);
    setText("#dash-count-red", data.vision.counts["красное"] || 0);
    setText("#dash-count-green", data.vision.counts["зелёное"] || 0);
    setText("#dash-count-yellow", data.vision.counts["жёлтое"] || 0);
    setText("#conveyor-state", beltActive ? "активна" : "неактивна");
    const conveyorState = $("#conveyor-state");
    if (conveyorState) conveyorState.className = "status-chip " + (beltActive ? "active" : "inactive");
    setText("#belt-state-text", data.conveyor.running ? "запущена" : "остановлена");
    $$("[data-conveyor]").forEach((button) => {
        const selected =
            (button.dataset.conveyor === "start" && data.conveyor.running) ||
            (button.dataset.conveyor === "stop" && !data.conveyor.running);
        button.className = selected ? "primary-button" : "quiet-button";
    });
    setText("#dosage-rate-text", Number(data.dispenser.rate_apples_min).toFixed(1));
    setText("#dispenser-rate-number", Number(data.dispenser.rate_apples_min).toFixed(0));
    setText("#dispenser-cycle-seconds", Number(data.dispenser.cycle_seconds).toFixed(1).replace(".", ","));
    const dispenserRate = $("#dispenser-rate");
    if (dispenserRate && document.activeElement !== dispenserRate) {
        dispenserRate.value = Number(data.dispenser.rate_apples_min);
    }
    setText("#dispenser-phase", data.dispenser.phase);
    setText("#dispenser-position", data.dispenser.position);
    setText("#dispenser-state", data.dispenser.running ? "работает" : "остановлен");
    const dispenserState = $("#dispenser-state");
    if (dispenserState) dispenserState.classList.toggle("active", data.dispenser.running);
    $$("[data-dispenser]").forEach((button) => {
        const selected =
            (button.dataset.dispenser === "start" && data.dispenser.running) ||
            (button.dataset.dispenser === "stop" && !data.dispenser.running);
        button.className = selected ? "primary-button" : "quiet-button";
    });
    const dispenserSlider = document.querySelector('[data-aux-servo="6"]');
    if (dispenserSlider) dispenserSlider.disabled = data.dispenser.running;
    setText(
        "#zone-sorting-state",
        data.zone_sorting.running ? "работает" : "остановлена"
    );
    setText("#zone-sorting-phase", data.zone_sorting.phase);
    setText("#zone-active-tracks", data.zone_sorting.active_tracks);
    setText("#zone-sorting-fault", data.zone_sorting.fault || "—");
    const zoneSortingState = $("#zone-sorting-state");
    if (zoneSortingState) {
        zoneSortingState.className =
            "status-chip " + (data.zone_sorting.running ? "active" : "inactive");
    }
    $$("[data-zone-sorting]").forEach((button) => {
        const selected =
            (button.dataset.zoneSorting === "start" && data.zone_sorting.running) ||
            (button.dataset.zoneSorting === "stop" && !data.zone_sorting.running);
        button.className = selected ? "primary-button" : "quiet-button";
    });
    $$("[data-gate-preset]").forEach((button) => {
        button.disabled = data.zone_sorting.running;
        const sid = button.dataset.gateId;
        const position = Number(data.aux_servos[sid]?.position);
        const selected =
            (button.dataset.gatePreset === "open" && position === 500) ||
            (button.dataset.gatePreset === "closed" && position === 690);
        button.className = selected ? "primary-button" : "quiet-button";
    });
    $$("[data-dispenser-preset]").forEach((button) => {
        button.disabled = data.dispenser.running;
        const position = Number(data.aux_servos["6"]?.position);
        const selected =
            (button.dataset.dispenserPreset === "capture" && position === 500) ||
            (button.dataset.dispenserPreset === "feed" && position === 200);
        button.className = selected ? "primary-button" : "quiet-button";
    });
    setText("#bin-red", data.containers.sorting["красное"]);
    setText("#bin-green", data.containers.sorting["зелёное"]);
    setText("#bin-yellow", data.containers.sorting["жёлтое"]);
    $$('[data-manual-exchange]').forEach((button) => {
        button.disabled = Boolean(
            data.system.operational
            || data.zone_sorting.running
            || data.container_exchange?.active
            || data.route_execution?.running
        );
    });
    setText("#empty-stack-count", data.containers.empty_stack);
    setText("#full-red-count", data.containers.full_stacks["красное"]);
    setText("#full-green-count", data.containers.full_stacks["зелёное"]);
    setText("#full-yellow-count", data.containers.full_stacks["жёлтое"]);
    fillStack("#empty-stack-visual", data.containers.empty_stack);
    fillStack("#full-red-visual", data.containers.full_stacks["красное"]);
    fillStack("#full-green-visual", data.containers.full_stacks["зелёное"]);
    fillStack("#full-yellow-visual", data.containers.full_stacks["жёлтое"]);
    setText("#sidebar-empty-count", `${data.containers.empty_stack} / 6`);
    setText("#sidebar-full-red", data.containers.full_stacks["красное"]);
    setText("#sidebar-full-green", data.containers.full_stacks["зелёное"]);
    setText("#sidebar-full-yellow", data.containers.full_stacks["жёлтое"]);
    const stockBusy = Boolean(data.system.operational || data.route_execution?.running || data.container_exchange?.active);
    $$('[data-stock-action]').forEach((button) => {
        if (button.dataset.stockAction === "add-empty") {
            button.disabled = stockBusy || Number(data.containers.empty_stack) >= 6;
        } else {
            const label = {red: "красное", green: "зелёное", yellow: "жёлтое"}[button.dataset.stockColor];
            button.disabled = stockBusy || Number(data.containers.full_stacks[label]) <= 0;
        }
    });
    setText("#pose-x", Number(data.manipulator.pose.x).toFixed(1));
    setText("#pose-y", Number(data.manipulator.pose.y).toFixed(1));
    setText("#pose-z", Number(data.manipulator.pose.z).toFixed(1));
    setText("#pose-phi", Number(data.manipulator.pose.phi).toFixed(1));
    const railMarker = $("#rail-position");
    if (railMarker) railMarker.style.left = Math.max(0, Math.min(100, data.rail.position / RAIL_TRAVEL_MM * 100)) + "%";
    const railSlider = $("#rail-target");
    if (railSlider && document.activeElement !== railSlider) railSlider.value = data.rail.position;
    const railTargetMm = $("#rail-target-mm");
    if (railTargetMm && document.activeElement !== railTargetMm) railTargetMm.value = Number(data.rail.position || 0).toFixed(1);
    setText("#rail-current-mm", Number(data.rail.position || 0).toFixed(1));
    setText("#rail-reference-state", data.rail.homed ? "HOME выполнен" : "без HOME");
    const railReferenceState = $("#rail-reference-state");
    if (railReferenceState) railReferenceState.classList.toggle("ready", Boolean(data.rail.homed));
    const railSpeed = $("#rail-speed");
    if (railSpeed && document.activeElement !== railSpeed) railSpeed.value = data.rail.speed_percent || 100;
    setText("#rail-speed-number", data.rail.speed_percent || 100);
    setText("#rail-speed-pps", Number(data.rail.speed_steps_s || 0).toFixed(0) + " имп/с");
    renderRailPosition(data.rail.position);
    setText("#last-detection", data.vision.last_detection);
    setText("#detection-class", data.vision.last_detection);
    setText("#confidence", Math.round(data.vision.confidence * 100) + "%");
    setText("#vision-model", data.vision.model);
    setText("#vision-fps", Number(data.vision.fps).toFixed(1) + " FPS");
    setText("#camera-connection-text", data.vision.connected ? "Камера подключена" : "Камера не подключена");
    setText("#camera-connection-detail", data.vision.connected ? "YOLO передаёт результаты в панель" : "Запустите модуль YOLO для получения кадров и результатов");
    setText("#camera-fps-overlay", data.vision.connected ? Number(data.vision.fps).toFixed(1) + " FPS" : "—");
    const cameraFrame = $("#vision-live-frame");
    const cameraMessage = $("#camera-message");
    if (cameraFrame) {
        if (data.vision.connected) {
            if (cameraFrame.dataset.active !== "1" || cameraFrame.dataset.failed === "1") {
                cameraFrame.dataset.active = "1";
                cameraFrame.dataset.failed = "0";
                cameraFrame.src = "/vision/stream?t=" + Date.now();
            }
            cameraFrame.hidden = false;
            if (cameraMessage) cameraMessage.hidden = true;
        } else {
            cameraFrame.hidden = true;
            cameraFrame.dataset.active = "0";
            cameraFrame.removeAttribute("src");
            if (cameraMessage) cameraMessage.hidden = false;
        }
    }
    const confidence = $("#confidence-bar");
    if (confidence) confidence.style.width = Math.round(data.vision.confidence * 100) + "%";
    const detectionApple = $("#detection-apple");
    if (detectionApple) {
        const color = data.vision.last_detection.indexOf("зел") >= 0 ? "green" : data.vision.last_detection.indexOf("жёл") >= 0 ? "yellow" : "red";
        detectionApple.className = "apple " + color;
    }
    setText("#count-red", data.vision.counts["красное"] || 0);
    setText("#count-green", data.vision.counts["зелёное"] || 0);
    setText("#count-yellow", data.vision.counts["жёлтое"] || 0);
    setDot("#health-controller-dot", data.system.controller_connected);
    setDot("#health-servo-dot", data.manipulator.connected);
    setDot("#health-camera-dot", data.vision.connected);
    setDot("#health-rail-dot", data.rail.connected);
    setDot("#health-conveyor-dot", data.conveyor.connected);
    setHealth("#health-controller", data.system.controller_connected);
    setHealth("#health-servo", data.manipulator.connected);
    setHealth("#health-camera", data.vision.connected);
    setHealth("#health-rail", data.rail.connected);
    setHealth("#health-conveyor", data.conveyor.connected);
    updateJointInputs(data.manipulator.joints);
    updateAuxServoInputs(data.aux_servos);
    renderArm(data.manipulator.joints);
    renderBeltApple(data.conveyor);
    renderNotifications(data.system.notifications || []);
    renderLogs(data.logs, "#dashboard-log", true);
    renderLogs(data.logs, "#full-log", false);
}

function setHealth(selector, connected) {
    const node = $(selector);
    if (!node) return;
    node.textContent = connected ? "Подключен" : "Нет связи";
    node.classList.toggle("offline", !connected);
}

async function refreshState() {
    try {
        const response = await fetch("/api/state", {cache: "no-store"});
        const result = await response.json();
        if (result.ok) renderState(result.state);
    } catch (error) {
        toast("Не удалось получить состояние системы", true);
    }
}

async function sendCommand(payload, message = "Команда выполнена") {
    try {
        const result = await postJson("/api/command", payload);
        renderState(result.state);
        toast(message);
        return result;
    } catch (error) {
        toast(error.message, true);
        return null;
    }
}

function solveIK(x, y, z, phi) {
    const radius = Math.hypot(x, y);
    const wristZ = z - (BASE_Z + L1);
    const d2 = radius * radius + wristZ * wristZ;
    const cosQ3 = (d2 - L2 * L2 - L3 * L3) / (2 * L2 * L3);
    if (cosQ3 < -1 || cosQ3 > 1) return null;
    const q3 = -Math.acos(Math.max(-1, Math.min(1, cosQ3)));
    const q2 = Math.atan2(wristZ, radius) - Math.atan2(L3 * Math.sin(q3), L2 + L3 * Math.cos(q3));
    const q4 = phi * Math.PI / 180 - q2 - q3;
    const q1 = Math.atan2(y, x);
    const deg = (r) => r * 180 / Math.PI;
    const q1d = deg(q1), q2d = deg(q2), q3d = deg(q3), q4d = deg(q4);
    const joints = {"1": Math.round(500 + q1d * POS_PER_DEG), "10": Math.round(500 + (90 - q2d) * POS_PER_DEG), "11": Math.round(375 - q3d * POS_PER_DEG), "16": Math.round(500 - q4d * POS_PER_DEG)};
    if (Object.values(joints).some((value) => value < 0 || value > 1000)) return null;
    return {joints, pose: {x, y, z, phi}};
}

function updateLocalJoints(joints, pose = null) {
    if (!latestState) return;
    latestState.manipulator.joints = {...latestState.manipulator.joints, ...joints};
    if (pose) latestState.manipulator.pose = pose;
    updateJointInputs(latestState.manipulator.joints);
    renderArm(latestState.manipulator.joints);
}

async function flushLiveCommand(key) {
    const channel = liveCommandChannels[key];
    if (!channel || channel.inFlight) return;
    channel.inFlight = true;
    while (channel.pending) {
        const payload = channel.pending;
        channel.pending = null;
        try {
            await postJson("/api/command", payload);
        } catch (error) {
            channel.pending = null;
            toast(error.message, true);
        }
    }
    channel.inFlight = false;
}

function queueLiveCommand(key, payload) {
    const channel = liveCommandChannels[key] || {inFlight: false, pending: null};
    liveCommandChannels[key] = channel;
    channel.pending = payload;
    flushLiveCommand(key);
}

function queueJoint(sid, value) {
    queueLiveCommand("joint" + sid, {
        action: "joint",
        id: sid,
        position: value,
        live: true,
    });
}

function queueAuxServo(sid, value) {
    clearTimeout(timers["aux" + sid]);
    timers["aux" + sid] = setTimeout(
        () => sendCommand(
            {action: "aux_servo", id: sid, position: value},
            "Положение ID " + sid + " обновлено"
        ),
        180
    );
}

function queuePose(solution) {
    if (!solution) return;
    updateLocalJoints(solution.joints, solution.pose);
    queueLiveCommand("pose", {action: "pose", ...solution.pose, live: true});
}

function selectedVisionZone() {
    const [color, phase] = ($("#zone-selector")?.value || "red.open").split(".");
    if (color === "ignore") {
        const index = Number(phase);
        return {color, phase, index, points: visionZones.ignore_zones[index]};
    }
    return {color, phase, points: visionZones.zones[color][phase]};
}

function visionFrameGeometry(canvas) {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const scale = Math.min(width / 640, height / 480);
    const frameWidth = 640 * scale;
    const frameHeight = 480 * scale;
    return {
        width,
        height,
        frameWidth,
        frameHeight,
        offsetX: (width - frameWidth) / 2,
        offsetY: (height - frameHeight) / 2,
    };
}

function renderVisionZones() {
    const canvas = $("#vision-zone-canvas");
    if (!canvas) return;
    const geometry = visionFrameGeometry(canvas);
    canvas.width = Math.max(1, Math.round(geometry.width));
    canvas.height = Math.max(1, Math.round(geometry.height));
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    const selected = selectedVisionZone();
    const colors = {red: "#ef5350", green: "#66bb6a", yellow: "#f6c945"};
    ["red", "green", "yellow"].forEach((color) => {
        ["open", "close"].forEach((phase) => {
            const points = visionZones.zones[color][phase];
            if (!points.length) return;
            const active = selected.color === color && selected.phase === phase;
            context.beginPath();
            points.forEach(([x, y], index) => {
                const px = geometry.offsetX + x * geometry.frameWidth;
                const py = geometry.offsetY + (1 - y) * geometry.frameHeight;
                if (index === 0) context.moveTo(px, py);
                else context.lineTo(px, py);
            });
            if (points.length >= 3) context.closePath();
            context.fillStyle = colors[color] + (phase === "open" ? "42" : "24");
            context.strokeStyle = colors[color];
            context.lineWidth = active ? 4 : 2;
            if (points.length >= 3) context.fill();
            context.stroke();
            points.forEach(([x, y], index) => {
                const px = geometry.offsetX + x * geometry.frameWidth;
                const py = geometry.offsetY + (1 - y) * geometry.frameHeight;
                context.beginPath();
                context.arc(px, py, active ? 5 : 3, 0, Math.PI * 2);
                context.fillStyle = colors[color];
                context.fill();
                if (active) {
                    context.fillStyle = "#fff";
                    context.font = "11px sans-serif";
                    context.fillText(String(index + 1), px + 7, py - 7);
                }
            });
        });
    });
    (visionZones.ignore_zones || []).forEach((points, index) => {
        if (!points.length) return;
        const active = selected.color === "ignore" && selected.index === index;
        context.beginPath();
        points.forEach(([x, y], pointIndex) => {
            const px = geometry.offsetX + x * geometry.frameWidth;
            const py = geometry.offsetY + (1 - y) * geometry.frameHeight;
            if (pointIndex === 0) context.moveTo(px, py);
            else context.lineTo(px, py);
        });
        if (points.length >= 3) context.closePath();
        context.fillStyle = "rgba(0,0,0,.58)";
        context.strokeStyle = active ? "#ffffff" : "#111111";
        context.lineWidth = active ? 4 : 3;
        if (points.length >= 3) context.fill();
        context.stroke();
        points.forEach(([x, y], pointIndex) => {
            const px = geometry.offsetX + x * geometry.frameWidth;
            const py = geometry.offsetY + (1 - y) * geometry.frameHeight;
            context.beginPath();
            context.arc(px, py, active ? 5 : 3, 0, Math.PI * 2);
            context.fillStyle = active ? "#ffffff" : "#111111";
            context.fill();
            if (active) {
                context.fillStyle = "#ffffff";
                context.font = "11px sans-serif";
                context.fillText(String(pointIndex + 1), px + 7, py - 7);
            }
        });
    });

    context.strokeStyle = "rgba(255,255,255,.8)";
    context.lineWidth = 1.5;
    context.beginPath();
    context.moveTo(geometry.offsetX, geometry.offsetY + geometry.frameHeight);
    context.lineTo(geometry.offsetX + 42, geometry.offsetY + geometry.frameHeight);
    context.moveTo(geometry.offsetX, geometry.offsetY + geometry.frameHeight);
    context.lineTo(geometry.offsetX, geometry.offsetY + geometry.frameHeight - 42);
    context.stroke();
    context.fillStyle = "#fff";
    context.font = "11px sans-serif";
    context.fillText("X", geometry.offsetX + 46, geometry.offsetY + geometry.frameHeight - 4);
    context.fillText("Y", geometry.offsetX + 5, geometry.offsetY + geometry.frameHeight - 47);
    context.fillText("(0,0)", geometry.offsetX + 6, geometry.offsetY + geometry.frameHeight - 7);

    const completed = ["red", "green", "yellow"].reduce(
        (total, color) => total +
            ["open", "close"].filter((phase) => visionZones.zones[color][phase].length >= 3).length,
        0
    );
    const ignored = (visionZones.ignore_zones || []).filter(
        (polygon) => polygon.length >= 3
    ).length;
    setText("#zone-calibration-status", completed + " / 6 · игнор: " + ignored);
    setText("#zone-point-count", selected.points.length);
}

async function loadVisionZones() {
    if (!$("#vision-zone-canvas")) return;
    try {
        const response = await fetch("/api/vision/zones", {cache: "no-store"});
        const result = await response.json();
        if (!result.ok) throw new Error(result.error || "Не удалось загрузить зоны");
        visionZones = result.calibration;
        delete visionZones.complete;
        if (!Array.isArray(visionZones.ignore_zones)) {
            visionZones.ignore_zones = [[], [], [], [], [], []];
        }
        while (visionZones.ignore_zones.length < 6) {
            visionZones.ignore_zones.push([]);
        }
        renderVisionZones();
    } catch (error) {
        toast(error.message, true);
    }
}

function addVisionZonePoint(event) {
    const canvas = $("#vision-zone-canvas");
    if (!canvas || !latestState?.vision?.connected) {
        toast("Сначала подключите камеру", true);
        return;
    }
    const rect = canvas.getBoundingClientRect();
    const geometry = visionFrameGeometry(canvas);
    const px = event.clientX - rect.left;
    const py = event.clientY - rect.top;
    const x = (px - geometry.offsetX) / geometry.frameWidth;
    const y = 1 - (py - geometry.offsetY) / geometry.frameHeight;
    if (x < 0 || x > 1 || y < 0 || y > 1) return;
    selectedVisionZone().points.push([
        Math.round(x * 1000000) / 1000000,
        Math.round(y * 1000000) / 1000000,
    ]);
    renderVisionZones();
}

function svgPoint(event, svg) {
    const point = svg.createSVGPoint();
    point.x = event.clientX;
    point.y = event.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
}

function beginDrag(kind, event) {
    if (systemIsRunning() && !manualControlUnlocked) {
        event.preventDefault();
        showConfirm("Система работает. Разрешить ручное управление манипулятором?", () => {
            manualControlUnlocked = true;
            toast("Ручное управление разрешено");
        });
        return;
    }
    dragKind = kind;
    event.target.setPointerCapture(event.pointerId);
}

function dragArm(event) {
    if (!dragKind || !latestState) return;
    const svg = $("#arm-visual");
    const point = svgPoint(event, svg);
    const joints = latestState.manipulator.joints;
    const q1 = (Number(joints["1"]) - 500) / POS_PER_DEG * Math.PI / 180;
    const currentPhi = Number(latestState.manipulator.pose.phi) || 0;

    if (dragKind === "elbow") {
        const radius = Math.max(30, (point.x - 78) / .54);
        const relativeZ = (420 - point.y) / .54 - L1;
        const q2 = Math.atan2(relativeZ, radius) * 180 / Math.PI;
        const value = Math.max(0, Math.min(1000, Math.round(500 + (90 - q2) * POS_PER_DEG)));
        updateLocalJoints({"10": value});
        queueJoint("10", value);
        return;
    }

    if (dragKind === "wrist") {
        const radius = Math.max(40, (point.x - 78) / .54);
        const relativeZ = (420 - point.y) / .54;
        const x = radius * Math.cos(q1);
        const y = radius * Math.sin(q1);
        queuePose(solveIK(x, y, BASE_Z + relativeZ, currentPhi));
        return;
    }

    if (dragKind === "top") {
        const x = (point.x - 660) / .30;
        const y = (point.y - 240) / .30;
        const radius = Math.hypot(x, y);
        const q1Target = -Math.atan2(y, x);
        const targetX = radius * Math.cos(q1Target);
        const targetY = radius * Math.sin(q1Target);
        queuePose(solveIK(targetX, targetY, Number(latestState.manipulator.pose.z), currentPhi));
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const cameraFrame = $("#vision-live-frame");
    cameraFrame?.addEventListener("error", () => {
        cameraFrame.dataset.failed = "1";
        cameraFrame.hidden = true;
        const cameraMessage = $("#camera-message");
        if (cameraMessage) cameraMessage.hidden = false;
        setText("#camera-connection-text", "Нет видеопотока");
        setText("#camera-connection-detail", "YOLO подключена, но JPEG-кадры пока не поступают");
    });
    const zoneCanvas = $("#vision-zone-canvas");
    zoneCanvas?.addEventListener("click", addVisionZonePoint);
    zoneCanvas?.addEventListener("pointermove", (event) => {
        const rect = zoneCanvas.getBoundingClientRect();
        const geometry = visionFrameGeometry(zoneCanvas);
        const x = (event.clientX - rect.left - geometry.offsetX) / geometry.frameWidth;
        const y = 1 - (event.clientY - rect.top - geometry.offsetY) / geometry.frameHeight;
        setText(
            "#zone-cursor-coordinate",
            x >= 0 && x <= 1 && y >= 0 && y <= 1
                ? "X " + x.toFixed(3) + ", Y " + y.toFixed(3)
                : "X —, Y —"
        );
    });
    $("#zone-selector")?.addEventListener("change", renderVisionZones);
    $("#zone-undo")?.addEventListener("click", () => {
        selectedVisionZone().points.pop();
        renderVisionZones();
    });
    $("#zone-clear")?.addEventListener("click", () => {
        const selected = selectedVisionZone();
        if (selected.color === "ignore") {
            visionZones.ignore_zones[selected.index] = [];
        } else {
            visionZones.zones[selected.color][selected.phase] = [];
        }
        renderVisionZones();
    });
    $("#zone-save")?.addEventListener("click", async () => {
        try {
            const result = await postJson("/api/vision/zones", visionZones);
            visionZones = result.calibration;
            delete visionZones.complete;
            renderVisionZones();
            toast("Зоны камеры сохранены");
        } catch (error) {
            toast(error.message, true);
        }
    });
    if (zoneCanvas && window.ResizeObserver) {
        new ResizeObserver(renderVisionZones).observe(zoneCanvas);
    }
    $("#confirm-cancel")?.addEventListener("click", closeConfirm);
    $("#confirm-accept")?.addEventListener("click", () => {
        const callback = confirmCallback;
        closeConfirm();
        if (callback) callback();
    });

    $$("[data-command]").forEach((button) => {
        button.addEventListener("click", () => {
            if (button.dataset.command === "stop") {
                sendCommand({action: "stop"}, "Экстренная остановка выполнена");
            } else {
                guarded("Система работает. Перевести манипулятор в HOME?", () => sendCommand({action: "home"}, "HOME выполнена"));
            }
        });
    });

    $("#start-system")?.addEventListener("click", () => {
        openInventoryModal();
    });
    $("#inventory-cancel")?.addEventListener("click", () => { $("#inventory-modal").hidden = true; });
    $("#inventory-confirm")?.addEventListener("click", initializeInventoryAndStart);
    $("#home-start-confirm")?.addEventListener("click", performHomeAndStart);
    $("#home-start-cancel")?.addEventListener("click", () => { $("#home-start-modal").hidden = true; });
    $("#inventory-service-confirm")?.addEventListener("click", () => confirmInventoryService(false));
    $("#inventory-service-all")?.addEventListener("click", () => confirmInventoryService(true));
    $$('[data-stock-action]').forEach((button) => button.addEventListener("click", () => {
        openStockAdjustment(button.dataset.stockAction, button.dataset.stockColor || "");
    }));
    $("#stock-adjust-cancel")?.addEventListener("click", () => { $("#stock-adjust-modal").hidden = true; });
    $("#stock-adjust-confirm")?.addEventListener("click", () => confirmStockAdjustment(false));
    $("#stock-adjust-all")?.addEventListener("click", () => confirmStockAdjustment(true));
    $$('[data-manual-exchange]').forEach((button) => {
        button.addEventListener("click", () => {
            const color = button.dataset.manualExchange;
            showConfirm(
                "Конвейер остановлен, в цветном контейнере физически лежат два яблока. Запустить его замену?",
                () => startConfirmedContainerExchange(color),
            );
        });
    });

    $("#restart-system")?.addEventListener("click", () => {
        showConfirm(
            "Перезапустить отслеживание зон, конвейер и дозатор? Манипулятор и рельса двигаться не будут.",
            () => sendCommand(
                {action: "system_restart"},
                "Сортировочная система перезапущена"
            )
        );
    });

    $$(".joint-slider").forEach((slider) => {
        slider.addEventListener("pointerdown", (event) => {
            if (systemIsRunning() && !manualControlUnlocked) beginDrag("slider", event);
        });
        slider.addEventListener("input", () => {
            const sid = slider.dataset.joint;
            setText("[data-output=\"" + sid + "\"]", slider.value);
            if (!systemIsRunning() || manualControlUnlocked) {
                updateLocalJoints({[sid]: Number(slider.value)});
                queueJoint(sid, slider.value);
            }
        });
    });

    $$(".aux-servo-slider").forEach((slider) => {
        slider.addEventListener("pointerdown", (event) => {
            if (systemIsRunning() && !manualControlUnlocked) beginDrag("aux", event);
        });
        slider.addEventListener("input", () => {
            const sid = slider.dataset.auxServo;
            setText("[data-aux-output=\"" + sid + "\"]", slider.value);
            if (!systemIsRunning() || manualControlUnlocked) {
                queueAuxServo(sid, slider.value);
            }
        });
    });

    const ikButton = $("#ik-send");
    ikButton?.addEventListener("click", () => {
        const action = () => {
            const solution = solveIK(Number($("#ik-x").value), Number($("#ik-y").value), Number($("#ik-z").value), Number($("#ik-phi").value));
            if (!solution) {
                setText("#ik-result", "Точка недостижима или выходит за диапазон сервоприводов");
                toast("Точка недостижима", true);
                return;
            }
            postJson("/api/command", {action: "pose", ...solution.pose}).then((result) => {
                renderState(result.state);
                setText("#ik-result", "ID 1=" + result.solution.joints["1"] + ", ID 10=" + result.solution.joints["10"] + ", ID 11=" + result.solution.joints["11"] + ", ID 16=" + result.solution.joints["16"]);
                toast("Положение манипулятора обновлено");
            }).catch((error) => { setText("#ik-result", error.message); toast(error.message, true); });
        };
        guarded("Система работает. Перейти манипулятором в заданную точку?", action);
    });

    const rail = $("#rail-target");
    const railTargetMm = $("#rail-target-mm");
    const updateRailTargetPreview = (rawValue) => {
        const value = Math.max(0, Math.min(RAIL_TRAVEL_MM, Number(rawValue) || 0));
        if (rail) rail.value = value;
        if (railTargetMm && document.activeElement !== railTargetMm) railTargetMm.value = value.toFixed(1);
        const marker = $("#rail-position");
        if (marker) marker.style.left = (value / RAIL_TRAVEL_MM * 100) + "%";
        return value;
    };
    const moveRailToEnteredPosition = () => {
        const value = Number(railTargetMm?.value);
        if (!Number.isFinite(value) || value < 0 || value > RAIL_TRAVEL_MM) {
            toast("Введите положение рельсы от 0 до 347 мм", true);
            railTargetMm?.focus();
            return;
        }
        updateRailTargetPreview(value);
        const speed = Number($("#rail-speed")?.value || 100);
        guarded(
            "Система работает. Переместить рельсу в положение " + value.toFixed(1) + " мм?",
            () => sendCommand({action: "rail", target: value, speed}, "Рельса направлена в " + value.toFixed(1) + " мм")
        );
    };
    rail?.addEventListener("pointerdown", (event) => {
        if (systemIsRunning() && !manualControlUnlocked) beginDrag("rail", event);
    });
    rail?.addEventListener("input", () => {
        updateRailTargetPreview(rail.value);
        if (!systemIsRunning() || manualControlUnlocked) {
            clearTimeout(timers.rail);
            const speed = Number($("#rail-speed")?.value || 100);
            timers.rail = setTimeout(() => sendCommand({action: "rail", target: rail.value, speed}, "Положение рельсы обновлено"), 180);
        }
    });
    railTargetMm?.addEventListener("input", () => {
        const value = Number(railTargetMm.value);
        if (Number.isFinite(value) && value >= 0 && value <= RAIL_TRAVEL_MM) updateRailTargetPreview(value);
    });
    railTargetMm?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            moveRailToEnteredPosition();
        }
    });
    $("#rail-move")?.addEventListener("click", moveRailToEnteredPosition);
    const railSpeed = $("#rail-speed");
    railSpeed?.addEventListener("input", () => {
        const percent = Number(railSpeed.value);
        const maximum = Number(latestState?.rail?.max_speed_steps_s || 2000);
        setText("#rail-speed-number", percent);
        setText("#rail-speed-pps", Math.round(maximum * percent / 100) + " имп/с");
        clearTimeout(timers.railSpeed);
        timers.railSpeed = setTimeout(
            () => sendCommand(
                {action: "rail_speed", speed: percent},
                "Скорость рельсы установлена: " + percent + "%"
            ),
            180
        );
    });
    $("#rail-home")?.addEventListener("click", () => guarded("Система работает. Выполнить HOME рельсы?", () => sendCommand({action: "rail_home"}, "HOME рельсы выполнен")));

    $$("[data-dispenser]").forEach((button) => {
        button.addEventListener("click", () => {
            const command = button.dataset.dispenser;
            guarded(
                "Система работает. Ручная остановка дозатора остановит всю сортировку. Продолжить?",
                () => sendCommand(
                    {action: "dispenser_" + command},
                    command === "start" ? "Дозатор запущен" : "Дозатор остановлен"
                )
            );
        });
    });
    const dispenserRate = $("#dispenser-rate");
    dispenserRate?.addEventListener("input", () => {
        setText("#dispenser-rate-number", dispenserRate.value);
        clearTimeout(timers.dispenserRate);
        timers.dispenserRate = setTimeout(
            () => sendCommand(
                {action: "dispenser_rate", rate: dispenserRate.value},
                systemIsRunning()
                    ? "Система работает: скорость дозатора обновлена"
                    : "Скорость дозатора обновлена"
            ),
            250
        );
    });

    $$("[data-gate-preset]").forEach((button) => {
        button.addEventListener("click", () => {
            const sid = button.dataset.gateId;
            const preset = button.dataset.gatePreset;
            sendCommand(
                {action: "gate_preset", id: sid, preset},
                "Заслонка ID" + sid +
                    (preset === "open" ? " открыта" : " закрыта")
            );
        });
    });

    $$("[data-dispenser-preset]").forEach((button) => {
        button.addEventListener("click", () => {
            const preset = button.dataset.dispenserPreset;
            sendCommand(
                {action: "dispenser_preset", preset},
                preset === "capture"
                    ? "Дозатор переведён в захват яблока"
                    : "Дозатор подаёт яблоко на конвейер"
            );
        });
    });

    $$("[data-zone-sorting]").forEach((button) => {
        button.addEventListener("click", () => {
            const command = button.dataset.zoneSorting;
            guarded(
                "Система работает. Ручная остановка отслеживания остановит всю сортировку. Продолжить?",
                () => sendCommand(
                    {action: "zone_sorting_" + command},
                    command === "start"
                        ? "Отслеживание зон включено"
                        : "Зонная сортировка остановлена"
                )
            );
        });
    });

    $$("[data-conveyor]").forEach((button) => {
        button.addEventListener("click", () => {
            const command = button.dataset.conveyor;
            guarded("Система работает. Изменить состояние конвейерной ленты?", () => sendCommand({action: "conveyor", command}, command === "start" ? "Лента запущена" : "Лента остановлена"));
        });
    });

    const arm = $("#arm-visual");
    arm?.addEventListener("pointerdown", (event) => {
        const target = event.target.closest("[data-arm-handle]");
        if (target) beginDrag(target.dataset.armHandle, event);
    });
    arm?.addEventListener("pointermove", dragArm);
    arm?.addEventListener("pointerup", () => { dragKind = null; });
    arm?.addEventListener("pointercancel", () => { dragKind = null; });

    $("#refresh-logs")?.addEventListener("click", refreshState);

    const dashboardTwinFrame = $("#dashboard-twin-frame");
    dashboardTwinFrame?.addEventListener("load", () => {
        let attempts = 0;
        const connectPreview = () => {
            attempts += 1;
            if (latestState) syncDashboardTwin(latestState);
            if (!dashboardTwinApi()?.ready && attempts < 40) {
                window.setTimeout(connectPreview, 100);
            } else if (!dashboardTwinApi()?.ready) {
                const status = $("#dashboard-twin-status");
                if (status) status.textContent = "3D недоступен";
            }
        };
        connectPreview();
    });

    const themeSelect = $("#setting-theme");
    if (themeSelect && window.BeretsPreferences) {
        themeSelect.value = window.BeretsPreferences.theme;
        themeSelect.addEventListener("change", () => window.BeretsPreferences.setTheme(themeSelect.value));
    }
    const languageSelect = $("#setting-language");
    if (languageSelect && window.BeretsPreferences) {
        languageSelect.value = window.BeretsPreferences.language;
        languageSelect.addEventListener("change", () => window.BeretsPreferences.setLanguage(languageSelect.value));
    }

    const fullStopDelay = $("#full-stop-delay");
    const railMaxSpeed = $("#rail-max-speed");
    if (fullStopDelay) {
        fetch("/api/settings/runtime")
            .then((response) => response.json())
            .then((result) => {
                if (!result.ok) throw new Error(result.error || "Настройки недоступны");
                fullStopDelay.value = result.settings.full_container_stop_delay_seconds;
                if (railMaxSpeed) railMaxSpeed.value = result.settings.rail_max_speed_steps_s;
            })
            .catch((error) => toast(error.message, true));
    }
    $("#runtime-settings-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
            const delay = Number(fullStopDelay.value);
            const maximum = Number(railMaxSpeed.value);
            const result = await postJson("/api/settings/runtime", {
                full_container_stop_delay_seconds: delay,
                rail_max_speed_steps_s: maximum,
            });
            fullStopDelay.value = result.settings.full_container_stop_delay_seconds;
            railMaxSpeed.value = result.settings.rail_max_speed_steps_s;
            toast("Параметры сохранены: " + fullStopDelay.value + " с; рельса до " + railMaxSpeed.value + " имп/с");
        } catch (error) {
            toast(error.message, true);
        }
    });

    $("#password-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
            await postJson("/api/account/password", {
                current_password: $("#password-current").value,
                new_password: $("#password-new").value,
                confirmation: $("#password-confirm").value,
            });
            event.target.reset();
            toast("Пароль изменён");
        } catch (error) {
            toast(error.message, true);
        }
    });

    $("#account-create-form")?.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
            await postJson("/api/accounts", {
                username: $("#account-username").value,
                display_name: $("#account-display-name").value,
                role: $("#account-role").value,
                password: $("#account-password").value,
            });
            toast("Сотрудник добавлен");
            window.setTimeout(() => window.location.reload(), 350);
        } catch (error) {
            toast(error.message, true);
        }
    });

    $$(".account-delete").forEach((button) => {
        button.addEventListener("click", async () => {
            const password = window.prompt("Введите свой пароль администратора для удаления учётной записи:");
            if (!password) return;
            try {
                const response = await fetch("/api/accounts/" + encodeURIComponent(button.dataset.username), {
                    method: "DELETE",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({current_password: password}),
                });
                const result = await response.json();
                if (!result.ok) throw new Error(result.error || "Удаление отклонено");
                toast("Учётная запись удалена");
                window.setTimeout(() => window.location.reload(), 350);
            } catch (error) {
                toast(error.message, true);
            }
        });
    });

    loadVisionZones();
    refreshState();
    if (document.body.dataset.inventoryOnEntry === "1") {
        window.setTimeout(openInventoryModal, 150);
    }
    setInterval(refreshState, 2500);
});
