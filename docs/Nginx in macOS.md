# macOS 上安裝 Nginx 

並快速放一個靜態網頁的最簡單完整步驟（2025 年最新適用方式），有兩種主流方法：

### 方法一：使用 Homebrew（推薦，大多數人用這個）

1. 安裝 Homebrew（如果還沒裝）
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. 安裝 Nginx
```bash
brew install nginx
```

3. 啟動 Nginx（並設定開機自動啟動）
```bash
# 立刻啟動
brew services start nginx

# 或者手動啟動（測試用）
sudo nginx
```

4. 測試預設頁面  
打開瀏覽器輸入：http://localhost:8080  
會看到「Welcome to nginx!」就代表成功了。

5. 放你自己的網頁（最簡單方式）

Nginx 預設網站目錄在：
```
/opt/homebrew/var/www   (Apple Silicon M1/M2/M3/M4)
/usr/local/var/www      (Intel Mac)
```

替換你自己的網頁（例如放一個 index.html）：
```bash
# 先進入目錄（M1/M2 用這行）
cd /opt/homebrew/var/www

# Intel Mac 用這行
# cd /usr/local/var/www

# 建立你自己的首頁
sudo mkdir -p /opt/homebrew/var/www/mysite
echo '<!DOCTYPE html>
<html>
<head>
  <title>我的網站</title>
  <meta charset="utf-8">
</head>
<body>
  <h1>哈囉！這是我的 Nginx 網站！</h1>
  <p>現在時間：'$(date)'</p>
</body>
</html>' | sudo tee /opt/homebrew/var/www/mysite/index.html
```

6. 修改 Nginx 預設監聽 port 為 80（可省略，直接用 8080 也行）
```bash
sudo vim /opt/homebrew/etc/nginx/nginx.conf   # M1/M2
# 或者 Intel: /usr/local/etc/nginx/nginx.conf

# 找到這行：
#     listen       8080;
# 改成：
    listen       80;

# 然後存檔離開（:wq）
```

7. 重啟 Nginx
```bash
sudo nginx -s reload
# 或者
brew services restart nginx
```

8. 現在打開瀏覽器輸入 http://localhost  
就會看到你剛剛寫的「哈囉！這是我的 Nginx 網站！」

### 方法二：想放多個網站或自訂目錄（進階一點）

例如想把網站放在 `~/Sites/mysite`

```bash
# 建立資料夾
mkdir -p ~/Sites/mysite
echo '<h1>我的個人網站成功啦！</h1>' > ~/Sites/mysite/index.html
```

建立自己的設定檔：
```bash
sudo vim /opt/homebrew/etc/nginx/servers/mysite.conf
```

內容貼上：
```nginx
server {
    listen       80;
    server_name  localhost;

    root   /Users/你的使用者名稱/Sites/mysite;
    index  index.html index.htm;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

你的使用者名稱可以用 `whoami` 看，或直接用 `~`：
```nginx
root   ~/Sites/mysite;
```

重新載入設定：
```bash
sudo nginx -s reload
```

### 常用指令快速收藏

```bash
brew services start nginx      # 啟動
brew services stop nginx       # 停止
brew services restart nginx    # 重啟
sudo nginx -s reload           # 重新載入設定（不中斷服務）
nginx -t                       # 檢查設定檔語法有沒有錯
```

### nginx config example
```

#user  nobody;
worker_processes  1;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        listen       0.0.0.0:80;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location / {
            root   html;
            index  index.html index.htm;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {


        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8000;
    #    listen       somename:8080;
    #    server_name  somename  alias  another.alias;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}


    # HTTPS server
    #
    server {
	listen       0.0.0.0:443 ssl;           # 正確，監聽所有介面的 443
    	server_name  sm.jwint.net;              # 你的域名

    
    	ssl_certificate      /opt/homebrew/etc/nginx/sm.jwint.net/cert.pem;
    	ssl_certificate_key  /opt/homebrew/etc/nginx/sm.jwint.net/privkey.pem;

    	# 可選：更安全的 cipher（2025 年推薦）
    	ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    	ssl_prefer_server_ciphers off;          # 現代瀏覽器建議關掉，改用協議協商
    	ssl_session_cache    shared:SSL:10m;
    	ssl_session_timeout  10m;

    	# 網站根目錄（Homebrew 預設）
    	root /opt/homebrew/var/www;             # 或者你想放的路徑，例如 ~/Sites/sm.jwint.net
    	index index.html index.htm;

    	location / {
        	try_files $uri $uri/ =404;
    	}
    }
    include servers/*;
}
```




## 讓 Nginx 同時滿足下面兩個需求：

1. `https://a.b.c.d/`（所有路徑） → 反向代理到 `http://IPa:3343/`
2. `https://e.f.g.h/`（所有路徑） → 反向代理到 `http://IPb:888/`

而且這兩個都是 HTTPS 終止在 Nginx，後端都是 HTTP。

最乾淨、最常用的做法就是寫兩個獨立的 `server {}` 區塊（根據不同的域名/IP 做分發）：

```nginx
# ================== 第一個站點：a.b.c.d ==================
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name a.b.c.d;       # 可以是域名或直接寫 IP

    # SSL 證書（如果 a.b.c.d 和 e.f.g.h 用不同證書，就分開寫）
    ssl_certificate     /path/to/a.b.c.d_fullchain.pem;
    ssl_certificate_key /path/to/a.b.c.d_privkey.pem;

    # SSL 安全設定（可共用）
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ssl_session_cache   shared:SSL:10m;

    # 把全部請求轉到 IPa:3343
    location / {
        proxy_pass http://IPa:3343;           # 注意這裡不要加斜線！

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port  $server_port;
    }
}

# ================== 第二個站點：e.f.g.h ==================
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;

    server_name e.f.g.h;       # 可以是域名或直接寫 IP

    # SSL 證書（如果跟上面不同就寫不同的路徑）
    ssl_certificate     /path/to/e.f.g.h_fullchain.pem;
    ssl_certificate_key /path/to/e.f.g.h_privkey.pem;

    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;
    ssl_session_cache   shared:SSL:10m;

    # 把全部請求轉到 IPb:888
    location / {
        proxy_pass http://IPb:888;            # 同樣不要加結尾斜線

        proxy_set_header Host              $host;
        proxy_set_header X-Real-IP         $remote_addr;
        proxy_set_header X-Forwarded-For   $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header X-Forwarded-Port  $server_port;
    }
}

# ================== 可選：把兩個站點的 80 端口都強制跳 HTTPS ==================
server {
    listen 80;
    listen [::]:80;
    server_name a.b.c.d e.f.g.h;
    return 301 https://$host$request_uri;
}
```

### 如果你懶得管兩份證書（兩個域名都用同一張萬用證書或同一張多域名證書）
可以把證書路徑寫一樣，甚至合併成一個 server 塊用 `server_name a.b.c.d e.f.g.h;` 再用 `if` 或 `map` 判斷，但上面這種「兩個 server 塊」的方式最清楚、最不容易出錯，強烈建議這樣寫。

### 最終步驟
```bash
# 把 IPa、IPb 和證書路徑改成你自己的
sudo nginx -t                     # 檢查語法
sudo systemctl reload nginx       # 重載設定
```

這樣就同時搞定：

- https://a.b.c.d/anything  →  http://IPa:3343/anything
- https://e.f.g.h/anything  →  http://IPb:888/anything

完美！
