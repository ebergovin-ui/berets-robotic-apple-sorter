import os
import unittest
from pathlib import Path
from unittest.mock import patch


os.environ.setdefault("BERETS_REAL_MANIPULATOR", "0")
os.environ.setdefault("BERETS_REAL_CONTAINER_SENSORS", "0")
os.environ.setdefault("BERETS_REAL_CONVEYOR", "0")
os.environ.setdefault("BERETS_REAL_RAIL", "0")
os.environ.setdefault("BERETS_REAL_CYCLE", "0")
os.environ.setdefault("BERETS_SECRET_KEY", "test-only-secret-key")
os.environ.setdefault("BERETS_SYSTEM_PASSWORD", "test-only-system-password")

from app import LoginAttemptLimiter, app


class LoginAttemptLimiterTests(unittest.TestCase):
    def test_blocks_after_configured_number_of_failures(self):
        limiter = LoginAttemptLimiter(limit=3, window_seconds=60, lock_seconds=90)
        self.assertEqual(limiter.failure("client", now=10), 0)
        self.assertEqual(limiter.failure("client", now=11), 0)
        self.assertEqual(limiter.failure("client", now=12), 90)
        self.assertEqual(limiter.retry_after("client", now=13), 89)
        limiter.success("client")
        self.assertEqual(limiter.retry_after("client", now=13), 0)


class BrowserSecurityTests(unittest.TestCase):
    def setUp(self):
        self.client = app.test_client()
        with self.client.session_transaction() as session:
            session["authenticated"] = True
            session["user"] = {
                "username": "security-test",
                "display_name": "Security test",
                "role": "admin",
            }
            session["_csrf_token"] = "known-csrf-token"

    def test_security_headers_are_present(self):
        response = self.client.get("/")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.headers["X-Content-Type-Options"], "nosniff")
        self.assertEqual(response.headers["X-Frame-Options"], "DENY")
        self.assertIn("frame-ancestors 'none'", response.headers["Content-Security-Policy"])
        self.assertEqual(response.headers["Cache-Control"], "no-store")

    def test_digital_twin_can_be_embedded_only_same_origin(self):
        response = self.client.get("/static/digital_twin/index.html")
        try:
            self.assertEqual(response.headers["X-Frame-Options"], "SAMEORIGIN")
            self.assertIn("frame-ancestors 'self'", response.headers["Content-Security-Policy"])
        finally:
            response.close()

    def test_state_changing_api_requires_csrf_token(self):
        with patch.dict(os.environ, {"BERETS_CSRF_ENABLED": "1"}, clear=False):
            rejected = self.client.post("/api/command", json={"action": "unknown"})
            accepted_by_csrf = self.client.post(
                "/api/command",
                json={"action": "unknown"},
                headers={"X-CSRF-Token": "known-csrf-token"},
            )
        self.assertEqual(rejected.status_code, 403)
        self.assertEqual(accepted_by_csrf.status_code, 400)


class VoiceDefaultsTests(unittest.TestCase):
    def test_first_activation_uses_dispatcher_style_without_persisting_fallback_voice(self):
        script = (Path(__file__).parent / "static" / "js" / "voice_notifications.js").read_text(
            encoding="utf-8"
        )
        self.assertIn('const storageKey = "berets-voice-settings-v2"', script)
        self.assertIn('saveSettings({enabled: true, voiceURI: "", styleId: 9})', script)
        self.assertIn('/pavel|павел/i', script)
        self.assertIn('{id: 9, label: "Диспетчер", voiceSlot: 1, rate: 1.00, pitch: 0.95}', script)


if __name__ == "__main__":
    unittest.main()
