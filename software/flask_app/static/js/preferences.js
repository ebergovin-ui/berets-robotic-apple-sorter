(function () {
    // A versioned key prevents a stale light-theme choice from the legacy UI
    // masking the current dark operator design after deployment.
    const themeKey = "berets-theme-ui6";
    const theme = localStorage.getItem(themeKey) || "dark";
    const language = localStorage.getItem("berets-language") || "ru";
    document.documentElement.dataset.theme = theme;
    document.documentElement.lang = language === "en" ? "en" : "ru";
    window.BeretsPreferences = {
        theme,
        language,
        setTheme(value) {
            const next = value === "dark" ? "dark" : "light";
            localStorage.setItem(themeKey, next);
            document.documentElement.dataset.theme = next;
        },
        setLanguage(value) {
            const next = value === "en" ? "en" : "ru";
            localStorage.setItem("berets-language", next);
            document.documentElement.lang = next;
            window.location.reload();
        },
        applyLanguage(value) {
            if (value !== "en") return;
            const dictionary = {
                "Обзор": "Overview",
                "Манипулятор и рельса": "Manipulator and rail",
                "Конвейер": "Conveyor",
                "Распознавание": "Vision",
                "Система и журнал": "System and log",
                "Руководство": "Guide",
                "Настройки": "Settings",
                "Выйти": "Sign out",
                "Уведомления": "Notifications",
                "Экстренный STOP": "Emergency STOP",
                "Настройки панели": "Panel settings",
                "Параметры отображения и управление доступом сотрудников.": "Display settings and employee access.",
                "Руководство по эксплуатации": "Operation guide",
                "Как работает BERETS": "How BERETS works",
            };
            document.querySelectorAll("body *").forEach((node) => {
                if (node.children.length === 0) {
                    const text = node.textContent.trim();
                    if (dictionary[text]) node.textContent = dictionary[text];
                }
            });
        },
    };
    document.addEventListener("DOMContentLoaded", () => {
        window.BeretsPreferences.applyLanguage(language);
    });
}());
