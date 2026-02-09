s. URLSearchParams
==================


`URLSearchParams` 是 JavaScript 的一個內建介面（API），專門用來處理 URL 網址後面的 **「查詢字串」（Query String）**。

所謂查詢字串，就是 URL 中 `?` 之後的部分（例如：`?id=123&name=peter`）。

### 1. 為什麼需要它？
在過去，如果我們要從網址抓取參數，必須手動用字串切割（`split('&')`、`split('=')`），非常麻煩且容易出錯。`URLSearchParams` 提供了一組簡單的方法來 **讀取、新增、修改、刪除** 參數。

---

### 2. 基本用法範例

#### A. 解析（讀取）網址參數
假設目前的網址是：`https://example.com/page?id=99&type=member`

```javascript
// 假設字串是 "?id=99&type=member"
var queryString = "?id=99&type=member";

// 初始化 URLSearchParams
var params = new URLSearchParams(queryString);

// 讀取特定的參數值
console.log(params.get("id"));   // 輸出: "99"
console.log(params.get("type")); // 輸出: "member"

// 檢查參數是否存在
console.log(params.has("id"));   // 輸出: true
```

#### B. 產生（建立）查詢字串
如果你要構造一個 URL 發送給伺服器，這個工具非常好用：

```javascript
var params = new URLSearchParams();

params.append("action", "get");
params.append("key", "alldataintable");
params.append("token", "xx");

// 轉換成字串
var finalQuery = params.toString(); 
console.log(finalQuery); 
// 輸出: "action=get&key=alldataintable&token=xx"

// 完整的 URL 就會是：
var url = "https://script.google.com/macros/s/XXX/exec?" + finalQuery;
```

---

### 3. 常用方法總結

| 方法 | 說明 |
| :--- | :--- |
| `get(name)` | 取得指定參數的第一個值 |
| `getAll(name)` | 取得指定參數的所有值（用於重複鍵名，如 `?tag=js&tag=css`） |
| `has(name)` | 判斷參數是否存在 |
| `set(name, value)` | 設定參數值（若已存在則覆蓋） |
| `append(name, value)` | 新增參數（若已存在則再加一個，不會覆蓋） |
| `delete(name)` | 刪除指定參數 |
| `toString()` | 轉回字串格式，會自動幫你處理特殊字元的編碼（URL Encoding） |

---

### 4. 與 Google Apps Script (GAS) 的關係

這在你之前的問題中很有關聯：

1.  **在前端 (HTML 介面)**：如果你寫了一個 GAS 的 HTML 網頁介面，你可以用 `URLSearchParams` 來抓取瀏覽器網址列的參數，或者用它來組合要傳給後端的 API 網址。
2.  **與 `doGet(e)` 的對應**：
    *   當你訪問 GAS 網址 `.../exec?name=john&age=20` 時。
    *   GAS 後端的 `doGet(e)` 會自動幫你解析好，放在 `e.parameter` 物件裡。
    *   `e.parameter` 本質上就是 Google 幫你跑完類似 `URLSearchParams` 解析後的結果。

**範例對照：**
```javascript
// GAS 後端
function doGet(e) {
  var name = e.parameter.name; // 直接取得，不需要 URLSearchParams
}

// 前端 JavaScript 發送請求時
function sendRequest() {
  var p = new URLSearchParams({ name: "john", age: 20 });
  var url = "GAS_URL?" + p.toString();
  fetch(url); // 發送請求
}
```

**結論：** `URLSearchParams` 是目前開發中處理 URL 參數的**標準作法**，建議取代舊有的字串切割方法。
