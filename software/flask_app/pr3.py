#!/usr/bin/env python3
"""Однокомандный безопасный запуск панели BERETS.

Параметр командной строки (например, `b`) сохраняется для совместимости
с привычным способом запуска и не влияет на работу Flask. Реальные узлы
включаются только явными параметрами окружения.
"""

import os
import runpy
import subprocess
import sys
from pathlib import Path


APP_DIR = Path(__file__).resolve().parent
VENV_PYTHON = APP_DIR / ".venv" / "bin" / "python"

# Команда `python3 pr3.py b` может быть введена без `source .venv/bin/activate`.
# Если виртуальная среда существует, перезапускаем этот же файл её Python-ом.
if VENV_PYTHON.exists() and Path(os.path.realpath(sys.executable)) != Path(os.path.realpath(VENV_PYTHON)):
    os.execv(str(VENV_PYTHON), [str(VENV_PYTHON), str(Path(__file__).resolve()), *sys.argv[1:]])

os.chdir(APP_DIR)
sys.path.insert(0, str(APP_DIR))
os.environ.setdefault("BERETS_REAL_MANIPULATOR", "0")
os.environ.setdefault("BERETS_SERVO_PORT", "/dev/ttyAMA0")
# Публичная конфигурация не обращается к GPIO без явного разрешения оператора.
os.environ.setdefault("BERETS_REAL_CONTAINER_SENSORS", "0")
# Конвейер намеренно не включается автоматически. После проверки конкретного
# MOSFET задаются BERETS_REAL_CONVEYOR=1 и его активный уровень.
# Рельса намеренно не включается автоматически без параметров окружения.

vision_process = None
if os.environ.get("BERETS_AUTO_START_VISION", "0") == "1":
    vision_python = Path(
        os.environ.get(
            "BERETS_VISION_PYTHON",
            str(APP_DIR.parent / "apple_sorting" / ".venv" / "bin" / "python"),
        )
    )
    vision_script = APP_DIR / "yolo_bridge.py"
    if os.environ.get("BERETS_YOLO_MODEL") and vision_python.exists():
        print("BERETS: автоматически запускаю камеру и YOLO")
        vision_process = subprocess.Popen(
            [str(vision_python), str(vision_script)],
            cwd=APP_DIR,
            env=os.environ.copy(),
        )
    else:
        print(
            "BERETS: автозапуск YOLO пропущен — проверьте "
            "BERETS_YOLO_MODEL и BERETS_VISION_PYTHON"
        )

try:
    runpy.run_path(str(APP_DIR / "app.py"), run_name="__main__")
finally:
    if vision_process is not None and vision_process.poll() is None:
        print("BERETS: останавливаю камеру и YOLO")
        vision_process.terminate()
        try:
            vision_process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            vision_process.kill()
            vision_process.wait(timeout=1)
