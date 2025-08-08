ssh config
==========

- `Host`：ssh 要連的代號名稱。
- `Hostname`：IP 或 Domain Name。
- `Port`：要連進去的 Port 號，ssh 沒改的話，預設 Port 號是 `22`。
- `User`：使用者名稱。
- `identityfile`：ssh key（絕對位置）。

```
# ----------------------------------------- #
# [STG] Service A
Host             service-a
Hostname         10.10.0.1
Port             22
User             askie_lin
identityfile     ~/.ssh/opsworks
```
