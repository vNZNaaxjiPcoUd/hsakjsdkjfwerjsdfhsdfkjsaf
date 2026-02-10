s. Google Apps Script (GAS)
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

## Google Apps Script (GAS) 的收費模式並非像一般的雲端運算（如 AWS 或 GCP）採用「按量計費」，而是採用**「配額制 (Quotas)」**。

簡單來說：**使用 GAS 本身是免費的，但你的使用量（如執行時間、發送郵件數）有上限。**

以下是詳細的收費與限制邏輯：

### 1. 核心邏輯：帳號類型決定配額
GAS 的「收費」實際上是包含在你所支付的 Google Workspace 訂閱費用中。根據帳號類型的不同，配額上限也不同：

*   **個人帳號 (免費版 @gmail.com)：** 完全免費，但配額最低。
*   **Google Workspace 帳號 (付費版，如 Business, Enterprise, Education)：** 需支付 Workspace 月租費，配額通常比個人版高出一倍或更多。

### 2. 主要配額限制 (常見瓶頸)
你不需要付錢來增加特定項目的上限，一旦超過上限，腳本會報錯並停止執行，直到下一個 24 小時週期重置。

| 項目 | 個人帳號 (Gmail) | Workspace 帳號 |
| :--- | :--- | :--- |
| **腳本執行時間 (每次執行)** | 6 分鐘 | 30 分鐘 |
| **每日總執行時間** | 90 分鐘 | 3 小時 (部分版本更高) |
| **每日發送郵件數** | 100 封 | 1,500 封 |
| **觸發器 (Triggers) 數量** | 20 個 / 腳本 | 20 個 / 腳本 |
| **URL Fetch (呼叫外部 API)** | 20,000 次 / 日 | 100,000 次 / 日 |

### 3. 可能產生的「間接費用」
雖然 GAS 本身不收費，但如果你的腳本連接了其他付費服務，則會產生費用：

*   **Google Cloud Platform (GCP) 資源：** 如果你的 GAS 腳本呼叫了 GCP 的付費 API（例如 Cloud Vision API、BigQuery、Vertex AI），則會依照 GCP 的價格計費。
*   **第三方 API：** 如果你呼叫 OpenAI、Line Notify (大量傳送) 或其他付費服務的 API，需支付給該服務商。
*   **資料庫費用：** 如果你連接外接的 Cloud SQL 或 Firebase，則需負擔資料庫的儲存與流量費用。

### 4. 開發者註冊費 (若要發佈)
如果你打算開發一個 Google Workspace Add-on (外掛程式) 並上架到 **Google Workspace Marketplace** 供全球用戶下載：
*   目前 Google Workspace Marketplace 的上架通常不收取額外上架費（與舊版 Chrome Web Store 不同）。
*   但如果你需要關聯一個標準的 GCP 專案來管理 API，可能需要驗證身分，這部分通常是免費的，除非使用了付費資源。

### 總結建議
*   **一般個人/小型公司：** 使用免費的 `@gmail.com` 或基礎版 Workspace 即可，幾乎零成本。
*   **大型自動化需求：** 如果你的腳本需要跑超過 6 分鐘（例如處理幾萬行資料），建議升級到 **Google Workspace Business 或更高版本**，以獲得 30 分鐘的執行時間上限。
*   **極高頻率需求：** 如果配額仍不夠用（例如每天要寄 1 萬封信），則不應單靠 GAS，應考慮遷移到 **Google Cloud Functions** 或其他專業的雲端環境。

## 由於 Google Apps Script (GAS) 主要採用「配額制」而非「直接扣款制」，你**不會在帳單上看到一筆名為 "Google Apps Script" 的費用**。

如果你想確認你的使用量、剩餘配額，或是相關的訂閱費用，要根據你的需求去以下這三個地方查看：

### 1. 查看「配額剩餘量」與「使用限制」
如果你是想知道「我還能寄幾封信？」或「我的執行時間還剩多少？」，這不是看帳單，而是看官方的 **Quotas (配額) 頁面**。

*   **查看網址：** [Google Apps Script Quotas](https://developers.google.com/apps-script/guides/services/quotas)
*   **在哪裡看具體消耗：** 目前 Google 沒有提供一個像手機流量那樣的「實時進度條」顯示你今天用了幾 %。你通常是在**腳本執行失敗**並收到錯誤訊息（例如：`Limit Exceeded: Email Body Total`）時，才會知道自己超標了。

---

### 2. 查看「Workspace 訂閱費用」
如果你是為了提高配額而購買了 Google Workspace（原 G Suite），這筆錢是付給 Google Workspace 的。

*   **在哪裡看：** 
    1. 登入 [Google Admin Console (管理控制台)](https://admin.google.com/)。
    2. 點擊左側選單的 **「帳單 (Billing)」** > **「訂閱 (Subscriptions)」**。
    3. 在這裡可以看到你每個月支付給 Google 的版本費用（例如 Business Standard 每個用戶每個月約 $12 USD）。

---

### 3. 查看「Google Cloud (GCP) 的相關費用」
如果你的 GAS 腳本有「關聯」到一個標準的 **Google Cloud 專案**（為了使用進階 API 或避免一些限制），或者使用了 Cloud SQL 等服務，這部分才會有真正的「金流帳單」。

*   **在哪裡看：**
    1. 進入 [Google Cloud Console](https://console.cloud.google.com/)。
    2. 在上方搜尋框輸入 **「結算 (Billing)」** 並進入。
    3. 你可以看到各項 API（如 Google Maps API, Vision API, BigQuery）產生的具體費用。
    4. **GAS 專屬 API：** 在 GCP 帳單中，如果你有使用到相關服務，它會列在 **"Google Cloud Platform"** 的明細裡，而不是叫 Apps Script。

---

### 4. 監控「腳本執行狀態」
如果你想看的是「我的腳本跑了幾次、失敗幾次、耗時多久」，這在 **Apps Script 控制台**看：

*   **查看網址：** [script.google.com](https://script.google.com/home/executions)
*   **操作：** 點擊左側的 **「執行項 (Executions)」**。
*   **內容：** 這裡會列出所有腳本的執行紀錄、狀態（完成/失敗）以及執行時長。

### 總結
*   **如果你用免費版：** 沒帳單可以看，直接看 [官方配額表](https://developers.google.com/apps-script/guides/services/quotas) 知道上限在哪就好。
*   **如果你用公司版：** 去 [Admin Console](https://admin.google.com/) 看每個月付多少人頭費。
*   **如果你有串接 Google API：** 去 [Cloud Console Billing](https://console.cloud.google.com/billing) 看 API 消耗的錢。

