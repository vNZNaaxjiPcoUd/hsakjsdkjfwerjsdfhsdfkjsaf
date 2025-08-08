# 卷積神經網路 CNN

# 卷積神經網路[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=0&summary=/*%20top%20*/%20 "編輯首段")]


**卷積神經網路**（英語：convolutional neural network，[縮寫](https://zh.wikipedia.org/wiki/%E7%B8%AE%E5%AF%AB "縮寫")：**CNN**）是一種[前饋神經網路](https://zh.wikipedia.org/wiki/%E5%89%8D%E9%A6%88%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "前饋神經網路")，它的類神經元可以回應一部分覆蓋範圍內的周圍單元，[[1]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-deeplearning-1)對於大型圖像處理有出色表現。

卷積神經網路由一個或多個卷積層和頂端的全連通層（對應經典的神經網路）組成，同時也包括關聯權重和池化層（pooling layer）。這一結構使得卷積神經網路能夠利用輸入資料的二維結構。與其他深度學習結構相比，卷積神經網路在圖像和[語音辨識](https://zh.wikipedia.org/wiki/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB "語音辨識")方面能夠給出更好的結果。這一模型也可以使用[反向傳播演算法](https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD%E7%AE%97%E6%B3%95 "反向傳播演算法")進行訓練。相比較其他深度、前饋神經網路，卷積神經網路需要考量的參數更少，使之成為一種頗具吸引力的深度學習結構[[2]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-STANCNN-2)。

卷積神經網路的靈感來自於動物視覺皮層組織的神經連接方式。單個神經元只對有限區域內的刺激作出反應，不同神經元的感知區域相互重疊從而覆蓋整個視野。

## 定義[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=1 "編輯章節：定義")]

| [![[icon]](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wiki_letter_w_cropped.svg/20px-Wiki_letter_w_cropped.svg.png)](https://zh.wikipedia.org/wiki/File:Wiki_letter_w_cropped.svg) | 此章節需要[**擴充**](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit)。 *(2020年3月15日)* |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |

卷積神經網路是類神經網路的一種特殊類型，在其至少一層中使用稱為卷積的數學運算代替通用矩陣乘法。它們專門設計用於處理像素資料，並用於圖像辨識和處理。

## 概覽[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=2 "編輯章節：概覽")]

| [![[icon]](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wiki_letter_w_cropped.svg/20px-Wiki_letter_w_cropped.svg.png)](https://zh.wikipedia.org/wiki/File:Wiki_letter_w_cropped.svg) | 此章節**尚無任何內容，需要[擴充](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=)**。 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |

## 發展[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=3 "編輯章節：發展")]

| [![[icon]](https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Wiki_letter_w_cropped.svg/20px-Wiki_letter_w_cropped.svg.png)](https://zh.wikipedia.org/wiki/File:Wiki_letter_w_cropped.svg) | 此章節需要[**擴充**](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit)。 *(2020年10月5日)* |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |

CNN是根據[生物](https://zh.wikipedia.org/wiki/%E7%94%9F%E7%89%A9 "生物")的視覺處理過程來進行設計的。[[來源請求]](https://zh.wikipedia.org/wiki/Wikipedia:%E5%88%97%E6%98%8E%E6%9D%A5%E6%BA%90 "Wikipedia:列明來源")

### 大腦中視覺皮層接收視覺訊號的過程[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=4 "編輯章節：大腦中視覺皮層接收視覺訊號的過程")]

[Hubel](https://zh.wikipedia.org/w/index.php?title=Hubel&action=edit&redlink=1 "Hubel（頁面不存在）")和[Wiesel](https://zh.wikipedia.org/w/index.php?title=Wiesel&action=edit&redlink=1 "Wiesel（頁面不存在）")在20世紀50年代到20世紀60年代的研究發現，貓和猴子的視覺皮層中包含著能分別對某一小塊視覺區域進行回應的神經元。當眼睛不動的時候，在一定區域內的視覺刺激能使單個神經元興奮，那這個區域就稱為這個神經元的[感受野](https://zh.wikipedia.org/wiki/%E6%84%9F%E5%8F%97%E9%87%8E "感受野")。相鄰的細胞具有相似且重疊的感受野。為了形成一張完整的視覺圖像，整個視覺皮層上的神經元的感受野的大小和位置呈現系統性的變化。左腦和右腦分別對應其對側的視野。[[來源請求]](https://zh.wikipedia.org/wiki/Wikipedia:%E5%88%97%E6%98%8E%E6%9D%A5%E6%BA%90 "Wikipedia:列明來源") 他們在其1968年的一篇論文中確定了大腦中有兩種不同的基本視覺細胞：

- 簡單細胞
- 複雜細胞

Hubel和Wiesel還提出了這兩種細胞用於圖型識別任務的級聯模型。

## 結構[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=5 "編輯章節：結構")]

卷積神經網路由輸入層、隱藏層和輸出層組成。

### 卷積層[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=6 "編輯章節：卷積層")]

卷積層可以產生一組平行的特徵圖（feature map），它通過在輸入圖像上滑動不同的卷積核並執行一定的運算而組成。此外，在每一個滑動的位置上，卷積核與輸入圖像之間會執行一個元素對應乘積並求和的運算以將感受野內的資訊投影到特徵圖中的一個元素。這一滑動的過程可稱爲步幅 Z_s，步幅 Z_s 是控制輸出特徵圖尺寸的一個因素。卷積核的尺寸要比輸入圖像小得多，且重疊或平行地作用於輸入圖像中，一張特徵圖中的所有元素都是通過一個卷積核計算得出的，也即一張特徵圖共享了相同的權重和偏置項。

### 線性整流層[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=7 "編輯章節：線性整流層")]

線性整流層（Rectified Linear Units layer, ReLU layer）使用[線性整流](https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E6%95%B4%E6%B5%81%E5%87%BD%E6%95%B0 "線性整流函式")（Rectified Linear Units, ReLU）![{\displaystyle f(x)=\max(0,x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/5fa5d3598751091eed580bd9dca873f496a2d0ac)作為這一層神經的激勵函式（Activation function）。它可以增強判定函式和整個神經網路的非線性特性，而本身並不會改變卷積層。

事實上，其他的一些函式也可以用於增強網路的非線性特性，如[雙曲正切函式](https://zh.wikipedia.org/wiki/%E5%8F%8C%E6%9B%B2%E6%AD%A3%E5%88%87%E5%87%BD%E6%95%B0 "雙曲正切函式") ![{\displaystyle f(x)=\tanh(x)}](https://wikimedia.org/api/rest_v1/media/math/render/svg/1a319ec32dbb0c625fa4802baf9252d1f00854e2), ![{\displaystyle f(x)=|\tanh(x)|}](https://wikimedia.org/api/rest_v1/media/math/render/svg/d1eb71e39ce9687851b7ec55bb8f54f42df2a828)，或者[Sigmoid函式](https://zh.wikipedia.org/wiki/S%E5%87%BD%E6%95%B0 "S函式")![{\displaystyle f(x)=(1+e^{-x})^{-1}}](https://wikimedia.org/api/rest_v1/media/math/render/svg/6f6e8c1bc5646e39b558bc46f997c5db23471af5)。相比其它函式來說，ReLU函式更受青睞，這是因為它可以將神經網路的訓練速度提升數倍[[3]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-3)，而並不會對模型的泛化準確度造成顯著影響。

### 池化層[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=8 "編輯章節：池化層")]

[![](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Max_pooling.png/314px-Max_pooling.png)](https://zh.wikipedia.org/wiki/File:Max_pooling.png)

步幅為2，池化窗口為![{\displaystyle 2\times 2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f8a0e3400ffb97d67c00267ed50cddfe824cbe80)的最大池化層

池化（Pooling）是卷積神經網路中另一個重要的概念，它實際上是一種非線性形式的降採樣。有多種不同形式的非線性池化函式，而其中「最大池化（Max pooling）」是最為常見的。它是將輸入的圖像劃分為若干個矩形區域，對每個子區域輸出最大值。

直覺上，這種機制能夠有效地原因在於，一個特徵的精確位置遠不及它相對於其他特徵的粗略位置重要。池化層會不斷地減小資料的空間大小，因此參數的數量和計算量也會下降，這在一定程度上也控制了[過擬合](https://zh.wikipedia.org/wiki/%E8%BF%87%E6%8B%9F%E5%90%88 "過擬合")。通常來說，CNN的網路結構中的卷積層之間都會周期性地插入池化層。池化操作提供了另一種形式的平移不變性。因為卷積核是一種特徵發現器，我們通過卷積層可以很容易地發現圖像中的各種邊緣。但是卷積層發現的特徵往往過於精確，我們即使高速連拍拍攝一個物體，相片中的物體的邊緣像素位置也不大可能完全一致，通過池化層我們可以降低卷積層對邊緣的敏感性。

池化層每次在一個池化窗口（depth slice）上計算輸出，然後根據步幅移動池化窗口。下圖是目前最常用的池化層，步幅為2，池化窗口為![{\displaystyle 2\times 2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f8a0e3400ffb97d67c00267ed50cddfe824cbe80)的二維最大池化層。每隔2個元素從圖像劃分出![{\displaystyle 2\times 2}](https://wikimedia.org/api/rest_v1/media/math/render/svg/f8a0e3400ffb97d67c00267ed50cddfe824cbe80)的區塊，然後對每個區塊中的4個數取最大值。這將會減少75%的資料量。

![{\displaystyle f_{X,Y}(S)=\max _{a,b=0}^{1}S_{2X+a,2Y+b}.}](https://wikimedia.org/api/rest_v1/media/math/render/svg/fb35d034c37054cf3920f0dc52236a636dd8f902)

除了最大池化之外，池化層也可以使用其他池化函式，例如「平均池化」甚至「[L2-範數](https://zh.wikipedia.org/wiki/Lp%E7%A9%BA%E9%97%B4#.E9.95.BF.E5.BA.A6.E3.80.81.E8.B7.9D.E7.A6.BB.E4.B8.8E.E8.8C.83.E6.95.B0 "Lp空間")池化」等。過去，平均池化的使用曾經較為廣泛，但是最近由於最大池化在實踐中的表現更好，平均池化已經不太常用。

由於池化層過快地減少了資料的大小，目前文獻中的趨勢是使用較小的池化濾鏡，[[4]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-4)甚至不再使用池化層。[[5]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-5)

RoI池化(Region of Interest)是最大池化的變體，其中輸出大小是固定的，輸入矩形是一個參數。[[6]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-6)

池化層是基於 Fast-RCNN [[7]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-rcnn-7)架構的卷積神經網路的一個重要組成部分。

### 完全連接層[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=9 "編輯章節：完全連接層")]

最後，在經過幾個卷積和最大池化層之後，神經網路中的進階推理通過完全連接層來完成。就和常規的非卷積類神經網路中一樣，完全連接層中的神經元與前一層中的所有啟用都有聯絡。因此，它們的啟用可以作為[仿射變換](https://zh.wikipedia.org/wiki/%E4%BB%BF%E5%B0%84%E5%8F%98%E6%8D%A2 "仿射變換")來計算，也就是先乘以一個矩陣然後加上一個偏差(bias)偏移量(向量加上一個固定的或者學習來的偏差量)。

## 應用[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=10 "編輯章節：應用")]

### 影像辨識[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=11 "編輯章節：影像辨識")]

卷積神經網路通常在影像辨識系統中使用。

### 視訊分析[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=12 "編輯章節：視訊分析")]

相比影像辨識問題，視訊分析要難許多。CNN也常被用於這類問題。

### 自然語言處理[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=13 "編輯章節：自然語言處理")]

卷積神經網路也常被用於[自然語言處理](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%84%B6%E8%AF%AD%E8%A8%80%E5%A4%84%E7%90%86 "自然語言處理")。 CNN的模型被證明可以有效的處理各種自然語言處理的問題，如語意分析[[8]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-8)、搜尋結果提取[[9]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-9)、句子建模[[10]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-10) 、分類[[11]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-11)、預測[[12]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-12)、和其他傳統的NLP任務[[13]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-13) 等。

### 藥物發現[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=14 "編輯章節：藥物發現")]

卷積神經網路已在藥物發現中使用。卷積神經網路被用來預測的分子與蛋白質之間的相互作用，以此來尋找靶向位點，尋找出更可能安全和有效的潛在治療方法。

### 圍棋[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=15 "編輯章節：圍棋")]

參見：[AlphaGo李世乭五番棋](https://zh.wikipedia.org/wiki/AlphaGo%E6%9D%8E%E4%B8%96%E4%B9%AD%E4%BA%94%E7%95%AA%E6%A3%8B "AlphaGo李世乭五番棋")

卷積神經網路在電腦圍棋領域也被使用。2016年3月，[AlphaGo](https://zh.wikipedia.org/wiki/AlphaGo "AlphaGo")對戰[李世乭](https://zh.wikipedia.org/wiki/%E6%9D%8E%E4%B8%96%E4%B9%AD "李世乭")的比賽，展示了深度學習在圍棋領域的重大突破。

## 微調（fine-tuning）[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=16 "編輯章節：微調（fine-tuning）")]

卷積神經網路（例如Alexnet、VGG網路）在網路的最後通常為[softmax](https://zh.wikipedia.org/wiki/Softmax "Softmax")分類器。微調一般用來調整softmax分類器的分類數。例如原網路可以分類出2種圖像，需要增加1個新的分類從而使網路可以分類出3種圖像。微調（fine-tuning）可以留用之前訓練的大多數參數，從而達到快速訓練收斂的效果。例如保留各個卷積層，只重構卷積層後的全連接層與softmax層即可。

## 經典模型[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=17 "編輯章節：經典模型")]

- [LeNet](https://zh.wikipedia.org/w/index.php?title=LeNet&action=edit&redlink=1 "LeNet（頁面不存在）")

- [AlexNet](https://zh.wikipedia.org/wiki/AlexNet "AlexNet")

- [VGG](https://zh.wikipedia.org/w/index.php?title=VGG&action=edit&redlink=1 "VGG（頁面不存在）")

- [GoogLeNet](https://zh.wikipedia.org/w/index.php?title=GoogLeNet&action=edit&redlink=1 "GoogLeNet（頁面不存在）")

- [ResNet](https://zh.wikipedia.org/wiki/ResNet "ResNet")

- [DenseNet](https://zh.wikipedia.org/w/index.php?title=DenseNet&action=edit&redlink=1 "DenseNet（頁面不存在）")

## 可用包[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=18 "編輯章節：可用包")]

- [roNNie](https://www.ronnie.ai/): 是一個簡易入門級框架,使用Tensorflow 計算層.可於python下載 pip3 ronnie
- [Caffe](https://zh.wikipedia.org/wiki/Caffe "Caffe"): Caffe包含了CNN使用最廣泛的庫。它由伯克利視覺和學習中心（BVLC）研發，擁有比一般實現更好的結構和更快的速度。同時支援[CPU](https://zh.wikipedia.org/wiki/CPU "CPU")和[GPU](https://zh.wikipedia.org/wiki/GPU "GPU")計算，底層由[C++](https://zh.wikipedia.org/wiki/C%2B%2B "C++")實現，並封裝了Python和[MATLAB](https://zh.wikipedia.org/wiki/MATLAB "MATLAB")的介面。
- Torch7（www.torch.ch）
- OverFeat
- Cuda-convnet
- MatConvnet
- [Theano](https://zh.wikipedia.org/wiki/Theano "Theano")：用[Python](https://zh.wikipedia.org/wiki/Python "Python")實現的神經網路包[[14]](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_note-14)
- [TensorFlow](https://zh.wikipedia.org/wiki/TensorFlow "TensorFlow")
- Paddlepaddle([www.paddlepaddle.org](http://www.paddlepaddle.org/) （[頁面存檔備份](https://web.archive.org/web/20201208055750/http://www.paddlepaddle.org/)，存於[網際網路檔案館](https://zh.wikipedia.org/wiki/%E4%BA%92%E8%81%94%E7%BD%91%E6%A1%A3%E6%A1%88%E9%A6%86 "網際網路檔案館")）)
- [Keras](https://zh.wikipedia.org/wiki/Keras "Keras")
- [PyTorch](https://zh.wikipedia.org/wiki/PyTorch "PyTorch")

## 參考[[編輯](https://zh.wikipedia.org/w/index.php?title=%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&section=19 "編輯章節：參考")]

1. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-deeplearning_1-0 "移至")** [Convolutional Neural Networks (LeNet) - DeepLearning 0.1 documentation](http://deeplearning.net/tutorial/lenet.html). DeepLearning 0.1. LISA Lab. [31 August 2013]. （原始內容[存檔](https://web.archive.org/web/20171228091645/http://deeplearning.net/tutorial/lenet.html)於2017-12-28）.
2. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-STANCNN_2-0 "移至")** [Convolutional Neural Network](http://ufldl.stanford.edu/tutorial/supervised/ConvolutionalNeuralNetwork/). [2014-09-16]. （原始內容[存檔](https://web.archive.org/web/20201029000436/http://ufldl.stanford.edu/tutorial/supervised/ConvolutionalNeuralNetwork/)於2020-10-29）.
3. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-3 "移至")** Krizhevsky, A.; Sutskever, I.; Hinton, G. E. [Imagenet classification with deep convolutional neural networks](https://web.archive.org/web/20150216025624/http://papers.nips.cc/paper/4824-imagenet). Advances in Neural Information Processing Systems. 2012, **1**: 1097–1105 [2016-11-20]. （[原始內容](http://papers.nips.cc/paper/4824-imagenet)存檔於2015-02-16）.
4. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-4 "移至")** Graham, Benjamin. Fractional Max-Pooling. 2014-12-18. [arXiv:1412.6071](https://arxiv.org/abs/1412.6071) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.CV](https://arxiv.org/archive/cs.CV)].
5. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-5 "移至")** Springenberg, Jost Tobias; Dosovitskiy, Alexey; Brox, Thomas; Riedmiller, Martin. Striving for Simplicity: The All Convolutional Net. 2014-12-21. [arXiv:1412.6806](https://arxiv.org/abs/1412.6806) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.LG](https://arxiv.org/archive/cs.LG)].
6. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-6 "移至")** Grel, Tomasz. [Region of interest pooling explained](https://web.archive.org/web/20170602070519/https://deepsense.io/region-of-interest-pooling-explained/). deepsense.io. 2017-02-28. （[原始內容](https://deepsense.io/region-of-interest-pooling-explained/)存檔於2017-06-02） （英語）.
7. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-rcnn_7-0 "移至")** Girshick, Ross. Fast R-CNN. 2015-09-27. [arXiv:1504.08083](https://arxiv.org/abs/1504.08083) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.CV](https://arxiv.org/archive/cs.CV)].
8. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-8 "移至")** Grefenstette, Edward; Blunsom, Phil; de Freitas, Nando; Hermann, Karl Moritz. A Deep Architecture for Semantic Parsing. 2014-04-29. [arXiv:1404.7296](https://arxiv.org/abs/1404.7296) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.CL](https://arxiv.org/archive/cs.CL)].
9. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-9 "移至")** [Learning Semantic Representations Using Convolutional Neural Networks for Web Search – Microsoft Research](http://research.microsoft.com/apps/pubs/default.aspx?id=214617). research.microsoft.com. [2015-12-17]. （原始內容[存檔](https://web.archive.org/web/20160618155538/http://research.microsoft.com/apps/pubs/default.aspx?id=214617)於2016-06-18）.
10. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-10 "移至")** Kalchbrenner, Nal; Grefenstette, Edward; Blunsom, Phil. A Convolutional Neural Network for Modelling Sentences. 2014-04-08. [arXiv:1404.2188](https://arxiv.org/abs/1404.2188) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.CL](https://arxiv.org/archive/cs.CL)].
11. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-11 "移至")** Kim, Yoon. Convolutional Neural Networks for Sentence Classification. 2014-08-25. [arXiv:1408.5882](https://arxiv.org/abs/1408.5882) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.CL](https://arxiv.org/archive/cs.CL)].
12. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-12 "移至")** Collobert, Ronan, and Jason Weston. "A unified architecture for natural language processing: Deep neural networks with multitask learning."Proceedings of the 25th international conference on Machine learning. ACM, 2008.
13. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-13 "移至")** Collobert, Ronan; Weston, Jason; Bottou, Leon; Karlen, Michael; Kavukcuoglu, Koray; Kuksa, Pavel. Natural Language Processing (almost) from Scratch. 2011-03-02. [arXiv:1103.0398](https://arxiv.org/abs/1103.0398) ![可免費查閱](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Lock-green.svg/9px-Lock-green.svg.png)  [[cs.LG](https://arxiv.org/archive/cs.LG)].
14. **[^](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#cite_ref-14 "移至")** [深度网络：Theano项目主页。](https://web.archive.org/web/20201108233358/http://www.deeplearning.net/software/theano/). [2015-04-24]. （[原始內容](http://deeplearning.net/software/theano/)存檔於2020-11-08）.

[[隱藏](https://zh.wikipedia.org/zh-tw/%E5%8D%B7%E7%A7%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C#)]

- [閱](https://zh.wikipedia.org/wiki/Template:Differentiable_computing "Template:Differentiable computing")
- [論](https://zh.wikipedia.org/w/index.php?title=Template_talk:Differentiable_computing&action=edit&redlink=1 "Template talk:Differentiable computing（頁面不存在）")
- [編](https://zh.wikipedia.org/w/index.php?title=Template:Differentiable_computing&action=edit)

可微分計算

[概論](https://zh.wikipedia.org/wiki/%E5%8F%AF%E5%BE%AE%E5%87%BD%E6%95%B0 "可微函式")

- [可微分編程](https://zh.wikipedia.org/wiki/%E5%8F%AF%E5%BE%AE%E5%88%86%E7%BC%96%E7%A8%8B "可微分編程")
- [自動微分](https://zh.wikipedia.org/wiki/%E8%87%AA%E5%8B%95%E5%BE%AE%E5%88%86 "自動微分")
- [張量微積分](https://zh.wikipedia.org/wiki/%E5%BC%B5%E9%87%8F%E5%BE%AE%E7%A9%8D%E5%88%86)
- [資訊幾何](https://zh.wikipedia.org/wiki/%E4%BF%A1%E6%81%AF%E5%87%A0%E4%BD%95 "資訊幾何")
- [統計流形](https://zh.wikipedia.org/wiki/%E7%BB%9F%E8%AE%A1%E6%B5%81%E5%BD%A2 "統計流形")
- [神經形態工程](https://zh.wikipedia.org/w/index.php?title=%E7%A5%9E%E7%BB%8F%E5%BD%A2%E6%80%81%E5%B7%A5%E7%A8%8B&action=edit&redlink=1)
- [圖型識別](https://zh.wikipedia.org/wiki/%E6%A8%A1%E5%BC%8F%E8%AF%86%E5%88%AB "圖型識別")
- [運算學習理論](https://zh.wikipedia.org/w/index.php?title=%E8%BF%90%E7%AE%97%E5%AD%A6%E4%B9%A0%E7%90%86%E8%AE%BA&action=edit&redlink=1)
- [歸納偏置](https://zh.wikipedia.org/wiki/%E5%BD%92%E7%BA%B3%E5%81%8F%E7%BD%AE "歸納偏置")

概念

- [梯度下降](https://zh.wikipedia.org/wiki/%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D%E6%B3%95 "梯度下降法") 
  - [SGD](https://zh.wikipedia.org/w/index.php?title=%E9%9A%8F%E6%9C%BA%E6%A2%AF%E5%BA%A6%E4%B8%8B%E9%99%8D&action=edit&redlink=1)
- [聚類](https://zh.wikipedia.org/wiki/%E8%81%9A%E7%B1%BB%E5%88%86%E6%9E%90 "聚類分析")
- [回歸](https://zh.wikipedia.org/wiki/%E8%BF%B4%E6%AD%B8%E5%88%86%E6%9E%90 "迴歸分析") 
  - [過適](https://zh.wikipedia.org/wiki/%E9%81%8E%E9%81%A9 "過適")
- [幻覺](https://zh.wikipedia.org/wiki/%E5%B9%BB%E8%A7%89_(%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD) "幻覺 (人工智慧)")
- [對抗](https://zh.wikipedia.org/w/index.php?title=%E5%AF%B9%E6%8A%97%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0&action=edit&redlink=1)
- [注意力](https://zh.wikipedia.org/wiki/%E6%B3%A8%E6%84%8F%E5%8A%9B%E6%9C%BA%E5%88%B6 "注意力機制")
- [卷積](https://zh.wikipedia.org/wiki/%E5%8D%B7%E7%A7%AF "卷積")
- [損失函式](https://zh.wikipedia.org/wiki/%E5%88%86%E9%A1%9E%E5%95%8F%E9%A1%8C%E4%B9%8B%E6%90%8D%E5%A4%B1%E5%87%BD%E6%95%B8 "分類問題之損失函式")
- [反向傳播](https://zh.wikipedia.org/wiki/%E5%8F%8D%E5%90%91%E4%BC%A0%E6%92%AD%E7%AE%97%E6%B3%95 "反向傳播演算法")
- [激勵函數](https://zh.wikipedia.org/wiki/%E6%BF%80%E6%B4%BB%E5%87%BD%E6%95%B0 "啟用功能") 
  - [softmax](https://zh.wikipedia.org/wiki/Softmax%E5%87%BD%E6%95%B0 "Softmax函式")
  - [sigmoid](https://zh.wikipedia.org/wiki/S%E5%9E%8B%E5%87%BD%E6%95%B0 "S型函式")
  - [ReLU](https://zh.wikipedia.org/wiki/%E7%BA%BF%E6%80%A7%E6%95%B4%E6%B5%81%E5%87%BD%E6%95%B0 "線性整流函式")
- [正則化](https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E5%8C%96_(%E6%95%B0%E5%AD%A6) "正則化 (數學)")
- [資料集](https://zh.wikipedia.org/wiki/%E8%AE%AD%E7%BB%83%E9%9B%86%E3%80%81%E9%AA%8C%E8%AF%81%E9%9B%86%E5%92%8C%E6%B5%8B%E8%AF%95%E9%9B%86 "訓練集、驗證集和測試集")
- [擴散](https://zh.wikipedia.org/w/index.php?title=%E6%89%A9%E6%95%A3%E8%BF%87%E7%A8%8B&action=edit&redlink=1)
- [自回歸](https://zh.wikipedia.org/wiki/%E8%87%AA%E6%88%91%E8%BF%B4%E6%AD%B8%E6%A8%A1%E5%9E%8B "自我迴歸模型")

應用

- [機器學習](https://zh.wikipedia.org/wiki/%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0 "機器學習")
- [類神經網路](https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "類神經網路") 
  - [深度學習](https://zh.wikipedia.org/wiki/%E6%B7%B1%E5%BA%A6%E5%AD%A6%E4%B9%A0 "深度學習")
- [科學計算](https://zh.wikipedia.org/wiki/%E8%BF%90%E7%AE%97%E7%A7%91%E5%AD%A6 "運算科學")
- [人工智慧](https://zh.wikipedia.org/wiki/%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD "人工智慧")
- [語言模型](https://zh.wikipedia.org/wiki/%E8%AA%9E%E8%A8%80%E6%A8%A1%E5%9E%8B "語言模型") 
  - [大型語言模型](https://zh.wikipedia.org/wiki/%E5%A4%A7%E5%9E%8B%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B "大型語言模型")

硬體

- [TPU](https://zh.wikipedia.org/wiki/%E5%BC%A0%E9%87%8F%E5%A4%84%E7%90%86%E5%8D%95%E5%85%83 "張量處理單元")
- [VPU](https://zh.wikipedia.org/wiki/%E8%A7%86%E8%A7%89%E5%A4%84%E7%90%86%E5%8D%95%E5%85%83 "視覺處理單元")
- [IPU](https://zh.wikipedia.org/w/index.php?title=Graphcore&action=edit&redlink=1)
- [憶阻器](https://zh.wikipedia.org/wiki/%E6%86%B6%E9%98%BB%E5%99%A8 "憶阻器")
- [SpiNNaker](https://zh.wikipedia.org/w/index.php?title=SpiNNaker&action=edit&redlink=1)

軟體庫

- [Theano](https://zh.wikipedia.org/wiki/Theano "Theano")
- [TensorFlow](https://zh.wikipedia.org/wiki/TensorFlow "TensorFlow") 
  - [Keras](https://zh.wikipedia.org/wiki/Keras "Keras")
- [PyTorch](https://zh.wikipedia.org/wiki/PyTorch "PyTorch")
- [JAX](https://zh.wikipedia.org/wiki/Google_JAX "Google JAX")
- [Flux.jl](https://zh.wikipedia.org/w/index.php?title=Flux_(%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0%E6%A1%86%E6%9E%B6)&action=edit&redlink=1)

實現

|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 視覺·語音 | - [AlexNet](https://zh.wikipedia.org/wiki/AlexNet "AlexNet")<br>- [WaveNet](https://zh.wikipedia.org/wiki/WaveNet "WaveNet")<br>- [人像合成](https://zh.wikipedia.org/wiki/%E4%BA%BA%E9%AB%94%E5%9C%96%E5%83%8F%E5%90%88%E6%88%90 "人體圖像合成")<br>- [手寫辨識](https://zh.wikipedia.org/wiki/%E6%89%8B%E5%86%99%E8%AF%86%E5%88%AB "手寫辨識")<br>- [OCR](https://zh.wikipedia.org/wiki/%E5%85%89%E5%AD%A6%E5%AD%97%E7%AC%A6%E8%AF%86%E5%88%AB "光學字元辨識")<br>- [語音合成](https://zh.wikipedia.org/wiki/%E8%AF%AD%E9%9F%B3%E5%90%88%E6%88%90 "語音合成")<br>- [語音辨識](https://zh.wikipedia.org/wiki/%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB "語音辨識")<br>- [臉部辨識](https://zh.wikipedia.org/wiki/%E8%87%89%E9%83%A8%E8%BE%A8%E8%AD%98%E7%B3%BB%E7%B5%B1 "臉部辨識系統")<br>- [AlphaFold](https://zh.wikipedia.org/wiki/AlphaFold "AlphaFold")<br>- [DALL-E](https://zh.wikipedia.org/wiki/DALL-E "DALL-E")<br>- [Midjourney](https://zh.wikipedia.org/wiki/Midjourney "Midjourney")<br>- [Stable Diffusion](https://zh.wikipedia.org/wiki/Stable_Diffusion "Stable Diffusion")<br>- [Sora](https://zh.wikipedia.org/wiki/Sora_(%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E6%A8%A1%E5%9E%8B) "Sora (人工智慧模型)")<br>- [Whisper](https://zh.wikipedia.org/w/index.php?title=Whisper_(%E8%AF%AD%E9%9F%B3%E8%AF%86%E5%88%AB%E7%B3%BB%E7%BB%9F)&action=edit&redlink=1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 自然語言  | - [Word2vec](https://zh.wikipedia.org/wiki/Word2vec "Word2vec")<br>- [Seq2seq](https://zh.wikipedia.org/wiki/Seq2Seq%E6%A8%A1%E5%9E%8B "Seq2Seq模型")<br>- [BERT](https://zh.wikipedia.org/wiki/BERT "BERT")<br>- [LaMDA](https://zh.wikipedia.org/wiki/%E5%B0%8D%E8%A9%B1%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80%E6%A8%A1%E5%9E%8B "對話程式語言模型") <br>  - [Bard](https://zh.wikipedia.org/wiki/Bard "Bard")<br>- [NMT](https://zh.wikipedia.org/wiki/%E7%A5%9E%E7%BB%8F%E6%9C%BA%E5%99%A8%E7%BF%BB%E8%AF%91 "神經機器翻譯")<br>- [辯手專案](https://zh.wikipedia.org/w/index.php?title=%E8%BE%A9%E6%89%8B%E9%A1%B9%E7%9B%AE&action=edit&redlink=1)<br>- [華生](https://zh.wikipedia.org/wiki/%E6%B2%83%E6%A3%AE_(%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%E7%A8%8B%E5%BA%8F) "華生 (人工智慧程式)")<br>- [GPT](https://zh.wikipedia.org/wiki/%E5%9F%BA%E4%BA%8E%E8%BD%AC%E6%8D%A2%E5%99%A8%E7%9A%84%E7%94%9F%E6%88%90%E5%BC%8F%E9%A2%84%E8%AE%AD%E7%BB%83%E6%A8%A1%E5%9E%8B "基於轉換器的生成式預訓練模型") <br>  - [GPT-1](https://zh.wikipedia.org/wiki/GPT-1 "GPT-1")<br>  - [GPT-2](https://zh.wikipedia.org/wiki/GPT-2 "GPT-2")<br>  - [GPT-3](https://zh.wikipedia.org/wiki/GPT-3 "GPT-3")<br>  - [GPT-4](https://zh.wikipedia.org/wiki/GPT-4 "GPT-4")<br>- [GPT-J](https://zh.wikipedia.org/w/index.php?title=GPT-J&action=edit&redlink=1)<br>- [ChatGPT](https://zh.wikipedia.org/wiki/ChatGPT "ChatGPT")<br>- [文心一言](https://zh.wikipedia.org/wiki/%E6%96%87%E5%BF%83%E4%B8%80%E8%A8%80 "文心一言")<br>- [Chinchilla AI](https://zh.wikipedia.org/w/index.php?title=Chinchilla_AI&action=edit&redlink=1)<br>- [PaLM](https://zh.wikipedia.org/w/index.php?title=PaLM&action=edit&redlink=1)<br>- [BLOOM](https://zh.wikipedia.org/w/index.php?title=BLOOM_(%E8%AF%AD%E8%A8%80%E6%A8%A1%E5%9E%8B)&action=edit&redlink=1)<br>- [LLaMA](https://zh.wikipedia.org/wiki/LLaMA "LLaMA") |
|       |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 決策    | - [AlphaGo](https://zh.wikipedia.org/wiki/AlphaGo "AlphaGo")<br>- [Q學習](https://zh.wikipedia.org/wiki/Q%E5%AD%A6%E4%B9%A0 "Q學習")<br>- [SARSA](https://zh.wikipedia.org/wiki/SARSA%E7%AE%97%E6%B3%95 "SARSA演算法")<br>- [OpenAI Five](https://zh.wikipedia.org/w/index.php?title=OpenAI_Five&action=edit&redlink=1)<br>- [自動駕駛](https://zh.wikipedia.org/wiki/%E8%87%AA%E5%8B%95%E9%A7%95%E9%A7%9B%E6%B1%BD%E8%BB%8A "自動駕駛汽車")<br>- [MuZero](https://zh.wikipedia.org/wiki/MuZero "MuZero")<br>- [行動選擇](https://zh.wikipedia.org/w/index.php?title=%E8%A1%8C%E5%8A%A8%E9%80%89%E6%8B%A9&action=edit&redlink=1) <br>  - [Auto-GPT](https://zh.wikipedia.org/wiki/Auto-GPT "Auto-GPT")<br>- [機器人控制](https://zh.wikipedia.org/w/index.php?title=%E6%9C%BA%E5%99%A8%E4%BA%BA%E6%8E%A7%E5%88%B6&action=edit&redlink=1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

人物

- [約書亞·本希奧](https://zh.wikipedia.org/wiki/%E7%BA%A6%E4%B9%A6%E4%BA%9A%C2%B7%E6%9C%AC%E5%B8%8C%E5%A5%A5 "約書亞·本希奧")
- [傑弗里·辛頓](https://zh.wikipedia.org/wiki/%E6%9D%B0%E5%BC%97%E9%87%8C%C2%B7%E8%BE%9B%E9%A1%BF "傑弗里·辛頓")
- [楊立昆](https://zh.wikipedia.org/wiki/%E6%9D%A8%E7%AB%8B%E6%98%86 "楊立昆")
- [艾力克斯·格雷夫斯](https://zh.wikipedia.org/wiki/%E8%89%BE%E5%8A%9B%E5%85%8B%E6%96%AF%C2%B7%E6%A0%BC%E9%9B%B7%E5%A4%AB%E6%96%AF_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8%E5%AE%B6) "艾力克斯·格雷夫斯 (電腦科學家)")
- [伊恩·古德費洛](https://zh.wikipedia.org/wiki/%E4%BC%8A%E6%81%A9%C2%B7%E5%8F%A4%E5%BE%B7%E8%B4%B9%E6%B4%9B "伊恩·古德費洛")
- [吳恩達](https://zh.wikipedia.org/wiki/%E5%90%B4%E6%81%A9%E8%BE%BE "吳恩達")
- [傑米斯·哈薩比斯](https://zh.wikipedia.org/wiki/%E6%9D%B0%E7%B1%B3%E6%96%AF%C2%B7%E5%93%88%E8%90%A8%E6%AF%94%E6%96%AF "傑米斯·哈薩比斯")
- [大衛·席爾瓦](https://zh.wikipedia.org/wiki/%E5%A4%A7%E8%A1%9B%C2%B7%E5%B8%AD%E7%88%BE%E7%93%A6_(%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8%E5%AE%B6) "大衛·席爾瓦 (電腦科學家)")
- [李飛飛](https://zh.wikipedia.org/wiki/%E6%9D%8E%E9%A3%9B%E9%A3%9B "李飛飛")
- [于爾根·施密德胡伯](https://zh.wikipedia.org/wiki/%E4%BA%8E%E5%B0%94%E6%A0%B9%C2%B7%E6%96%BD%E5%AF%86%E5%BE%B7%E8%83%A1%E4%BC%AF "于爾根·施密德胡伯")
- [伊爾亞·蘇茨克維](https://zh.wikipedia.org/wiki/%E4%BC%8A%E7%88%BE%E4%BA%9E%C2%B7%E8%98%87%E8%8C%A8%E5%85%8B%E7%B6%AD "伊爾亞·蘇茨克維")

組織

- [Anthropic](https://zh.wikipedia.org/wiki/Anthropic "Anthropic")
- [DeepMind](https://zh.wikipedia.org/wiki/DeepMind "DeepMind")
- [EleutherAI](https://zh.wikipedia.org/w/index.php?title=EleutherAI&action=edit&redlink=1)
- [Google Brain](https://zh.wikipedia.org/wiki/%E8%B0%B7%E6%AD%8C%E5%A4%A7%E8%84%91 "谷歌大腦")
- [Meta AI](https://zh.wikipedia.org/w/index.php?title=Meta_AI&action=edit&redlink=1)
- [Mila](https://zh.wikipedia.org/w/index.php?title=Mila_(%E7%A0%94%E7%A9%B6%E6%89%80)&action=edit&redlink=1)
- [MIT CSAIL](https://zh.wikipedia.org/wiki/MIT%E8%A8%88%E7%AE%97%E6%A9%9F%E7%A7%91%E5%AD%B8%E8%88%87%E4%BA%BA%E5%B7%A5%E6%99%BA%E6%85%A7%E5%AF%A6%E9%A9%97%E5%AE%A4 "MIT電腦科學與人工智慧實驗室")
- [OpenAI](https://zh.wikipedia.org/wiki/OpenAI "OpenAI")
- [Hugging Face](https://zh.wikipedia.org/wiki/Hugging_Face "Hugging Face")

架構

- [多層感知器](https://zh.wikipedia.org/wiki/%E5%A4%9A%E5%B1%82%E6%84%9F%E7%9F%A5%E5%99%A8 "多層感知器")（MLP）

- [迴圈神經網路](https://zh.wikipedia.org/wiki/%E5%BE%AA%E7%8E%AF%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "迴圈神經網路")（RNN）

- [長短期記憶](https://zh.wikipedia.org/wiki/%E9%95%B7%E7%9F%AD%E6%9C%9F%E8%A8%98%E6%86%B6 "長短期記憶")（LSTM）

- [門控迴圈單元](https://zh.wikipedia.org/w/index.php?title=%E9%97%A8%E6%8E%A7%E5%BE%AA%E7%8E%AF%E5%8D%95%E5%85%83&action=edit&redlink=1)（GRU）

- 卷積神經網路（CNN）

- [殘差神經網路](https://zh.wikipedia.org/wiki/%E6%AE%8B%E5%B7%AE%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "殘差神經網路")（ResNet）

- [變換器](https://zh.wikipedia.org/wiki/Transformer%E6%A8%A1%E5%9E%8B "Transformer模型")

- [自編碼器](https://zh.wikipedia.org/wiki/%E8%87%AA%E7%BC%96%E7%A0%81%E5%99%A8 "自編碼器")

- [變分自編碼器](https://zh.wikipedia.org/wiki/%E5%8F%98%E5%88%86%E8%87%AA%E7%BC%96%E7%A0%81%E5%99%A8 "變分自編碼器")（VAE）

- [生成對抗網路](https://zh.wikipedia.org/wiki/%E7%94%9F%E6%88%90%E5%AF%B9%E6%8A%97%E7%BD%91%E7%BB%9C "生成對抗網路")（GAN）

- [圖神經網路](https://zh.wikipedia.org/w/index.php?title=%E5%9B%BE%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C&action=edit&redlink=1)（GNN）

- [迴響狀態網路](https://zh.wikipedia.org/w/index.php?title=%E5%9B%9E%E5%93%8D%E7%8A%B6%E6%80%81%E7%BD%91%E7%BB%9C&action=edit&redlink=1)（ESN）

- [神經圖靈機](https://zh.wikipedia.org/wiki/%E7%A5%9E%E7%BB%8F%E5%9B%BE%E7%81%B5%E6%9C%BA "神經圖靈機")（NTM）

- [可微分神經電腦](https://zh.wikipedia.org/w/index.php?title=%E5%8F%AF%E5%BE%AE%E5%88%86%E7%A5%9E%E7%BB%8F%E8%AE%A1%E7%AE%97%E6%9C%BA&action=edit&redlink=1)（DNC）

- ![主題](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Symbol_portal_class.svg/16px-Symbol_portal_class.svg.png) 主題 
  
  - [電腦編程](https://zh.wikipedia.org/wiki/Portal:%E9%9B%BB%E8%85%A6%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88 "Portal:電腦程式設計")
  - [技術](https://zh.wikipedia.org/wiki/Portal:%E6%8A%80%E8%A1%93 "Portal:技術")

- ![分類](https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Symbol_category_class.svg/16px-Symbol_category_class.svg.png) 分類 
  
  - [類神經網路](https://zh.wikipedia.org/wiki/Category:%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "Category:類神經網路")
  - [機器學習](https://zh.wikipedia.org/wiki/Category:%E6%9C%BA%E5%99%A8%E5%AD%A6%E4%B9%A0 "Category:機器學習")

[分類](https://zh.wikipedia.org/wiki/Special:%E9%A1%B5%E9%9D%A2%E5%88%86%E7%B1%BB "Special:页面分类")：​

- [人工智慧](https://zh.wikipedia.org/wiki/Category:%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD "Category:人工智能")
- [人工神經網絡](https://zh.wikipedia.org/wiki/Category:%E4%BA%BA%E5%B7%A5%E7%A5%9E%E7%BB%8F%E7%BD%91%E7%BB%9C "Category:人工神经网络")
