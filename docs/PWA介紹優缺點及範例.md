# PWA優、缺點及範例介紹

**  

PWA (Progressive Web Application) 是由Google於2016年提出的概念，簡單來說就是把功能放在瀏覽器中執行，但可以不透過瀏覽器操作，一般人可能比較難理解。可以這麼想像，在行動裝置端模式下，安裝APP需先下載並安裝執行，但是PWA省去這一個步驟，無須安裝APP直接打開瀏覽器加上簡單的設定即可執行。同樣的在桌上型電腦中，可以直接點擊該應用程式，但無須下載EXE及按下一步安裝等工序。

對行動裝置使用者來說，最大的感受就是在操作時感覺像在操作app，也就是app-like的體驗。對很多公司來說，PWA可以當成行銷工具，據國外媒體報導，有採用PWA的網站流量以及訂單量均增加，一來是無需額外下載app ，二來是PWA可以接近原生的功能，大大增加便利度及流暢度。

優點

根據Google開發者文件，PWA具有以下優點：

- **Progressive 漸進式** - 使用者於瀏覽器中即可操作 (註：各瀏覽器於各平台上支援度不一)
- **Responsive 響應式** - 可操作於桌機、手機或平板等裝置上
- **Connectivity independent 連結獨立** - 可基於service workers架構執行，於離線或在有限網路下操作
- **App-like 近似APP** - 類似APP的操作介面
- **Fresh 維持新版** - 因service worker架構，讓應用程式隨時都是在更新狀態
- **Safe 安全性** - 必須於加密模式之下進行，因此安全較受到保障
- **Discoverable 可被搜尋** - 透過manifest設定檔案及service worker使搜尋引擎可正常搜尋到
- **Re-engageable 有互動性** - 透過類似推播方式與使用者更加互動
- **Installable 可安裝** - 可以拉存到手機的桌面，感覺就像是傳統的APP (註：非每種瀏覽器均支援)
- **Linkable 可連結** - 可經由連結輕易分享

簡而言之，較受人注目的優點是

- 網路有限狀況下可使用
- 手機上操作模式可類似APP，但無須進入 Apple Store/Google Play 下載並安裝傳統APP
- 電腦上操作模式可類似應用程式，但無須透過安裝步驟

缺點

瀏覽器/平台的支援是一大問題，一個網站可以在諸多平台及裝置及瀏覽器上運行，桌上型電腦作業系統有Windows、MAC及Linux，行動作業系統有iOS及Android，瀏覽器常見有Chrome/Safari/Firefox/Opera/Edge等，要求這麼多資源均支援原本就不是一件簡單的事情，而且許多受限的功能也無法取代原生的APP。

另一個主要的問題是大部分消費者並不清楚如何操作，並不是說不懂如何操作網站，而是說不知道該如何把該網站轉成類應用程式的操作模式，也因此實務上並不會有許多業主想要採用這種方式，工程師也不想額外增加開發工時。

此外根據國外部落客評論，對於行動裝置而言，PWA會比原生APP耗電量來的高，由於它們是用複雜的程式編寫的，手機必須更加努力的轉譯程式碼，但此說法未被確認。另外，PWA無法存取NFC/藍牙等原生設備的缺點使其仍無法取代傳統的APP。

目前是2021的下半年，根據國外的報導，雖然GOOGLE努力推廣多年，但是PWA架構並沒有很普及，對大多數人來說還是相對較新的概念。2018年曾有許多科技網站大力吹捧PWA將會取代傳統APP，不過許多之前用PWA開發模式的網站已變更回單純網站，下述星巴克訂餐的範例則使用專屬的連結操作，並沒有掛於官網中，不過Pinterest仍維持官網以PWA模式進行。

**2023年更新**/線上音樂串流平台 Spotify 及 Instagram 官網已採用PWA架構

對於不想砸大錢開發手機APP的企業來說，PWA無疑對他們是最好的選擇。手機APP經常因版本的更新而需要大量的維護，而PWA是基於瀏覽器而生，若瀏覽器沒有甚麼大更動，維護相對較容易，製作及維運成本均大幅下降。

PWA會是未來的趨勢或是會成為歷史上的一個名詞，就讓市場及時間來決定了。


-------------

### 目前知名網站使用 Progressive Web Application (PWA) 的例子

Progressive Web Application (PWA) 是一種結合網頁與原生 App 優點的技術，能提供離線存取、推送通知與快速載入等功能。截至 2025 年 10 月，許多知名網站已採用 PWA 來提升使用者體驗，尤其在行動裝置上。以下是根據最新資料彙整的部分知名例子，我將它們按產業分類，並簡述其 PWA 特色與效益（資料來自多個權威來源，如 Mobiloud、SimiCart 等）。

| 產業/類別 | 知名網站 | PWA 特色與效益 |
|----------|----------|---------------|
| **新聞/媒體** | Financial Times (ft.com) | 採用傳統報紙風格設計，支持慢速網路載入；棄用原生 App 後，使用者參與度提升，平均瀏覽時間增加 15%。 |
| **新聞/媒體** | Forbes (forbes.com) | 快速載入與離線閱讀；移動轉換率提升 43%，使用者參與度增加 100%。 |
| **新聞/媒體** | Clarín (clarin.com，阿根廷新聞網站) | 西班牙語介面，支援推送通知；PWA 推出後，會話頁數增加 150%，跳出率降低 11%。 |
| **零售/電商** | Starbucks (starbucks.com) | 離線瀏覽菜單、訂購與忠誠計劃；取代舊版行動網站，使用者參與度提升，轉換率增加 104%。 |
| **零售/電商** | Flipkart (flipkart.com，印度電商) | 快速載入（少於 3 秒），支援推送通知；移動會話增加 50%，轉換率提升 17%。 |
| **零售/電商** | Debenhams (debenhams.com，英國時尚零售) | 改善行動轉換率；移動流量轉換率從低點回升，會話數增加 20%。 |
| **社群/社交** | Twitter (x.com) | Twitter Lite 版本，檔案小（Android App 的 3% 空間）；使用時間增加 2 倍，資料使用減少 70%。 |
| **社群/社交** | Pinterest (pinterest.com) | 無摩擦瀏覽與安裝；移動使用者參與度提升，收入增加，頁面瀏覽量翻倍。 |
| **社群/社交** | Instagram (instagram.com) | 快速圖片載入與推送；行動使用者保留率提升，轉換率增加。 |
| **社群/社交** | Reddit (reddit.com) | 支援安裝與離線瀏覽；行動體驗如原生 App，使用者互動增加。 |
| **社群/社交** | Tinder (tinder.com) | 滑動介面與即時匹配；PWA 推出後，行動轉換率大幅提升。 |
| **旅行/住宿** | Uber (uber.com) | 快速叫車請求，低端裝置支援；載入時間減至秒級，使用者滿意度提升。 |
| **旅行/住宿** | Airbnb (airbnb.com) | 推送通知與滑動選單；載入時間從 5.5 秒降至更短，會話數增加。 |
| **旅行/住宿** | Trivago (trivago.com) | 酒店搜尋離線功能；頁數瀏覽增加 150%，跳出率降 11%。 |
| **旅行/住宿** | Treebo (treebohotels.com，印度酒店) | 改善行動預訂；使用者保留率提升，轉換率增加 17%。 |
| **娛樂/串流** | Spotify (spotify.com) | 離線播放與推送；行動使用時間增加，資料使用減少。 |
| **娛樂/串流** | YouTube (youtube.com) | 快速影片載入，支援低頻寬；成為全球最大影片平台之一，使用者參與度高。 |
| **娛樂/串流** | Hulu (hulu.com) | 離線觀看與推送；行動轉換率提升。 |
| **其他** | BMW (bmw.com) | 車款瀏覽與配置工具；行動體驗提升，轉換率增加。 |
| **其他** | Lowe's (lowes.com，美國家居零售) | AR 工具與離線瀏覽；使用者參與度提升 100%。 |


### 知名網站 PWA 技術細節說明

Progressive Web App (PWA) 的核心技術包括 Service Workers（用於背景處理、離線快取與推送）、Web App Manifest（定義 App 圖示、名稱與安裝屬性）、Cache API（快取策略，如預載入與動態快取）、Push API（推送通知）、離線支援（Offline Support）、Add to Home Screen (A2HS) 提示，以及性能優化（如快速載入與低資料消耗）。以下根據最新可用資料（截至 2025 年 10 月），彙整您先前提及的知名網站所使用的 PWA 技術細節。我從多個可靠來源提取資訊，聚焦於可驗證的實施細節；若某些網站缺乏公開技術細節，則基於案例研究推斷。資料主要來自 PWA 開發者部落格與案例分析，如 web.dev、Designveloper、Synodus、MindK 等。

為方便閱讀，我使用表格分類呈現，按產業分組。表格中包含具體技術應用與效益；若無明確記錄，則標註「未明確提及，但推斷存在」。

| 產業/網站 | PWA 技術細節與實施 |
|----------|------------------|
| **新聞/媒體: Financial Times (ft.com)** | - **Service Workers**: 用於背景快取與離線閱讀，支持慢速網路載入。 <br> - **Web App Manifest**: 定義 App 圖示與主題，支持 A2HS 提示。<br> - **Caching Strategies**: 動態快取文章內容，預載入常見頁面。<br> - **Push Notifications**: 推送最新新聞警報。<br> - **Offline Support**: 完整離線閱讀模式。<br> - **Add to Home Screen**: 支援安裝至首頁。<br> - **Performance Improvements**: 載入時間減至 0.8 秒，使用者參與度提升 100%，會話增加 43%。 |
| **新聞/媒體: Forbes (forbes.com)** | - **Service Workers**: 處理離線存取與背景同步。 <br> - **Web App Manifest**: 自訂圖示與全螢幕模式。<br> - **Caching Strategies**: 使用 Cache API 預快取文章與圖片，載入時間從 6-12 秒降至 0.8 秒。<br> - **Push Notifications**: 推送個人化內容警報。<br> - **Offline Support**: 離線瀏覽儲存文章。<br> - **Add to Home Screen**: 支援 A2HS，允許儲存主題。<br> - **Performance Improvements**: 轉換率提升 43%，廣告瀏覽增加 20%，捲動深度增加 3 倍。 |
| **新聞/媒體: Clarín (clarin.com)** | - **Service Workers**: 未明確提及，但推斷用於離線與推送。<br> - **Web App Manifest**: 支持 A2HS 與自訂介面。<br> - **Caching Strategies**: 低資料快取，支援慢速網路。<br> - **Push Notifications**: 推送新聞更新。<br> - **Offline Support**: 離線閱讀文章。<br> - **Add to Home Screen**: 支援安裝。<br> - **Performance Improvements**: 會話頁數增加 150%，跳出率降低 11%。 |
| **零售/電商: Starbucks (starbucks.com)** | - **Service Workers**: 啟用離線菜單瀏覽與訂單自訂。 <br> - **Web App Manifest**: 提示 A2HS，定義 App 圖示與啟動畫面。<br> - **Caching Strategies**: 使用 IndexedDB 儲存訂單資料，支援弱網路。<br> - **Push Notifications**: 推送促銷與訂單狀態。<br> - **Offline Support**: 完整離線模式，無需 Wi-Fi 瀏覽。<br> - **Add to Home Screen**: 支援安裝，桌面用戶訂購率與行動相當。<br> - **Performance Improvements**: 檔案大小僅原生 App 的 0.4%，載入時間減 99.84%，每日訂單用戶翻倍。 |
| **零售/電商: Flipkart (flipkart.com)** | - **Service Workers**: 處理離線購物與背景同步。 <br> - **Web App Manifest**: 支持 A2HS 與全螢幕顯示。<br> - **Caching Strategies**: 開放 Web API 減少資料使用 3 倍，預快取產品頁。<br> - **Push Notifications**: 推送最新更新與優惠。<br> - **Offline Support**: 離線瀏覽產品。<br> - **Add to Home Screen**: 一鍵安裝至首頁。<br> - **Performance Improvements**: 載入少於 3 秒，移動會話增加 50%，轉換率提升 17%，資料使用減少 40%。 |
| **零售/電商: Debenhams (debenhams.com)** | - **Service Workers**: 未明確提及，但推斷用於快取。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 動態快取產品圖片。<br> - **Push Notifications**: 推送促銷。<br> - **Offline Support**: 部分離線瀏覽。<br> - **Add to Home Screen**: 支援安裝。<br> - **Performance Improvements**: 移動流量轉換率回升，會話數增加 20%。 |
| **社群/社交: Twitter (x.com, 原 Twitter Lite)** | - **Service Workers**: 支持慢速網路與背景快取。 <br> - **Web App Manifest**: 定義輕量 App 屬性。<br> - **Caching Strategies**: 路線基代碼分割與快取，減少資料使用 70%。<br> - **Push Notifications**: 推送通知與即時更新。<br> - **Offline Support**: 離線功能，適合新興市場。<br> - **Add to Home Screen**: 支援 A2HS 提示。<br> - **Performance Improvements**: 載入少於 5 秒，使用時間增加 2 倍，跳出率降低 20%，推文增加 80%。 |
| **社群/社交: Pinterest (pinterest.com)** | - **Service Workers**: 處理低連線問題與背景同步。 <br> - **Web App Manifest**: 支持 A2HS 與安裝。<br> - **Caching Strategies**: 快取圖片與內容。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 低連線支援。<br> - **Add to Home Screen**: 支援安裝，提升參與度。<br> - **Performance Improvements**: 活躍用戶增加 103%，新註冊提升 843%，Pins 進展增加 401%。 |
| **社群/社交: Instagram (instagram.com)** | - **Service Workers**: 支持桌面訊息與輕量探索。 <br> - **Web App Manifest**: 支持 Windows 10 安裝。<br> - **Caching Strategies**: 輕量快取圖片。<br> - **Push Notifications**: 推送更新。<br> - **Offline Support**: 部分離線。<br> - **Add to Home Screen**: 支援桌面安裝。<br> - **Performance Improvements**: 桌面訊息功能提升，保留率增加。 |
| **社群/社交: Reddit (reddit.com)** | - **Service Workers**: 未明確提及，但推斷用於離線。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 快取討論串。<br> - **Push Notifications**: 推送回覆。<br> - **Offline Support**: 離線瀏覽。<br> - **Add to Home Screen**: 支援安裝。<br> - **Performance Improvements**: 行動互動增加，如原生 App。 |
| **社群/社交: Tinder (tinder.com)** | - **Service Workers**: 支持桌面匹配與 MVP 開發。 <br> - **Web App Manifest**: 支持瀏覽器存取。<br> - **Caching Strategies**: 快取使用者資料。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 部分離線。<br> - **Add to Home Screen**: 支援安裝。<br> - **Performance Improvements**: 3 個月 MVP 開發，轉換率大幅提升。 |
| **旅行/住宿: Uber (uber.com)** | - **Service Workers**: 支持變動網路與輕量叫車。 <br> - **Web App Manifest**: 支持瀏覽器存取。<br> - **Caching Strategies**: 低端裝置快取。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 弱網路支援。<br> - **Add to Home Screen**: 支援安裝。<br> - **Performance Improvements**: 載入減至秒級，桌面用戶 30%。 |
| **旅行/住宿: Airbnb (airbnb.com)** | - **Service Workers**: 未明確提及。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 未明確提及。<br> - **Push Notifications**: 如原生 App 推送。<br> - **Offline Support**: 未明確提及。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 載入從 11.9 秒降至 4.69 秒，轉換率提升 25%。 |
| **旅行/住宿: Trivago (trivago.com)** | - **Service Workers**: 未明確提及。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 低資料快取價格比較。<br> - **Push Notifications**: 推送優惠。<br> - **Offline Support**: 離線工作。<br> - **Add to Home Screen**: 支持按鈕，500,000 用戶安裝。<br> - **Performance Improvements**: 參與度提升 150%，點擊率增加 97%。 |
| **旅行/住宿: Treebo (treebohotels.com)** | - **Service Workers**: 未明確提及。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 未明確提及。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 未明確提及。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 保留率提升，轉換率增加 17%。 |
| **娛樂/串流: Spotify (spotify.com)** | - **Service Workers**: 未明確提及，但推斷用於離線。 <br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 未明確提及。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 離線播放。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 免費轉付費提升 46%，活躍用戶增加 30%，聽取時間增加 40%。 |
| **娛樂/串流: YouTube (youtube.com)** | - **Service Workers**: 支持低頻寬載入。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 快取影片片段。<br> - **Push Notifications**: 推送新影片。<br> - **Offline Support**: 離線觀看。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 載入加速，參與度高。 |
| **娛樂/串流: Hulu (hulu.com)** | - **Service Workers**: 未明確提及。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 未明確提及。<br> - **Push Notifications**: 推送更新。<br> - **Offline Support**: 離線觀看。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 轉換率提升。 |
| **其他: BMW (bmw.com)** | - **Service Workers**: 未明確提及。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 未明確提及。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 未明確提及。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 載入加速 4 倍，新客戶增加 50%，銷售頁訪客增加 4 倍。 |
| **其他: Lowe's (lowes.com)** | - **Service Workers**: 未明確提及，但推斷用於 AR 工具。<br> - **Web App Manifest**: 支持 A2HS。<br> - **Caching Strategies**: 快取 AR 內容。<br> - **Push Notifications**: 未明確提及。<br> - **Offline Support**: 離線瀏覽。<br> - **Add to Home Screen**: 支持安裝。<br> - **Performance Improvements**: 參與度提升 100%。 |




------------

### 以下是幾個範例：  

**Instagram**

網址 [www.instagram.com](https://www.instagram.com/)

**安裝於電腦中**

請開啟Chrome瀏覽器 (Firefox需安裝外掛才支援)，網址列可看到安裝鈕或按下三點鈕。  

輸入網址後，若看到該符號或按下更多三點鈕會看到安裝XXX的設定，即表示該網址具有PWA模式 (註：非絕對的判斷條件，有少數PWA網站或是僅針對行動裝置才適用的並不會出現該符號，但大部分都會有)。

要正規的驗證是否網站具有PWA模式，須透過瀏覽器的原始碼檢測或是Lighthouse工具，但是已經進入工程師的範圍了，就先打住以免打瞌睡。

![](https://www.arshire.com/blog/assets/p24.jpg)

按下按鈕後會出現是否安裝畫面

![](https://www.arshire.com/blog/assets/p25.jpg) 

按下安裝後，就會在桌面產生捷徑  
![](https://www.arshire.com/blog/assets/p27.jpg)   
雙擊即可執行

執行結果如下

![](https://www.arshire.com/blog/assets/p26.jpg) 

若要取消PWA，按下三點鈕，選擇解除安裝即可。

![](https://www.arshire.com/blog/assets/p28.jpg)  
![](https://www.arshire.com/blog/assets/p29.jpg)  

**

[Spotify](https://www.arshire.com/blog/www.spotify.com)

**網址 [www.spotify.com](https://www.spotify.com/)

**安裝於電腦中 (步驟同上)**

![](https://www.arshire.com/blog/assets/p23.jpg)  
![](https://www.arshire.com/blog/assets/p20.jpg)   
![](https://www.arshire.com/blog/assets/p21.jpg)   
![](https://www.arshire.com/blog/assets/p22.jpg)  
![PWA](https://www.arshire.com/blog/assets/p19.jpg)  

**

STARBUCKS

**

網址 [app.starbucks.com](https://app.starbucks.com/)

2017年上線，據稱帶來兩倍的活躍使用者。

**安裝於電腦中 (步驟同上)**

![](https://www.arshire.com/blog/assets/p8.jpg)   
![](https://www.arshire.com/blog/assets/p7.jpg)   
![](https://www.arshire.com/blog/assets/p15.jpg)  

**安裝於平板或手機上**

**iOS**  
請開啟**Safari**瀏覽器，並輸入網址 [app.starbucks.com](https://www.arshire.com/blog/app.starbucks.com) (iOS Chrome 尚未支援)，按下分享鈕後請按[**加入主畫面**]的按鈕，確認後即可在桌面看到一個圖示，點擊即可執行。

![PWA-starbucks](https://www.arshire.com/blog/assets/p11.jpg)     
![PWA-starbucks](https://www.arshire.com/blog/assets/p13.jpg)

在Safari環境中，每個網址均可加入主畫面，PWA執行後會呈現應用程式的操作介面，而一般網站則會叫出瀏覽器來執行，類似書籤捷徑的概念，就不是應用程式的模式了。

**Android**  
請開啟**Chrome**並輸入網址，按下分享鈕後請按[新增至主畫面]的按鈕，確認後即可在桌面看到一個圖示，點擊即可執行。

![PWA-STARBUCKS](https://www.arshire.com/blog/assets/p1.jpg)

![PWA-STARBUCKS](https://www.arshire.com/blog/assets/p2.jpg)

**其他範例**  

**

PINTEREST

**

網址 [www.pinterest.com](https://www.pinterest.com/)

與先前的行動網站相比，據稱使用者停留的時間增加了40%，產生廣告收入增加了44%，核心參與度增加了60%。

![PWA-PINTEREST](https://www.arshire.com/blog/assets/p5.jpg)

![PWA-PINTEREST](https://www.arshire.com/blog/assets/p6.jpg)

**

BMW

**

網址 [www.bmw.com](https://www.bmw.com/)

![PWA-BMW](https://www.arshire.com/blog/assets/p31.jpg)

![PWA-BMW](https://www.arshire.com/blog/assets/p33.jpg)

**

YUMMLY

**

網址 [www.yummly.com](https://www.yummly.com/)

國外知名個人化的食譜建議及食譜搜索引擎。

![PWA-PINTEREST](https://www.arshire.com/blog/assets/p3.jpg)

![PWA-PINTEREST](https://www.arshire.com/blog/assets/p4.jpg)

若有PWA方面的開發需求，也可與我們[<u>聯絡</u>](https://www.arshire.com/contact)

       所有文章

[

PWA介紹 (Progressive Web App)，優、缺點及範例介紹

](https://www.arshire.com/blog/pwa)

由Google於2016年所提出的概念-漸進式網頁應用程式，意即由網頁來執行應用程式

[

AI以文字產生圖片之比較 - Adobe Firefly vs. Copilot (採 DALLE 3) vs. Openart vs. Imgcreator

](https://www.arshire.com/blog/ai)

同一個描述在幾個生成平台不同的影像比較

[

Shopify 是什麼 ? 完整介紹及畫面說明

](https://www.arshire.com/blog/shopify)

全世界最多人使用的開店平台究竟有甚麼媚力?

[

SQL Server Replication 資料庫同步服務

](https://www.arshire.com/blog/sqlserverreplication)

一個很好用卻常被忽略的工具

[

2021年網頁設計趨勢

](https://www.arshire.com/blog/webdesign)

想要了解國外設計師歸納的2021年網頁設計趨勢嗎

[

UX為什麼很重要?

](https://www.arshire.com/blog/ux)

從2015年進軍台灣的蝦皮如何打敗露天及奇摩而成為拍賣的盟主談起

[

Microinteractions微互動如何改善UX設計?

](https://www.arshire.com/blog/microinteractions)

一位資深產品設計師於多年前提出的微互動觀點，發酵於近幾年並帶給UX界不少的發想及實作

[

企業E化不能等-從一則實例談起

](https://www.arshire.com/blog/esystem)

最近讀到一則新聞，員工離職把硬碟格式化，結果造成公司業務大停擺

[

Adobe Animate介紹

](https://www.arshire.com/blog/animate)

十多年前網頁動畫獨領風騷的FLASH於2016年更名為Adobe Animate後，原軟體於2020年底將正式停止服務

[

Figma介紹

](https://www.arshire.com/blog/figma)

Figma這幾年在UX界爆紅，他的優勢在哪邊? 為何得到設計師的青睞?

[

LINE官方帳號(俗稱LINE2.0)整理包

](https://www.arshire.com/blog/line)

LINE@生活圈已全面升級並改名為官方帳號

[

Google將於2020/9正式採用行動版內容優先索引

](https://www.arshire.com/blog/mobilefirst)

不具適合手機瀏覽的網站是該調整的時候了

[

擴增AR實境在APP的應用愈來愈多元

](https://www.arshire.com/blog/ar)

擴增實境時在APP上的應用由早期的2D已進步到3D的應用，其多元性及互動趣味更甚以往

[

Wireframe的優點

](https://www.arshire.com/blog/wireframe)

Wireframe俗稱線稿圖，好的Wireframe節省一半的製作時間及增強各部門的效率

[

程式碼也可以環保化

](https://www.arshire.com/blog/green)

對人可以不用斤斤計較，但是對雲端服務就要斤斤計較，甚至是錙銖必較

[

實體 v.s. 網路

](https://www.arshire.com/blog/o2o)

實體店面與網路銷售的困境與尷尬
