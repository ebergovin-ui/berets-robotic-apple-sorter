import math


L2 = 176.245
L3 = 190.713
BASE_AXIS_Z = 114.85 + 200.346
POS_PER_DEG = 1000.0 / 240.0


def clamp(value, low, high):
    return max(low, min(high, value))


def inverse_kinematics(x, y, z, phi_deg=0.0):
    """Проверенная ОЗК для контрольной точки на оси последней сервы."""
    q1 = math.atan2(y, x)
    radius = math.hypot(x, y)
    wrist_z = z - BASE_AXIS_Z
    d2 = radius * radius + wrist_z * wrist_z
    cos_q3 = (d2 - L2 * L2 - L3 * L3) / (2.0 * L2 * L3)

    if cos_q3 < -1.000001 or cos_q3 > 1.000001:
        return None
    q3 = -math.acos(clamp(cos_q3, -1.0, 1.0))
    q2 = math.atan2(wrist_z, radius) - math.atan2(
        L3 * math.sin(q3), L2 + L3 * math.cos(q3)
    )
    q4 = math.radians(phi_deg) - q2 - q3

    q1d, q2d, q3d, q4d = map(math.degrees, (q1, q2, q3, q4))
    joints = {
        "1": round(500 + q1d * POS_PER_DEG),
        "10": round(500 + (90.0 - q2d) * POS_PER_DEG),
        "11": round(375 - q3d * POS_PER_DEG),
        "16": round(500 - q4d * POS_PER_DEG),
    }
    if any(value < 0 or value > 1000 for value in joints.values()):
        return None
    return {"joints": joints, "angles": {
        "q1": round(q1d, 2), "q2": round(q2d, 2),
        "q3": round(q3d, 2), "q4": round(q4d, 2),
    }}
