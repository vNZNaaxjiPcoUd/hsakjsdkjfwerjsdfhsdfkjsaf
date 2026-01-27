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

# 嚴格來說，Nginx 本身是一個非常極簡且安全的軟體，它**預設沒有**像 Apache 或其他伺服器那樣「華麗」的管理後台。

不過，Nginx 確實有幾個「隱藏」的狀態與管理功能，有些是內建的，有些則是透過第三方模組實現的：

### 1. 內建的狀態檢查頁：`stub_status`

這是 Nginx 最接近「管理頁面」的內建功能。它不會預設開啟，你必須在設定檔中手動啟用它。

**設定方式：**
在你的 Nginx 設定檔（如 `/etc/nginx/sites-available/default`）中加入：

```nginx
location /nginx_status {
    stub_status;
    allow 127.0.0.1;   # 只允許本機存取
    deny all;          # 拒絕其他所有人
}

```

**它會顯示什麼？**
訪問 `http://your-ip/nginx_status` 後，你會看到一串純文字：

* **Active connections**: 目前活躍的連線數。
* **server accepts handled requests**: 總共處理的連線與請求數。
* **Reading/Writing/Waiting**: 正在讀取標頭、寫入回應與閒置等待的數量。

---

### 2. Nginx Plus Dashboard (付費版專屬)

如果你使用的是商業付費版的 **Nginx Plus**，它確實擁有一個非常強大的實時監控面板。它可以顯示每個 Upstream 伺服器的健康狀況、流量分配和詳細的錯誤統計。

---

### 3. 常見的第三方「替代」管理介面

如果你需要的是像網頁後台一樣管理網站、設定 SSL 或反向代理，大家通常會安裝以下這些工具：

* **Nginx Proxy Manager (NPM)**：最受歡迎的 Docker 版管理介面，點幾下就能設定好反向代理與 Let's Encrypt。
* **Amplify**: Nginx 官方提供的免費雲端監控工具，可以視覺化 Nginx 的各項指標。
* **GoAccess**: 雖然不是「管理頁面」，但它能即時讀取 Nginx Log 並產生一個超酷的 HTML 儀表板，讓你看清楚誰在訪問你的網站。

---

### ⚠️ 安全提醒：為什麼 Nginx 隱藏這些資訊？

Nginx 的設計哲學是「安全」與「性能」。暴露過多的系統資訊（例如 Nginx 版本號或詳細負載）可能會讓駭客更容易針對你的系統進行攻擊。

> **小撇步**：建議在 `nginx.conf` 中加入 `server_tokens off;`，這樣在報錯頁面上就不會顯示 Nginx 的版本號，這也算是一種「隱藏」。

**你想嘗試在剛才的 Docker 環境中開啟 `stub_status` 來監控連線嗎？或者你想了解如何安裝 Nginx Proxy Manager 來獲得圖形化介面？**

# 要在剛才的 Docker 環境中安裝 **Nginx Proxy Manager (NPM)**，最簡單且推薦的方式是使用 **Docker Compose**。

NPM 本質上是一個結合了 Nginx、Node.js 和 MariaDB (或 SQLite) 的整合包，它提供了一個非常直覺的網頁 UI 來管理你的反向代理與 SSL 憑證。

---

### 1. 建立 NPM 專案目錄

建議為 NPM 建立一個獨立的資料夾，避免與之前的純 Nginx 容器混亂。

```bash
mkdir npm-project && cd npm-project

```

### 2. 建立 `docker-compose.yml`

請建立一個新檔案並貼入以下內容。這裡我們使用 SQLite 作為資料庫（設定最簡單），並將所有的資料持久化到本地：

```yaml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: always
    ports:
      - '80:80'      # 公開 HTTP 流量
      - '443:443'    # 公開 HTTPS 流量
      - '81:81'      # NPM 管理後台入口
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt

```

### 3. 啟動 NPM

在目錄下執行：

```bash
docker compose up -d

```

---

### 4. 登入管理介面

啟動後，請打開瀏覽器並輸入：
`http://你的伺服器IP:81`

**預設的登入帳密如下（進去後會要求你立即修改）：**

* **Email:** `admin@example.com`
* **Password:** `changeme`

---

### 5. 如何將流量導向你的其他容器？

NPM 的強大之處在於，你可以在網頁上點選 **"Proxy Hosts" -> "Add Proxy Host"**，然後進行以下設定：

* **Domain Names**: 輸入你的網域 (例如 `api.yourdomain.com`)。
* **Scheme**: 通常選 `http`。
* **Forward Hostname / IP**:
* 如果是同一台機器的容器，可以填入該容器的 **Docker IP** 或 **Container Name**。
* 如果是不同機器，則填入對方的公網或私網 IP。


* **Forward Port**: 你的服務所監聽的埠號 (例如 `8080`)。
* **SSL 頁籤**: 可以一鍵申請 **Let's Encrypt** 免費憑證。

---

### ⚠️ 注意事項

1. **埠號衝突**：如果你之前已經啟動了那個「純 Nginx」容器（聽 80/443），請記得先把它停掉 (`docker stop <container_id>`)，否則 NPM 會因為埠號被占用而無法啟動。
2. **防火牆**：記得在 Ubuntu UFW 中開啟 **81 埠**，否則你連不進管理後台：
`sudo ufw allow 81/tcp`

**你目前有現成的網域想要設定 SSL 嗎？或者需要我示範如何將 NPM 與其他 Docker 容器串接在一起？**

# 既然要使用 **PostgreSQL** 作為 Nginx Proxy Manager (NPM) 的資料庫，這會讓整個系統更穩定，也適合未來有大量 Proxy 紀錄的需求。

我們需要稍微修改 `docker-compose.yml`，讓 NPM 與 Postgres 兩個容器能夠互相溝通。

### 1. 修改 `docker-compose.yml`

請將你的設定檔更新為以下內容。我加入了一個專用的 Docker 網路 (Network)，確保服務之間連線無礙：

```yaml
version: '3.8'
services:
  app:
    image: 'jc21/nginx-proxy-manager:latest'
    restart: always
    ports:
      - '80:80'
      - '81:81'
      - '443:443'
    environment:
      # 指定使用 Postgres
      DB_POSTGRES_HOST: "db"
      DB_POSTGRES_PORT: 5432
      DB_POSTGRES_USER: "npm_user"
      DB_POSTGRES_PASSWORD: "npm_password"
      DB_POSTGRES_NAME: "npm_db"
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    depends_on:
      - db

  db:
    image: 'postgres:15-alpine'
    restart: always
    environment:
      POSTGRES_USER: "npm_user"
      POSTGRES_PASSWORD: "npm_password"
      POSTGRES_DB: "npm_db"
    volumes:
      - ./db_data:/var/lib/postgresql/data

```

---

### 2. 啟動服務

在終端機執行：

```bash
docker compose up -d

```

執行後，Docker 會先啟動 Postgres 容器，等資料庫準備好後，NPM 就會連進去並自動建立所需的資料表。

---

### 3. 架構說明

引入 PostgreSQL 後，你的架構會變成這樣：

* **NPM App 容器**：負責處理 Web UI、Nginx 配置生成以及 Let's Encrypt 憑證申請。
* **Postgres 容器**：存放你所有的 Proxy Hosts 設定、使用者帳密與日誌紀錄。
* **持久化**：所有的資料都會存放在本地的 `./db_data` 資料夾，即使容器刪除重建，設定也不會消失。

---

### 4. 常見問題與管理

* **如何進入資料庫查看？**
如果你想手動進去 Postgres 看資料，可以下這行指令：
`docker exec -it npm-project-db-1 psql -U npm_user -d npm_db`
* **備援建議**：
既然用了 Postgres，建議定期備份 `./db_data` 資料夾。對於生產環境，可以使用 `pg_dump` 指令進行熱備份。

---

### 5. 初始登入提示

別忘了，第一次進入 `http://IP:81` 時，預設帳密依然是：

* **Email:** `admin@example.com`
* **Password:** `changeme`

**設定好之後，你是要用它來對外發布其他的 Docker 服務（例如一個 Python API 或 Node.js 網站）嗎？我可以教你如何設定 Internal Docker Network 連線。**

# 使用 **Docker Compose** 安裝 Portainer 是更優雅的做法，因為這能讓你把設定紀錄在檔案中，未來要遷移或調整設定時會方便許多。

以下是使用 Docker Compose 安裝 Portainer 的步驟：

### 1. 建立 Portainer 專案目錄

為了保持系統整潔，我們先建立一個專屬資料夾：

```bash
mkdir portainer-manager && cd portainer-manager

```

### 2. 建立 `docker-compose.yml`

建立檔案並貼入以下內容：

```yaml
version: '3.8'

services:
  portainer:
    image: portainer/portainer-ce:latest
    container_name: portainer
    restart: always
    security_opt:
      - no-new-privileges:true
    volumes:
      - /etc/localtime:/etc/localtime:ro
      - /var/run/docker.sock:/var/run/docker.sock  # 讓 Portainer 存取本機 Docker 資訊
      - portainer_data:/data                       # 持久化儲存 Portainer 的設定資料
    ports:
      - "9443:9443"  # HTTPS 管理介面
      - "8000:8000"  # 用於邊緣代理 (Edge Agent) 通訊
    networks:
      - portainer_network

networks:
  portainer_network:
    driver: bridge

volumes:
  portainer_data:

```

### 3. 啟動容器

在該目錄下執行：

```bash
docker compose up -d

```

---

### 4. 初始化設定

1. **開啟網頁**：訪問 `https://你的伺服器IP:9443`。
2. **建立帳號**：第一次啟動時，你必須在 **5 分鐘內** 完成管理員帳號設定，否則 Portainer 出於安全考量會自動關閉，屆時你需要重啟容器。
3. **連線環境**：點選 **"Get Started"** 連結本機環境 (Local Environment)。

---

### 5. 高階技巧：將 NPM 與 Portainer 串起來

既然你之前安裝了 **Nginx Proxy Manager (NPM)**，你一定不希望每次都要背 `9443` 這個埠號，且還要忍受瀏覽器的「不安全連線」警告。

**你可以這樣做：**

1. 在 **NPM** 中新增一個 **Proxy Host**。
2. **Domain Names**: `portainer.yourdomain.com`。
3. **Forward Hostname**: 輸入伺服器的內網 IP（或如果它們在同一個 Docker Network，直接輸入 `portainer`）。
4. **Forward Port**: `9443`。
5. **重要：** 在 NPM 的設定中，**Scheme** 記得選 `https`，因為 Portainer 預設強制使用 SSL。
6. 在 SSL 頁籤勾選 **Request a new SSL Certificate**。

---

### 總結你的工具箱

目前你已經擁有了一套強大的 Ubuntu 伺服器管理組合：

* **Ubuntu + systemctl**: 基礎系統服務管理。
* **PostgreSQL**: 強大的關聯式資料庫。
* **Nginx Proxy Manager**: 圖形化管理網站入口與 SSL。
* **Portainer**: 圖形化管理所有的 Docker 容器。

**你想試著將剛才的 PostgreSQL 資料庫也加入 Portainer 進行監控嗎？或者有其他的 Docker 服務想要部署？**

# 是的，這個 `docker-compose.yml` **確實有連結**到你剛建立的 volume。

在 YAML 檔案中，它是透過以下兩個部分來完成連結的：

### 1. 服務層級的掛載 (Mapping)

在 `services` -> `portainer` -> `volumes` 底下：

```yaml
    volumes:
      - portainer_data:/data

```

這行指令的意思是：將名為 **`portainer_data`** 的 Volume，掛載到容器內部的 **`/data`** 路徑（Portainer 儲存所有設定的地方）。

### 2. 定義層級的宣告 (Declaration)

在檔案的最底部：

```yaml
volumes:
  portainer_data:

```

這部分是告訴 Docker Compose：「嘿，這個專案會用到一個叫做 `portainer_data` 的資料卷」。

---

### 重要細節：它是「新建」還是「沿用」？

這裡有一個 Linux/Docker 的小細節要注意：

* **如果你之前手動執行過** `docker volume create portainer_data`：
Docker Compose 預設會尋找名為 `portainer-manager_portainer_data`（加上了資料夾前綴）的新 Volume。
* **如果你想「強制連結」到之前手動建立的那個 Volume**：
你需要將底部的定義改成 `external: true`，如下所示：

```yaml
volumes:
  portainer_data:
    external: true  # 告訴 Docker Compose 去找外面已經存在的 Volume，不要自己創新的

```

### 如何驗證？

你可以執行以下指令來查看目前系統中所有的 Volume，確認 Portainer 到底是在讀哪一個：

```bash
docker volume ls

```

如果你看到一個 `portainer-manager_portainer_data`，那就是 Compose 剛幫你新建立的。

**你想確認 Portainer 內的資料是否有正確保存下來（例如重啟後帳號還在不在），還是需要我幫你修改成使用特定的本機路徑（Bind Mount）來儲存資料？**



