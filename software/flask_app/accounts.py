import json
import os
import re
from uuid import uuid4
from datetime import datetime
from pathlib import Path
from threading import RLock

from werkzeug.security import check_password_hash, generate_password_hash


class AccountStore:
    """Локальное файловое хранилище учётных записей BERETS."""

    ROLES = {"admin", "operator", "viewer"}
    USERNAME_RE = re.compile(r"^[a-zA-Z0-9_.-]{3,32}$")

    def __init__(self, path=None):
        default_path = Path(__file__).with_name("users.json")
        self.path = Path(path or os.environ.get("BERETS_USERS_FILE", default_path))
        self.lock = RLock()
        self._ensure_file()

    def _ensure_file(self):
        with self.lock:
            if self.path.exists():
                return
            self.path.parent.mkdir(parents=True, exist_ok=True)
            self._write({"users": []})

    @staticmethod
    def _now():
        return datetime.now().strftime("%d.%m.%Y %H:%M")

    def _read(self):
        try:
            return json.loads(self.path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError, TypeError):
            return {"users": []}

    def _write(self, data):
        temporary = self.path.with_suffix(".tmp")
        temporary.write_text(
            json.dumps(data, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        temporary.replace(self.path)

    @staticmethod
    def _public(user):
        return {
            "username": user["username"],
            "display_name": user["display_name"],
            "role": user["role"],
            "created_at": user.get("created_at", "—"),
        }

    def list_public(self):
        with self.lock:
            users = self._read().get("users", [])
            return [self._public(user) for user in users]

    def get_public(self, username):
        with self.lock:
            for user in self._read().get("users", []):
                if user["username"] == username:
                    return self._public(user)
        return None

    def verify(self, username, password):
        with self.lock:
            for user in self._read().get("users", []):
                if user["username"] == username and check_password_hash(
                    user["password_hash"], password
                ):
                    return self._public(user)
        return None

    def create(self, username, display_name, role, password):
        username = username.strip()
        display_name = display_name.strip()
        if not self.USERNAME_RE.fullmatch(username):
            raise ValueError("Логин: 3–32 символа, латинские буквы, цифры, точка, дефис или подчёркивание")
        if len(display_name) < 2 or len(display_name) > 60:
            raise ValueError("Имя сотрудника должно содержать от 2 до 60 символов")
        if role not in self.ROLES:
            raise ValueError("Неизвестная роль")
        if len(password) < 6:
            raise ValueError("Пароль должен содержать минимум 6 символов")

        with self.lock:
            data = self._read()
            if any(user["username"] == username for user in data.get("users", [])):
                raise ValueError("Учётная запись с таким логином уже существует")
            data.setdefault("users", []).append({
                "username": username,
                "display_name": display_name,
                "role": role,
                "password_hash": generate_password_hash(password),
                "created_at": self._now(),
            })
            self._write(data)
        return self.get_public(username)

    def create_profile(self, display_name, password):
        """Создаёт профиль из формы первого входа без технического логина."""
        display_name = display_name.strip()
        with self.lock:
            users = self._read().get("users", [])
            role = "admin" if not users else "operator"
            username = "profile-" + uuid4().hex[:10]
        return self.create(username, display_name, role, password)

    def change_password(self, username, current_password, new_password):
        if len(new_password) < 6:
            raise ValueError("Новый пароль должен содержать минимум 6 символов")
        with self.lock:
            data = self._read()
            for user in data.get("users", []):
                if user["username"] != username:
                    continue
                if not check_password_hash(user["password_hash"], current_password):
                    raise ValueError("Текущий пароль указан неверно")
                user["password_hash"] = generate_password_hash(new_password)
                self._write(data)
                return
        raise ValueError("Учётная запись не найдена")

    def delete(self, username, admin_username, admin_password):
        if username == admin_username:
            raise ValueError("Нельзя удалить учётную запись, под которой выполнен вход")
        if not self.verify(admin_username, admin_password):
            raise ValueError("Пароль администратора указан неверно")

        with self.lock:
            data = self._read()
            users = data.get("users", [])
            target = next((user for user in users if user["username"] == username), None)
            if target is None:
                raise ValueError("Учётная запись не найдена")
            if target["role"] == "admin" and sum(user["role"] == "admin" for user in users) <= 1:
                raise ValueError("Нельзя удалить последнего администратора")
            data["users"] = [user for user in users if user["username"] != username]
            self._write(data)
