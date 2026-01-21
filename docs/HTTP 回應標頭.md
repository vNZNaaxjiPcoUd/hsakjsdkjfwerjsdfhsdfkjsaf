
# HTTP 回應標頭

以下的各欄位，是什麼意思？
```
* Request completely sent off
< HTTP/2 200 
< server: GitHub.com
< content-type: text/html; charset=utf-8
< last-modified: Wed, 21 Jan 2026 20:52:07 GMT
< access-control-allow-origin: *
< etag: "69713c77-288"
< expires: Wed, 21 Jan 2026 21:05:18 GMT
< cache-control: max-age=600
< x-proxy-cache: MISS
< x-github-request-id: DDD8:16F3A9:A92A1E:B33ABF:69713D35
< accept-ranges: bytes
< age: 0
< date: Wed, 21 Jan 2026 20:55:18 GMT
< via: 1.1 varnish
< x-served-by: cache-mia-kfll1870058-MIA
< x-cache: MISS
< x-cache-hits: 0
< x-timer: S1769028918.496418,VS0,VE39
< vary: Accept-Encoding
< x-fastly-request-id: da8fd721be7ec11c88868ab658b5ebcec8bd6ce3
< content-length: 648
```

這些是 **HTTP response headers**（HTTP 回應標頭），通常出現在你用 `curl -v` 或瀏覽器開發者工具看到伺服器回傳的原始資訊。

這段內容是從 **GitHub.com** 拿到的回應（status code 200 OK），而且很明顯是透過 **Fastly + Varnish** 這套 CDN 快取系統送出來的。下面逐行簡單解釋每一行的意思：

```
* Request completely sent off
```
這不是 HTTP 標頭，是 curl 自己印的訊息，意思是「請求已經完全送出去了」。

```
< HTTP/2 200
```
伺服器用 HTTP/2 協定回應，狀態碼 **200 OK**（成功）。

```
< server: GitHub.com
```
伺服器軟體/平台名稱（GitHub 自己標示）。

```
< content-type: text/html; charset=utf-8
```
回傳的內容是 **HTML 網頁**，使用 UTF-8 編碼。

```
< last-modified: Wed, 21 Jan 2026 20:52:07 GMT
```
檔案/資源最後修改時間（伺服器告訴你這個頁面什麼時候最後被改過）。

```
< access-control-allow-origin: *
```
CORS 設定，允許**任何來源**的網站用 JavaScript 來讀取這個資源（非常寬鬆，常見於公開的靜態資源）。

```
< etag: "69713c77-288"
```
實體標籤（Entity Tag），用來做**條件式請求**（If-None-Match）。瀏覽器下次可以帶這個值問「有沒有變？沒變就回 304」。

```
< expires: Wed, 21 Jan 2026 21:05:18 GMT
```
這個資源什麼時候過期（絕對時間）。

```
< cache-control: max-age=600
```
快取控制：最多可以快取 **600 秒（10 分鐘）**。

→ 這兩個（expires + cache-control）一起出現時，**cache-control 優先級較高**。

```
< x-proxy-cache: MISS
```
這是 **Fastly** 自己的標頭，代表這次是 **MISS**（沒有快取到，從源站重新抓的）。

```
< x-github-request-id: DDD8:16F3A9:A92A1E:B33ABF:69713D35
```
GitHub 內部追蹤用的請求唯一 ID。如果出問題要找 GitHub 客服，通常會請你提供這個值，他們就能快速找到對應的 log。

```
< accept-ranges: bytes
```
支援 **Range 請求**（可以只下載檔案的一部分，例如 206 Partial Content）。

```
< age: 0
```
這個資源在 CDN 裡已經存在多久（秒）。0 = 剛從源站抓回來（配合上面的 MISS）。

```
< date: Wed, 21 Jan 2026 20:55:18 GMT
```
伺服器產生這個回應的時間。

```
< via: 1.1 varnish
```
表示經過 **Varnish**（Fastly 使用的快取軟體）。

```
< x-served-by: cache-mia-kfll1870058-MIA
```
Fastly 告訴你這次是由哪一台快取伺服器處理的（這裡是 Miami 資料中心的某台）。

```
< x-cache: MISS
```
Fastly 標準的快取狀態：**MISS**（未命中，從源站拿的）。

```
< x-cache-hits: 0
```
這次請求在這台快取伺服器上命中了幾次（0 = 第一次）。

```
< x-timer: S1769028918.496418,VS0,VE39
```
Fastly 的計時資訊（單位：秒）  
- S... = 收到請求的時間戳  
- VS0 = Varnish 開始處理的時間（這裡是 0，表示很快）  
- VE39 = Varnish 結束處理花了 39 毫秒

```
< vary: Accept-Encoding
```
告訴快取系統：根據客戶端的 **Accept-Encoding**（是否支援 gzip/br）來決定要不要給壓縮版本。

```
< x-fastly-request-id: da8fd721be7ec11c88868ab658b5ebcec8bd6ce3
```
Fastly 自己的請求追蹤 ID（跟 x-github-request-id 類似，但屬於 Fastly 層級）。

```
< content-length: 648
```
回應主體（body）的大小是 **648 bytes**。

### 總結重點（這次請求的狀況）

- 成功回應（200）
- 內容是 html，小檔案（648 bytes）
- 快取 10 分鐘（max-age=600）
- 這次是 **完全沒有快取命中**（MISS、age=0、x-cache-hits=0）
- 由 **Miami 的 Fastly 節點** 處理
- GitHub 內部追蹤 ID 都有（出問題可以報給 GitHub 客服）

希望這個解釋清楚！如果還有哪一行特別想再深入了解，告訴我～
