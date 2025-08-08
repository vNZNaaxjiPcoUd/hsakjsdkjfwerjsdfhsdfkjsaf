# 透過 Gmail SMTP 伺服器傳送電子郵件

如果您是透過安全資料傳輸層 (SSL) 或傳輸層安全標準 (TLS) 進行連線，可以使用 smtp.gmail.com 做為 SMTP 伺服器，將郵件傳送給貴機構內外的所有使用者。採用這種設定方式時，您必須在設定時透過 Gmail 或 Google Workspace 帳戶和密碼進行驗證。裝置會在每次嘗試傳送電子郵件時使用這些憑證。

### 注意事項

使用 Gmail SMTP 伺服器時：

- 傳送上限為每天 2,000 封郵件。進一步瞭解「[電子郵件傳送限制](https://support.google.com/a/answer/166852)」。
- 垃圾郵件篩選器可能會拒絕或篩選可疑郵件。
- SMTP 服務的完整網域名稱為 smtp.gmail.com。
- 設定選項包括：
  - 通訊埠 25、465 或 587
  - [SSL 和 TLS 通訊協定](https://support.google.com/a/answer/100181)
  - 動態 IP 位址

### 設定步驟

1. 在裝置或應用程式中輸入 **smtp.gmail.com** 做為伺服器位址。
2. 在「通訊埠」部分，輸入下列其中一個數字：
   - 在「SSL」部分輸入 **465**。
   - 在「TLS」部分輸入 **587**。
3. 輸入完整的 Google Workspace 電子郵件地址 (例如：<您的名稱>@gmail.com) 和[密碼](https://v.jwint.net/s/zzz240709222640.html)進行驗證。請務必先登入帳戶，再使用裝置或應用程式。
   - [取得密碼的方式](https://v.jwint.net/s/zzz240709222640.html), 在自己的帳號先完成2FA設定，再由此網頁取得密碼。

-----------------------------------------------------------------------------------

# 使用設有限制的 Gmail SMTP 伺服器傳送電子郵件

這個選項可讓貴機構僅向 Gmail 或 Google Workspace 使用者傳送郵件。這個方法不需要驗證。

如果您的裝置或應用程式不支援安全資料傳輸層 (SSL)，您就必須使用設有限制的 SMTP 伺服器 **aspmx.l.google.com**。

### 注意事項

使用設有限制的 Gmail SMTP 伺服器時：

- 驗證裝置或應用程式的 IP 位址。
- Google Workspace 有個別使用者限制。
- 垃圾郵件篩選器可能會拒絕或篩選可疑郵件。
- SMTP 服務的完整網域名稱為 aspmx.l.google.com。
- 不需要 TLS 和驗證機制。
- 設定選項包括：
  - 通訊埠 25
  - 動態 IP 位址

### 設定步驟

1. 將您的裝置或應用程式連線至設有限制的 Gmail SMTP 伺服器：
   1. 在伺服器位址欄位中輸入 **aspmx.l.google.com**。
   2. 在通訊埠中輸入 **25**。
2. 在 Google 管理控制台中，按照「[將 IP 位址加入 Gmail 的許可清單](https://support.google.com/a/answer/60751)」一文中的步驟，將裝置或應用程式 IP 位址加入許可清單。
3. 為您的網域設定 SPF。請確認 SPF 記錄包含傳送您網域郵件的裝置或應用程式的 IP 位址或網域，以免來自這類裝置的郵件遭到拒絕。SPF 記錄必須參照您網域中的所有寄件者。詳情請參閱「[SPF 記錄：Google Workspace 和其他寄件者](https://support.google.com/a/answer/10685031#more-senders)」。
