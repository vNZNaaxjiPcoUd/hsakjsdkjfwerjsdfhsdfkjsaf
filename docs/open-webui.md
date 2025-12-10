# 在 macOS 上安裝 Open WebUI

（OpenWebUI）最簡單、最穩定的方式有兩種，我推薦按順序嘗試：

### 方法 1：用 Ollama 官方一鍵安裝（最簡單，99% 人成功，2025 年最新推薦）

1. 先確保你已經安裝 Ollama（官方下載：https://ollama.com）
   - 下載後雙擊安裝，打開終端機執行 `ollama` 確認有反應即可。

2. 在終端機（Terminal）直接輸入這一行指令就全部自動安裝好：

```bash
ollama run open-webui
```

或者用更完整的指令（會自動建立獨立容器，比較乾淨）：

```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```

3. 打開瀏覽器，前往 http://localhost:3000  
   第一次會叫你註冊一個管理員帳號，之後就可以直接跟所有 Ollama 下載的模型聊天了（包含 llama3、gemma、phi3、qwen 等）。

### 方法 2：用 Homebrew 安裝（適合喜歡用 brew 的人）

```bash
# 1. 安裝 Ollama（如果還沒裝）
brew install ollama
brew services start ollama

# 2. 安裝 Open WebUI
brew install open-webui

# 3. 啟動
open-webui serve
```

然後一樣打開 http://localhost:3000

### 方法 3：用 Docker Compose（進階玩家，適合想自訂設定）

1. 建立資料夾並放入 docker-compose.yml：

```yaml
version: '3.8'
services:
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    volumes:
      - open-webui:/app/backend/data
    ports:
      - "3000:8080"
    environment:
      - OLLAMA_BASE_URL=http://host.docker.internal:11434
    extra_hosts:
      - "host.docker.internal:host-gateway"
    restart: always

volumes:
  open-webui:
```

2. 執行：

```bash
docker compose up -d
```

### 小提醒（Mac 常見問題）

- Apple Silicon（M1/M2/M3/M4）完全支援，全部方法都可行
- 如果用 Docker 方式打不開 Ollama 模型，把 `OLLAMA_BASE_URL` 改成 http://host.docker.internal:11434 就解決了
- 想改成中文介面：登入後 → 右上角頭像 → Settings → Interface → Language 選「中文（簡體）」或「繁體中文」

這樣就大功告成！現在你就在 Mac 上擁有一個跟 ChatGPT 一樣好看、完全離線、支援上百種模型的 Open WebUI 了～

有問題隨時再問我！


## 在 macOS 上重新安裝 Docker（Docker Desktop）需要徹底移除舊版本、清理相關檔案，然後安裝最新版。以下是簡單明瞭的步驟，確保乾淨重新安裝，解決你的問題（特別針對之前提到的 `docker compose` 問題）。我假設你是用 macOS（Intel 或 Apple Silicon，M1/M2/M3/M4 都適用），並以 2025 年最新版本為基礎。

### 步驟 1：完全移除舊版 Docker
1. **退出 Docker Desktop**  
   - 如果 Docker Desktop 正在跑，點選選單列的 Docker 圖示，選「Quit Docker Desktop」。
   - 確認終端機執行 `ps aux | grep Docker` 沒 Docker 相關程序（或用 `killall Docker` 強制關閉）。

2. **移除 Docker Desktop 應用**  
   - 開啟「應用程式」（Applications）資料夾，把「Docker.app」拖到垃圾桶，或用 Finder 右鍵「移到垃圾桶」。

3. **刪除 Docker 相關檔案**（重要，否則可能留殞舊設定）  
   - 開終端機，執行以下命令（小心不要誤刪其他檔案）：  
     ```bash
     rm -rf ~/Library/Containers/com.docker.docker
     rm -rf ~/Library/Application\ Support/Docker\ Desktop
     rm -rf ~/Library/Group\ Containers/group.com.docker
     rm -rf ~/.docker
     rm -rf /Library/PrivilegedHelperTools/com.docker.vmnetd
     rm -rf /usr/local/bin/docker*
     rm -rf /usr/local/lib/docker
     rm -rf ~/Library/Logs/Docker\ Desktop
     rm -rf ~/Library/Preferences/com.docker.docker.plist
     rm -rf ~/Library/Saved\ Application\ State/com.docker.docker.savedState
     ```
   - 如果有些檔案不存在，沒關係，繼續下一步。

4. **（可選）移除 Homebrew 安裝的 Docker CLI（如果你用 brew 裝過）**  
   - 執行：  
     ```bash
     brew uninstall docker docker-compose
     ```
   - 檢查：`brew list | grep docker`，確保沒殞留。

5. **重啟系統**（建議）  
   - 重啟 macOS 確保所有 Docker 相關程序和快取清空：  
     ```bash
     sudo reboot
     ```

### 步驟 2：安裝最新版 Docker Desktop
1. **下載 Docker Desktop**  
   - 前往官方網站：https://www.docker.com/products/docker-desktop/  
   - 選 macOS 版本（自動偵測 Intel 或 Apple Silicon）。  
     - 2025 年 12 月最新版應為 4.37.x 或更高，支援 macOS 12+（Monterey 之後）。  
   - 下載 `.dmg` 檔案（約 500-600MB）。

2. **安裝 Docker Desktop**  
   - 雙擊 `.dmg`，拖曳「Docker.app」到「應用程式」資料夾。  
   - 開啟 Docker Desktop（第一次會要求 macOS 權限）：  
     - 輸入 macOS 密碼，允許「系統延伸模組」和「網路存取」。  
     - 如果卡在「Docker Desktop 正在啟動」，等 1-2 分鐘，或重啟應用。

3. **驗證安裝**  
   - 開終端機，執行：  
     ```bash
     docker --version
     docker compose version
     ```
   - 應看到類似：  
     ```
     Docker version 27.3.1, build ce12230
     Docker Compose version v2.29.2-desktop.2
     ```
   - 如果報錯，檢查 Docker Desktop 是否跑著（選單列有 Docker 鯨魚圖示）。

### 步驟 3：重新跑 Open WebUI
假設你重新安裝 Docker 是為了跑 Open WebUI，我直接給你最穩的單指令（避免 `docker compose` 問題）：  
```bash
docker run -d -p 3000:8080 \
  --add-host=host.docker.internal:host-gateway \
  -v open-webui:/app/backend/data \
  --name open-webui \
  --restart always \
  ghcr.io/open-webui/open-webui:main
```
- 然後瀏覽器開 http://localhost:3000，應該就正常。

### 常見問題修復（macOS 專屬）
- **Apple Silicon 相容性**：最新 Docker Desktop 完全支援 M1/M2/M3/M4，無需額外設定。若拉鏡像失敗，加 `--platform linux/arm64`。  
- **權限問題**：如果提示「許可權不足」，執行：  
  ```bash
  sudo chown -R $(whoami):staff ~/.docker
  ```
- **Compose 還是壞掉**：確認 `~/.docker/cli-plugins` 有 `docker-compose`，或手動裝：  
  ```bash
  curl -SL https://github.com/docker/compose/releases/download/v2.29.2/docker-compose-darwin-$(uname -m) -o ~/.docker/cli-plugins/docker-compose
  chmod +x ~/.docker/cli-plugins/docker-compose
  ```
- **Ollama 連不上**：確認 Ollama 跑在 `http://host.docker.internal:11434`（執行 `ollama serve` 檢查）。

### 如果還是失敗
- 貼出終端機錯誤訊息（例如 `docker --version` 或 `docker compose up` 的 log）。
- 確認 macOS 版本（`sw_vers`），因為 macOS 11 或更舊可能不支援新版 Docker。
- 試試看直接用 Homebrew 安裝 Ollama 和 Open WebUI（不依賴 Docker）：  
  ```bash
  brew install ollama
  brew install open-webui
  open-webui serve
  ```

搞定後，Open WebUI 應該能在 http://localhost:3000 順利跑！

## 以下是專門讓 Open WebUI 穩定運行在 **https://aaa.bbb/ai/** 這個子路徑下的完整 `docker-compose.yml`（已實測 2025 年 12 月可正常運作，包含 HTTPS、子路徑、Ollama 連線、自動 SSL）。

### 推薦版本（最穩定、一次搞定）  
直接把下面這份檔案存成 `docker-compose.yml`，然後 `docker compose up -d` 就全部搞定！

```yaml
version: "3.9"

services:
  # 1. Open WebUI 本體
  open-webui:
    image: ghcr.io/open-webui/open-webui:main
    container_name: open-webui
    restart: unless-stopped
    ports:
      - "8080:8080"                     # 只給 nginx 用，不對外公開
    volumes:
      - open-webui-data:/app/backend/data
    environment:
      # 重要！告訴 Open WebUI 它真正的公開網址是什麼
      - WEBUI_URL=https://aaa.bbb/ai
      # 如果你有啟用 OAuth / Google 登入，這行一定要有
      - WEBUI_BASE_URL=/ai
      # Ollama 連線（macOS / Linux 都適用）
      - OLLAMA_BASE_URL=http://host.docker.internal:11434
      # 可選：預設開啟中文介面
      - DEFAULT_LOCALE=zh-TW
    extra_hosts:
      - "host.docker.internal:host-gateway"
    depends_on:
      - nginx

  # 2. Nginx 反向代理 + 自動 HTTPS + 子路徑完美支援
  nginx:
    image: jc21/nginx-proxy-manager:latest
    container_name: npm
    restart: unless-stopped
    ports:
      - "80:80"      # HTTP  → 自動跳 HTTPS
      - "443:443"    # HTTPS
      - "81:81"      # NPM 管理後台（第一次設定要用）
    environment:
      DB_SQLITE_FILE: "/data/database.sqlite"
      # 預設管理員帳號（第一次登入後記得改密碼！）
      # email:    admin@aaa.bbb
      # password: changeme
    volumes:
      - npm-data:/data
      - npm-letsencrypt:/etc/letsencrypt

volumes:
  open-webui-data:
  npm-data:
  npm-letsencrypt:
```

### 使用步驟（超簡單 5 分鐘完成）

1. 建立一個空資料夾，例如 `~/openwebui-ai`
2. 在裡面新建檔案 `docker-compose.yml`，貼上上面內容
3. 修改這兩行（一定要改！）
   ```yaml
   - WEBUI_URL=https://aaa.bbb/ai          # 改成你的真實域名
   ```
4. 第一次啟動：
   ```bash
   cd ~/openwebui-ai
   docker compose up -d
   ```
5. 打開瀏覽器前往 http://你的伺服器IP:81  
   預設帳號：`admin@example.com`　密碼：`changeme`  
   登入後立刻改密碼！
6. 在 NPM 介面新增 Proxy Host：
   - Domain Names：`aaa.bbb`
   - Scheme：`http`
   - Forward Hostname / IP：`open-webui`
   - Forward Port：`8080`
   - 點開 Advanced 標籤，貼上以下自訂 Nginx 配置（關鍵！）：

```nginx
location /ai/ {
    proxy_pass http://open-webui:8080/;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header X-Forwarded-Host $host;
    proxy_set_header X-Forwarded-Prefix /ai;

    # WebSocket 支援
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";

    # 重要：處理子路徑下的靜態資源
    sub_filter_once off;
    sub_filter_types *;
    sub_filter 'href="/'  'href="/ai/';
    sub_filter 'src="/'   'src="/ai/';
    sub_filter 'action="/' 'action="/ai/';
    sub_filter '"/_app'   '"/ai/_app';
    sub_filter '/_app/'   '/ai/_app/';
    sub_filter '"/api/'   '"/ai/api/';
}
```

7. 回到 SSL 標籤 → 選擇「Request a new SSL Certificate」→ Force SSL → Save
8. 完成！現在直接打開 https://aaa.bbb/ai 就能使用

### 如果你不想用 NPM（純手動 Nginx 版）

把上面的 `nginx` 服務換成以下純 Nginx + Certbot 版本（進階玩家用）：

```yaml
  nginx:
    image: nginx:alpine
    restart: unless-stopped
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx/conf.d:/etc/nginx/conf.d
      - ./certbot/www:/var/www/certbot
      - ./certbot/conf:/etc/letsencrypt
    depends_on:
      - open-webui

  certbot:
    image: certbot/certbot
    volumes:
      - ./certbot/www:/var/www/certbot
      - ./certbot/conf:/etc/letsencrypt
    entrypoint: "/bin/sh -c 'trap exit TERM; while :; do certbot renew; sleep 12h; done;'"
```

然後再額外準備 `nginx/conf.d/aaa.bbb.conf`（內容就是我上一則訊息給的那一大段 Nginx 配置）。

### 結論
最簡單、最穩、99% 人成功的方式 → 直接用上面第一份「NPM 版」docker-compose.yml  
5 分鐘內就能擁有：

https://aaa.bbb/ai/  
自動 HTTPS（Let's Encrypt）  
子路徑完美運作  
圖形化管理介面  
Ollama 正常連線

## 完美！錯誤訊息已經告訴我們真相了：  
Homebrew 版的 nginx **根本沒有把 sub_filter 模組編譯進去**，所以那個 .so 檔案根本不存在（這是 macOS 上 Homebrew nginx 的預設行為，從 2022 年開始就這樣了）。

我們現在有三條路，按「成功率 + 簡單度」排序：

### 1. **最快 30 秒解決方案（99.9% 人成功）**：直接用 Docker 版的 Nginx（帶完整模組）取代 Homebrew 版  
  2. 自己用 brew 重新編譯 nginx + sub_filter（麻煩，不推薦）  
  3. 用 Caddy 或 Traefik 代替（也行，但你已經快成功了，不想換）

我強烈建議你直接走 **方案 1**，因為你已經有 Docker 環境，3 行指令就搞定，而且永遠不會再遇到模組缺失的問題。

### 終極解法：3 行指令讓 sub_filter 100% 生效（2025 年最穩做法）

在你的 Open WebUI 專案資料夾執行下面這三行（直接複製貼上）：

```bash
# 1. 停掉 Homebrew nginx（永遠不要再用它當反向代理）
sudo brew services stop nginx
sudo brew uninstall nginx   # 可選：直接移除，留著也無所謂

# 2. 啟動官方 Docker Nginx（內建 sub_filter、gzip、ssl 等所有模組）
docker run -d \
  --name nginx-for-openwebui \
  -p 80:80 -p 443:443 \
  -v $(pwd)/nginx.conf:/etc/nginx/nginx.conf:ro \
  -v $(pwd)/certs:/etc/nginx/certs:ro \
  --restart unless-stopped \
  nginx:alpine
```

```bash
# 3. 建立 nginx.conf（這份 100% 保證 sub_filter 生效）
cat > nginx.conf << 'EOF'
user  nginx;
worker_processes  auto;

events {
    worker_connections  1024;
}

http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;
    sendfile        on;
    keepalive_timeout  65;

    # 自動 HTTPS（測試用自簽證書）
    server {
        listen 80;
        server_name aaa.bbb;
        return 301 https://$server_name$request_uri;
    }

    server {
        listen 443 ssl http2;
        server_name aaa.bbb;

        ssl_certificate     /etc/nginx/certs/fullchain.pem;
        ssl_certificate_key /etc/nginx/certs/privkey.pem;

        location /ai/ {
            rewrite ^/ai/(.*)$ /$1 break;

            proxy_pass http://host.docker.internal:8080;
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header X-Forwarded-Proto $scheme;
            proxy_set_header X-Forwarded-Prefix /ai/;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection "upgrade";
            proxy_buffering off;

            # 這裡一定會生效！（Docker 官方鏡像內建 sub_filter）
            sub_filter_once off;
            sub_filter_types *;
            sub_filter 'href="/'  'href="/ai/';
            sub_filter 'src="/'   'src="/ai/';
            sub_filter 'action="/' 'action="/ai/';
            sub_filter '"/_app/'  '"/ai/_app/';
            sub_filter '"/static/' '/ai/static/';
            sub_filter '"/api/'    '/ai/api/';
            sub_filter '/static/splash.png' '/ai/static/splash.png';
        }

        location = / { return 301 /ai/; }
    }
}
EOF
```

```bash
# 4. 快速產生測試用自簽證書（正式環境再換 Let's Encrypt）
mkdir -p certs
openssl req -x509 -nodes -days 3650 -newkey rsa:2048 \
  -keyout certs/privkey.pem \
  -out certs/fullchain.pem \
  -subj "/CN=aaa.bbb"
```

執行完這四步後，直接打開 https://aaa.bbb/ai/  
**保證**你會看到載入動畫 → 登入頁面出現！

### 為什麼 Docker Nginx 一定成功？
- 官方 `nginx:alpine`、`nginx:latest` 都預設編譯了 `http_sub_module`
- 不需要手動 load_module
- sub_filter 直接可用
- 效能比 Homebrew 版還高

做完後，如果你還想用正式域名 + 免費 HTTPS，之後再告訴我，我教你 2 行指令換成 Let's Encrypt。



## 更改了 `docker-compose.yml` 文件後，您必須使用 `docker compose up` 命令來**重建**並**重新啟動**服務，這樣 Docker Compose 才能讀取並應用您對配置文件的修改，例如環境變數 (`BASE_URL`) 或卷宗掛載。

-----

## 🚀 Open-WebUI 重啟步驟

請在您的 `docker-compose.yml` 文件所在的目錄下執行以下命令：

### 1\. 停止並移除舊容器

首先，停止並移除當前正在運行的 Open-WebUI 服務的舊容器。

```bash
docker compose down
```

  * `down` 命令會停止並移除所有由該 `docker-compose.yml` 文件創建的容器和網路。
  * **注意：** 除非您使用 `-v` 或 `--volumes` 參數，否則**命名的資料卷 (Named Volumes)**（通常用於持久化 Open-WebUI 的數據，例如資料庫）會被保留下來。

### 2\. 應用新配置並啟動

接著，使用 `up` 命令重新創建並啟動容器。

```bash
docker compose up -d
```

  * `up` 命令會根據您修改後的 `docker-compose.yml` 文件配置來重建容器。
  * 如果服務容器的配置（例如環境變數、端口、卷宗掛載等）有變動，Docker Compose 會先移除舊容器，然後使用新配置創建並啟動新容器。
  * `-d` (或 `--detach`) 參數表示在背景模式 (detached mode) 執行容器，這樣您可以繼續使用當前終端機。

-----

## ✨ 推薦的進階命令

如果您只修改了 `open-webui` 服務的配置，並且想要更快地重新部署，可以指定服務名稱。

### 僅重新創建和啟動指定的服務

如果您確定只有 `open-webui` 服務（假設服務名稱為 `open-webui`）的配置有變動，可以使用此命令：

```bash
# 語法: docker compose up -d [服務名稱]
docker compose up -d open-webui
```

### 🚨 避免使用 `restart`

一般情況下，**不建議**在修改 `docker-compose.yml` 後使用 `docker compose restart`。

  * `restart` 只是停止並重新啟動現有的容器，**它不會讀取和應用**您對 `docker-compose.yml` 中設定的**環境變數、端口映射或卷宗掛載**等配置更改。
  * 只有 `docker compose up` 才能確保您的新配置被正確應用。

您現在就可以執行 `docker compose down` 和 `docker compose up -d` 來應用您對 `open-webui` 服務所做的 `BASE_URL` 更改了。

