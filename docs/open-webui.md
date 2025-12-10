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

搞定後，Open WebUI 應該能在 http://localhost:3000 順利跑！有問題隨時丟給我，我幫你 debug～
