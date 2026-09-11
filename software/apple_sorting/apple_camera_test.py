#!/usr/bin/env python3

import cv2
from ultralytics import YOLO
import os
from pathlib import Path

MODEL_PATH = os.environ.get(
    "BERETS_YOLO_MODEL",
    str(Path.home() / "berets" / "models" / "apple_sorting_best.pt"),
)

model = YOLO(MODEL_PATH)
print("Классы модели:", model.names)

cap = cv2.VideoCapture(0, cv2.CAP_V4L2)
cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
cap.set(
    cv2.CAP_PROP_FOURCC,
    cv2.VideoWriter_fourcc(*"MJPG")
)

if not cap.isOpened():
    raise RuntimeError("Не удалось открыть /dev/video0")

print("Камера запущена. Нажми q для выхода.")

frame_number = 0
shown_frame = None

try:
    while True:
        ok, frame = cap.read()

        if not ok:
            print("Не удалось получить кадр")
            break

        frame_number += 1

        # Для скорости обрабатываем нейронной сетью каждый второй кадр
        if shown_frame is None or frame_number % 2 == 0:
            result = model.predict(
                source=frame,
                imgsz=320,
                conf=0.50,
                device="cpu",
                verbose=False
            )[0]

            shown_frame = result.plot()

        cv2.imshow(
            "BERETS - Apple recognition",
            shown_frame
        )

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

except KeyboardInterrupt:
    print("\nОстановлено пользователем")

finally:
    cap.release()
    cv2.destroyAllWindows()
    print("Камера освобождена")
