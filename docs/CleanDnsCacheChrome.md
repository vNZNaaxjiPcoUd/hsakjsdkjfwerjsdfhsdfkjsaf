Clean DNS cache of Chrome
=========================

[chrome://net-internals/#dns](chrome://net-internals/#dns)

Host resolver cache Clear host cache



您遇到的問題是，儘管伺服器上的 **`https://aaa.bbb/d/s`** 已經更新了，但因為這個網址會立即觸發一個 **重新導向 (Redirect)**，瀏覽器可能已經快取了**舊的重新導向指令**（例如，`301 Moved Permanently` 響應），所以它甚至沒有向伺服器發送請求，就直接跳轉到了舊的目標網址 `https://aaa.bbb/d/123123`。

要強制 Chrome 忽略這個快取的重新導向，並重新向伺服器請求 **`https://aaa.bbb/d/s`** 的最新內容，您需要執行以下步驟：

---

## 1. 徹底清除重新導向快取（關鍵步驟）

瀏覽器會對永久重新導向（**HTTP 301** 狀態碼）進行非常積極的快取。您需要使用開發者工具進行最徹底的快取清除。

### 步驟 A: 開啟開發者工具

1.  開啟 Chrome 瀏覽器，按下 **`F12`**（或 `Ctrl + Shift + I` / `Cmd + Option + I`）開啟 **開發者工具 (Developer Tools)**。
2.  切換到 **網路 (Network)** 標籤頁。
3.  選擇 Disable cache (在中間上方）
4.  重新填入網址 即會重載
   
### 步驟 B: 清空快取並硬性重新載入

1.  在開發者工具開啟的狀態下，將滑鼠游標移至網址列左側的**重新整理按鈕**。
2.  **按住滑鼠右鍵**點擊這個重新整理按鈕。
3.  在彈出的選單中選擇：**清空快取並硬性重新載入 (Empty Cache and Hard Reload)**。
4.  在網址列中輸入或確保您正在嘗試載入 **`https://aaa.bbb/d/s`**。

---

## 2. 驗證伺服器響應

在執行步驟 1 之後，請在開發者工具的 **網路 (Network)** 標籤中觀察請求的狀態：

1.  在 **Network** 標籤中，找到第一個請求 **`d/s`**。
2.  點擊它，查看右側的詳細資訊，切換到 **Headers** 標籤。
3.  查看 **Response Headers** 中的 **`Status Code`** (狀態碼)：
    * **✅ 成功：** 如果狀態碼是 `302 Found` 或 `307 Temporary Redirect`，且 `Location` 標頭指向新的目標網址，則表示您的瀏覽器已成功從伺服器取得新的重新導向指令。
    * **❌ 失敗：** 如果狀態碼仍然是 `301 Moved Permanently` 且 `Location` 標頭指向舊網址，或者請求根本沒有發出去（顯示為 `(from memory cache)` 或 `(disk cache)`），則您需要執行下一個步驟。

---

## 3. 清除 HSTS/網站資料快取（終極解決方案）

如果問題依然存在，可能是瀏覽器快取了更深層次的網站資料或 **HSTS (HTTP Strict Transport Security)** 策略。

### 步驟 A: 清除特定網站資料

1.  在 Chrome 中，前往網址：`chrome://settings/siteData`
2.  在右上角的搜尋欄位輸入您的網域名稱：`aaa.bbb`
3.  點擊網址旁邊的 **移除**（垃圾桶圖標）按鈕，清除該網站的所有快取資料和 Cookie。

### 步驟 B: 清除 HSTS 設置 (如果網站強制使用 HTTPS)

HSTS 是一種安全機制，會告訴瀏覽器始終使用 HTTPS 連接該網站，且這個指令會被強力快取。清除 HSTS 列表可能會解決某些頑固的 301 重導向問題。

1.  在 Chrome 中，前往網址：`chrome://net-internals/#hsts`
2.  向下捲動到 **Delete domain security policies** 區塊。
3.  在 **Domain:** 欄位中輸入您的網域名稱：`aaa.bbb`
4.  點擊 **Delete** 按鈕。

完成以上所有步驟後，請**關閉並重新開啟** Chrome，然後再次訪問 `https://aaa.bbb/d/s`。這應該能迫使瀏覽器從頭開始處理請求，獲取伺服器上最新的重新導向指令。
