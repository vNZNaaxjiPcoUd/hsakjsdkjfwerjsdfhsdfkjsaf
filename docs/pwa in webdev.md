# PWA 在應用程式商店中

 書籤邊框

- 在本頁
- [先決條件](https://web.dev/articles/pwas-in-app-stores#prerequisites)
- [包裝](https://web.dev/articles/pwas-in-app-stores#packaging)
- [正在提交](https://web.dev/articles/pwas-in-app-stores#submitting)
- [例子](https://web.dev/articles/pwas-in-app-stores#example)





PWA 可以透過 Web 瀏覽器訪問，但也可以安裝在使用者的主畫面上，如[提供可安裝體驗](https://web.dev/explore/progressive-web-apps#provide-an-installable-experience)部分的文章所述。然而，PWA 面臨的挑戰之一是將它們分發到應用程式商店。這就是[PWABuilder 的](https://pwabuilder.com/)用武之地。PWABuilder  
是一個功能強大的工具，讓開發人員可以建立可以提交到各種應用程式商店的套件：

- [谷歌應用商店](https://play.google.com/store)
- [微軟商店](https://apps.microsoft.com/)
- [蘋果應用商店](https://www.apple.com/app-store/)
- [元任務商店](https://www.oculus.com/experiences/quest/)

使用 PWABuilder 建立套件的主要優點之一是它簡化了將 Web 應用程式發佈到應用程式商店的過程。通常，向應用程式商店提交應用程式需要大量工作，包括用 Web 開發人員不一定熟悉的語言編寫程式碼、創建應用程式圖示、配置各種設定以及跨不同裝置和作業系統測試應用程式。 PWABuilder 會自動處理其中許多任務，減少發布應用程式所需的時間和精力。

**注意：**在內部，PWABuilder 使用名為 的命令列工具，您可以在[受信任的 Web 活動快速入門指南](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start)[`bubblewrap`](https://github.com/GoogleChromeLabs/bubblewrap)一文中了解更多資訊。如果您喜歡命令列而不是圖形使用者介面，則可以直接運行，而不是使用 PWABuilder 。[](https://developer.chrome.com/docs/android/trusted-web-activity/quick-start)`bubblewrap`

## 先決條件

如果您的 Web 應用程式符合一些基準 PWA 要求，您可以使用 PWABuilder 來驗證、評分和打包您的商店應用程式。

- 您的 PWA 需要在公用 URL 上發布。
- 它必須具有完整的[Web 應用程式清單](https://developer.mozilla.org/docs/Web/Manifest)。
- 該應用程式必須使用 HTTPS 提供服務。

**關鍵點：**

要發布您的包，您還需要一個與您想要發布的每個平台相關的開發者帳戶。對於 Microsoft 和 Google Play 商店，這些需要一次性付費。對於 Apple App Store，帳戶每年需要支付經常性費用。 Meta Quest 帳號是免費的。

透過向商店提交，您需要遵守他們的規則。這些規則可能要求您使用他們的付款機制並為每次購買支付佣金。他們也可能限制某些類型的內容。對於您想要發佈到的每個商店，請仔細評估這些方面。

## 包裝

您只需幾個步驟即可獲得 PWA 的應用程式套件：

- 在 PWABuilder 的主頁上，輸入 URL 以啟動打包程序。 PWABuilder 將帶您進入應用程式的成績單頁面，您可以在其中查看漸進式 Web 應用程式的分數和操作項目。
- 要繼續打包您的應用程序，請點擊記分卡頁面右上角的“ **打包商店”按鈕。**
- 瀏覽打包選項，然後按一下**「生成包」**選擇平台。系統將提示您輸入與您的應用程式相關的元數據，該元數據將根據平台的不同而有所不同。
- 最後，選​​擇**「下載套件」**來下載您的套件。

![PWABuilder 使用者介面中的 SVGcode PWA。](https://web.dev/static/articles/pwas-in-app-stores/image/svgcode-pwa-the-pwabuild-a9e0c6ac1542.png)

## 正在提交

有關如何將 PWA 發佈到特定商店的指南，請務必查看特定於平台的文章：

- [微軟商店](https://docs.pwabuilder.com/#/builder/windows)
- [谷歌應用商店](https://docs.pwabuilder.com/#/builder/android)
- [蘋果應用商店](https://docs.pwabuilder.com/#/builder/app-store)
- [元任務商店](https://docs.pwabuilder.com/#/builder/meta)

## 例子

我使用 PWABuilder 為我的應用程式之一[SVGcode](https://web.dev/case-studies/svgcode)產生了商店包。

[![在 Google Play 上取得。](https://raw.githubusercontent.com/tomayac/SVGcode/main/public/badges/play-store.svg)](https://play.google.com/store/apps/details?id=de.svgco.twa)

[![從微軟取得它。](https://raw.githubusercontent.com/tomayac/SVGcode/main/public/badges/microsoft-store.svg)](https://www.microsoft.com/en-us/p/svgcode/9plhxdgsw1rj#activetab=pivot:overviewtab)

除了這些商店之外，您當然也可以在瀏覽器中取得該應用程式。

[![在網頁瀏覽器中使用它。](https://raw.githubusercontent.com/tomayac/SVGcode/main/public/badges/web-browser.svg)](https://svgco.de/)

這個有幫助嗎？

除非另有說明，本頁面的內容根據[Creative Commons Attribution 4.0 License獲得許可，程式碼範例根據](https://creativecommons.org/licenses/by/4.0/)[Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)獲得許可。有關詳細信息，請參閱[Google 開發者網站政策](https://developers.google.com/site-policies)。 Java 是 Oracle 和/或其附屬公司的註冊商標。

最後更新時間：世界標準時間 2023 年 3 月 31 日。
