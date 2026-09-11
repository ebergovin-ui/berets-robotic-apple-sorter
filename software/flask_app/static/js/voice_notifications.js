(function () {
    "use strict";

    // v2 intentionally discards the old automatically saved voiceURI.  In v1
    // the first available Russian/RHVoice voice could be persisted before the
    // selected dispatcher style was applied, so later notifications ignored
    // the user's chosen variant 9.
    const storageKey = "berets-voice-settings-v2";
    const supported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
    const panel = document.getElementById("voice-capability");
    const panelTitle = document.getElementById("voice-capability-title");
    const panelMessage = document.getElementById("voice-capability-message");
    const enableButton = document.getElementById("voice-capability-enable");
    const dismissButton = document.getElementById("voice-capability-dismiss");
    const status = document.getElementById("voice-status");
    const enabledInput = document.getElementById("voice-enabled");
    const voiceSelect = document.getElementById("voice-select");
    const styleSelect = document.getElementById("voice-style");
    const testButton = document.getElementById("voice-test");
    const auditionButton = document.getElementById("voice-audition");
    const auditionStatus = document.getElementById("voice-audition-status");
    const settingsNote = document.getElementById("voice-settings-note");
    const speechStyles = [
        {id: 1, label: "Нейтрально", voiceSlot: 0, rate: 0.95, pitch: 1.00},
        {id: 2, label: "Спокойно", voiceSlot: 0, rate: 0.84, pitch: 0.94},
        {id: 3, label: "Мягко", voiceSlot: 0, rate: 0.90, pitch: 1.10},
        {id: 4, label: "Чётко", voiceSlot: 0, rate: 1.04, pitch: 1.02},
        {id: 5, label: "Строго", voiceSlot: 0, rate: 0.91, pitch: 0.82},
        {id: 6, label: "Нейтрально", voiceSlot: 1, rate: 0.95, pitch: 1.00},
        {id: 7, label: "Низко и спокойно", voiceSlot: 1, rate: 0.84, pitch: 0.76},
        {id: 8, label: "Размеренно", voiceSlot: 1, rate: 0.88, pitch: 0.90},
        {id: 9, label: "Диспетчер", voiceSlot: 1, rate: 1.00, pitch: 0.95},
        {id: 10, label: "Срочное сообщение", voiceSlot: 1, rate: 1.10, pitch: 1.06},
    ];
    let voices = [];
    let activeMessages = new Set();
    let pendingMessages = [];

    function loadSettings() {
        try {
            const stored = JSON.parse(localStorage.getItem(storageKey) || "{}");
            // Выбранный пользователем штатный вариант BERETS: №9, мужской
            // голос в спокойной диспетчерской манере. Для старых настроек без
            // styleId также выполняем однократный переход на этот вариант.
            if (!Object.prototype.hasOwnProperty.call(stored, "styleId")) {
                stored.styleId = 9;
                stored.voiceURI = "";
            }
            return Object.assign({configured: false, enabled: false, voiceURI: "", styleId: 9}, stored);
        } catch (_) {
            return {configured: false, enabled: false, voiceURI: "", styleId: 9};
        }
    }

    let settings = loadSettings();

    function saveSettings(next) {
        settings = Object.assign({}, settings, next, {configured: true});
        localStorage.setItem(storageKey, JSON.stringify(settings));
        updateInterface();
    }

    function preferredVoice() {
        if (!voices.length) return null;
        return voices.find((voice) => voice.voiceURI === settings.voiceURI) ||
            voices.find((voice) => /rhvoice/i.test(voice.name)) ||
            voices.find((voice) => /^ru([_-]|$)/i.test(voice.lang)) ||
            voices.find((voice) => voice.default) || voices[0];
    }

    function russianVoices() {
        const russian = voices.filter((voice) => /^ru([_-]|$)/i.test(voice.lang));
        return russian.length ? russian : voices;
    }

    function styleById(id) {
        return speechStyles.find((style) => style.id === Number(id)) || speechStyles[0];
    }

    function voiceForStyle(style) {
        const candidates = russianVoices();
        const preferredName = style.voiceSlot === 1 ? /pavel|павел/i : /irina|ирина/i;
        const namedVoice = candidates.find((voice) => preferredName.test(voice.name || ""));
        if (namedVoice) return namedVoice;
        return candidates[style.voiceSlot % Math.max(1, candidates.length)] || preferredVoice();
    }

    function populateStyles() {
        if (!styleSelect) return;
        styleSelect.innerHTML = "";
        speechStyles.forEach((style) => {
            const voice = voiceForStyle(style);
            const option = document.createElement("option");
            option.value = String(style.id);
            option.textContent = `Вариант ${style.id} · ${voice ? voice.name : "голос"} · ${style.label}`;
            styleSelect.appendChild(option);
        });
        styleSelect.value = String(styleById(settings.styleId).id);
    }

    function populateVoices() {
        if (!supported) return;
        voices = window.speechSynthesis.getVoices();
        if (voiceSelect) {
            voiceSelect.innerHTML = "";
            voices.forEach((voice) => {
                const option = document.createElement("option");
                option.value = voice.voiceURI;
                option.textContent = `${voice.name} · ${voice.lang || "язык не указан"}`;
                voiceSelect.appendChild(option);
            });
            const selected = settings.voiceURI
                ? preferredVoice()
                : voiceForStyle(styleById(settings.styleId));
            if (selected) voiceSelect.value = selected.voiceURI;
        }
        populateStyles();
        updateInterface();
    }

    function updateInterface() {
        const available = supported && voices.length > 0;
        if (status) {
            status.textContent = !supported ? "недоступно" : (settings.enabled ? "включено" : "выключено");
            status.classList.toggle("warning", !available);
        }
        if (enabledInput) {
            enabledInput.checked = Boolean(settings.enabled && available);
            enabledInput.disabled = !available;
        }
        if (voiceSelect) voiceSelect.disabled = !available || !settings.enabled;
        if (styleSelect) styleSelect.disabled = !available || !settings.enabled;
        if (testButton) testButton.disabled = !available;
        if (auditionButton) auditionButton.disabled = !available;
        if (settingsNote && !supported) {
            settingsNote.textContent = "Этот браузер не предоставляет синтез речи. Голосовые уведомления на данном устройстве недоступны.";
        } else if (settingsNote && supported && !voices.length) {
            settingsNote.textContent = "Браузер не обнаружил ни одного системного голоса. Установите русский голос или RHVoice и перезапустите браузер.";
        }
    }

    function speak(message, force, styleOverride, voiceOverride) {
        if (!supported || (!settings.enabled && !force) || !message) return false;
        const style = styleOverride || styleById(settings.styleId);
        const voice = voiceOverride ||
            (settings.voiceURI ? preferredVoice() : voiceForStyle(style));
        if (!voice) return false;
        const utterance = new SpeechSynthesisUtterance(message);
        utterance.voice = voice;
        utterance.lang = voice.lang || "ru-RU";
        utterance.rate = style.rate;
        utterance.pitch = style.pitch;
        utterance.volume = 1;
        window.speechSynthesis.speak(utterance);
        return true;
    }

    function notificationMessage(item) {
        return String(item && item.message || "").trim();
    }

    function updateNotifications(items) {
        const next = new Set((items || []).map(notificationMessage).filter(Boolean));
        const fresh = Array.from(next).filter((message) => !activeMessages.has(message));
        activeMessages = next;
        if (!settings.enabled || !fresh.length) return;
        fresh.forEach((message) => {
            if (!speak(message, false)) pendingMessages.push(message);
        });
    }

    function showCapabilityPanel() {
        if (!panel) return;
        if (!supported || !voices.length) {
            panelTitle.textContent = "Голос недоступен на этом устройстве";
            panelMessage.textContent = supported
                ? "Браузер не обнаружил установленный речевой голос. Текстовые уведомления продолжат работать."
                : "Браузер не поддерживает синтез речи. Текстовые уведомления продолжат работать.";
            enableButton.hidden = true;
            dismissButton.textContent = "Понятно";
            panel.hidden = false;
        } else if (!settings.configured) {
            panel.hidden = false;
        }
    }

    enableButton?.addEventListener("click", function () {
        // First activation must use the approved default: variant 9,
        // Microsoft Pavel, rate 1.00 and pitch 0.95.  An explicit voice can
        // still be selected later on the settings page.
        saveSettings({enabled: true, voiceURI: "", styleId: 9});
        panel.hidden = true;
        speak("Голосовые уведомления BERETS включены", true);
        Array.from(activeMessages).forEach((message) => speak(message, true));
    });
    dismissButton?.addEventListener("click", function () {
        if (supported && voices.length) saveSettings({enabled: false});
        panel.hidden = true;
    });
    enabledInput?.addEventListener("change", function () {
        saveSettings({enabled: enabledInput.checked});
        if (enabledInput.checked) {
            speak("Голосовые уведомления включены", true);
            Array.from(activeMessages).forEach((message) => speak(message, true));
        }
    });
    voiceSelect?.addEventListener("change", function () {
        saveSettings({voiceURI: voiceSelect.value});
    });
    styleSelect?.addEventListener("change", function () {
        const style = styleById(styleSelect.value);
        const voice = voiceForStyle(style);
        saveSettings({styleId: style.id, voiceURI: voice ? voice.voiceURI : settings.voiceURI});
        if (voiceSelect && voice) voiceSelect.value = voice.voiceURI;
    });
    testButton?.addEventListener("click", function () {
        window.speechSynthesis.cancel();
        speak("Привет, Егор. Система BERETS готова передавать уведомления оператору", true);
    });
    auditionButton?.addEventListener("click", function () {
        window.speechSynthesis.cancel();
        if (auditionStatus) auditionStatus.textContent = "Начинаю прослушивание: варианты 1–10.";
        speechStyles.forEach((style, index) => {
            const voice = voiceForStyle(style);
            const utterance = new SpeechSynthesisUtterance(`Вариант ${style.id}. Привет, Егор.`);
            utterance.voice = voice;
            utterance.lang = voice?.lang || "ru-RU";
            utterance.rate = style.rate;
            utterance.pitch = style.pitch;
            utterance.volume = 1;
            utterance.onstart = function () {
                if (auditionStatus) auditionStatus.textContent = `Сейчас звучит вариант ${style.id} из 10 · ${voice?.name || "системный голос"} · ${style.label}`;
            };
            if (index === speechStyles.length - 1) {
                utterance.onend = function () {
                    if (auditionStatus) auditionStatus.textContent = "Прослушивание завершено. Назови номер понравившегося варианта.";
                };
            }
            window.speechSynthesis.speak(utterance);
        });
    });
    window.addEventListener("berets:notifications", function (event) {
        updateNotifications(event.detail && event.detail.notifications);
    });
    document.addEventListener("pointerdown", function flushPending() {
        if (!settings.enabled || !pendingMessages.length) return;
        const queued = pendingMessages.splice(0);
        queued.forEach((message) => speak(message, false));
    });

    if (supported) window.speechSynthesis.addEventListener("voiceschanged", populateVoices);
    document.addEventListener("DOMContentLoaded", function () {
        populateVoices();
        window.setTimeout(showCapabilityPanel, 350);
    });
    window.BeretsVoice = {supported, speak, updateNotifications};
}());
