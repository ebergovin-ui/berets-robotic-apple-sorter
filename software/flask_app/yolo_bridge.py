#!/usr/bin/env python3
"""Адаптер Ultralytics YOLO -> Flask BERETS.

Скрипт не содержит весов модели. Укажите путь к уже обученному best.pt через
BERETS_YOLO_MODEL. Результаты отправляются только в API зрения; команды
приводам напрямую из этого процесса не выдаются.
"""

import json
import os
import queue
import sys
import threading
import time
import urllib.error
import urllib.request
import uuid
from pathlib import Path


LABELS = {
    "red": "красное",
    "red_apple": "красное",
    "красное": "красное",
    "green": "зелёное",
    "green_apple": "зелёное",
    "зелёное": "зелёное",
    "yellow": "жёлтое",
    "yellow_apple": "жёлтое",
    "жёлтое": "жёлтое",
}


def normalize_label(raw_name, swap_red_green=False):
    label = LABELS.get(str(raw_name).strip().lower())
    if swap_red_green:
        if label == "красное":
            return "зелёное"
        if label == "зелёное":
            return "красное"
    return label


DISPLAY_LABELS = {
    "красное": "red",
    "зелёное": "green",
    "жёлтое": "yellow",
}

DISPLAY_COLORS = {
    "красное": (70, 70, 235),
    "зелёное": (80, 190, 80),
    "жёлтое": (40, 210, 235),
}


def point_in_polygon(point, polygon):
    x, y = point
    inside = False
    for index in range(len(polygon)):
        x1, y1 = polygon[index]
        x2, y2 = polygon[(index + 1) % len(polygon)]
        cross = (x - x1) * (y2 - y1) - (y - y1) * (x2 - x1)
        if abs(cross) < 1e-9 and min(x1, x2) <= x <= max(x1, x2) and min(
            y1, y2
        ) <= y <= max(y1, y2):
            return True
        if (y1 > y) != (y2 > y):
            crossing_x = (x2 - x1) * (y - y1) / (y2 - y1) + x1
            if x < crossing_x:
                inside = not inside
    return inside


class IgnoreZoneFilter:
    """Hot-reloads black ignore polygons saved by the Flask interface."""

    def __init__(self, path):
        self.path = Path(path)
        self.polygons = []
        self._signature = None
        self.refresh(force=True)

    def refresh(self, force=False):
        try:
            stat = self.path.stat()
            signature = (stat.st_mtime_ns, stat.st_size)
        except OSError:
            signature = None
        if not force and signature == self._signature:
            return
        self._signature = signature
        if signature is None:
            self.polygons = []
            return
        try:
            payload = json.loads(self.path.read_text(encoding="utf-8"))
            polygons = payload.get("ignore_zones", [])
            validated = []
            for polygon in polygons:
                if not isinstance(polygon, list) or len(polygon) < 3:
                    continue
                points = []
                for point in polygon:
                    if not isinstance(point, list) or len(point) != 2:
                        raise ValueError("invalid ignore-zone point")
                    x, y = float(point[0]), float(point[1])
                    if not 0 <= x <= 1 or not 0 <= y <= 1:
                        raise ValueError("ignore-zone point outside frame")
                    points.append([x, y])
                validated.append(points)
            self.polygons = validated
        except (OSError, ValueError, TypeError, json.JSONDecodeError) as error:
            print(
                f"Зоны игнорирования не обновлены: {error}",
                file=sys.stderr,
            )

    def contains(self, point):
        self.refresh()
        return any(point_in_polygon(point, polygon) for polygon in self.polygons)


def draw_detection(cv2, frame, coordinates, track_id, label, score):
    x1, y1, x2, y2 = [int(round(value)) for value in coordinates]
    height, width = frame.shape[:2]
    x1, x2 = max(0, min(width - 1, x1)), max(0, min(width - 1, x2))
    y1, y2 = max(0, min(height - 1, y1)), max(0, min(height - 1, y2))
    color = DISPLAY_COLORS[label]
    text = f"id:{track_id} {DISPLAY_LABELS[label]} {score:.2f}"
    cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
    text_y = max(18, y1 - 6)
    cv2.putText(
        frame,
        text,
        (x1, text_y),
        cv2.FONT_HERSHEY_SIMPLEX,
        0.55,
        color,
        2,
        cv2.LINE_AA,
    )


def post_detection(url, token, payload):
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=body,
        headers={
            "Content-Type": "application/json",
            **({"X-BERETS-VISION-TOKEN": token} if token else {}),
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=1.5) as response:
        return response.status == 200


def post_heartbeat(url, token, fps):
    heartbeat_url = url.rsplit("/", 1)[0] + "/heartbeat"
    return post_detection(heartbeat_url, token, {"fps": fps})


def post_frame(url, token, frame):
    request = urllib.request.Request(
        url,
        data=frame,
        headers={
            "Content-Type": "image/jpeg",
            **({"X-BERETS-VISION-TOKEN": token} if token else {}),
        },
        method="POST",
    )
    with urllib.request.urlopen(request, timeout=0.5) as response:
        return response.status == 204


class FramePublisher:
    """Передаёт только самый свежий JPEG, не задерживая цикл YOLO."""

    def __init__(self, url, token):
        self.url = url
        self.token = token
        self.frames = queue.Queue(maxsize=1)
        self.stop_event = threading.Event()
        self.thread = threading.Thread(
            target=self._worker,
            name="berets-vision-frame-publisher",
            daemon=True,
        )
        self.thread.start()

    def submit(self, frame):
        try:
            self.frames.put_nowait(frame)
            return
        except queue.Full:
            pass
        try:
            self.frames.get_nowait()
        except queue.Empty:
            pass
        try:
            self.frames.put_nowait(frame)
        except queue.Full:
            pass

    def _worker(self):
        while not self.stop_event.is_set():
            try:
                frame = self.frames.get(timeout=0.2)
            except queue.Empty:
                continue
            try:
                post_frame(self.url, self.token, frame)
            except (urllib.error.URLError, TimeoutError, OSError) as error:
                print(f"Кадр не передан во Flask: {error}", file=sys.stderr)

    def close(self):
        self.stop_event.set()
        self.thread.join(timeout=1.0)


class TrackPublisher:
    """Передаёт только новейший пакет координат, не задерживая YOLO."""

    def __init__(self, url, token):
        self.url = url
        self.token = token
        self.items = queue.Queue(maxsize=1)
        self.stop_event = threading.Event()
        self.thread = threading.Thread(
            target=self._worker,
            name="berets-vision-track-publisher",
            daemon=True,
        )
        self.thread.start()

    def submit(self, payload):
        try:
            self.items.put_nowait(payload)
            return
        except queue.Full:
            pass
        try:
            self.items.get_nowait()
        except queue.Empty:
            pass
        try:
            self.items.put_nowait(payload)
        except queue.Full:
            pass

    def _worker(self):
        while not self.stop_event.is_set():
            try:
                payload = self.items.get(timeout=0.2)
            except queue.Empty:
                continue
            try:
                post_detection(self.url, self.token, payload)
            except (urllib.error.URLError, TimeoutError, OSError) as error:
                print(f"Координаты не переданы во Flask: {error}", file=sys.stderr)

    def close(self):
        self.stop_event.set()
        self.thread.join(timeout=1.0)


def main():
    model_path = os.environ.get("BERETS_YOLO_MODEL")
    if not model_path:
        raise SystemExit("Задайте BERETS_YOLO_MODEL=/путь/к/best.pt")
    endpoint = os.environ.get(
        "BERETS_VISION_URL", "http://127.0.0.1:5000/api/vision/detection"
    )
    token = os.environ.get("BERETS_VISION_TOKEN", "")
    camera_index = int(os.environ.get("BERETS_CAMERA_INDEX", "0"))
    event_confidence = float(os.environ.get("BERETS_MIN_CONFIDENCE", "0.65"))
    display_confidence = float(
        os.environ.get("BERETS_VISION_DISPLAY_CONFIDENCE", "0.50")
    )
    tracking_confidence = float(
        os.environ.get("BERETS_VISION_TRACK_CONFIDENCE", "0.35")
    )
    model_size = int(os.environ.get("BERETS_YOLO_IMGSZ", "320"))
    process_every = max(
        1,
        int(os.environ.get("BERETS_PROCESS_EVERY_N_FRAMES", "2")),
    )
    tracker = os.environ.get("BERETS_YOLO_TRACKER", "bytetrack.yaml")
    camera_width = int(os.environ.get("BERETS_CAMERA_WIDTH", "640"))
    camera_height = int(os.environ.get("BERETS_CAMERA_HEIGHT", "480"))
    display = os.environ.get("BERETS_VISION_DISPLAY", "0") == "1"
    stream_fps = max(0.0, float(os.environ.get("BERETS_VISION_STREAM_FPS", "15")))
    jpeg_quality = max(
        30,
        min(95, int(os.environ.get("BERETS_VISION_JPEG_QUALITY", "70"))),
    )
    annotated = os.environ.get("BERETS_VISION_ANNOTATED", "1") == "1"
    swap_red_green = (
        os.environ.get("BERETS_SWAP_RED_GREEN", "0").strip().lower()
        in {"1", "true", "yes", "on"}
    )
    frame_url = os.environ.get(
        "BERETS_VISION_FRAME_URL",
        endpoint.rsplit("/", 1)[0] + "/frame",
    )
    tracks_url = os.environ.get(
        "BERETS_VISION_TRACKS_URL",
        endpoint.rsplit("/", 1)[0] + "/tracks",
    )
    zones_file = os.environ.get(
        "BERETS_VISION_ZONES_FILE",
        str(Path(__file__).resolve().with_name("vision_zones.json")),
    )

    try:
        import cv2
        from ultralytics import YOLO
    except ImportError as error:
        raise SystemExit(
            "Нужны opencv-python и ultralytics в окружении зрения"
        ) from error

    model = YOLO(model_path)
    camera = cv2.VideoCapture(camera_index, cv2.CAP_V4L2)
    camera.set(cv2.CAP_PROP_FRAME_WIDTH, camera_width)
    camera.set(cv2.CAP_PROP_FRAME_HEIGHT, camera_height)
    camera.set(cv2.CAP_PROP_FPS, 30)
    camera.set(cv2.CAP_PROP_FOURCC, cv2.VideoWriter_fourcc(*"MJPG"))
    if not camera.isOpened():
        raise SystemExit(f"Не удалось открыть камеру с индексом {camera_index}")
    print(
        "Камера:",
        f"{int(camera.get(cv2.CAP_PROP_FRAME_WIDTH))}x"
        f"{int(camera.get(cv2.CAP_PROP_FRAME_HEIGHT))}",
        f"{camera.get(cv2.CAP_PROP_FPS):.1f} FPS",
        f"YOLO imgsz={model_size}, каждый {process_every}-й кадр",
    )

    run_id = uuid.uuid4().hex[:10]
    tracks = {}
    sent_event_ids = set()
    frame_number = 0
    fps_window_started = time.monotonic()
    fps_window_frames = 0
    last_heartbeat = 0.0
    last_stream = 0.0
    latest_annotated = None
    fps = 0.0
    publisher = FramePublisher(frame_url, token) if stream_fps > 0 else None
    track_publisher = TrackPublisher(tracks_url, token)
    ignore_filter = IgnoreZoneFilter(zones_file)
    try:
        while True:
            ok, frame = camera.read()
            if not ok:
                raise RuntimeError("Камера перестала отдавать кадры")
            frame_number += 1
            fps_window_frames += 1
            now = time.monotonic()
            fps_elapsed = now - fps_window_started
            if fps_elapsed >= 1.0:
                measured_fps = fps_window_frames / max(fps_elapsed, 1e-6)
                fps = measured_fps if fps == 0 else 0.70 * fps + 0.30 * measured_fps
                fps_window_started = now
                fps_window_frames = 0
            if now - last_heartbeat >= 1.0:
                try:
                    post_heartbeat(endpoint, token, fps)
                except (urllib.error.URLError, TimeoutError, OSError) as error:
                    print(f"Flask недоступен: {error}", file=sys.stderr)
                last_heartbeat = now
            should_stream = (
                publisher is not None
                and now - last_stream >= 1.0 / stream_fps
            )
            should_process = frame_number == 1 or frame_number % process_every == 0
            if should_process:
                height, width = frame.shape[:2]
                frame_tracks = []
                annotated_frame = (
                    frame.copy()
                    if annotated and (publisher is not None or display)
                    else None
                )
                result = model.track(
                    frame,
                    persist=True,
                    conf=tracking_confidence,
                    imgsz=model_size,
                    device="cpu",
                    tracker=tracker,
                    verbose=False,
                )[0]
                boxes = getattr(result, "boxes", None)
                if boxes is not None:
                    names = result.names
                    for index, box in enumerate(boxes):
                        score = float(box.conf[0])
                        raw_name = str(names[int(box.cls[0])]).strip().lower()
                        label = normalize_label(raw_name, swap_red_green)
                        if not label:
                            continue
                        coordinates = box.xyxy[0].tolist()
                        x_center = (coordinates[0] + coordinates[2]) / 2
                        y_center = (coordinates[1] + coordinates[3]) / 2
                        normalized_center = (
                            max(0.0, min(1.0, x_center / width)),
                            max(0.0, min(1.0, 1.0 - y_center / height)),
                        )
                        if ignore_filter.contains(normalized_center):
                            continue
                        track_tensor = getattr(box, "id", None)
                        track_id = (
                            int(track_tensor[0])
                            if track_tensor is not None
                            else index
                        )
                        previous = tracks.get(track_id)
                        if previous and now - previous["last_seen"] > 2.0:
                            previous = None
                        generation = previous["generation"] if previous else (
                            tracks.get(track_id, {}).get("generation", -1) + 1
                        )
                        tracks[track_id] = {
                            "generation": generation,
                            "last_seen": now,
                        }
                        event_id = f"{run_id}-{track_id}-{generation}"
                        frame_tracks.append(
                            {
                                "event_id": event_id,
                                "label": label,
                                "confidence": score,
                                "x": normalized_center[0],
                                "y": normalized_center[1],
                            }
                        )
                        if (
                            annotated_frame is not None
                            and score >= display_confidence
                        ):
                            draw_detection(
                                cv2,
                                annotated_frame,
                                coordinates,
                                track_id,
                                label,
                                score,
                            )
                        if (
                            score >= event_confidence
                            and event_id not in sent_event_ids
                        ):
                            payload = {
                                "event_id": event_id,
                                "label": label,
                                "confidence": score,
                                "position": max(
                                    0.0,
                                    min(1.0, x_center / width),
                                ),
                                "fps": fps,
                            }
                            try:
                                post_detection(endpoint, token, payload)
                                sent_event_ids.add(event_id)
                            except (
                                urllib.error.URLError,
                                TimeoutError,
                                OSError,
                            ) as error:
                                print(
                                    f"Flask недоступен: {error}",
                                    file=sys.stderr,
                                )
                if annotated_frame is not None:
                    latest_annotated = annotated_frame
                track_publisher.submit(
                    {"frame_number": frame_number, "tracks": frame_tracks}
                )

            output_frame = latest_annotated if annotated and latest_annotated is not None else frame
            if should_stream:
                ok_jpeg, encoded = cv2.imencode(
                    ".jpg",
                    output_frame,
                    [cv2.IMWRITE_JPEG_QUALITY, jpeg_quality],
                )
                if ok_jpeg:
                    publisher.submit(encoded.tobytes())
                last_stream = now

            if display:
                cv2.imshow("BERETS YOLO", output_frame)
                if cv2.waitKey(1) & 0xFF == ord("q"):
                    break
    except KeyboardInterrupt:
        pass
    finally:
        if publisher is not None:
            publisher.close()
        track_publisher.close()
        camera.release()
        if display:
            cv2.destroyAllWindows()


if __name__ == "__main__":
    main()
