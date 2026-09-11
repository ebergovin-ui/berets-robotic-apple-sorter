# Установка автозапуска BERETS

Автозапуск включать только после поузловых проверок из
[`docs/SAFE_START.md`](../../../docs/SAFE_START.md). До этого службы не
устанавливать или оставить выключенными.

```bash
sudo useradd --system --home /opt/berets --shell /usr/sbin/nologin berets
sudo mkdir -p /opt/berets
sudo chown berets:berets /opt/berets
sudo -u berets git clone <адрес-репозитория> /opt/berets

cd /opt/berets/software/flask_app
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
cp berets.env.example berets.env
deactivate

cd /opt/berets/software/apple_sorting
python3 -m venv .venv
source .venv/bin/activate
python3 -m pip install -r requirements.txt
deactivate

cd /opt/berets/software/flask_app
sudo cp deploy/berets-flask.service /etc/systemd/system/
sudo cp deploy/berets-yolo.service /etc/systemd/system/
sudo systemctl daemon-reload
```

Вместо `<адрес-репозитория>` укажите адрес своей копии проекта. Перед запуском
создайте уникальные значения `BERETS_SECRET_KEY` и `BERETS_SYSTEM_PASSWORD` в
`/opt/berets/software/flask_app/berets.env`. Не включайте параметры
`BERETS_REAL_*`, пока каждый узел не проверен отдельно.

Сначала запускайте только Flask:

```bash
sudo systemctl enable --now berets-flask.service
sudo systemctl status berets-flask.service
journalctl -u berets-flask.service -f
```

YOLO включайте отдельной командой только когда камера и модель проверены:

```bash
sudo systemctl enable --now berets-yolo.service
sudo systemctl status berets-yolo.service
journalctl -u berets-yolo.service -f
```

Остановка и возврат к ручному запуску:

```bash
sudo systemctl disable --now berets-yolo.service
sudo systemctl disable --now berets-flask.service
```

Службы не заменяют физический E-STOP. При опасном движении сначала отключите
силовое питание, затем остановите процессы.
