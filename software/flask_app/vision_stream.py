"""Потокобезопасное хранение только последнего JPEG-кадра камеры."""

from threading import Condition
import time


class LatestFrameStore:
    def __init__(self):
        self._condition = Condition()
        self._frame = None
        self._sequence = 0
        self._updated_at = 0.0

    def publish(self, frame):
        frame = bytes(frame)
        with self._condition:
            self._frame = frame
            self._sequence += 1
            self._updated_at = time.monotonic()
            self._condition.notify_all()
            return self._sequence

    def wait_after(self, sequence, timeout=2.0):
        with self._condition:
            if self._sequence <= sequence:
                self._condition.wait_for(
                    lambda: self._sequence > sequence,
                    timeout=timeout,
                )
            if self._sequence <= sequence or self._frame is None:
                return None
            return self._sequence, self._frame, self._updated_at
