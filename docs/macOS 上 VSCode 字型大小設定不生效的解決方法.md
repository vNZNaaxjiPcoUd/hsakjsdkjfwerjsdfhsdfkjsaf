### macOS 上 VSCode 字型大小設定不生效的解決方法

在 macOS 上使用 Visual Studio Code (VSCode) 時，如果字型大小 (font size) 設定後沒有立即生效，這是常見問題。通常是由於設定檔未正確儲存、擴充套件衝突、系統縮放設定，或是特定區域 (如終端機或側邊欄) 的獨立設定所導致。以下是步驟式診斷與解決方案，建議從簡單的開始嘗試。

#### 1. **立即測試：使用快捷鍵調整字型大小**
   - 這是最快的方式，不需修改設定檔，且會立即生效。
   - **增加字型大小**：按 `Cmd + +` (Command + 等號)。
   - **減少字型大小**：按 `Cmd + -` (Command + 減號)。
   - **重置為預設**：按 `Cmd + 0`。
   - 如果這有效，問題可能在設定檔；若無效，檢查下一步。

#### 2. **透過設定介面修改 (推薦新手)**
   - 開啟 VSCode 設定：
     - 按 `Cmd + ,` (Command + 逗號)，或點擊左下角齒輪圖示 > **Settings**。
   - 在搜尋欄輸入 `editor.fontSize`。
   - 將 **Editor: Font Size** 調整為你想要的數值 (例如 14 或 16)。
   - 儲存後，按 `Cmd + R` 重新載入視窗，或重啟 VSCode。
   - **如果不生效**：
     - 切換到 **Workspace** 分頁 (僅影響目前專案)，或 **User** 分頁 (全域)。
     - 檢查是否有擴充套件如 "Editor Font Size" 或主題擴充套件在干擾 – 暫時停用它們 (Extensions > 右鍵 > Disable)。

#### 3. **使用 settings.json 手動編輯 (進階)**
   - 按 `Cmd + Shift + P`，輸入 `Preferences: Open User Settings (JSON)`，開啟 `settings.json` 檔案。
   - 新增或修改以下設定 (確保 JSON 語法正確，逗號分隔)：
     ```
     {
         "editor.fontSize": 16,  // 編輯器字型大小
         "terminal.integrated.fontSize": 14,  // 終端機字型大小 (若問題在終端機)
         "window.zoomLevel": 0  // 全域 UI 縮放 (0 為預設，1 放大 20%)
     }
     ```
   - 儲存檔案 (Cmd + S)，然後重啟 VSCode。
   - **注意**：如果設定為預設值 (如 12) 後不生效，關閉設定視窗再重開即可更新。

#### 4. **常見特定區域問題**
   使用表格列出常見不生效情境與解決：

   | 問題區域          | 可能原因                  | 解決方法 |
   |--------------------|---------------------------|----------|
   | **編輯器 (Editor)** | 設定未儲存或舊版 Bug     | 如步驟 2，重啟 VSCode 或檢查 `editor.fontFamily` 是否有衝突字型。 |
   | **終端機 (Terminal)** | 獨立設定未調整            | 在 settings.json 新增 `"terminal.integrated.fontSize": 14`，然後重啟終端機 (按 `Ctrl + Shift + `` `)。 |
   | **側邊欄/檔案總管 (Sidebar/Explorer)** | UI 縮放未套用            | 設定 `"window.zoomLevel": 1`，或用快捷鍵 `Cmd + +` 放大全域。 |
   | **外部顯示器**    | macOS 解析度變更          | 調整 macOS 系統顯示設定 (系統偏好設定 > 顯示器 > 縮放)，或用 `Cmd + K, Cmd + K` 切換自訂縮放。 |

#### 5. **其他疑難排解**
   - **重置 VSCode**：按 `Cmd + Shift + P`，輸入 `Developer: Reload Window`。
   - **檢查 macOS 系統字型**：在系統偏好設定 > 輔助使用 > 顯示 > 文字大小，確保未強制覆蓋應用程式設定。
   - **更新 VSCode**：前往 Help > Check for Updates，確保使用最新版 (舊版如 1.15 有已知 Bug)。
   - **擴充套件衝突**：停用所有擴充套件 (Extensions > ... > Disable All Installed Extensions)，重啟後逐一啟用測試。
   - 如果問題持續，檢查 VSCode 開發者工具 (Help > Toggle Developer Tools) 的 Console 錯誤，或在 GitHub 回報 issue。

這些步驟應能解決大多數情況。如果問題是特定擴充套件或版本，請提供更多細節 (如 VSCode 版本、設定截圖)，我可以進一步幫忙！
