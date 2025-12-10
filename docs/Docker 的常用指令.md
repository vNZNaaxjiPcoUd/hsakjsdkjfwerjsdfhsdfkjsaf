# Docker 的常用指令

好的，Docker 的常用指令非常多，但我們可以將它們歸類為幾個主要的操作範疇：**映像檔管理**、**容器生命週期管理**、**網路**、**資料卷**，以及 **Docker Compose**。

## 🐳 Docker 常用指令總覽

-----

### 1\. 映像檔 (Image) 管理

映像檔是容器運行的基礎，包含了應用程式的程式碼、函式庫、環境等。

| 指令 | 描述 |
| :--- | :--- |
| `docker pull <image_name>` | 從 Docker Hub 或其他 registry **下載**映像檔。 |
| `docker images` | **列出**本地所有的映像檔。 |
| `docker build -t <tag> .` | 根據當前目錄的 **`Dockerfile`** **建置**新的映像檔，並命名標籤。 |
| `docker rmi <image_name>` | **刪除**本地的一個或多個映像檔。 |
| `docker push <tag>` | **上傳**本地映像檔到 Docker Hub 或其他 registry。 |

-----

### 2\. 容器 (Container) 生命週期管理

容器是映像檔運行時的實例。

| 指令 | 描述 |
| :--- | :--- |
| `docker run -d -p <host_port>:<container_port> <image>` | **啟動**一個新容器：<br> `-d`: 背景運行 (Detached mode)。<br> `-p`: 端口映射。 |
| `docker ps` | **列出**所有**正在運行中**的容器。 |
| `docker ps -a` | **列出**所有的容器 (包括已停止的)。 |
| `docker start <container_id/name>` | **啟動**一個已停止的容器。 |
| `docker stop <container_id/name>` | **停止**一個正在運行的容器。 |
| `docker restart <container_id/name>` | **重啟**容器。 |
| `docker rm <container_id/name>` | **刪除**一個已停止的容器。 |
| `docker logs <container_id/name>` | 顯示容器的標準輸出 (Stdout/Stderr) **日誌**。 |
| `docker exec -it <container_id/name> /bin/bash` | 在運行中的容器內執行指令，通常用於進入容器**終端機** (`-it`)。 |

-----

### 3\. 網路 (Networking)

管理容器之間的連線和與外部世界的連線。

| 指令 | 描述 |
| :--- | :--- |
| `docker network ls` | **列出**所有 Docker 網路。 |
| `docker network create <name>` | **創建**一個新的網路。 |
| `docker network inspect <network_name>` | **顯示**網路的詳細資訊，包括連接到它的容器。 |

-----

### 4\. 資料卷 (Volume)

用於容器的資料持久化，確保資料不會隨著容器的刪除而丟失。

| 指令 | 描述 |
| :--- | :--- |
| `docker volume create <name>` | **創建**一個命名資料卷 (Named Volume)。 |
| `docker volume ls` | **列出**所有資料卷。 |
| `docker volume inspect <name>` | **顯示**資料卷的詳細資訊。 |
| `docker volume rm <name>` | **刪除**資料卷 (需確保沒有容器正在使用)。 |

-----

### 5\. 系統清理與資訊

| 指令 | 描述 |
| :--- | :--- |
| `docker info` | 顯示 Docker 系統的詳細資訊。 |
| `docker version` | 顯示 Docker 版本資訊。 |
| `docker system prune` | **清理**：刪除所有停止的容器、未使用的網路、懸空的映像檔和未使用的建置快取。 |

-----

### 6\. Docker Compose (多容器應用程式)

Compose 用於定義和運行多容器 Docker 應用程式。

| 指令 | 描述 |
| :--- | :--- |
| `docker compose up -d` | **啟動**所有服務：<br>根據 `docker-compose.yml` 建立並啟動服務，`  -d ` 為背景運行。 |
| `docker compose down` | **停止**並**移除**所有由 Compose 啟動的容器和網路。 |
| `docker compose ps` | **列出** Compose 應用程式中正在運行的服務。 |
| `docker compose logs <service_name>` | **查看**指定服務的日誌。 |
| `docker compose restart <service_name>` | **重啟**指定服務。 |

您可以在終端機中加上 `--help` 參數（例如 `docker run --help`）來查看任何指令的完整選項清單。
