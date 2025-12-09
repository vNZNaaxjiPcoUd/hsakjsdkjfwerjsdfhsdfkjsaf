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

