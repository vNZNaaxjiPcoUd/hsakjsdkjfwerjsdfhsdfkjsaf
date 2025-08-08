# [7個步驟將 React 部署到 GitHub Pages](https://medium.com/@bun.coding/7%E5%80%8B%E6%AD%A5%E9%A9%9F%E5%B0%87-react-%E9%83%A8%E7%BD%B2%E5%88%B0-github-pages-2d7e0d203d50)

# Step1. 跑 npm run build

npm run build

在寫專案時，常會用 npm run start指令，讓專案在本機跑起來。指令跑完後，都會有一個 npm run build指令，現在終於可以使用了！

> 部署前為什麼要先跑 build？因為 build可以優化程式碼，例如：bundle size變小、移掉不必要的 CSS、React也會拿掉一些開發才需要用到的資訊。所以 production build後，網頁 performance會比較好。

<img height="178" width="562" src="https://miro.medium.com/v2/resize:fit:703/1*pdXeBspxVUyLhnytMJK48Q.png" />

跑完後會看到：The build folder is ready to deploy，下面有寫下個 script：

<img height="520" width="700" src="https://miro.medium.com/v2/resize:fit:875/1*kwjU-GNBtbiEPg8GWK69Wg.png" />

# Step2. 跑 Static Server

執行上一步拿到的 script：

npm install -g serve
serve -s build

跑完後會自動把 server跑起來，可以複製 Local後的網址，貼到瀏覽器上會看到自己的專案：

<img height="645" width="700" src="https://miro.medium.com/v2/resize:fit:875/1*xpiTH26RH3OrlNYINlqJTw.png" />

可以先把 server停掉，然後到專案檔案裡的 build資料夾，裡面會：

* 依照不同的功能切分 JavaScript，像 main.chunk.js, runtime.chunk.js。
* index.html會 minified最小化，讓檔案最小化(拿掉空格、拿掉換行、變數用 a, b, c命名等)。

<img height="318" width="700" src="https://miro.medium.com/v2/resize:fit:875/1*liQcVaO-FmYBgWhweaGACw.png" />

接下來就會寫 script，把 build檔案傳到 github。

# Step3. 在 package.josn新增 homepage script

"homepage": "https://thisIsBun.github.io/message-board-react"
// 記得要換上自己的 github account name和 repository name

# Step4. 在專案安裝 gh-pages及新增 deploy script

npm install - save gh-pages

先跑上面指令後，再到 package.json新增這兩段 script：

&#x20; "scripts": {
\+   "predeploy": "npm run build",
\+   "deploy": "gh-pages -d build",

# Step5. 在 Github設定專案的 repository

只要開 repository就好，gh-pages會等下指令會自動部署。

# Step6. 跑 deploy指令

npm run deploy

* deploy 跑成功後最底下會看到 Published字串
* 會發現 repository裡，有多一個 gh-pages branch
* gh-pages branch裡，放的就是剛剛 build資料夾的檔案

<img height="576" width="544" src="https://miro.medium.com/v2/resize:fit:680/1*5JFnMGW8Un9swqAS3sjUpg.png" />

deploy 跑成功後會有 Published字串

<img height="402" width="464" src="https://miro.medium.com/v2/resize:fit:580/1*jRygVCPZkDFUPpY9qi6Y8g.png" />

repository裡多一個 gh-pages branch

<img height="206" width="700" src="https://miro.medium.com/v2/resize:fit:875/1*KxoYG7g7_pUonrxauajJHg.png" />

gh-pages branch裡就是剛剛 build的檔案

# **Step7. 到 Github 的 Setting做最後確認**

一進到這頁面其實會看到部署的網址，確保 source是選擇 gh-pages branch後，就完成部署了！

<img height="316" width="700" src="https://miro.medium.com/v2/resize:fit:875/1*cVgpse3uY8qjUPfot-rPbA.png" />

# 參考：

* [https://create-react-app.dev/docs/deployment](https://create-react-app.dev/docs/deployment)
* [https://create-react-app.dev/docs/deployment#github-pages](https://create-react-app.dev/docs/deployment#github-pages)
