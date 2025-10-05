線上廣播電台 Online radio
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

// 自動播放下一首並支援重複播放
player.addEventListener('ended', () => {
  const currentSrc = player.src.split('/').pop();
  const currentIndex = songs.findIndex(song => song.split('/').pop() === currentSrc);
  const nextIndex = (currentIndex + 1) % songs.length; // 使用模運算實現循環
  player.src = songs[nextIndex];
  player.play();
});

/* //隨機重複播放
player.addEventListener('ended', () => {
  const randomIndex = Math.floor(Math.random() * songs.length);
  player.src = songs[randomIndex];
  player.play();
});
*/

// 初始播放第一首歌曲（可選）
player.src = songs[0];
player.play();
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
```
#### 3. 前端程式碼
以下是一個簡單的 HTML 和 JavaScript 前端，負責顯示播放清單並播放 MP3 文件。
```
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

---

要讓你的線上廣播電台支援 podcast 功能，需要將現有的 MP3 播放系統擴展為一個能夠生成和分發 podcast 供稿（RSS feed）的平台，這樣使用者可以透過 podcast 應用程式（如 Apple Podcasts、Spotify 或 Google Podcasts）訂閱和收聽你的音訊內容。以下是將你的 GitHub Pages 線上廣播電台改進以支援 podcast 的詳細步驟，包含程式碼和注意事項。

---

# Podcast 支援？
Podcast 是一種透過 RSS feed 分發的音訊內容，使用者可以透過 podcast 應用程式訂閱並自動接收新集數。為了支援 podcast，你需要：
1. **生成 RSS feed**：創建一個符合 podcast 規範的 XML 文件，包含節目資訊和每集的元數據。
2. **托管音訊檔案**：確保 MP3 檔案可透過公開 URL 訪問。
3. **提交到 podcast 平台**：將 RSS feed 提交到 Apple Podcasts、Spotify 等平台。
4. **前端整合**：在你的 GitHub Pages 網站上顯示 podcast 資訊並提供訂閱連結。

由於 GitHub Pages 僅支援靜態內容，RSS feed 必須是靜態檔案或透過外部工具動態生成。以下是具體實現方式。

---

### 步驟和程式碼

#### 1. 確認 MP3 檔案托管
- **GitHub Pages 限制**：GitHub Pages 適合托管小型 MP3 檔案（建議單檔小於 100MB，儲存庫總大小小於 1GB）。如果檔案較大或需要更高性能，建議使用外部儲存服務（如 AWS S3、Cloudflare R2 或 Google Cloud Storage）來托管 MP3 檔案，並確保它們有公開的 HTTPS URL。
- **範例**：假設你的 MP3 檔案已上傳到 `your-repo/audio/`，URL 為 `https://your-username.github.io/your-repo/audio/song1.mp3`。

#### 2. 創建 Podcast RSS Feed
Podcast 的 RSS feed 是一個 XML 文件，需符合 iTunes podcast 規範。以下是一個靜態的 RSS feed 範例，包含一檔節目和兩集的資訊。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>我的線上廣播電台</title>
    <link>https://your-username.github.io/your-repo</link>
    <description>這是一個分享音樂和故事的 podcast，歡迎訂閱！</description>
    <language>zh-tw</language>
    <itunes:author>你的名字</itunes:author>
    <itunes:summary>這是一個關於音樂、故事和靈感的 podcast，每週更新。</itunes:summary>
    <itunes:image href="https://your-username.github.io/your-repo/images/podcast-cover.jpg"/>
    <itunes:category text="Music"/>
    <itunes:explicit>no</itunes:explicit>

    <item>
      <title>第一集：音樂之旅的開始</title>
      <description>在這一集中，我們分享了音樂如何啟發生活。</description>
      <pubDate>Sun, 05 Oct 2025 03:41:00 GMT</pubDate>
      <enclosure url="https://your-username.github.io/your-repo/audio/song1.mp3" length="10485760" type="audio/mpeg"/>
      <guid>https://your-username.github.io/your-repo/audio/song1.mp3</guid>
      <itunes:duration>00:05:00</itunes:duration>
      <itunes:explicit>no</itunes:explicit>
    </item>
    <item>
      <title>第二集：夜晚的旋律</title>
      <description>探索夜晚中的音樂和情感。</description>
      <pubDate>Sun, 28 Sep 2025 03:41:00 GMT</pubDate>
      <enclosure url="https://your-username.github.io/your-repo/audio/song2.mp3" length="12582912" type="audio/mpeg"/>
      <guid>https://your-username.github.io/your-repo/audio/song2.mp3</guid>
      <itunes:duration>00:06:00</itunes:duration>
      <itunes:explicit>no</itunes:explicit>
    </item>
  </channel>
</rss>
```

**說明**：
- **`<title>`、`<description>`、`<itunes:author>`**：描述你的 podcast 節目。
- **`<itunes:image>`**：提供一張封面圖片（建議 1400x1400 像素，JPEG 或 PNG），上傳到 `your-repo/images/`。
- **`<item>`**：每集 podcast 的資訊，包含：
  - `<enclosure>`：MP3 檔案的公開 URL 和檔案大小（以位元組為單位）。
  - `<guid>`：每集的唯一識別碼，通常使用 MP3 的 URL。
  - `<itunes:duration>`：音訊時長（格式為 `HH:MM:SS`）。
- **檔案大小**：需手動計算 MP3 檔案大小（位元組）。例如，可使用命令 `ls -l` 或上傳後檢查檔案屬性。

將此 `podcast.xml` 檔案放入儲存庫根目錄，公開 URL 為 `https://your-username.github.io/your-repo/podcast.xml`。

#### 3. 更新前端以顯示 Podcast 資訊
修改 `index.html` 和 `script.js`，在網頁上添加 podcast 訂閱連結，並確保播放清單與 podcast 集數一致。

```
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
  <h2>訂閱我們的 Podcast</h2>
  <p>
    <a href="https://your-username.github.io/your-repo/podcast.xml" target="_blank">RSS Feed</a> | 
    <a href="https://podcasts.apple.com/" target="_blank">Apple Podcasts</a> | 
    <a href="https://open.spotify.com/" target="_blank">Spotify</a>
  </p>
  <script src="script.js"></script>
</body>
</html>
```

```
const songs = [
  { title: '第一集：音樂之旅的開始', url: 'audio/song1.mp3' },
  { title: '第二集：夜晚的旋律', url: 'audio/song2.mp3' },
  // 在這裡添加更多集數
];

const player = document.getElementById('player');
const playlist = document.getElementById('playlist');

// 動態生成播放清單
songs.forEach(song => {
  const li = document.createElement('li');
  li.textContent = song.title; // 使用集數標題
  li.addEventListener('click', () => {
    player.src = song.url;
    player.play();
  });
  playlist.appendChild(li);
});

// 自動播放下一首並支援重複播放
player.addEventListener('ended', () => {
  const currentSrc = player.src.split('/').pop();
  const currentIndex = songs.findIndex(song => song.url.split('/').pop() === currentSrc);
  const nextIndex = (currentIndex + 1) % songs.length; // 循環播放
  player.src = songs[nextIndex].url;
  player.play();
});

// 初始播放第一首歌曲（可選）
player.src = songs[0].url;
player.play();

```

**修改說明**：
- **`songs` 陣列**：改為物件陣列，包含每集的標題和 URL，與 `podcast.xml` 中的集數資訊對應。
- **訂閱連結**：在 `index.html` 中添加指向 RSS feed 和 podcast 平台的連結（Apple Podcasts 和 Spotify 的連結在提交後更新）。

#### 4. 提交到 Podcast 平台
1. **驗證 RSS Feed**：
   - 使用工具如 [Cast Feed Validator](https://castfeedvalidator.com/) 或 [Podbase](https://podba.se/validate) 檢查你的 `podcast.xml` 是否符合規範。
   - 確保 MP3 檔案的 URL 可公開訪問，且檔案格式正確（MP3 為最常見格式）。

2. **提交到平台**：
   - **Apple Podcasts**：前往 [Apple Podcasts Connect](https://podcastsconnect.apple.com/)，登入後提交你的 RSS feed URL（`https://your-username.github.io/your-repo/podcast.xml`）。
   - **Spotify**：使用 [Spotify for Podcasters](https://podcasters.spotify.com/) 提交 RSS feed。
   - **Google Podcasts**：提交到 [Google Podcasts Manager](https://podcasts.google.com/)（若仍可用）。
   - 提交後需等待審核（通常 1-5 天）。

3. **更新訂閱連結**：
   - 審核通過後，取得 Apple Podcasts 和 Spotify 的專屬連結，更新 `index.html` 中的連結。

#### 5. 部署到 GitHub Pages
1. **上傳檔案**：
   - 將 `podcast.xml`、`index.html`、`style.css`、`script.js` 和 `audio/` 資料夾中的 MP3 檔案上傳到 GitHub 儲存庫。
   - 提交變更：
     ```bash:disable-run
     git add .
     git commit -m "Add podcast support with RSS feed"
     git push origin main
     ```

2. **確認部署**：
   - 訪問 `https://your-username.github.io/your-repo` 檢查網頁功能。
   - 訪問 `https://your-username.github.io/your-repo/podcast.xml` 確認 RSS feed 可正常載入。

---

### 注意事項
1. **靜態 RSS 的限制**：
   - 由於 GitHub Pages 不支援動態後端，每次新增 podcast 集數時，需手動更新 `podcast.xml` 和 `script.js` 的 `songs` 陣列，並重新提交到 GitHub。
   - 如果需要動態生成 RSS feed，考慮使用外部工具（如 [Podbean](https://www.podbean.com/) 或 [Anchor](https://anchor.fm/)）或部署後端伺服器（例如在 Vercel 或 Heroku 上）。

2. **音訊檔案大小**：
   - GitHub Pages 的檔案大小限制可能影響 podcast 的可行性。如果 MP3 檔案過大，建議使用 AWS S3 或其他雲端儲存，並在 `podcast.xml` 和 `script.js` 中使用外部 URL。

3. **元數據完整性**：
   - 確保 `podcast.xml` 中的 `<itunes:duration>`、`<pubDate>` 和 `<enclosure length>` 正確，否則可能導致平台拒絕你的 feed。
   - 封面圖片（`<itunes:image>`）必須是正方形（至少 1400x1400 像素）。

4. **版權問題**：
   - 確保你有權分發這些 MP3 檔案，並遵守 podcast 平台的內容政策。

5. **自動播放限制**：
   - 如前所述，瀏覽器可能限制初始自動播放。建議在網頁上添加提示，引導使用者手動點擊播放。

---

### 進階選項
- **動態 RSS 生成**：如果需要頻繁更新 podcast 集數，可以使用 JavaScript 工具（如 [RSS-Podcast](https://www.npmjs.com/package/rss-podcast)）在本地生成 RSS 檔案，然後上傳到 GitHub。
- **外部托管**：使用 AWS S3 托管 MP3 檔案，並在 `podcast.xml` 中使用 S3 的公開 URL。
- **播放器增強**：整合 `Plyr` 或 `Howler.js` 提供更豐富的播放功能，例如進度條或播放速度調整。
- **分析功能**：使用 podcast 平台的分析工具（例如 Spotify for Podcasters）追蹤收聽數據。

---

### 最終結果
完成以上步驟後，你的 GitHub Pages 網站將同時作為線上廣播電台和 podcast 平台：
- 使用者可以在網頁上透過播放清單收聽音訊，並支援循環播放。
- 使用者可以透過 RSS feed 訂閱你的 podcast，並在 Apple Podcasts、Spotify 等平台收聽。

