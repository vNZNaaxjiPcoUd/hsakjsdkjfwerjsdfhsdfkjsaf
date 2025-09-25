font-family 有那些字型可以用？
===========================


在 CSS 中，`font-family` 屬性用於指定文字的字型。它的值可以是單一字型名稱或多個字型名稱的列表（作為後備政策），也可以使用通用字型分類。以下是 `font-family` 的選項類型和常用範例：

### 1. 具體字型名稱
   你可以直接指定某個特定的字型名稱，例如：
   ```css
   font-family: Arial, Helvetica, sans-serif;
   ```
   - **範例**：`Arial`, `Helvetica`, `Times New Roman`, `Courier New`, `Verdana`, `Georgia`, `Trebuchet MS` 等。
   - 如果瀏覽器不支援指定的字型，會自動嘗試使用後備字型（fallback）。

### 2. 通用字型分類（Generic Font Families）
   CSS 提供五種通用字型分類，當你不確定具體字型時可以使用，瀏覽器會選擇系統中可用的字型：
   - **serif**：有襯線的字型，例如 `Times New Roman` 或 `Georgia`。
   - **sans-serif**：無襯線的字型，例如 `Arial` 或 `Verdana`。
   - **monospace**：等寬字型，例如 `Courier New` 或 `Consolas`。
   - **cursive**：手寫風格的字型，例如 `Comic Sans MS` 或 `Brush Script`。
   - **fantasy**：裝飾性字型，例如 `Impact` 或 `Papyrus`。

   範例：
   ```css
   font-family: serif;
   font-family: sans-serif;
   ```

### 3. 自定義字型（Web Fonts）
   可以使用 `@font-face` 規則引入自定義字型，例如從 Google Fonts 或其他來源載入的字型：
   ```css
   @font-face {
       font-family: 'MyCustomFont';
       src: url('myfont.woff2') format('woff2');
   }
   font-family: 'MyCustomFont', sans-serif;
   ```

### 4. 多字型後備（Fallback）
   你可以指定多個字型作為後備，瀏覽器會按順序嘗試：
   ```css
   font-family: 'Open Sans', Arial, sans-serif;
   ```
   - 瀏覽器會先嘗試 `Open Sans`，如果不可用，則使用 `Arial`，再不可用則使用系統預設的 `sans-serif` 字型。

### 5. 系統字型堆疊（System Font Stack）
   為了確保跨平台一致性，可以使用系統字型堆疊，針對不同作業系統的預設字型進行優化：
   ```css
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', sans-serif;
   ```
   - 這會優先使用 macOS 的系統字型（`-apple-system`）、Windows 的 `Segoe UI`、Linux 的 `Roboto` 等。

### 注意事項
- **字型名稱大小寫**：字型名稱對大小寫不敏感，但多字詞的字型（如 `Times New Roman`）需要用引號括起來。
- **跨瀏覽器相容性**：建議總是包含通用字型分類作為最後的後備。
- **效能考量**：載入過多自定義字型可能影響頁面載入速度，建議適量使用。

如果你有具體的字型需求（例如中文字型），可以提供更多細節，我可以幫你推薦合適的字型或設定！
