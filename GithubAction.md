# Github Actions！

[Follow](https://medium.com/m/signin?actionUrl=https%3A%2F%2Fmedium.com%2F_%2Fsubscribe%2Fuser%2Ffac5c5351760&operation=register&redirect=https%3A%2F%2Fmedium.com%2Fstarbugs%2F%E5%AF%A6%E4%BD%9C%E9%96%8B%E6%BA%90%E5%B0%8F%E5%B7%A5%E5%85%B7-%E8%88%87-github-actions-%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E7%9B%B8%E9%81%87-3dd2d70eeb&user=%E8%8E%AB%E5%8A%9B%E5%85%A8+Kyle+Mo&userId=fac5c5351760&source=post_page-fac5c5351760----3dd2d70eeb---------------------post_header-----------)

最近因為在求職，突然發現把 Github 個人 profile 弄的豐富一點還挺重要的，可以快速吸引他人的眼光，並展現自己對於技術的投入。不過筆者沒有什麼幾百幾千 stars 的開源專案，只有一些不太能見人的小專案，剩下比較能拿出來擺的可能就是有在經營 Medium 部落格，並且追蹤人數與文章產量有在穩定成長這點了。提到把 Medium Status 放到 Github profile 這件事，我第一個想到的就是到最近很紅的 [awesome-pinned-gists](https://github.com/matchai/awesome-pinned-gists) (一個收集使用 gist 呈現各種有趣數據的 repo，如果不知道 Github gist 是什麼的讀者，可以先看看[這裡](https://gist.github.com/)) 去找找有沒有其他人寫過的專案可以用，不過發現並沒有人做過顯示 Medium 狀態的專案，參考了一下其他的 gist 發現實作方式不難，也是一個接觸 Github Actions 的好機會，於是就決定自己來寫一個這樣的小工具了。

Medium-Stat-Box 專案 Repo 👇

[

## kylemocode/medium-stat-box

### Show your medium stat 😁 Including followers count and the title and claps of your latest articles This project is…

github.com

](https://github.com/kylemocode/medium-stat-box?source=post_page-----3dd2d70eeb--------------------------------)

這篇文章主要是想透過這次專案實作的經驗，介紹一下 Github Actions 這個算蠻新的技術，因此不會對專案原始碼或實作方式詳細講解，目的是希望能讓沒碰過或是第一次接觸 Github Actions 的讀者們能夠對它有基本的認識。

## 這個專案想做什麼？

![](https://miro.medium.com/v2/resize:fit:875/1*EOlvmNe3_pxzma197tgFGQ.png)

直接上圖比較快，這是這次小專案的成品截圖，可以看到右下角的 pinned gist 顯示了我的 medium username、追蹤人數與最近發表的三篇文章還有各個文章的拍手數量。想當然我們當然希望這些資料的變動可以自動化，畢竟每一段時間自己去手動改數字也太笨了吧！因此這個專案主要會需要用到的技術有：

**Cron Job**： 每隔一段時間就去跑一次寫好的程式  
**API 串接**：透過 Medium 第三方 API 抓取使用者資料  
**爬蟲**：因為 Medium API 提供的資訊不多(例如拍手數或追蹤數都沒有提供)，因此某些資料得透過爬蟲才能取得

API 串接跟爬蟲其實很簡單直接，再來重點就是 cron job 要怎麼設置了，cron job 可以透過 host 一個 server 或是使用 cloud service 來負責相關的工作，簡單的流程也可以依賴 CI/CD 服務，不過像 Travis CI、Circle CI 等服務對於 host 在 Github 上的專案來說都是外部服務，如今 Github Actions 的推出讓我們可以把這些事情整合在 Github 單一平台完成，並且提供更多豐富的功能，是不是很吸引人呢？馬上來看看它到底是什麼黑魔法吧！

## What is Github Actions ?

Github Actions 是 Github 提供的 CI/CD 服務，CI/CD 代表的是 Continuous Integration 持續整合與 Continuous Deployment 持續部署，講白話一點就是將程式流程自動化，例如在 push 到 repo 後自動 build、自動跑測試、自動部署，如今 CI/CD 已經成為軟體開發不可或缺的技術。CI/CD 由很多步驟與流程組成，例如跑測試、發佈到第三方…等，而 Github Actions 就將這些步驟稱為「Actions」。一般實作 CI/CD 的方式通常就是撰寫 config 檔 （例如 yml、json），再由 CI/CD 的服務去吃 config 來執行對應的操作，關於這點應該可以算是 [Infrastructure As Code](https://en.wikipedia.org/wiki/Infrastructure_as_code) 的實踐了。有趣的是，寫程式時我們常注意是否遵守 DRY (Do Not Repeat Yourself) 原則，可以共用的部分就抽出來變成一個模組或函式，這點在 CI/CD 的世界也是同樣道理，許多的操作就算在不同專案裡也是類似甚至一樣的，完全可以抽出來共享，Github Actions 注意到了這個問題，它允許開發者把自己撰寫的 Actions 發佈到公開的 [Marketplace](https://github.com/marketplace?type=actions)，讓其他開發者可以直接引用寫好的 Actions，因為存放 Actions 地方也算是像 Github 或是 Docker hub 這類的代碼倉庫，所以也有引進「版本」的概念，也就是說每個公開發佈的 Action 可能會同時存在不同版本，例如：

actions/some-action[@24jc](mailto:node@74bc)3d1 # 指向一个 commit  
actions/some-action@v2.0 # 指定一個版本

這也是 Github Actions 最特別的地方。

## Github Actions 的基本元素

要了解 Github Actions 的基本概念，有幾個元素（或是術語）是必須要知道的，範圍由大至小分別為：

Workflow -> Job -> Step -> Action

- Workflow : CI/CD 一次要運行的整個過程，就稱作 Workflow，一個 Workflow 裡會涵蓋多個 Job、Step、 Action。
- Job : 意義跟翻成中文差不多，代表「任務」。一個 Workflow 由多個 Job 組成，這也意謂著***一個 Workflow 可以完成多個任務***。
- Step : 代表一個個「步驟」，一個 Job 由多個 Step 組成，意謂著一個 Job 是一個步驟一個步驟來完成的。
- Action : 「命令」或「動作」，每個 Step 可以依序執行多個命令（動作）。

## Github Actions Workflow Config

要啟用 Github Actions，不需要什麼複雜的設定，只需要在專案的根目錄新增 .github/workflow 的路徑，將專案推到 Github 上後 Github 就會自動執行放在該路徑裡的 .yml config 檔 (Workflow document 採用 YAML 格式)。.yml 檔的檔名可以隨意取，也可以創建多個 .yml 檔，Github 會執行 .github/workflow 路徑下的所有 YAML 文件。

通常這種 config 類型的語法都是千變萬化的，Github Actions 也不例外，所以這邊只會介紹最基本的語法，希望讓讀者能有個基本的認識，如果想研究更多 config 語法的人可以參考[官方文件](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions)。

這邊直接以 medium-stat-box 這個專案的 config 檔來當作例子：

![](https://miro.medium.com/v2/resize:fit:875/1*uYGDAidUpLQzn77Xh0TTCw.png)

- name : 幫這個 workflow 取名，可以省略，預設會使用 .yml 的檔名
- on : 也就是 workflow 的觸發條件，以這個專案來說，用了 push 與 schedule 兩個觸發條件，push 可以指定 branch，以這個例子來說就是當 push 到 master branch 就會觸發 Github Actions 的 update gist 這個 workflow，schedule 則是設定排程的字段，這邊是設定每 8 小時就跑一次 workflow 去抓取最新的 Medium status。關於 cron job 的時間設定可以參考[這裡](https://crontab.guru/)。其他常見的觸發條件還有像是 pull_request、release…等，想知道更多觸發條件可以參考[這裡](https://docs.github.com/en/actions/reference/events-that-trigger-workflows)。
- jobs : 跟前面提到過的一樣，每個 job 由許多 steps 組成，上圖中 jobs 字段下面的 update-gist 是給 job 的名稱，runs-on 則是指定要運行的環境，這個專案是使用 ubuntu，其他還有像是 windows 與 macOS 可以選擇。原則上多個 jobs 預設會是平行( parallel) 執行的，但如果 jobs 間存在依賴關係，那它們的執行順序開發者也是可以自行指定的，例如：

jobs:  
  job-1:  
  job-2:  
    needs: job-1  
  job-3:  
    needs: [job-1, job-2]

執行順序就會是 ***job-1 -> job-2 -> job-3***

- steps : steps 應該可以說是 Github Actions 最重要的部分了，它定義了 workflow 真正要執行的指令。其中的 uses 字段可以直接使用其他開發者寫好並發佈的 actions，以上圖中的 actions/checkout@v2 為例，其實就是直接使用[這個 action](https://github.com/actions/checkout)，所做的是在剛剛 run on 字段指定的 ubuntu 執行環境中抓取我們專案的程式碼（畢竟原本的執行環境就是一台空空的虛擬主機而已）。透過這樣引用現有 Actions 的方式，避免重複撰寫一樣的 config 檔，使開發效率提升以外，可讀性與可維護性也跟著提升。再來看到 name 取叫 update-gist 的那個 step，名字一樣可以自己定義，只是為了 debug 方便，有趣的是在 uses 字段裡放的是 kylemocode/medium-stat-box@master，也就是這個專案的 master branch，這是什麼意思呢？其實這邊的意思就是到專案 repository 的 root folder 尋找 action.yml 或是 action.yaml 檔來當作 metadata file，除了定義一些 metedata 以外，也定義了程式的 entry point，按照[官方文件](https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions)的說明，Docker 與 JavaScript 的 Actions 是需要提供這個 metedata file 的。在這個專案中，我在 root 定義了一個 action.yml，內容如下：

![](https://miro.medium.com/v2/resize:fit:875/1*hqOBVmzN6YFddgCSIAArWQ.png)

除了一些 meta data 例如 author 與 description 以外，最重要的是在 runs 字段指定 Node.js 的版本還有 entry point，也就是經過打包後的 dist folder 裡的 index.js。通過這樣子的設定，才會在每次跑 workflow 時都去執行一次我撰寫的程式碼，達到更新 Medium 資料的需求。最後也可以看到一些環境變數的設定，並且可以在 github repo 設定 secret，只有專案維護者可以 access 的到，是蠻安全又方便的方式。

## 心得與小結

先說說心得好了，這個 side project 其實非常小也沒什麼技術難度，不過有趣的是他是為了解決我自己的需求而誕生的，比起運用了許多複雜技術卻不知道能解決什麼問題或帶給其他人什麼好處的專案，它對我而言更有存在的價值，我想這也是軟體開發的本質與吸引人的地方，也就是去想辦法「解決問題」。如果你覺得這個小應用有趣的話，歡迎給我 star，如果你也是 Medium 經營者，那麼你更該嘗試看看，讓自己的 Github Profile 變得更加豐富！

再來就是關於因為這個專案才第一次接觸的 Github Actions，對於我自己而言，僅僅這次接觸它的基本功能與概念，我就覺得它能夠玩的東西比其他 CI/CD 服務還要多元，能夠分享並 Publish 成為 Public Actions 的特點我認為也會讓這個生態系變得更加完善，也會出現各種五花八門的應用。測試、部署這些流程都自動化以後，我們可以發現開發效率的提升，以及了解 CI/CD 的強大。其實 Github Actions 還有很多進階操作，不過這篇文章僅僅介紹了最基本的概念，希望能讓第一次接觸它的讀者可以有所收穫。
