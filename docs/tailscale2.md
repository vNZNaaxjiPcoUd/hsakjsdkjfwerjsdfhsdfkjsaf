# Tailscale設定教學

  

  

Tailscale是一款開源的虛擬區域網路（virtual LAN）軟體，可將多個裝置組成虛擬內網，互相連線，存取共享資源。

![](https://ivonblog.com/posts/setup-tailscale/images/Tailscale-Logo-Black.webp)

舉例來說，你可以用Tailscale連線到自架的Rustdesk遠端桌面，或是SSH遠端登入主機。過程只需要透過一組虛擬區域IP遠端連線，再也不需要port forwarding，將機器暴露到公網了。

Tailscale設定起來十分簡單。最殺的是，Tailscale有個叫「MagicDNS」的功能，讓您不需要打長長的數字IP，可以直接打網址連線到其他裝置！

## 1\. Tailscale安全性

Tailscale是基於WireGuaed技術開發的軟體。WireGuard的組件部份執行於user space。客戶端是開源軟體，採MIT授權釋出。伺服端則是閉源的軟體。

使用前需要到Tailscale公司的網站註冊一個帳號。Tailscale有免費版與付費版方案。免費版方案最多加入100個裝置，最多邀請3名帳號加入自己的網路。

你的使用者帳號會有自己的虛擬區網，稱之為「Tailnet」。你會將所有的裝置都加入進去，形成一個虛擬區網。原理圖如下：

![](https://ivonblog.com/posts/setup-tailscale/images/diagram.webp)

每個安裝Tailscale裝置在連線的時候，會先到Tailscale控制伺服器獲取公鑰，並得知有哪些裝置可以連線。網路傳輸流量預設是不會經過Tailscale公司的伺服器的。在這裡，Tailscale的控制伺服器僅用於[P2P hole punching](https://zh.wikipedia.org/zh-tw/UDP%E6%89%93%E6%B4%9E)，幫兩個裝置之間的連線「牽線」而已。若P2P hole punching失敗，則會改走Tailscle公司經營的relay伺服器，也就是DERP伺服器。要是網路流量走DERP伺服器，連線延遲會增加。

Tailscale兩部裝置之間的資料傳輸全程點對點加密，難以被第三方竊聽傳輸內容。

任何裝置要加入你的Tailscale網路，都必須經過你手動同意。否則其他人沒有加入網路，是看不到你的虛擬區域網路內的裝置的。

當然，所有裝置連線的時候還是要會經過Tailscale控制伺服器，這樣的話Tailscale公司便能知道你在使用他們的服務。

如果你若不信任Tailscale公司的控制伺服器，亦可用第三方開發的Headscale自己架設控制伺服器。參見：[自架Headscale控制伺服器](https://ivonblog.com/posts/setup-headscale)

## 2\. 安裝TaileScale客戶端

### Linux

1.  參考[官網](https://tailscale.com/download/linux)指示，使用指令稿安裝。它支援Ubuntu、Arch、Fedora系的發行版，它會自動幫你訂閱Tailscale的套件庫。

```bash
curl -fsSL https://tailscale.com/install.sh | sh
```

2.  安裝後設定開機自動啟用Tailscale服務

```bash
sudo systemctl enable --now tailscaled

# 檢查服務狀態
sudo systemctl status tailscaled
```

3.  將裝置加入Tailscale網路，點選終端機顯示的連結，到Tailscale網頁後台驗證（見下一段），並在後台按Approve同意加入。

```bash
sudo tailscale up
```

4.  如果啟用MagicDNS，Tailscale可能會覆寫`/etc/resolv.conf`導致Docker服務的DNS出問題，這時請參考[官方說明](https://tailscale.com/kb/1235/resolv-conf)，在Linux安裝`systemd-resolved`服務解決：

```bash
sudo apt install systemd-resolved

sudo systemctl enable --now systemd-resolved

sudo systemctl restart NetworkManager
```

5.  Linux版Tailscale目前還沒有桌面GUI，只能執行`sudo tailscale web`叫出簡陋的網頁界面。你可以加裝第三方開發的[KTailctl](https://flathub.org/apps/org.fkoehler.KTailctl)或[Trayscale](https://github.com/DeedleFake/trayscale)取得更好的使用體驗。
    
    ![](https://ivonblog.com/posts/setup-tailscale/images/trayscale-linux.webp)
    

### Windows

Tailscale支援Windows 10以上系統。

至[官網](https://tailscale.com/download/windows)下載exe安裝。

點選系統匣的Tailscale圖示，開啟Tailscale應用程式，登入帳號。

![](https://ivonblog.com/posts/setup-tailscale/images/windows.webp)

Tailscale服務會在Windows開機之後自動啟動。

### macOS

從[App Store](https://apps.apple.com/ca/app/tailscale/id1475387142)下載安裝，開啟Tailscale應用程式，登入帳號。

### Android

請至[Google Play](https://play.google.com/store/apps/details?id=com.tailscale.ipn)下載。啟動之後會使用VPN連線。

### iOS

請至[App Store](https://apps.apple.com/us/app/tailscale/id1470499037)下載。啟動之後會使用VPN連線。

## 3\. 將裝置加入Tailscale網路

1.  至[官網](https://login.tailscale.com/admin)註冊帳號，使用Google帳號登入
    
2.  登入後Machines面板是空的，需要在裝置安裝Tailscale，將其加入網路（Tailscale安裝過程見上一節）。
    
    ![](https://ivonblog.com/posts/setup-tailscale/images/Screenshot_20230701_154627.webp)
    
3.  加入方法有二種，如果是您自己的裝置，那就在電腦或手機上的Tailscale客戶端登入帳號即可加入網路。另一種方法是邀請(invite)其他Tailscale帳號加入網路。
    
4.  裝置加入後還需要按Approve同意加入
    
    ![](https://ivonblog.com/posts/setup-tailscale/images/Screenshot_20230701_135837.webp)
    
5.  Tailscale免費版方案最多新增100個裝置。如下圖，每個裝置會分配到一個固定的虛擬區域IP (Addresses)，要互相連線就是打這些IP。僅限加入Tailscale網路的裝置才能解析這些網址。
    
    ![](https://ivonblog.com/posts/setup-tailscale/images/Screenshot_20230701_154207.webp)
    
6.  如果覺得記虛擬區域IP太麻煩，你可以到Tailscale的網頁後台 → DNS，啟用Magic DNS，給每個裝置設定一組簡單好記的「網址」。
    
    ![](https://ivonblog.com/posts/setup-tailscale/images/Screenshot_20230701_154411.webp)
    

## 4\. Tailscale實際使用例

當裝置都加入Tailscale網路後，就彷彿處於一個區域網路，可以嘗試互相連線了。每個裝置會分配到一個固定的虛擬區域IP (Addresses)，要互相連線就是打這些IP。

譬如你要SSH到遠端Linux電腦，輸入`ssh user@<電腦的Tailscale虛擬區域IP>`即可連線。

有啟用MagicDNS的情況下，就可以不用IP，改用裝置的網址來連線了。例如Linux電腦的hostname在Tailscale面板顯示為`archlinux-pc`，那麼SSH進去的指令就變成：`ssh user@archlinux-pc`

關於其他用途，Tailscale可以用在存取自架服務上，請參閱本站[自架雲端服務的實例](https://ivonblog.com/categories/self-hosting%E8%87%AA%E6%9E%B6/)

如果要讓其他用戶加入你的網路，請使用[帳號邀請](https://tailscale.com/kb/1271/invite-any-user)功能。設定好權限之後，別人就可以存取你的Tailscale裝置。

## 5\. 改善Tailscale延遲

Tailscale會嘗試各種方式連線，盡量使用P2P連線。但若P2P失敗就會走relay伺服器，導致延遲變高。遇到這種狀況就得嘗試開放通訊埠讓裝置之間做P2P連線。

1.  使用`tailscale status`指令查看兩個節點是否有P2P成功，出現relay的話就是走官方伺服器，延遲較高。

```bash
100.705  linux             linux   active; -
100.125  windows          windows  active; relay
```

2.  Tailscale使用的通訊埠是`41641/udp`，在連線的二個裝置用指令開放防火牆：

```bash
sudo ufw allow 41641/udp
```

3.  再用`tailscale status`指令確認是否有顯示direct，表示P2P成功

```bash
100.705  linux             linux   active; -
100.125  windows          windows  active; direct
```

4.  若是走relay伺服器的話，使用這個指令查看與各個節點的延遲：

```bash
sudo tailscale netcheck
```

5.  如果你不能用P2P，得依賴relay伺服器，又需要低延遲的話，那麼最好的方式就是自己租一個VPS，自架一個Headscale伺服器來處理連線。

## 延伸閱讀

*   [Tailscale官方說明文件](https://tailscale.com/kb/1151/what-is-tailscale/)