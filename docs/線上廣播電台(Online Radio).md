Online radio
============

是的，你可以將一個線上廣播電台的網頁應用程式部署到 **GitHub Pages**，但由於 GitHub Pages 僅支援靜態內容（HTML、CSS、JavaScript 等），你需要對前述方案進行一些調整。因為原始方案使用了 Node.js 後端來提供 MP3 文件清單和串流，而 GitHub Pages 無法運行 Node.js 伺服器，你需要將 MP3 文件作為靜態資源直接托管，並使用純前端的方式來實現播放功能。以下是具體步驟和修改後的程式碼，確保你的線上廣播電台可以部署到 GitHub Pages。

---

### 調整方案的關鍵點
1. **靜態化 MP3 文件**：將 MP3 文件直接放入 GitHub 儲存庫的某個資料夾，作為靜態資源。
2. **前端處理播放清單**：使用 JavaScript 動態生成播放清單，或者直接在 HTML 中硬編碼播放清單。
3. **使用相對路徑**：確保 MP3 文件和 HTML 文件使用相對路徑來存取資源。
4. **限制**：GitHub Pages 不支援動態後端（如 Node.js 或 API），因此無法動態掃描資料夾來生成 MP3 清單。你需要手動維護播放清單，或者使用外部 API（如 GitHub API）來動態取得檔案清單。

---

### 步驟和程式碼

#### 1. 準備文件結構
創建以下文件結構，將 MP3 文件和網頁文件放入儲存庫：
```
your-repo/
├── audio/
│   ├── song1.mp3
│   ├── song2.mp3
│   └── ...
├── index.html
├── style.css
└── script.js
```

- `audio/` 資料夾存放你的 MP3 文件。
- `index.html` 是主頁面，包含播放器和播放清單。
- `style.css` 和 `script.js` 分別處理樣式和播放邏輯。

#### 2. 前端程式碼
以下是適用於 GitHub Pages 的純前端程式碼，無需後端伺服器。
``` index.html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>我的線上廣播電台</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>我的線上廣播電台</h1>
  <audio id="player" controls>
    <source src="" type="audio/mpeg">
    您的瀏覽器不支援音訊播放。
  </audio>
  <h2>播放清單</h2>
  <ul id="playlist"></ul>

  <script src="script.js"></script>
</body>
</html>

```

``` style.css
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}
#playlist {
  list-style: none;
  padding: 0;
}
#playlist li {
  cursor: pointer;
  padding: 10px;
  margin: 5px;
  background: #f0f0f0;
}
#playlist li:hover {
  background: #ddd;
}
```

``` script.js
// 手動定義播放清單（因為 GitHub Pages 無法動態掃描資料夾）
const songs = [
  'audio/song1.mp3',
  'audio/song2.mp3',
  // 在這裡添加更多 MP3 文件的相對路徑
];

const player = document.getElementById('player');
const playlist = document.getElementById('playlist');

// 動態生成播放清單
songs.forEach(song => {
  const li = document.createElement('li');
  li.textContent = song.split('/').pop(); // 顯示檔案名稱
  li.addEventListener('click', () => {
    player.src = song;
    player.play();
  });
  playlist.appendChild(li);
});

// 自動播放下一首
player.addEventListener('ended', () => {
  const currentSrc = player.src.split('/').pop();
  const currentIndex = songs.findIndex(song => song.split('/').pop() === currentSrc);
  const nextIndex = (currentIndex + 1) % songs.length;
  player.src = songs[nextIndex];
  player.play();
});
```
#### 3. 部署到 GitHub Pages
1. **創建 GitHub 儲存庫**：
   - 在 GitHub 上創建一個新的儲存庫（例如 `my-online-radio`）。
   - 將上述文件結構（`index.html`、`style.css`、`script.js` 和 `audio/` 資料夾）上傳到儲存庫。

2. **啟用 GitHub Pages**：
   - 進入儲存庫的 **Settings** 頁面。
   - 滾動到 **Pages** 部分。
   - 在 **Source** 中選擇 `main` 分支（或你使用的分支），並設置根目錄 (`/`)。
   - 點擊 **Save**，GitHub 會提供一個 URL（例如 `https://your-username.github.io/my-online-radio`）。

3. **上傳 MP3 文件**：
   - 將 MP3 文件放入 `audio/` 資料夾，並更新 `script.js` 中的 `songs` 陣列，確保包含所有 MP3 文件的相對路徑。
   - 使用 `git` 命令或 GitHub 的網頁介面上傳文件：
     ```bash:disable-run
     git add .
     git commit -m "Add online radio files"
     git push origin main
     ```

4. **測試網站**：
   - 訪問 GitHub Pages 提供的 URL，確認播放器和播放清單正常工作。

---

### 注意事項
1. **MP3 文件大小**：
   - GitHub Pages 有檔案大小限制（建議單個檔案小於 100MB，儲存庫總大小小於 1GB）。
   - 如果 MP3 文件較大，考慮使用外部儲存服務（如 AWS S3、Google Drive 或 Dropbox）來托管音訊檔案，並在 `script.js` 中使用外部 URL。

2. **動態播放清單（選項）**：
   - 如果你希望動態取得 `audio/` 資料夾中的 MP3 文件清單，可以使用 GitHub API。例如：
     ```javascript
     fetch('https://api.github.com/repos/your-username/your-repo/contents/audio')
       .then(response => response.json())
       .then(data => {
         const songs = data
           .filter(file => file.name.endsWith('.mp3'))
           .map(file => `audio/${file.name}`);
         // 繼續處理播放清單
       });
     ```
   - 但這需要處理跨域（CORS）問題，確保 GitHub API 允許你的網頁存取。

3. **版權問題**：
   - 確保你有權在公開網站上分享這些 MP3 文件，遵守版權法規。

4. **效能問題**：
   - GitHub Pages 適合靜態內容，但不適合高流量的音訊串流。如果預期大量使用者，建議使用專用的音訊串流服務（如 Icecast 或 S3）。

5. **HTTPS 限制**：
   - GitHub Pages 使用 HTTPS，確保你的 MP3 文件路徑也使用 HTTPS（如果使用外部儲存服務）。

---

### 進階選項
- **隨機播放**：在 `script.js` 中加入隨機播放功能：
  ```javascript
  function playRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    player.src = songs[randomIndex];
    player.play();
  }
  ```
- **外部音訊托管**：如果 MP3 文件過大，可以將檔案上傳到 AWS S3，並在 `songs` 陣列中使用 S3 的公開 URL。
- **進階播放器**：使用像 `Howler.js` 或 `Plyr` 的 JavaScript 音訊庫來增強播放器功能（例如進度條、音量控制等）。

---

### 最終結果
完成以上步驟後，你的線上廣播電台將運行在 GitHub Pages 上，使用者可以透過瀏覽器訪問你的 URL，點擊播放清單中的歌曲進行播放。如果需要更複雜的功能（如即時廣播或動態清單），可能需要額外的後端服務，這超出了 GitHub Pages 的能力範圍，建議使用其他雲端平台（如 Heroku 或 Vercel）。

如果有其他問題或需要進一步協助（例如外部托管或進階功能），請告訴我！

---










要將一堆 MP3 文件製作成一個線上廣播電台（Online Radio），你需要搭建一個能夠串流音訊的系統，讓使用者可以透過網頁或應用程式收聽。以下是一個完整的解決方案，包含步驟和範例程式碼，使用 HTML、JavaScript 和 Node.js 來實現基本的線上廣播功能。這個方案假設你已經有一堆 MP3 文件，並希望透過網頁提供串流服務。

---

### 解決方案概述
1. **儲存 MP3 文件**：將 MP3 文件儲存在伺服器上的某個資料夾。
2. **搭建後端伺服器**：使用 Node.js 和 Express 框架來處理音訊串流和播放清單管理。
3. **前端播放器**：使用 HTML5 的 `<audio>` 標籤或 JavaScript 音訊播放器來播放串流的 MP3。
4. **串流技術**：透過 HTTP 提供 MP3 文件的串流，並支援播放清單（例如隨機播放或依序播放）。
5. **選項功能**：加入播放清單管理、隨機播放、或即時廣播功能（可選）。

---

### 步驟和程式碼

#### 1. 環境設置
- 安裝 [Node.js](https://nodejs.org/)。
- 將 MP3 文件儲存在伺服器端的某個資料夾（例如 `./public/audio`）。
- 使用以下工具：
  - `express`：用於搭建後端伺服器。
  - `fs`：用於讀取 MP3 文件。
  - HTML5 `<audio>`：用於前端音訊播放。

#### 2. 後端程式碼
以下是一個使用 Node.js 和 Express 的後端範例，負責提供 MP3 文件的清單和串流服務。

```
<xaiArtifact artifact_id="030a11a1-b831-4846-b923-dc894314dfdd" artifact_version_id="3298ab19-8a07-49c2-86cf-17c5def63446" title="server.js" contentType="text/javascript">
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// 設置靜態文件目錄
app.use(express.static('public'));
app.use(cors());

// 取得 MP3 文件清單
app.get('/api/songs', async (req, res) => {
  try {
    const audioDir = path.join(__dirname, 'public', 'audio');
    const files = await fs.readdir(audioDir);
    const mp3Files = files.filter(file => file.endsWith('.mp3'));
    res.json(mp3Files);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error reading audio files');
  }
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
</xaiArtifact>
```
#### 3. 前端程式碼
以下是一個簡單的 HTML 和 JavaScript 前端，負責顯示播放清單並播放 MP3 文件。
```
<xaiArtifact artifact_id="5a196f4e-edcf-4740-a7c1-c6b030e104df" artifact_version_id="1e13524d-5a69-4324-96a5-8ee8f1b3483d" title="index.html" contentType="text/html">
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>線上廣播電台</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
    #playlist { list-style: none; padding: 0; }
    #playlist li { cursor: pointer; padding: 10px; margin: 5px; background: #f0f0f0; }
    #playlist li:hover { background: #ddd; }
  </style>
</head>
<body>
  <h1>我的線上廣播電台</h1>
  <audio id="player" controls>
    <source src="" type="audio/mpeg">
    您的瀏覽器不支援音訊播放。
  </audio>
  <h2>播放清單</h2>
  <ul id="playlist"></ul>

  <script>
    const player = document.getElementById('player');
    const playlist = document.getElementById('playlist');

    // 取得 MP3 文件清單
    fetch('http://localhost:3000/api/songs')
      .then(response => response.json())
      .then(songs => {
        songs.forEach(song => {
          const li = document.createElement('li');
          li.textContent = song;
          li.addEventListener('click', () => {
            player.src = `/audio/${song}`;
            player.play();
          });
          playlist.appendChild(li);
        });
      })
      .catch(err => console.error('Error loading playlist:', err));

    // 自動播放下一首
    player.addEventListener('ended', () => {
      const items = playlist.getElementsByTagName('li');
      const currentSrc = player.src.split('/').pop();
      const currentIndex = Array.from(items).findIndex(item => item.textContent === currentSrc);
      const nextIndex = (currentIndex + 1) % items.length;
      player.src = `/audio/${items[nextIndex].textContent}`;
      player.play();
    });
  </script>
</body>
</html>
</xaiArtifact>
```
#### 4. 文件結構
確保你的專案文件結構如下：
```
project/
├── public/
│   ├── audio/
│   │   ├── song1.mp3
│   │   ├── song2.mp3
│   │   └── ...
│   └── index.html
├── server.js
├── package.json
└── node_modules/
```

#### 5. 執行步驟
1. **初始化專案**：
   ```bash:disable-run
   npm init -y
   npm install express cors
   ```
2. **將 MP3 文件放入 `public/audio` 資料夾**。
3. **啟動伺服器**：
   ```bash
   node server.js
   ```
4. **訪問網頁**：在瀏覽器中打開 `http://localhost:3000`，即可看到播放清單並播放 MP3 文件。

---

### 功能擴展
- **隨機播放**：在 JavaScript 中加入隨機選擇歌曲的邏輯：
  ```javascript
  function playRandomSong() {
    const items = playlist.getElementsByTagName('li');
    const randomIndex = Math.floor(Math.random() * items.length);
    player.src = `/audio/${items[randomIndex].textContent}`;
    player.play();
  }
  ```
- **即時廣播**：若需模擬即時廣播，可使用 WebSocket 或 Icecast 串流伺服器（如 [Icecast](https://icecast.org/)），以支援多人同時收聽。
- **行動端支援**：確保 `<audio>` 標籤在行動瀏覽器中的相容性，並考慮使用像 `Howler.js` 的音訊庫來增強播放體驗。

---

### 注意事項
- **版權問題**：確保你有權使用這些 MP3 文件，並遵守相關版權法規。
- **頻寬需求**：串流音訊需要穩定的伺服器頻寬，建議使用雲端服務（如 AWS S3 或 Cloudflare）來儲存和傳輸 MP3 文件。
- **安全性**：避免直接暴露伺服器文件路徑，建議加入身份驗證或限制訪問。

如果需要更進階的功能（如即時廣播或雲端部署），請告訴我，我可以提供更詳細的指引！
```
