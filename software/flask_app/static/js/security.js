(function () {
    "use strict";

    const token = document.querySelector('meta[name="csrf-token"]')?.content || "";
    const originalFetch = window.fetch.bind(window);
    const safeMethods = new Set(["GET", "HEAD", "OPTIONS"]);

    window.fetch = function (input, init) {
        const options = Object.assign({}, init || {});
        const method = String(options.method || "GET").toUpperCase();
        const url = new URL(typeof input === "string" ? input : input.url, window.location.href);
        if (url.origin === window.location.origin && !safeMethods.has(method)) {
            const headers = new Headers(options.headers || {});
            if (token) headers.set("X-CSRF-Token", token);
            options.headers = headers;
            options.credentials = options.credentials || "same-origin";
        }
        return originalFetch(input, options).then((response) => {
            if (response.status === 401 && !window.location.pathname.startsWith("/login")) {
                window.location.assign(document.body?.dataset.loginUrl || "/login");
            }
            return response;
        });
    };

    window.BeretsSecurity = {csrfToken: token};
}());
