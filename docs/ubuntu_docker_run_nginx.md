# Run docker nginx in ubuntu

使用 Docker 部署 Nginx 非常高效，因為你不需要在宿主機（Host）安裝任何套件，就能快速建立隔離的環境。

要監聽外部的 **80 (HTTP)** 與 **443 (HTTPS)** 埠，你可以使用以下幾種方式：

### 1. 快速啟動（純指令版）

如果你只是想快速測試，可以使用 `docker run`：

```bash
docker run -d \
  --name my-nginx \
  -p 80:80 \
  -p 443:443 \
  nginx

```

* `-d`: 後台執行（Detached mode）。
* `-p 80:80`: 將宿主機的 80 埠對應到容器內的 80 埠。
* `--name`: 替你的容器取個名字。

---

### 2. 進階部署（使用 Docker Compose）

在生產環境或需要長期維護時，建議使用 **Docker Compose**，因為它可以將設定檔掛載出來，方便你修改 Nginx 配置或放入網站網頁。

#### 建立一個專案目錄：

```bash
mkdir nginx-docker && cd nginx-docker
mkdir html conf

```

#### 建立 `docker-compose.yml`:

```yaml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./html:/usr/share/nginx/html      # 存放你的網頁檔案
      - ./conf:/etc/nginx/conf.d         # 存放你的 .conf 設定檔
    restart: always

```

#### 啟動服務：

```bash
docker compose up -d

```

---

### 3. 架構圖解

當流量進來時，Docker 會透過其內部網路橋接器，將宿主機的埠轉發給 Nginx 容器：

---

### 重要注意事項

1. **SSL 憑證 (443 Port)**：
雖然你開啟了 443 埠，但 Nginx 預設並不會處理 HTTPS。你需要將你的 SSL 憑證（如 `.crt` 和 `.key`）掛載進容器，並在 `conf` 檔案中設定：
```nginx
listen 443 ssl;
ssl_certificate /etc/nginx/certs/fullchain.pem;
ssl_certificate_key /etc/nginx/certs/privkey.pem;

```


2. **檔案權限**：
確保你掛載的 `html` 資料夾內有 `index.html`，否則訪問時會出現 403 Forbidden。
3. **防火牆**：
如果訪問不到，請檢查 Ubuntu 的防火牆是否允許流量：
`sudo ufw allow 80/tcp`
`sudo ufw allow 443/tcp`

**你需要我幫你產生一份包含 SSL 設定的 Nginx 設定檔範本嗎？或者是你想了解如何配合 Let's Encrypt 自動更新憑證？**
