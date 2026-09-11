const pageParams = new URLSearchParams(location.search);

if (pageParams.has("embed")) {
    document.body.classList.add("embed");
}

if (pageParams.get("surface") === "dashboard") {
    document.body.classList.add("embed-dashboard");
}

window.addEventListener("error", function (event) {
    const status = document.querySelector("#status-text");
    if (status) status.textContent = "Ошибка JavaScript: " + (event.message || "неизвестная ошибка");
});

window.addEventListener("unhandledrejection", function (event) {
    const status = document.querySelector("#status-text");
    const reason = event.reason && (event.reason.message || String(event.reason));
    if (status) status.textContent = "Ошибка загрузки: " + (reason || "неизвестная ошибка");
});

window.addEventListener("DOMContentLoaded", function () {
    const status = document.querySelector("#status-text");
    if (status) status.textContent = "Запуск 3D-движка";
});
