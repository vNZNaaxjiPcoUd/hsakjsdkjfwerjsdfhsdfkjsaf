.S Google Apps Script (GAS)
================

在 Google Apps Script (GAS) 中，`doGet()` 的確是**內定函數（Reserved Function Names）**，主要用於處理網頁應用程式（Web App）的 HTTP GET 請求。

除了 `doGet()`，GAS 還有一系列具有特殊用途的內定函數，通常分為以下幾類：

### 1. 網頁應用程式與 API 進入點 (Web App Entry Points)
當你將腳本部署為「網頁應用程式」或 API 時，系統會自動尋找這兩個函數：
*   **`doGet(e)`**: 當有人透過瀏覽器訪問網址或發送 HTTP GET 請求時觸發。
*   **`doPost(e)`**: 當有程式（如伺服器或網頁 Form）發送 HTTP POST 請求時觸發。

### 2. 簡單觸發器 (Simple Triggers)
這類函數不需要手動設定觸發器，只要函數名稱正確，就會在特定事件發生時自動執行：
*   **`onOpen(e)`**: 當使用者開啟試算表 (Sheets)、文件 (Docs)、簡報 (Slides) 或表單 (Forms) 時觸發。常用於新增自定義選單。
*   **`onEdit(e)`**: 當使用者修改試算表中的儲存格內容時觸發。
*   **`onSelectionChange(e)`**: 當使用者在試算表中移動選取範圍（切換儲存格）時觸發。
*   **`onInstall(e)`**: 當使用者安裝 Editor 擴充功能（Add-on）時執行。

### 3. Looker Studio (原 Data Studio) 連接器函數
如果你在開發 Looker Studio 的社群連接器，必須實作以下函數：
*   **`getConfig()`**: 定義連接器的配置介面。
*   **`getSchema()`**: 定義資料的架構（欄位名稱與型態）。
*   **`getData()`**: 實際抓取並回傳資料。
*   **`getAuthType()`**: 定義身份驗證方式。

### 4. 編輯器擴充功能與自定義函數 (Custom Functions)
*   **自定義函數**: 在 Google 試算表中，你可以直接寫一個 JavaScript 函數（例如 `function DOUBLE(x) { return x*2; }`），然後在儲存格輸入 `=DOUBLE(A1)`。這不需要特定名稱，但屬於 GAS 的內建應用方式。

---

### 相關官方文件網址 (URL)

如果你想深入研究，可以參考以下官方文件：

1.  **簡單觸發器 (Simple Triggers) 總覽**:
    [https://developers.google.com/apps-script/guides/triggers](https://developers.google.com/apps-script/guides/triggers)
2.  **網頁應用程式 (Web Apps) 說明**:
    [https://developers.google.com/apps-script/guides/web](https://developers.google.com/apps-script/guides/web)
3.  **試算表自定義函數**:
    [https://developers.google.com/apps-script/guides/sheets/functions](https://developers.google.com/apps-script/guides/sheets/functions)
4.  **Looker Studio 連接器參考**:
    [https://developers.google.com/looker-studio/connector/reference](https://developers.google.com/looker-studio/connector/reference)

**小提醒：**
在 GAS 中，函數名稱是**區分大小寫**的（例如 `onopen` 是無效的，必須是 `onOpen`）。這些內定函數通常會傳入一個事件物件 `e`，包含觸發當下的相關資訊。

