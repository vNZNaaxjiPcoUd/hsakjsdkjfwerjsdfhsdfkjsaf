### 還在學 Kubernetes 系列

在這旅程中，我不僅是引領你們的導遊，也是學習者。 過去，我因工作需要和視野所限，主要設計並構建基於 VM（如 EC2）的 GitOps 部署方案、監控機制和自動化流程。雖然這些解決方案在當時已經足夠，但業界的變化早已悄然發生。

當我將目光投向外部時，發現 Kubernetes 已經成為業界的主流。我不禁驚訝，並對 Kubernetes 究竟擁有何種魔力，以及它解決了哪些問題產生了強烈的好奇心。

於是，我全身心投入其中。

我如饑似渴地學習 Kubernetes 的一切，並整理出數十篇筆記。最終，我順利考取了 [CKA 證照](https://www.credly.com/badges/a90a989d-4443-46fd-b95c-8177a0c3f6b6/public_url)。

然而，僅僅知道如何操作還不夠，我深信，理解「為什麼」要這麼做同樣重要。而教導他人，是我認為最好的學習方式，這也正是我參與此次比賽的原因。

此次參賽的文章改編自我的學習筆記，或者可以說，我又重新整理了一次筆記。

為了將一些概念完整地傳達給大家，並用實作來驗證，我投入了大量的精力和時間。最終的成果，將在接下來的時間裡與大家分享。

最後，請允許我做個簡單的自我介紹：

我擁有近10年的 Backend、DevOps 和 SRE 工作經驗，擅長利用 AWS 雲端服務和各類開源技術設計商業邏輯架構。我擁有從 0 到 1 將地端產品成功遷移至雲端的實戰經驗，並成功實現了 GitOps 和 DevOps 的最佳實踐。

[Vincent's Blog](https://www.vinny987.xyz/)

歡迎各位找我一同探討學習。

## 目錄

> **->你現在在這裡<-**

- [學 Kubernetes 的第一天 - 感言和目錄](https://ithelp.ithome.com.tw/articles/10345136)
- [學 Kubernetes 的第三十天 - 中場休息 + 完賽感言](https://ithelp.ithome.com.tw/articles/10367505)

### 概念篇：一個好的故事總有優秀的背景設定

- [學 Kubernetes 的第二天 - Kubernetes 的前世今生](https://ithelp.ithome.com.tw/articles/10351721)
- [學 Kubernetes 的第三天 - Kubernetes 元件](https://ithelp.ithome.com.tw/articles/10352555)

### 基礎篇：各位愛學習的同學請坐

- [學 Kubernetes 的第四天 - 建立 Kubernetes 叢集 - KinD](https://ithelp.ithome.com.tw/articles/10353252)
- [學 Kubernetes 的第五天 - Kubernetes 瑞士刀 - kubectl](https://ithelp.ithome.com.tw/articles/10354022)
- [學 Kubernetes 的第六天 - 部署你的第一個應用程式 (1) - Application & Image](https://ithelp.ithome.com.tw/articles/10354676)
- [學 Kubernetes 的第七天 - 部署你的第一個應用程式 (2) - Pod & Service](https://ithelp.ithome.com.tw/articles/10355348)
- [學 Kubernetes 的第八天 - 部署你的第一個應用程式 (3) - Deployment 部署與退版](https://ithelp.ithome.com.tw/articles/10355959)
- [學 Kubernetes 的第九天 - Pod - 基礎概念與核心特性](https://ithelp.ithome.com.tw/articles/10356600)

### Networking 篇：K8s 版的電話交換機你喜歡嗎

- [學 Kubernetes 的第十天 - Networking - Service](https://ithelp.ithome.com.tw/articles/10357304)
- [學 Kubernetes 的第十一天 - Networking - DNS 條目](https://ithelp.ithome.com.tw/articles/10357932)
- [學 Kubernetes 的第十二天 - Networking - Ingress](https://ithelp.ithome.com.tw/articles/10358484)

### Storage 篇：儲存方式百百種，總有一款適合你

- [學 Kubernetes 的第十三天 - Storage - Volume](https://ithelp.ithome.com.tw/articles/10359109)
- [學 Kubernetes 的第十四天 - Storage - emptyDir & hostPath](https://ithelp.ithome.com.tw/articles/10359702)
- [學 Kubernetes 的第十五天 - Storage - ConfigMap](https://ithelp.ithome.com.tw/articles/10360270)
- [學 Kubernetes 的第十六天 - Storage - Secret](https://ithelp.ithome.com.tw/articles/10360842)
- [學 Kubernetes 的第十七天 - Storage - PV & PVC](https://ithelp.ithome.com.tw/articles/10361418)

### Workloads 篇：不會真以為 Deployment 可以承擔所有吧

- [學 Kubernetes 的第十八天 - Workloads - StatefulSet](https://ithelp.ithome.com.tw/articles/10361975)
- [學 Kubernetes 的第十九天 - Workloads - Job & CronJob](https://ithelp.ithome.com.tw/articles/10362541)

### Pod 延伸篇：它會比你想像中的還有料

- [學 Kubernetes 的第二十天 - Pod - Init Container](https://ithelp.ithome.com.tw/articles/10363089)
- [學 Kubernetes 的第二十一天 - Pod - Probe](https://ithelp.ithome.com.tw/articles/10363604)

### Deployment strategy 篇：優雅的把菜端到客人面前

- [學 Kubernetes 的第二十二天 - Deployment strategy - 介紹](https://ithelp.ithome.com.tw/articles/10364113)
- [學 Kubernetes 的第二十三天 - Deployment strategy - 實作 (1)](https://ithelp.ithome.com.tw/articles/10364603)
- [學 Kubernetes 的第二十四天 - Deployment strategy - 實作 (2)](https://ithelp.ithome.com.tw/articles/10365082)

### Scheduling 篇：決定 Pod 放在哪裡也是一門學問

- [學 Kubernetes 的第二十五天 - Scheduling - 概述](https://ithelp.ithome.com.tw/articles/10365099)
- [學 Kubernetes 的第二十六天 - Scheduling - 指派 Pod 到節點](https://ithelp.ithome.com.tw/articles/10365961)
- [學 Kubernetes 的第二十七天 - Scheduling - Taints 和 Tolerations](https://ithelp.ithome.com.tw/articles/10366348)

### Resource 篇：效能和成本的拉鋸戰

- [學 Kubernetes 的第二十八天 - Resource - Pod 層級的資源管理](https://ithelp.ithome.com.tw/articles/10366740)
- [學 Kubernetes 的第二十九天 - Resource - Namespace 層級的資源管理](https://ithelp.ithome.com.tw/articles/10367115)
- [學 Kubernetes 的第三十一天 - Resource - Metrics Server](https://ithelp.ithome.com.tw/articles/10367872)

### Autoscaling 篇：生意做的越大，人力也要自動跟上

- [學 Kubernetes 的第三十二天 - Autoscaling - 概論](https://ithelp.ithome.com.tw/articles/10368033)
- [學 Kubernetes 的第三十三天 - Autoscaling - 實作 HPA](https://ithelp.ithome.com.tw/articles/10368164)
- [學 Kubernetes 的第三十四天 - Autoscaling - 實作 VPA](https://ithelp.ithome.com.tw/articles/10368253)

### Security 篇：保護的不只是服務

- [學 Kubernetes 的第三十五天 - Security - 概論](https://ithelp.ithome.com.tw/articles/10368298)

---

## 環境介紹

我使用的實作環境和版本如下：

`kubectl` 、叢集版本資訊

```bash
kubectl version
---
Client Version: v1.29.2
Kustomize Version: v5.0.4-0.20230601165947-6ce0bf390ce3
Server Version: v1.30.0
```

`Docker` 版本資訊

```bash
docker version
---
Client:
 Version:           27.0.3
 API version:       1.46
 Go version:        go1.21.11
 Git commit:        7d4bcd8
 Built:             Sat Jun 29 00:01:25 2024
 OS/Arch:           linux/amd64
 Context:           default

Server: Docker Desktop
 Engine:
  Version:          27.0.3
  API version:      1.46 (minimum version 1.24)
  Go version:       go1.21.11
  Git commit:       662f78c
  Built:            Sat Jun 29 00:02:50 2024
  OS/Arch:          linux/amd64
  Experimental:     false
 containerd:
  Version:          1.7.18
  GitCommit:        ae71819c4f5e67bb4d5ae76a6b735f29cc25774e
 runc:
  Version:          1.7.18
  GitCommit:        v1.1.13-0-g58aa920
 docker-init:
  Version:          0.19.0
  GitCommit:        de40ad0
```

`KinD` 版本資訊

```bash
kind version
---
kind v0.23.0 go1.21.10 linux/amd64
```

`WSL2` 版本資訊

```bash
lsb_release -a
---
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 22.04.3 LTS
Release:        22.04
Codename:       jammy
```

`Golang` 版本資訊

```bash
go version
---
go version go1.18.1 linux/amd64
```

## 結語

比賽的第一天，我先預祝各位旅途順利。

我可以肯定地說，接下來的學習和實作之旅絕對不會一帆風順，因為我自己的 K8s 學習之路也充滿了挑戰和坎坷。但正是這些挑戰，使我們的學習更加充實和有意義。

如果在過程中遇到任何疑問或發現內容上的錯誤，歡迎大家踴躍提出來討論和糾正。我非常樂意接受指正，因為如我之前所說，我和大家一樣，都是這趟學習旅途上的同路人。
