# react 2 pwa

PWA 很棒，但 PWA 好像不好做？這篇帶你用很夯的前端框架 React 打造 Progressive Web App！

#### [Noob Tsai](https://noob.tw/author/noobtw/)

Aug 24, 2019 • 5 min read

![用 create-react-app 快速打造 Progressive Web App](https://img.noob.tw/2019/08/book_pwa.jpg)

PWA 很棒，但 PWA 好像不好做？這篇帶你用很夯的前端框架 React 打造 Progressive Web App！

前端修練精神時光屋不知不覺又混了好幾題，這次第六題的旅館服務有 API 可以練習，正好想試試看搭配 API 的 PWA 怎麼做，就拿這篇來當範例吧。

> 不知道什麼是前端修練精神時光屋活動，可以參考 [前端時光屋(一)：用 Google Home 打造聲控番茄鐘](https://noob.tw/pomodoro-with-google-home/)

## PWA 是什麼？

PWA 是 Progressive Web App，一個 Google 制定的標準。透過 Swervice Worker 和 manifest.json，不但可以讓你的 Web App 離線運作，也可以新增到主畫面，讓你的網站看起來更像一個真正的手機 App，就跟 Native App 沒兩樣。

## create-react-app

React 框架很棒，但很難裝，你得安裝 `react`、`react-dom`、`babel`、`webpack` 等等一堆套件。所以不想設定的朋友，建議透過 `create-react-app` 把環境一次裝起來，只需要一行指令，就自帶許多功能，幾乎不用再設定其他東西。

> 你會需要 Node.js、npm 等等。這裡我使用 Node.js v10 示範。

今天我們這個專案叫 bookpwa，所以執行這個指令：

```bash
npx create-react-app bookpwa
```

會花一些時間，但是裝好以後就可以直接開始寫 React 了。

裝好以後大概會長這個架構：

```
├public/
├src/
├─App.css
├─App.js
├─App.test.js
├─index.css
├─index.js
├─serviceWorker.js
├.gitignore
├README.md
├package-lock.json
├package.json
```

基本上撰寫 React 的時候只會動到 `src/` 裡面的東西。這邊不花太多時間解釋怎麼撰寫頁面，畢竟我也沒花太多時間刻畫面跟想流程，這次主要重點放在 PWA，所以就用 `axios` 大概把 API 接起來而已。

如果沒有詳細看過第六題題目的朋友，可以看看 [原本的說明](https://challenge.thef2e.com/news/17)。

TL;DR

如果你懶得看第六題題目，API 大概長這樣：

- GET /rooms 取得所有房型
- GET /room/:id 取得單一房型細節
- POST /room/:id 預約房型
- DELETE /rooms 清除所有預約

是個相當適合初學者操作 API 的範例呢！

## 使用 sw-precache 來製作合適的 Service Worker

Service Worker 就是用來讓你的網頁能夠離線運作的主要角色。透過改寫 Service Worker，我們可以讓瀏覽器把我們呼叫房型、單一房型細節的內容都快取起來，不需要自己去寫 `localStorage` 等方法去快取。

但是，由於 `create-react-app` 是個「幾乎不用再設定其他東西」的套件，所以我們沒辦法直接去改它 Service Worker 裡的設定，所以我們必須借用 Google 的 `sw-precache` 套件來設定。首先透過 npm 安裝它：

```bash
npm install --save-dev sw-precache
```

接著我們要改寫 React 打包時的設定。首先打開 `package.json`，並把 `build` 的指令加上 `sw-precache` 的指令，改完後看起來會像這樣（節錄 scripts 的部分而已）：

```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build && sw-precache --config=sw-config.js --root='build/' --static-file-globs='build/**/!(*map*)'",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
```

主要就是告訴它，打包的時候除了執行原本的 `react-scripts build` 以外，還要多執行一個 `sw-precache`。`sw-precache` 使用 `sw-config.js` 當設定檔，並打包 `build/` 資料夾下的所有東西、忽略所有 `.map` 的檔案。

所以我們要在根目錄下新增一個設定檔 `sw-config.js`：

```json
module.exports = {
    runtimeCaching: [
        {
            urlPattern: /^https:\/\/challenge\.thef2e\.com\/.*/,
            handler: 'networkFirst',
        }
    ],
};
```

這邊的意思是，`runtime` 的時候要記得把 `https://challenge.thef2e.com/*` 的所有東西都快取下來。`handler` 則是說有網路的時候要使用線上的還是離線的。可以選擇 `networkFirst`、`fastest`、`cacheFirst` ......等等。

## 離線預覽

還有一件很重要的事情，不管怎樣你在離線狀態下是不可能訂房的對吧？所以有些東西在離現時要隱藏起來。（再舉個例子，公車動態查詢要在離線時顯示一個無法連接到 API 的頁面對吧）

雖然 Service Worker 讓你的瀏覽器能夠在離線瀏覽你的網頁，但我們仍然需要用 JavaScript 去判斷現在是否可以連線、要顯示什麼內容。

這邊借用一個套件叫做 `react-detect-offline`：

```bash
npm install --save react-detect-offline
```

安裝好後你可以這樣在 React 中使用它：  [example](https://github.com/NoobTW/thef2e_2019/blob/master/week6/src/App.js)

```jsx
import { Online, Offline } from 'react-detect-offline';

function App() {
   render() {
       <div>
           <div>不管有沒有網路都會顯示的內容</div>
           <Online>有網路時會顯示的內容</Online>
           <Offline>離線時會顯示的內容</Offline>
       </div>
   }
}
```

像這個例子中我是在有網路時可以訂房、取消訂房、查看訂房資訊；離線時則顯示「離線時無法訂房」字樣。

最後記得使用 [Lighthouse 工具](https://developers.google.com/web/tools/lighthouse/?hl=zh-tw) 查看有沒有符合 PWA 標準。

![lighthouse](https://img.noob.tw/2019/08/lighthouse.png)

## 結語

這篇把重點放在 Service Worker 的設定檔怎麼寫，所以還是有很多東西沒有處理好，像是回到上一頁的 `pushState`。

不過你可以到：[bookpwa.noob.tw](https://bookpwa.noob.tw/) 試試看這個東西在手機、電腦上的效果如何，或是看看 [GitHub](https://github.com/NoobTW/thef2e_2019/tree/master/week6) 原始碼。

![book_pwa](https://img.noob.tw/2019/08/book_pwa.jpg)

> 如果是較新的 Android Chrome 瀏覽器，還可以看到它跳出新增到主畫面的小提示喔！
