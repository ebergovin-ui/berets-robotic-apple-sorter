#!/usr/bin/env python3
"""
Оптимизированный скрипт для Raspberry Pi.
Цель: максимальный FPS.
"""

import cv2
from ultralytics import YOLO
import time
import os
from pathlib import Path

MODEL_PATH = os.environ.get(
    "BERETS_YOLO_MODEL",
    str(Path.home() / "berets" / "models" / "apple_sorting_best.pt"),
)

CONFIDENCE = 0.5
IMG_SIZE = 320          # Меньше = быстрее
FRAME_SKIP = 2          # Обрабатывать каждый 2-й кадр

COLORS = {'red': (0, 0, 255), 'green': (0, 255, 0), 'yellow': (0, 255, 255)}

def main():
    print("Загрузка модели...")
    model = YOLO(MODEL_PATH)

    print("Камера...")
    cap = cv2.VideoCapture(0)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)

    # Ускорение OpenCV
    cv2.setUseOptimized(True)

    last_boxes = []
    frame_count = 0
    fps = 0
    fps_time = time.time()

    print("Старт! Нажми 'q'")

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        frame_count += 1

        # Обрабатываем каждый N-й кадр
        if frame_count % FRAME_SKIP == 0:
            results = model(frame, imgsz=IMG_SIZE, conf=CONFIDENCE,
                          device='cpu', verbose=False)[0]
            last_boxes = []
            for box in results.boxes:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                cls = model.names[int(box.cls[0])]
                conf = float(box.conf[0])
                last_boxes.append((x1, y1, x2, y2, cls, conf))

        # Рисуем (старые или новые рамки)
        for x1, y1, x2, y2, cls, conf in last_boxes:
            color = COLORS.get(cls, (255, 255, 255))
            cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
            label = f"{cls}: {conf:.1%}"
            cv2.putText(frame, label, (x1, max(y1 - 10, 20)),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

        # FPS
        if time.time() - fps_time >= 1:
            fps = frame_count
            frame_count = 0
            fps_time = time.time()

        cv2.putText(frame, f"FPS: {fps}", (10, 30),
                   cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)

        cv2.imshow('Apple Sorting', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()
