(() => {
    const $ = (selector) => document.querySelector(selector);
    const routeLabels = {
        red: "Красный контейнер",
        green: "Зелёный контейнер",
        yellow: "Жёлтый контейнер",
        service: "Служебные точки",
    };
    const fieldIds = {
        name: "#route-point-name",
        rail: "#route-point-rail",
        j1: "#route-point-j1",
        j10: "#route-point-j10",
        j11: "#route-point-j11",
        j16: "#route-point-j16",
        speed: "#route-point-speed",
        time: "#route-point-time",
    };
    let routes = {red: [], green: [], yellow: [], service: []};
    let profiles = {red: {full: {}, empty: {}}, green: {full: {}, empty: {}}, yellow: {full: {}, empty: {}}};
    let selectedRoute = "red";
    let selectedIndex = -1;
    let selectedFullLevel = 1;
    let selectedEmptyLevel = 6;
    let latestState = null;
    let previewMode = "selected";
    let dirty = false;
    let animationToken = 0;
    let liveAnimationToken = 0;
    let livePose = null;
    let liveExecutionKey = null;
    let liveExecutionIndex = 0;
    let copiedPoint = null;
    const blockLabels = {
        pickup_common: "ЗАБРАТЬ ПОЛНЫЙ КОНТЕЙНЕР · ОБЩИЙ БЛОК",
        full_level: "ПОСТАВИТЬ ПОЛНЫЙ · ПРОФИЛЬ ВЫСОТЫ 1–4",
        transition_common: "ОБЩАЯ ПЕРЕХОДНАЯ ТОЧКА ПОСЛЕ СТОПКИ",
        empty_level: "ЗАБРАТЬ ПУСТОЙ · ПРОФИЛЬ ВЫСОТЫ 1–6",
        return_to_station: "ВОЗВРАТ К ЦВЕТНОЙ СТАНЦИИ",
        delivery_color: "УСТАНОВИТЬ ПУСТОЙ · ЦВЕТОВОЙ БЛОК",
        home: "HOME · ЗАВЕРШЕНИЕ",
    };

    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }

    function selectedLevel(kind) {
        return kind === "full" ? selectedFullLevel : selectedEmptyLevel;
    }

    function isBaselineSelection() {
        return selectedRoute === "service" || (selectedFullLevel === 1 && selectedEmptyLevel === 6);
    }

    function isPointEditable(point) {
        return Boolean(point);
    }

    function calibrationScopeText() {
        if (selectedRoute === "service") return "Сервисная калибровка: доступны все точки служебного маршрута.";
        return `Сервисная калибровка: доступны все точки маршрута. Профиль полной стопки — уровень ${selectedFullLevel}, профиль пустой стопки — уровень ${selectedEmptyLevel}.`;
    }

    function applyEditPermissions() {
        const point = currentPoint();
        const editable = isPointEditable(point);
        Object.values(fieldIds).forEach((selector) => { $(selector).disabled = !editable; });
        $("#route-save-point").disabled = !editable;
        const structureLocked = false;
        $("#route-add-before").disabled = structureLocked;
        $("#route-add-after").disabled = structureLocked;
        $("#route-paste-before").disabled = structureLocked;
        $("#route-paste-after").disabled = structureLocked;
        $("#route-delete-point").disabled = structureLocked || !editable;
        $("#route-move-up").disabled = structureLocked || !editable || selectedIndex <= 0;
        $("#route-move-down").disabled = structureLocked || !editable || selectedIndex < 0 || selectedIndex >= resolvedRoute().length - 1;
        $("#route-calibration-scope").textContent = calibrationScopeText();
        $("#route-calibration-scope").classList.remove("restricted");
    }

    function resolvedRouteFor(routeName, fullLevel, emptyLevel) {
        const base = routes[routeName] || [];
        if (routeName === "service") return base;
        return base.map((point) => {
            const kind = point.group;
            if (!kind) return point;
            const level = kind === "full" ? fullLevel : emptyLevel;
            const override = profiles[routeName]?.[kind]?.[String(level)]?.[point.id];
            return override || point;
        });
    }

    function resolvedRoute() {
        return resolvedRouteFor(selectedRoute, selectedFullLevel, selectedEmptyLevel);
    }

    async function api(url, options = {}) {
        const response = await fetch(url, {
            credentials: "same-origin",
            headers: {"Content-Type": "application/json", ...(options.headers || {})},
            ...options,
        });
        const payload = await response.json().catch(() => ({}));
        if (!response.ok || payload.ok === false) {
            throw new Error(payload.error || `Ошибка HTTP ${response.status}`);
        }
        return payload;
    }

    function message(text, kind = "") {
        const box = $("#route-editor-message");
        box.textContent = text;
        box.classList.toggle("error", kind === "error");
        box.classList.toggle("success", kind === "success");
    }

    function setSaveState(text, changed = false) {
        $("#route-save-state").textContent = text;
        dirty = changed;
    }

    function clampInput(selector) {
        const input = $(selector);
        let value = Number(input.value);
        if (!Number.isFinite(value)) value = Number(input.min || 0);
        value = Math.max(Number(input.min), Math.min(Number(input.max), value));
        input.value = input.step && Number(input.step) < 1 ? String(value) : String(Math.round(value));
        return Number(input.value);
    }

    function formPoint(existing = null) {
        const result = {
            id: existing?.id,
            name: $(fieldIds.name).value.trim() || "Новая точка",
            rail: clampInput(fieldIds.rail),
            joints: {
                "1": clampInput(fieldIds.j1),
                "10": clampInput(fieldIds.j10),
                "11": clampInput(fieldIds.j11),
                "16": clampInput(fieldIds.j16),
            },
            speed_percent: clampInput(fieldIds.speed),
            time_ms: clampInput(fieldIds.time),
        };
        if (existing?.group) result.group = existing.group;
        if (existing?.block) result.block = existing.block;
        if (existing?.shared_key) result.shared_key = existing.shared_key;
        result.action = existing?.action || "none";
        return result;
    }

    function knownCurrentPoint() {
        const arm = latestState?.manipulator?.joints || {};
        return {
            name: "Новая точка",
            rail: Number(latestState?.rail?.position || 0),
            joints: {
                "1": Number(arm["1"] ?? 500),
                "10": Number(arm["10"] ?? 500),
                "11": Number(arm["11"] ?? 375),
                "16": Number(arm["16"] ?? 500),
            },
            speed_percent: 20,
            time_ms: 1500,
        };
    }

    function fillForm(point) {
        const value = point || knownCurrentPoint();
        $(fieldIds.name).value = value.name || "Новая точка";
        $(fieldIds.rail).value = value.rail;
        $(fieldIds.j1).value = value.joints["1"];
        $(fieldIds.j10).value = value.joints["10"];
        $(fieldIds.j11).value = value.joints["11"];
        $(fieldIds.j16).value = value.joints["16"];
        $(fieldIds.speed).value = value.speed_percent || 20;
        $(fieldIds.time).value = value.time_ms || 1500;
        $("#route-point-heading").textContent = value.name || "Новая точка";
        setSaveState("изменений нет");
        showSelectedPreview();
        applyEditPermissions();
    }

    function previewApi() {
        return $("#route-preview-frame")?.contentWindow?.BERETSRoutePreview;
    }

    function preparePreviewRoute() {
        if (selectedRoute === "service") return null;
        return previewApi()?.prepareRoute?.(selectedRoute, selectedFullLevel, selectedEmptyLevel) || null;
    }

    function preview(point) {
        const target = point || formPoint(currentPoint());
        const apiObject = previewApi();
        if (!apiObject?.ready) return false;
        apiObject.setPose({
            rail: target.rail,
            j1: target.joints["1"],
            j10: target.joints["10"],
            j11: target.joints["11"],
            j16: target.joints["16"],
        });
        return true;
    }

    function currentPoint() {
        return selectedIndex >= 0 ? resolvedRoute()[selectedIndex] : null;
    }

    function showSelectedPreview() {
        previewMode = "selected";
        $("#route-preview-mode").textContent = "выбранная точка";
        preview(formPoint(currentPoint()));
    }

    function showLivePreview() {
        previewMode = "live";
        $("#route-preview-mode").textContent = "состояние контроллера";
        livePose = knownCurrentPoint();
        preview(livePose);
    }

    function smoothStep(value) {
        const amount = Math.max(0, Math.min(1, value));
        return amount * amount * (3 - 2 * amount);
    }

    function renderLivePose(point) {
        livePose = point;
        preview(point);
        $("#route-live-rail").textContent = `${Number(point.rail).toFixed(1)} мм${latestState?.rail?.homed ? " · HOME выполнен" : " · без HOME"}`;
        $("#route-live-joints").textContent = ["1", "10", "11", "16"]
            .map((id) => String(Math.round(Number(point.joints[id]))))
            .join(" / ");
    }

    function startLiveSegment(target, durationMs, executionKey) {
        const start = livePose || knownCurrentPoint();
        const token = ++liveAnimationToken;
        const started = performance.now();
        const duration = Math.max(100, Number(durationMs) || 1000);
        liveExecutionKey = executionKey;
        function frame(now) {
            if (token !== liveAnimationToken || liveExecutionKey !== executionKey) return;
            const amount = smoothStep((now - started) / duration);
            renderLivePose(interpolatePoint(start, target, amount));
            if (amount < 1) requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    }

    function syncLiveRouteAnimation(state) {
        const execution = state?.route_execution;
        if (!execution?.running || !execution.route || execution.point_index < 1) return false;
        const routeName = execution.route;
        const fullLevel = Number(state.container_exchange?.full_level || selectedFullLevel || 1);
        const emptyLevel = Number(state.container_exchange?.empty_level || selectedEmptyLevel || 6);
        const points = resolvedRouteFor(routeName, fullLevel, emptyLevel);
        const pointIndex = Number(execution.point_index);
        const target = points[pointIndex - 1];
        if (!target) return false;
        const executionKey = `${routeName}:${fullLevel}:${emptyLevel}:${pointIndex}`;
        if (executionKey === liveExecutionKey) return true;

        const controller = previewApi();
        controller?.prepareRoute?.(routeName, fullLevel, emptyLevel);
        if (liveExecutionIndex > 0 && pointIndex > liveExecutionIndex) {
            controller?.performAction?.(routeActionAfterPoint(liveExecutionIndex - 1), routeName);
        }
        if (!livePose || pointIndex <= liveExecutionIndex || executionKey.startsWith(`${routeName}:`) === false) {
            livePose = knownCurrentPoint();
        }
        liveExecutionIndex = pointIndex;
        previewMode = "live";
        $("#route-preview-mode").textContent = `реальный маршрут · ${pointIndex}/${points.length}`;
        startLiveSegment(target, target.time_ms, executionKey);
        return true;
    }

    function interpolatePoint(from, to, amount) {
        const mix = (a, b) => Number(a) + (Number(b) - Number(a)) * amount;
        return {
            rail: mix(from.rail, to.rail),
            joints: {
                "1": mix(from.joints["1"], to.joints["1"]),
                "10": mix(from.joints["10"], to.joints["10"]),
                "11": mix(from.joints["11"], to.joints["11"]),
                "16": mix(from.joints["16"], to.joints["16"]),
            },
        };
    }

    function routeActionAfterPoint(index) {
        return ({3: "take_full", 10: "place_full", 17: "take_empty", 24: "place_empty"})[index] || "none";
    }

    function animateSegment(from, to, duration, token) {
        return new Promise((resolve) => {
            const started = performance.now();
            const rate = Math.max(0.1, Number($("#route-animation-rate").value) || 1);
            const railPercent = Math.max(5, Number($("#route-animation-rail-speed").value) || 40);
            const jointDuration = Math.max(1, duration / rate);
            const railDistance = Math.abs(Number(to.rail) - Number(from.rail));
            const railDuration = railDistance / 347 * 4000 * 100 / railPercent / rate;
            const totalDuration = Math.max(jointDuration, railDuration);
            function frame(now) {
                if (token !== animationToken) return resolve(false);
                const elapsed = now - started;
                const jointAmount = Math.min(1, elapsed / jointDuration);
                const railAmount = railDistance ? Math.min(1, elapsed / Math.max(1, railDuration)) : 1;
                const pose = interpolatePoint(from, to, jointAmount);
                pose.rail = Number(from.rail) + (Number(to.rail) - Number(from.rail)) * railAmount;
                preview(pose);
                if (elapsed < totalDuration) requestAnimationFrame(frame);
                else resolve(true);
            }
            requestAnimationFrame(frame);
        });
    }

    async function playAnimation() {
        const points = clone(resolvedRoute());
        if (!points.length) return message("В маршруте нет точек", "error");
        const token = ++animationToken;
        const previewController = previewApi();
        preparePreviewRoute();
        $("#route-play-animation").disabled = true;
        $("#route-stop-animation").disabled = false;
        previewMode = "animation";
        $("#route-preview-mode").textContent = "анимация маршрута";
        let previous = knownCurrentPoint();
        for (let index = 0; index < points.length && token === animationToken; index += 1) {
            selectedIndex = index;
            renderList();
            const active = $("#route-point-list .route-point-item.active");
            active?.scrollIntoView({block: "nearest"});
            $("#route-point-heading").textContent = points[index].name;
            message(`Анимация: ${index + 1}/${points.length} · ${points[index].name}`);
            const completed = await animateSegment(
                previous,
                points[index],
                Number(points[index].time_ms),
                token,
            );
            if (!completed) break;
            // Захват/отпускание происходит строго после полного завершения
            // соответствующей точки независимо от старых action в JSON.
            previewController?.performAction?.(routeActionAfterPoint(index), selectedRoute);
            previous = points[index];
        }
        if (token === animationToken) {
            message(`Анимация маршрута «${routeLabels[selectedRoute]}» завершена`, "success");
            previewMode = "selected";
            $("#route-preview-mode").textContent = "выбранная точка";
        }
        $("#route-play-animation").disabled = false;
        $("#route-stop-animation").disabled = true;
    }

    function stopAnimation() {
        animationToken += 1;
        $("#route-play-animation").disabled = false;
        $("#route-stop-animation").disabled = true;
        previewMode = "selected";
        $("#route-preview-mode").textContent = "выбранная точка";
        showSelectedPreview();
        message("Анимация остановлена");
    }

    function renderList() {
        const list = $("#route-point-list");
        list.replaceChildren();
        const points = resolvedRoute();
        if (!points.length) {
            const empty = document.createElement("li");
            empty.className = "route-point-empty";
            empty.textContent = "Точек пока нет. Добавьте первую из текущего положения или задайте значения вручную.";
            list.append(empty);
        }
        let previousBlock = null;
        points.forEach((point, index) => {
            const block = point.block || "pickup_common";
            if (block !== previousBlock) {
                const header = document.createElement("li");
                header.className = "route-block-header";
                header.dataset.block = block;
                header.textContent = blockLabels[block] || "ТЕХНОЛОГИЧЕСКИЙ БЛОК";
                list.append(header);
                previousBlock = block;
            }
            const item = document.createElement("li");
            item.className = `route-point-row${isPointEditable(point) ? "" : " edit-locked"}`;
            item.dataset.block = block;
            const selectButton = document.createElement("button");
            selectButton.type = "button";
            selectButton.className = `route-point-item${index === selectedIndex ? " active" : ""}`;
            selectButton.innerHTML = `<span>${index + 1}</span><strong></strong><small></small>`;
            selectButton.querySelector("strong").textContent = point.name;
            selectButton.querySelector("small").textContent = `Р ${point.rail} · ${point.joints["1"]}/${point.joints["10"]}/${point.joints["11"]}/${point.joints["16"]} · ${point.time_ms} мс`;
            selectButton.addEventListener("click", () => selectPoint(index));

            const goButton = document.createElement("button");
            goButton.type = "button";
            goButton.className = "route-point-go primary-button";
            goButton.textContent = "Перейти";
            goButton.dataset.index = String(index);
            goButton.disabled = !canMoveSelectedPoint(point);
            goButton.addEventListener("click", async () => {
                if (!selectPoint(index)) return;
                await sendSelectedPoint(false);
            });

            item.append(selectButton, goButton);
            list.append(item);
        });
        applyEditPermissions();
    }

    function selectPoint(index) {
        if (dirty && !window.confirm("Отменить несохранённые изменения выбранной точки?")) return false;
        selectedIndex = index;
        renderList();
        fillForm(currentPoint());
        return true;
    }

    async function persistRoute(successText) {
        const payload = await api(`/api/manipulator/routes/${selectedRoute}`, {
            method: "PUT",
            body: JSON.stringify({
                points: routes[selectedRoute],
                full_level: selectedFullLevel,
                empty_level: selectedEmptyLevel,
            }),
        });
        routes = payload.data?.routes || routes;
        profiles = payload.data?.profiles || profiles;
        routes[selectedRoute] = payload.points;
        if (selectedIndex >= routes[selectedRoute].length) selectedIndex = routes[selectedRoute].length - 1;
        renderList();
        setSaveState("сохранено");
        message(
            (successText || "Маршрут сохранён") +
            (payload.shared_updated ? ". Общие параметры синхронизированы для трёх цветов; координаты рельсы сохранены отдельно." : ""),
            "success",
        );
        return currentPoint();
    }

    async function persistProfilePoint(point, successText) {
        const kind = point.group;
        const level = selectedLevel(kind);
        const payload = await api(`/api/manipulator/routes/${selectedRoute}/profiles/${kind}/${level}`, {
            method: "PUT",
            body: JSON.stringify({point}),
        });
        routes = payload.data?.routes || routes;
        profiles = payload.data?.profiles || profiles;
        profiles[selectedRoute][kind][String(level)] ||= {};
        profiles[selectedRoute][kind][String(level)][point.id] = payload.point;
        renderList();
        setSaveState("сохранено");
        message(
            (successText || `Сохранён уровень ${level}`) +
            (payload.shared_updated ? ". Этот уровень синхронизирован для трёх цветов без замены их координат рельсы." : ""),
            "success",
        );
        return payload.point;
    }

    async function saveSelected() {
        if (!isPointEditable(currentPoint())) {
            throw new Error(calibrationScopeText());
        }
        const point = formPoint(currentPoint());
        if (currentPoint()?.group) point.group = currentPoint().group;
        if (selectedIndex < 0) {
            routes[selectedRoute].push(point);
            selectedIndex = routes[selectedRoute].length - 1;
        } else {
            const base = routes[selectedRoute][selectedIndex];
            if (base?.group && selectedRoute !== "service") {
                point.id = base.id;
                point.group = base.group;
                const saved = await persistProfilePoint(
                    point,
                    `Точка «${point.name}» сохранена для уровня ${selectedLevel(base.group)}`,
                );
                fillForm(saved);
                return saved;
            }
            routes[selectedRoute][selectedIndex] = point;
        }
        const saved = await persistRoute(`Точка «${point.name}» сохранена`);
        fillForm(saved);
        return saved;
    }

    async function addPoint(offset) {
        const base = formPoint(currentPoint());
        base.id = undefined;
        if (currentPoint()?.group) base.group = currentPoint().group;
        base.name = `Точка ${routes[selectedRoute].length + 1}`;
        const position = selectedIndex < 0
            ? routes[selectedRoute].length
            : Math.max(0, Math.min(routes[selectedRoute].length, selectedIndex + offset));
        routes[selectedRoute].splice(position, 0, base);
        selectedIndex = position;
        await persistRoute(`Добавлена точка ${position + 1}`);
        fillForm(currentPoint());
    }

    function copySelectedPoint() {
        const point = currentPoint();
        if (!point) return message("Сначала выберите точку", "error");
        copiedPoint = clone(point);
        message(`Точка «${point.name}» скопирована`, "success");
    }

    async function pastePoint(offset) {
        if (!copiedPoint) throw new Error("Сначала скопируйте точку");
        const point = clone(copiedPoint);
        delete point.id;
        point.name = `${point.name} · копия`;
        const position = selectedIndex < 0
            ? routes[selectedRoute].length
            : Math.max(0, Math.min(routes[selectedRoute].length, selectedIndex + offset));
        routes[selectedRoute].splice(position, 0, point);
        selectedIndex = position;
        await persistRoute(`Вставлена копия точки ${position + 1}`);
        fillForm(currentPoint());
    }

    async function deleteSelected() {
        const point = currentPoint();
        if (!point || !window.confirm(`Удалить точку «${point.name}»?`)) return;
        const removed = routes[selectedRoute].splice(selectedIndex, 1)[0];
        if (removed && profiles[selectedRoute]) {
            Object.values(profiles[selectedRoute]).forEach((levels) => {
                Object.values(levels).forEach((overrides) => delete overrides[removed.id]);
            });
        }
        selectedIndex = Math.min(selectedIndex, routes[selectedRoute].length - 1);
        await persistRoute("Точка удалена");
        fillForm(currentPoint());
    }

    async function moveSelected(direction) {
        const target = selectedIndex + direction;
        if (selectedIndex < 0 || target < 0 || target >= routes[selectedRoute].length) return;
        [routes[selectedRoute][selectedIndex], routes[selectedRoute][target]] = [routes[selectedRoute][target], routes[selectedRoute][selectedIndex]];
        selectedIndex = target;
        await persistRoute("Порядок точек изменён");
        fillForm(currentPoint());
    }

    function updateLiveState(state) {
        latestState = state;
        const arm = state.manipulator;
        const rail = state.rail;
        $("#route-live-rail").textContent = `${Number(rail.position).toFixed(1)} мм${rail.homed ? " · HOME выполнен" : " · без HOME"}`;
        $("#route-live-joints").textContent = ["1", "10", "11", "16"].map(id => arm.joints[id]).join(" / ");
        $("#route-controller-state").textContent = arm.connected
            ? (rail.connected ? "манипулятор и рельса подключены" : "манипулятор подключён, рельса недоступна")
            : "манипулятор не подключён";
        if (!syncLiveRouteAnimation(state) && previewMode === "live") {
            liveAnimationToken += 1;
            liveExecutionKey = null;
            liveExecutionIndex = 0;
            renderLivePose(knownCurrentPoint());
        }
        updateMoveButton();
    }

    function canMoveSelectedPoint(point = currentPoint()) {
        const moveArm = $("#route-move-arm").checked;
        const moveRail = $("#route-move-rail").checked;
        const running = Boolean(
            latestState?.system?.operational || latestState?.cycle?.running ||
            latestState?.dispenser?.running || latestState?.zone_sorting?.running ||
            latestState?.conveyor?.running || latestState?.route_execution?.running
        );
        const armReady = !moveArm || latestState?.manipulator?.connected;
        const railReady = !moveRail || (latestState?.rail?.connected && latestState?.rail?.homed);
        return Boolean(point && (moveArm || moveRail) && !running && armReady && railReady);
    }

    function updateMoveButton() {
        $("#route-send-real").disabled = !canMoveSelectedPoint();
        document.querySelectorAll(".route-point-go").forEach((button) => {
            const point = resolvedRoute()[Number(button.dataset.index)];
            button.disabled = !canMoveSelectedPoint(point);
        });
        const execution = latestState?.route_execution;
        const ready = Boolean(
            resolvedRoute().length && latestState?.manipulator?.connected &&
            latestState?.rail?.connected && latestState?.rail?.homed &&
            !latestState?.system?.operational && !latestState?.conveyor?.running &&
            !execution?.running
        );
        $("#route-run-real").disabled = !ready;
        $("#route-stop-real").disabled = !execution?.running;
    }

    async function pollState() {
        try {
            const payload = await api("/api/state", {method: "GET"});
            updateLiveState(payload.state);
            const execution = payload.state.route_execution;
            if (execution?.running) {
                message(`Маршрут: ${execution.point_index}/${execution.point_count} · ${execution.phase}`);
            } else if (execution?.fault) {
                message(execution.fault, "error");
            }
        } catch (error) {
            $("#route-controller-state").textContent = "нет связи";
            message(error.message, "error");
        }
    }

    async function sendSelectedPoint(saveBeforeMove = true) {
        try {
            const point = saveBeforeMove ? await saveSelected() : currentPoint();
            if (!point) throw new Error("Маршрутная точка не выбрана");
            const moveArm = $("#route-move-arm").checked;
            const moveRail = $("#route-move-rail").checked;
            if (!window.confirm(
                `Перейти в точку «${point.name}»?\n\n` +
                "Убедитесь, что рабочая зона свободна и питание можно немедленно отключить."
            )) return;
            message("Отправка команды…");
            const result = await api(`/api/manipulator/routes/${selectedRoute}/${point.id}/move`, {
                method: "POST",
                body: JSON.stringify({
                    confirm: "MOVE_ROUTE_POINT",
                    move_arm: moveArm,
                    move_rail: moveRail,
                    full_level: selectedFullLevel,
                    empty_level: selectedEmptyLevel,
                }),
            });
            updateLiveState(result.state);
            showLivePreview();
            message(`Команда отправлена: ${point.name}. Рельса ограничена ${result.preview_speed_percent}%.`, "success");
        } catch (error) {
            message(error.message, "error");
        }
    }

    async function sendReal() {
        await sendSelectedPoint(true);
    }

    function exportRoutes() {
        const link = document.createElement("a");
        link.href = "/api/manipulator/routes/export";
        link.download = `berets_manipulator_routes_${new Date().toISOString().slice(0, 10)}.json`;
        document.body.append(link);
        link.click();
        link.remove();
        message("Полный JSON маршрутов отправлен в папку загрузок ноутбука", "success");
    }

    async function runFullRoute() {
        if (!window.confirm(
            `Запустить весь маршрут «${routeLabels[selectedRoute]}» (${resolvedRoute().length} точек)?\n\n` +
            "Рабочая зона должна быть свободна. Будьте готовы немедленно отключить силовое питание."
        )) return;
        const result = await api(`/api/manipulator/routes/${selectedRoute}/run`, {
            method: "POST",
            body: JSON.stringify({
                confirm: "RUN_FULL_ROUTE",
                full_level: selectedFullLevel,
                empty_level: selectedEmptyLevel,
                rail_speed_percent: Number($("#route-run-rail-speed").value),
            }),
        });
        updateLiveState(result.state);
        message("Полный маршрут запущен. Ход выполнения отображается ниже.", "success");
    }

    async function stopFullRoute() {
        const result = await api("/api/manipulator/routes/stop", {method: "POST", body: "{}"});
        updateLiveState(result.state);
        message("Маршрут остановлен, EN рельсы снят", "error");
    }

    async function load() {
        try {
            const payload = await api("/api/manipulator/routes", {method: "GET"});
            routes = payload.data.routes;
            profiles = payload.data.profiles || profiles;
            selectedRoute = $("#route-name").value;
            selectedIndex = routes[selectedRoute].length ? 0 : -1;
            renderList();
            fillForm(currentPoint());
            message("Редактор готов. Изменение полей двигает только 3D-модель.");
            await pollState();
        } catch (error) {
            message(error.message, "error");
        }
    }

    Object.values(fieldIds).forEach((selector) => {
        $(selector).addEventListener("input", () => {
            $("#route-point-heading").textContent = $(fieldIds.name).value || "Новая точка";
            setSaveState("не сохранено", true);
            showSelectedPreview();
        });
    });
    $("#route-name").addEventListener("change", (event) => {
        if (dirty && !window.confirm("Отменить несохранённые изменения?")) {
            event.target.value = selectedRoute;
            return;
        }
        selectedRoute = event.target.value;
        $("#route-level-controls").hidden = selectedRoute === "service";
        selectedIndex = routes[selectedRoute].length ? 0 : -1;
        renderList();
        fillForm(currentPoint());
        preparePreviewRoute();
        message(`Открыт маршрут: ${routeLabels[selectedRoute]}`);
    });
    $("#route-full-level").addEventListener("change", (event) => {
        if (dirty && !window.confirm("Отменить несохранённые изменения выбранной точки?")) {
            event.target.value = String(selectedFullLevel);
            return;
        }
        selectedFullLevel = Number(event.target.value);
        renderList();
        fillForm(currentPoint());
        preparePreviewRoute();
        message(`Открыт уровень ${selectedFullLevel} стопки полных контейнеров`);
    });
    $("#route-empty-level").addEventListener("change", (event) => {
        if (dirty && !window.confirm("Отменить несохранённые изменения выбранной точки?")) {
            event.target.value = String(selectedEmptyLevel);
            return;
        }
        selectedEmptyLevel = Number(event.target.value);
        renderList();
        fillForm(currentPoint());
        preparePreviewRoute();
        message(`Открыт уровень ${selectedEmptyLevel} стопки пустых контейнеров`);
    });
    $("#route-save-point").addEventListener("click", () => saveSelected().catch(error => message(error.message, "error")));
    $("#route-add-before").addEventListener("click", () => addPoint(0).catch(error => message(error.message, "error")));
    $("#route-add-after").addEventListener("click", () => addPoint(1).catch(error => message(error.message, "error")));
    $("#route-copy-point").addEventListener("click", copySelectedPoint);
    $("#route-paste-before").addEventListener("click", () => pastePoint(0).catch(error => message(error.message, "error")));
    $("#route-paste-after").addEventListener("click", () => pastePoint(1).catch(error => message(error.message, "error")));
    $("#route-export-json").addEventListener("click", exportRoutes);
    $("#route-delete-point").addEventListener("click", () => deleteSelected().catch(error => message(error.message, "error")));
    $("#route-move-up").addEventListener("click", () => moveSelected(-1).catch(error => message(error.message, "error")));
    $("#route-move-down").addEventListener("click", () => moveSelected(1).catch(error => message(error.message, "error")));
    $("#route-show-live").addEventListener("click", showLivePreview);
    $("#route-show-selected").addEventListener("click", showSelectedPreview);
    $("#route-move-arm").addEventListener("change", updateMoveButton);
    $("#route-move-rail").addEventListener("change", updateMoveButton);
    $("#route-send-real").addEventListener("click", sendReal);
    $("#route-play-animation").addEventListener("click", () => playAnimation().catch(error => message(error.message, "error")));
    $("#route-stop-animation").addEventListener("click", stopAnimation);
    $("#route-animation-rail-speed").addEventListener("input", (event) => {
        $("#route-animation-rail-speed-value").textContent = `${event.target.value}%`;
    });
    $("#route-run-rail-speed").addEventListener("input", (event) => {
        $("#route-run-rail-speed-value").textContent = `${event.target.value}%`;
    });
    $("#route-run-real").addEventListener("click", () => runFullRoute().catch(error => message(error.message, "error")));
    $("#route-stop-real").addEventListener("click", () => stopFullRoute().catch(error => message(error.message, "error")));
    $("#route-preview-frame").addEventListener("load", () => setTimeout(() => {
        preparePreviewRoute();
        previewMode === "live" ? showLivePreview() : showSelectedPreview();
    }, 500));

    load();
    // 250 мс позволяет увидеть даже короткие маршрутные точки без скачков
    // и остаётся достаточно редким опросом для локального Flask на Raspberry Pi.
    setInterval(pollState, 250);
})();
