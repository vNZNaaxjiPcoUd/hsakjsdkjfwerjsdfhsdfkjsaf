# 哪些应用商店把PWA作为一等公民

- Microsoft Store（[官方应用开发文档](https://learn.microsoft.com/en-us/windows/apps/get-started/%3Ftabs%3Dwinappsdk-winui%252Cpwa)，官方应用商店文档[1](https://learn.microsoft.com/en-us/windows/apps/publish/publish-your-app/overview%3Fpivots%3Dstore-installer-pwa)、[2](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/microsoft-store)，[博客文章](https://blogs.windows.com/%3Fs%3Dpwa)、[PWABuilder 文档](https://docs.pwabuilder.com/%23/builder/windows)）
- Google Play（[官方课程](https://developers.google.com/codelabs/pwa-in-play%230)、[ChromeOS 文档](https://chromeos.dev/en/publish/pwa-in-play)、[PWABuilder 文档](https://docs.pwabuilder.com/%23/builder/android)）
- Samsung Galaxy Store（[博客文章](https://medium.com/samsung-internet-dev/introducing-progressive-web-apps-to-samsung-galaxy-store-47ecd317725b)）
- Meta Quest Store（PWA 是目前唯一官方支持的 2D 应用开发方式，[官方文档](https://developer.oculus.com/documentation/web/pwa-submit-app/)、[Google 文档](https://web.dev/articles/pwas-on-oculus-2)）
- ……

iOS 的 App Store 也支持 PWA，只是不够一等公民，比如需要用 WKWebView 做打包（[PWABuilder 支持发布 PWA 到 App Store](https://docs.pwabuilder.com/%23/builder/app-store)）

> 目前通过 Mobile Safari 直接安装的 PWA 是基于 WebClip shortcut 的。  
> iOS、iPadOS、macOS 都**已支持大量 PWA 特性**，比如 [Push](https://webkit.org/blog/13878/web-push-for-web-apps-on-ios-and-ipados/)、[Badge](https://webkit.org/blog/14112/badging-for-home-screen-web-apps/)。Service Worker API 曾经有很多问题，[在 Safari 17 里得到很多修复](https://developer.apple.com/documentation/safari-release-notes/safari-17-release-notes%23Web-apps)。  
> macOS Sonoma + Safari 17 已经在 Mac 上[全面支持 Web App](https://developer.apple.com/videos/play/wwdc2023/10120/)（含 PWA 支持，可以通过 "File > Add to Dock" 把 PWA 安装到 Dock 和应用程序库里）。

## 2. PWA 的数量

互联网上有 [18 亿个以上](https://www.statista.com/chart/19058/number-of-websites-online/)的网站（[50 亿以上](https://siteefy.com/how-many-websites-are-there/%23How-Many-Webpages-Are-There)的网页），活跃网站占比大约 1/4，有 [2](https://siteefy.com/how-many-websites-are-there/)~[4](https://www.internetlivestats.com/total-number-of-websites/) 亿个，是移动应用规模的 40 到 70 倍。

其中有 [200 万左右](https://almanac.httparchive.org/en/2022/pwa)的网站支持 PWA 技术。

头部网站（排名前一千或一万）中，PWA 占比更高，接近 [10%](https://almanac.httparchive.org/en/2022/pwa)。

提交到应用商店的 PWA [超过 2万](https://twitter.com/pwabuilder/status/1454250060326318082%3Fs%3D21)。

更重要的是：

大量不含 PWA 技术的网站，同样是**全功能 Web App**（参考下文「3」），各大 OS 平台也在**全面支持这些 Web App 的安装和独立运行**（参考 [macOS Sonoma + Safari](https://support.apple.com/en-us/104996)、[PICO OS](https://developer-cn.pico-interactive.com/document/web/web-app/) 等）。

随着 LLM 技术在 OS 平台上的引入，趋向于完全实现：不依赖 PWA 中某些技术（比如 [Web App Manifest](https://web.dev/learn/pwa/web-app-manifest)）也能提供 PWA 的核心体验（支持跟原生应用一致的独立运行体验，而不是作为网页快捷方式）。

## 3. PWA 的定位，什么产品会支持 PWA

**桌面平台**在海外普及度高，海外的 Web 生态也更成熟和发达，互联网产品和软件产品普遍都提供全功能的 web 版作为自己的**桌面应用**。

> 基本规则：一款互联网产品只要同时支持桌面平台，基本上就有 web 版。

这些 Web 应用都是**横屏优先的大屏应用**，不是阉割版/Lite 版/导流入口。

海外有大量 SaaS、企业应用、（多人协作）生产力应用**只在 web 版里提供完整功能和最佳体验（只支持桌面平台）**。

新产品，比如现在的各种 AI 工具，普遍支持 PWA。

2D 或 3D 的 Web Game，在海外的桌面平台早已复兴（参考下面的案例）。游戏平台本身和其中的每款游戏，都普遍支持 PWA。

海外所有云游戏平台（参考下面的案例）都只提供 PWA 客户端（包括在移动端）。

此外还有一点特别要注意——移动端。

移动端在国内由小程序满足的按需使用、即开即用、即用即抛、短会话的功能需求（比如扫码下单、分享商品），在海外都是依靠 Web 的。

海外的二维码扫码，也是系统全局功能（[而不是各个 app 内部的功能](https://x.com/fenng/status/1638745656381837313%3Fs%3D46)），因为跟小程序不同，web 是系统全局能力。

这些短会话场景，需要 PWA 的可安装和独立运行能力吗？**不需要**。跟这些场景不采用原生应用来实现的原因是一样的。

而小程序的多数应用场景，恰好来自这里。

所以肉眼所见的「小程序比 PWA 更流行更普及」，其实**包含了大量原本就不涉及 PWA 的使用场景**。

**小程序的比较对象应该是整个 Open Web，而不是 PWA**。

## 4. PWA 典型案例

### 头部社区

- Twitter（含 X Pro：[https://pro.twitter.com/](https://pro.twitter.com/)）
- Reddit：[https://www.reddit.com/](https://www.reddit.com/)
- Discord：[https://discord.com/app](https://discord.com/app)
- TikTok：[https://www.tiktok.com/](https://www.tiktok.com/)
- Pinterest：[https://www.pinterest.com/](https://www.pinterest.com/)
- Github：[https://github.com/](https://github.com/)

### 生产力应用、个人数据应用

- Microsoft 365（Office）：[Login | Microsoft 365](https://www.office.com/)
- Adobe Acrobat Pro：[https://acrobat.adobe.com/](https://acrobat.adobe.com/)
- LassPass：[https://lastpass.com/](https://lastpass.com/)
- Codesandbox（[https://codesandbox.io/](https://codesandbox.io/)）、Replit（[https://replit.com/](https://replit.com/)）等开发工具
- Excalidraw（[https://excalidraw.com/](https://excalidraw.com/)）、Draw.io（[https://app.diagrams.net/](https://app.diagrams.net/)）等白板工具、绘图工具
- Spline（[https://spline.design/](https://spline.design/)）等 2D/3D 设计工具
- Google Earth：[https://earth.google.com/](https://earth.google.com/)

### 媒体和财经

- Messari（[https://messari.io/](https://messari.io/)）、CoinMarketCap（[https://coinmarketcap.com/](https://coinmarketcap.com/)）等财经数据工具
- SeekingAlpha（[https://seekingalpha.com/](https://seekingalpha.com/)）
- The Economist（[https://www.economist.com/](https://www.economist.com/)）

### 流媒体应用

- Spotify：[https://open.spotify.com/](https://open.spotify.com/)
- YouTube
- Netflix、Disney+ 等视频平台

### 小游戏门户

- CrazyGames：[https://www.crazygames.com/](https://www.crazygames.com/)
- Poki：[https://poki.com/](https://poki.com/)
- itch：[https://itch.io/](https://itch.io/)

### 云游戏平台

- Xbox Cloud Gaming：[https://www.xbox.com/en-us/play](https://www.xbox.com/en-us/play)
- NVIDIA GeForce NOW：[https://www.nvidia.com/en-us/geforce-now/](https://www.nvidia.com/en-us/geforce-now/)
- Amazon Luna：[https://luna.amazon.com/](https://luna.amazon.com/)

### Web3 和 UGC 游戏平台

- dot big bang：[https://dotbigbang.com/](https://dotbigbang.com/)

> 太多了，都是新产品我就不列举了

## 5. PWA 的适应能力

随着智能手机之后新一代平台的发展、平台上应用形态的变化，PWA 技术作为 Open Web 技术中提供原生应用体验和能力的 API，能跟其他 Open Web 技术无缝融合和互操作，因此**更能适应新平台和新应用形态**，有更大大更灵活的发展空间。

参考 PICO 平台上支持的「Immersive PWA」：：[PICO 正式支持 Web App 和 Web 开发者啦 …](https://www.zhihu.com/pin/1702484512796266496)

中文文档：[https://developer-cn.pico-interactive.com/document/web/immersive-pwa/](https://developer-cn.pico-interactive.com/document/web/immersive-pwa/)

这是一种启动后直接进入沉浸式 3D 会话的 PWA。从用户体验上，跟基于 Unity 的原生 XR 应用完全一致。从技术上，这种模式本质上弱化（甚至可去除）了 HTML/CSS 和浏览器布局引擎，让 Web 应用可以完全基于 WebGL/WebGPU（参考**微信小游戏和小程序的区别**）。而小程序无法只做简单发展就能满足这些需求。

---

## Q&A：

### Q：跟 LLM 有啥关系？这是把 Web App 跟 PWA 混为一谈吗，PWA 的核心特性是离线使用！

这个问题涉及对第2点中那个「更重要的」部分的理解。

首先，可以查阅标准和测试一下：最简单的 PWA 是什么样子。

答案：任意 HTTPS 的网站，只要按标准提供了 Web App Manifest，且其中只需要提供 name、start_url、icons 这三个字段，就是一个合格的 PWA。

包含 Service Worker 在内的离线化能力，不是 PWA 必须的。其他 Web API（比如后台更新等）当然更不是必须。

为什么会这样呢，因为 PWA 的核心目的，不是离线使用，而是提供原生应用的体验——能安装、能脱离浏览器独立运行。

一个网站，要像原生应用一样安装和运行，障碍是什么，为什么不能直接让现有的十几亿网站直接具备这种能力。

障碍不是离线化。很多原生应用一样包含动态/在线内容，甚至在离线状态下直接白屏完全无法使用。

真正的障碍是：「网站」其实是一个产品/用户概念，不是传统 Web 技术的概念。在传统 Web 技术中，只有无层级隶属关系、彼此平等的 URL（文档和其他媒体资源），以及跟网站并没有 1:1 对应关系的 domain。

网站只是 URL 的集合。URL 之间可以灵活的互相链接、混搭组合出新的网站。同一个网站，经常包含不同域名（包括一级域名）的 URL。相同域名的 URL，也可以各自组成两个不同的网站，彼此不重合。

因此当你访问一个网站的 URL 时，技术层面你只能确定这个 URL 对应的 HTML 的「网页标题」是什么，并不能确定它隶属的网站（或 Web App）叫什么名字（app name），还包含哪些网页（URL），入口网址（首屏/首页，也就是 start_url）是什么。

Web App Manifest 就是为了解决这个问题、填补这方面的缺失。在没有这个文件的情况下，OS/浏览器虽然可以支持「安装」功能，但安装得到的本质上只能是当前网页的快捷方式。这种快捷方式虽然可以尽可能做的跟 PWA 安装后的效果一样，但还是有区别的。比如无法确定名称，需要让你来自己重命名（PWA 的安装过程中是不允许重命名的）。

以上说的「技术层面」是指传统编程。用传统方式写出来的程序，需要像 Web App Manifest 这样的协议，才能获取到 app name、start_url、scope 这样的 Web App 元信息。

而人类自身（比如用户）是不需要这种协议的，可以从网页内容、其他信息来源，判断（包括猜测）出当前网页属于哪个网站，网站名字是什么（比如可以从无固定格式和规范的网页标题中，识别出网站名称）。

跟 LLM 的关系就在于这里，LLM 可以像人一样，为那些非 PWA、但仍然是全功能应用、需要高频次独立使用的网站，自动补充 Manifest 信息，得到 PWA 的效果。

### Q：什么是「桌面平台」？国内的 PWA 少是因为生产力应用少吗？

「桌面平台」就是 desktop platform，指基于鼠标键盘交互、趋向固定位置使用的计算平台，也就是台式机、笔记本等设备。

海外互联网市场在桌面平台阶段经历了更长的发展时间，且用户消费能力更强，更容易拥有和习惯使用这类设备。

而桌面平台在我列举的那些业务领域、使用场景里是更具优势的，因此即使到了移动互联网时代，也有持久的生命力（只是硬件产品市场比较饱和、更新慢）。

海外在桌面平台上积累的应用生态也很庞大，带来网络效应。

因此对于很多需求，国内会选择用移动应用来解决，而海外仍然优先用桌面应用。

就好像游戏领域，国内相对缺乏PC游戏和主机游戏的积累（包括文化上的积累），手游占比更大。背后原因是一样的（比如对桌面设备的消费能力）。

还有其他影响因素，比如国内的 SaaS 行业很难做。

### Q：数量不足以说明问题，希望能看到用户方面的数据，打开手机看看首屏有几个 PWA 最说明问题。

第4点其实就是体现用户数据。

请问你只在手机上用 Twitter 吗？在电脑上（桌面端）难道不用吗？

如果在电脑上用，你难道只在浏览器里用？

如果你会安装桌面应用，那么如果你是 PC 用户，你给 Twitter 桌面应用贡献的数据就是 PWA 的用户数据，如果你是 Mac 用户，且还没有用 Twitter 的 PWA 版取代 iOS 版，建议你两个都安装下，比较下体验和效率。

其他例子也都是这样，比如 Tiktok、Messari（币圈主流工具）、Excalidraw （网红白板工具），都是桌面端只有 PWA。

如果你是 X Pro、YouTube 桌面端、Netflix 桌面端、现代版 Google Earth、Xbox 等云游戏平台的用户，那么你使用它们的数据都 100% 属于 PWA 的用户数据。

就算你自己不知道怎么安装，甚至不用桌面电脑，也可以推想一下海外用户有没有可能不知道怎么安装导致它们都不使用这些产品的桌面版（关于海外用户使用桌面设备的特点，见上一条 Q）。

其次，注意下第3点，PWA 的定位和用途到底是啥。

要注意给小程序带来大部分使用数据的用户场景，都是本来就不涉及 PWA 的。这意味着用户数据的基数就是不一样的。

而对于在移动端 PWA 和原生应用的竞争和对比，也就是你问的「手机首屏有几个 PWA」，这就反而要先问小程序的问题了：

国内用户手机首屏有几个小程序？

除了美团外卖等按需使用场景、三甲医院挂号这样的低频场景，到底有多少应用提供全功能的小程序版？

对于这其中同时提供小程序版和原生版的产品，有多少国内用户选择前者替代后者？

因为我纠正的错误观念是拿 PWA 和小程序比较得到的，所以如果在某个方面，小程序本身就没做的很好，那么 PWA 即使做的不好，也不影响我的论点。
