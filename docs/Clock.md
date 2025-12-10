Clock.html
==========


```html
<!DOCTYPE html>
<html>
<head>
  <title>實時時間</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      margin-top: 100px;
    }
    #timeDisplay {
      font-size: 48px;
      color: #333;
    }
  </style>
</head>
<body>
  <h1>現在時間：</h1>
  <div id="timeDisplay"></div>

  <script>
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      const timeString = `${hours}:${minutes}:${seconds}`;

      document.getElementById('timeDisplay').textContent = timeString;
    }

    // 每秒更新一次時間
    setInterval(updateTime, 1000);

    // 初始顯示時間
    updateTime();
  </script>
</body>
</html>
```

**程式碼說明：**

*   **`<!DOCTYPE html>`**: 宣告這是一個 HTML5 頁面。
*   **`<head>`**: 包含頁面的標題和樣式設定。
    *   **`<title>`**: 頁面的標題，顯示在瀏覽器的標籤頁上。
    *   **`<style>`**: 包含 CSS 樣式，用於設定頁面的外觀。
*   **`<body>`**: 包含頁面實際顯示的內容。
    *   **`<h1>`**: 標題。
    *   **`<div id="timeDisplay">`**: 用於顯示時間的 `div` 元素。
    *   **`<script>`**: 包含 JavaScript 程式碼。
        *   **`updateTime()`**: 這個函數用於獲取現在的時間，並將其格式化為 `HH:MM:SS` 格式。
        *   **`setInterval(updateTime, 1000)`**: 這個函數每隔 1000 毫秒（即 1 秒）調用 `updateTime()` 函數。
        *   **`updateTime()`**: 初始調用，在頁面載入時立即顯示時間。

**如何使用：**

1.  將上面的程式碼複製到一個文字編輯器中。
2.  將檔案儲存為 `.html` 檔案，例如 `time.html`。
3.  用瀏覽器開啟 `time.html` 檔案。

你就會看到一個頁面，上面顯示現在的時間，並且每秒都會自動更新。😊

希望這個頁面對你有幫助！如果還有其他問題，隨時都可以問我喔！💖
