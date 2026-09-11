(function () {
    "use strict";

    const key = "berets_tab_authenticated";
    const isBootstrap = window.location.hash === "#berets-tab";
    if (isBootstrap) {
        sessionStorage.setItem(key, "1");
        window.history.replaceState(
            null,
            document.title,
            window.location.pathname + window.location.search
        );
        return;
    }
    if (sessionStorage.getItem(key) === "1") return;

    window.addEventListener("DOMContentLoaded", function () {
        fetch(document.body.dataset.logoutUrl || "/logout", {
            method: "POST",
            keepalive: true,
            credentials: "same-origin",
        }).finally(function () {
            window.location.replace(document.body.dataset.loginUrl || "/login");
        });
    }, {once: true});
}());
