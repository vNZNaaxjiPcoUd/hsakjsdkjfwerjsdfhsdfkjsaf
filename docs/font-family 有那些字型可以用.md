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

---------------

不同作業系統（Windows、macOS、Linux）以及行動平台（iOS、Android）預裝的字型有所不同。以下是各主要系統中常見的預設字型，以及 CSS 中 `font-family` 可用的選項概述。這些字型可以直接在 CSS 中使用，且無需額外載入，適合跨平台設計時作為可靠選擇。

---

### 1. **Windows**
Windows 系統（特別是 Windows 10 和 11）預裝了多種字型，以下是一些常見且廣泛使用的字型：
- **Sans-serif（無襯線）**：
  - `Segoe UI`（Windows 現代 UI 的預設字型）
  - `Arial`
  - `Verdana`
  - `Tahoma`
  - `Trebuchet MS`
  - `Calibri`（Microsoft Office 預設）
  - `Candara`
  - `Corbel`
- **Serif（襯線）**：
  - `Times New Roman`
  - `Georgia`
  - `Cambria`
  - `Constantia`
- **Monospace（等寬）**：
  - `Consolas`
  - `Courier New`
  - `Lucida Console`
- **Cursive（手寫風）**：
  - `Comic Sans MS`
- **Fantasy（裝飾性）**：
  - `Impact`

**CSS 範例**：
```css
font-family: 'Segoe UI', Arial, sans-serif;
font-family: 'Times New Roman', Georgia, serif;
```

---

### 2. **macOS**
macOS 系統（例如 macOS Sonoma）提供一系列高品質字型，許多專為 Apple 生態系統設計：
- **Sans-serif（無襯線）**：
  - `San Francisco`（簡稱 SF，macOS 和 iOS 的系統字型，分為 `SF Pro`、`SF Compact` 等）
  - `Helvetica Neue`
  - `Helvetica`
  - `Arial`
  - `Verdana`
- **Serif（襯線）**：
  - `Times`
  - `Times New Roman`
  - `Georgia`
- **Monospace（等寬）**：
  - `Menlo`
  - `Monaco`
  - `Courier`
  - `Courier New`
- **Cursive（手寫風）**：
  - `Apple Chancery`
- **其他**：
  - `Futura`（帶有幾何風格的無襯線字型）
  - `Gill Sans`

**CSS 範例**（使用系統字型）：
```css
font-family: -apple-system, 'Helvetica Neue', Arial, sans-serif;
font-family: 'Menlo', 'Courier New', monospace;
```

> **注意**：`-apple-system` 是 CSS 中用於指定 macOS/iOS 原生系統字型（San Francisco）的關鍵字，確保與系統 UI 一致。

---

### 3. **Linux**
Linux 系統的字型因發行版（例如 Ubuntu、Fedora、Debian）而異，但許多現代發行版預裝了一些開源字型：
- **Sans-serif（無襯線）**：
  - `DejaVu Sans`
  - `Ubuntu`（Ubuntu 發行版的預設字型）
  - `Roboto`（常見於 Android，但也出現在 Linux 環境）
  - `Liberation Sans`
  - `Noto Sans`（Google 的開源字型，支援多語言）
- **Serif（襯線）**：
  - `DejaVu Serif`
  - `Liberation Serif`
  - `Noto Serif`
- **Monospace（等寬）**：
  - `DejaVu Sans Mono`
  - `Ubuntu Mono`
  - `Liberation Mono`
  - `Noto Mono`

**CSS 範例**：
```css
font-family: 'Ubuntu', 'DejaVu Sans', sans-serif;
font-family: 'Noto Serif', serif;
```

> **注意**：Linux 的字型選擇取決於具體發行版和使用者安裝的字型包，建議使用廣泛支援的 `Noto` 或 `DejaVu` 字型。

---

### 4. **iOS**
iOS 使用與 macOS 類似的字型，但以 `San Francisco` 為核心：
- **Sans-serif（無襯線）**：
  - `SF Pro`（iOS 預設字型）
  - `Helvetica Neue`
  - `Helvetica`
  - `Arial`
- **Serif（襯線）**：
  - `Times New Roman`
  - `Georgia`
- **Monospace（等寬）**：
  - `Menlo`
  - `Courier`

**CSS 範例**：
```css
font-family: -apple-system, 'SF Pro', 'Helvetica Neue', sans-serif;
```

---

### 5. **Android**
Android 系統主要使用 Google 開發的字型，特別是 `Roboto` 和 `Noto`：
- **Sans-serif（無襯線）**：
  - `Roboto`（Android 預設字型）
  - `Noto Sans`（支援多語言）
  - `Droid Sans`（較舊的 Android 字型）
- **Serif（襯線）**：
  - `Noto Serif`
  - `Droid Serif`
- **Monospace（等寬）**：
  - `Noto Mono`
  - `Droid Sans Mono`

**CSS 範例**：
```css
font-family: 'Roboto', 'Noto Sans', sans-serif;
```

---

### 6. **中文字型（繁體中文環境）**
在繁體中文環境中（例如台灣、香港），系統通常提供一些專為中文設計的字型：
- **Windows**：
  - `微軟正黑體`（Microsoft JhengHei）
  - `新細明體`（PMingLiU）
- **macOS**：
  - `蘋方`（PingFang TC）
  - `黑體-繁`（Heiti TC）
  - `宋體-繁`（Songti TC）
- **Linux**：
  - `Noto Sans CJK TC`（Google 開源中文字型）
  - `WenQuanYi` 系列
- **Android/iOS**：
  - `Noto Sans CJK TC`
  - iOS 也使用 `PingFang TC`

**CSS 範例**：
```css
font-family: 'Microsoft JhengHei', 'PingFang TC', 'Noto Sans CJK TC', sans-serif;
```

---

### 7. **跨平台字型堆疊建議**
為了確保跨平台相容性，建議使用以下字型堆疊，涵蓋主要作業系統：
- **無襯線（Sans-serif）**：
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif;
  ```
- **襯線（Serif）**：
  ```css
  font-family: Georgia, 'Times New Roman', Times, 'Noto Serif', serif;
  ```
- **等寬（Monospace）**：
  ```css
  font-family: 'Menlo', 'Consolas', 'Courier New', 'Noto Mono', monospace;
  ```
- **中文環境**：
  ```css
  font-family: 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans CJK TC', sans-serif;
  ```

---

### 注意事項
- **字型可用性**：並非所有系統都包含上述字型，特別是自定義或開源字型。建議總是包含通用字型分類（如 `sans-serif`）作為後備。
- **字型載入**：如果需要非系統字型，可透過 Google Fonts、Adobe Fonts 或 `@font-face` 引入。
- **效能**：避免過多字型堆疊，保持 2-3 個後備字型即可。
- **地區考量**：中文字型檔案較大，載入自定義字型時需注意效能。

-----------------

在跨平台設計中，選擇適合繁體中文（或簡體中文）的字型需要考慮各作業系統（Windows、macOS、Linux、iOS、Android）的預裝字型相容性、顯示效果以及載入效能。以下是針對繁體中文環境的跨平台字型建議，以及如何在 CSS 中使用 `font-family` 設置可靠的字型堆疊。

---

### 1. 跨平台繁體中文字型建議
以下是一些在主要作業系統中廣泛支援的繁體中文字型，適合用於網頁或應用程式設計：

#### (1) 系統預裝字型
這些字型無需額外載入，適合高效能和廣泛相容性：
- **微軟正黑體 (Microsoft JhengHei)**：
  - 平台：Windows（Windows 7 及以上）
  - 特點：現代無襯線字型，清晰易讀，廣泛用於 Windows UI。
- **蘋方 (PingFang TC)**：
  - 平台：macOS、iOS
  - 特點：Apple 設計的現代無襯線字型，優化顯示效果，適合 Retina 螢幕。
- **黑體-繁 (Heiti TC)**：
  - 平台：macOS、iOS
  - 特點：簡潔的無襯線字型，類似微軟正黑體，適合現代設計。
- **新細明體 (PMingLiU)**：
  - 平台：Windows
  - 特點：傳統襯線字型，類似 Times New Roman，適合正式文件，但現代設計中較少使用。
- **Noto Sans CJK TC**：
  - 平台：跨平台（Google 開源字型，支援 Windows、macOS、Linux、Android）
  - 特點：支援繁體中文、簡體中文、日文、韓文，字型風格現代且一致。

#### (2) 開源字型
這些字型可以透過外部載入（例如 Google Fonts），適合需要一致性的專案：
- **Noto Sans CJK**：
  - 提供繁體中文 (TC)、簡體中文 (SC)、日文 (JP)、韓文 (KR) 版本。
  - 優點：開源、免費，支援多語言，跨平台一致性高。
  - 載入方式：Google Fonts 或下載字型檔案使用 `@font-face`。
- **Source Han Sans / 思源黑體**：
  - 由 Adobe 和 Google 合作開發，與 Noto Sans CJK TC 相同。
  - 優點：高品質無襯線字型，支援多語言，適合現代設計。
- **Source Han Serif / 思源宋體**：
  - 襯線字型，適合需要傳統或正式風格的場景。

#### (3) 其他字型
- **文鼎字型（Arphic）**：
  - 如 `AR PL UMing TW`（Linux 常見），適合開源環境。
  - 優點：免費，支援繁體中文，但設計較傳統。
- **Roboto**（Android 預設）：
  - 雖然主要為拉丁字型，但搭配 Noto Sans CJK TC 可支援中文。

---

### 2. CSS 跨平台字型堆疊建議
為了確保在不同平台上都能顯示合適的繁體中文字型，建議使用以下 `font-family` 堆疊，按優先順序提供後備字型：

#### (1) 無襯線字型堆疊（現代風格）
```css
font-family: 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans CJK TC', 'Heiti TC', 'Helvetica Neue', Arial, sans-serif;
```
- **說明**：
  - 優先使用 `PingFang TC`（macOS/iOS）。
  - 後備為 `Microsoft JhengHei`（Windows）。
  - `Noto Sans CJK TC` 作為開源跨平台選項。
  - `Heiti TC` 適用於舊版 macOS/iOS。
  - `Helvetica Neue` 和 `Arial` 為拉丁文字提供後備。
  - 最後的 `sans-serif` 確保瀏覽器選擇系統預設無襯線字型。

#### (2) 襯線字型堆疊（傳統/正式風格）
```css
font-family: 'Noto Serif CJK TC', 'Source Han Serif TC', 'Times New Roman', 'PMingLiU', serif;
```
- **說明**：
  - `Noto Serif CJK TC` 和 `Source Han Serif TC` 提供現代襯線字型。
  - `Times New Roman` 和 `PMingLiU` 作為 Windows 的傳統後備。
  - `serif` 確保相容性。

#### (3) 等寬字型堆疊（程式碼或終端機）
```css
font-family: 'Noto Sans Mono CJK TC', 'Menlo', 'Consolas', 'Courier New', monospace;
```
- **說明**：
  - `Noto Sans Mono CJK TC` 支援中文的等寬字型。
  - `Menlo`（macOS）、`Consolas`（Windows）、`Courier New` 為拉丁文字後備。
  - `monospace` 作為最終後備。

#### (4) 通用跨平台堆疊（含拉丁字型）
如果專案同時包含中文和英文，建議混合字型堆疊：
```css
font-family: -apple-system, 'PingFang TC', 'Microsoft JhengHei', 'Noto Sans CJK TC', 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
```
- **說明**：
  - `-apple-system` 確保 macOS/iOS 使用系統字型（San Francisco + PingFang TC）。
  - `Segoe UI` 和 `Roboto` 為 Windows 和 Android 的拉丁字型後備。
  - 涵蓋中英文顯示需求。

---

### 3. 載入開源字型的範例
如果選擇使用 Google Fonts 的 `Noto Sans CJK TC`，可以這樣引入：
```html
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">
```
CSS：
```css
font-family: 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif;
```

或者使用 `@font-face` 載入自定義字型：
```css
@font-face {
  font-family: 'Noto Sans CJK TC';
  src: url('NotoSansCJKtc-Regular.woff2') format('woff2');
}
font-family: 'Noto Sans CJK TC', 'PingFang TC', sans-serif;
```

---

### 4. 注意事項
- **效能考量**：中文字型檔案通常較大（特別是 CJK 字型，可能數 MB），建議僅載入需要的字重（例如 Regular 和 Bold）。
- **字型授權**：系統字型（如 PingFang TC、Microsoft JhengHei）僅限本地使用，無法作為 Web Font 散布。開源字型（如 Noto Sans）無此限制。
- **語言支援**：如果專案涉及多語言（繁體、簡體、日文等），優先選擇 `Noto Sans CJK` 或 `Source Han Sans`，因為它們支援完整的 CJK 字符集。
- **測試相容性**：在不同平台（Windows、macOS、Android、iOS）上測試字型顯示效果，確保一致性。

---

### 5. 其他建議
- **Google Fonts**：可直接使用 `Noto Sans TC` 或 `Noto Serif TC`，支援多字重，免費且易於整合。
- **CDN 服務**：如果需要更快的字型載入，可考慮使用 jsDelivr 等 CDN 提供開源字型。
- **子集化（Subset）**：對於自定義字型，建議使用工具（如 FontSquirrel）將字型子集化，只包含專案所需的字符，以減少檔案大小。
