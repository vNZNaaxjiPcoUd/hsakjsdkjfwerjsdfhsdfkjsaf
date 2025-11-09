Colab 如何訓練 AI 模型
====================

以下是 **Google Colab 如何訓練 AI 模型** 的完整入門指南！Colab 是 Google 提供的免費雲端 Jupyter Notebook 環境，內建 GPU/TPU 支援，非常適合初學者訓練機器學習（ML）或深度學習（DL）模型。無需安裝軟體，直接用瀏覽器就能跑程式碼，還能免費用 NVIDIA T4 GPU（16GB 記憶體）加速訓練。

我會從基礎開始，逐步帶你上手。假設你用 Python + TensorFlow/Keras（最簡單），最後給一個完整範例。預計 30 分鐘就能跑起來！

---

## 一、Colab 基本介紹與環境設定

### 為什麼用 Colab 訓練 AI？
- **免費資源**：CPU/GPU/TPU，適合訓練小型到中型模型（如 CNN、Transformer）。
- **雲端儲存**：連 Google Drive，資料不會丟。
- **分享簡單**：直接分享 .ipynb 檔案。
- **限制**：免費版 GPU 限時 12 小時，記憶體 12GB；升級 Pro（NT$300/月）可得更多資源。

### 步驟 1：開啟 Colab
1. 去 [colab.research.google.com](https://colab.research.google.com) 登入 Google 帳號。
2. 點擊「新建筆記本」（New Notebook）。
3. 儲存到 Google Drive（檔案 > 儲存 > 儲存到 Drive）。

### 步驟 2：啟用 GPU
- 點擊上方選單：**Runtime（執行階段） > Change runtime type（變更執行階段類型）**。
- Hardware accelerator 選 **GPU**（T4 或更好），然後儲存。
- 驗證 GPU：跑下面程式碼，輸出應顯示 GPU 資訊。

```python
import tensorflow as tf
print("TensorFlow 版本:", tf.__version__)
print("GPU 可用:", tf.config.list_physical_devices('GPU'))
# 輸出範例： [PhysicalDevice(name='/physical_device:GPU:0', device_type='GPU')]
```

### 步驟 3：掛載 Google Drive（存資料）
- 訓練資料/模型會存這裡，避免斷線丟失。

```python
from google.colab import drive
drive.mount('/content/drive')
# 授權後，Drive 會掛載到 /content/drive/MyDrive/
```

---

## 二、安裝必要套件

Colab 預裝 TensorFlow/PyTorch，但進階模型可能需額外安裝。跑在第一個 Cell：

```python
!pip install tensorflow  # 或 !pip install torch torchvision torchaudio
!pip install matplotlib seaborn  # 畫圖用
!pip install scikit-learn  # 機器學習工具
```

---

## 三、訓練 AI 模型的完整流程

AI 模型訓練 = **資料準備 + 模型建構 + 訓練 + 評估 + 儲存**。以下用簡單的 **圖像分類模型**（如 MNIST 手寫數字辨識）示範，適合初學。

### 步驟 1：準備資料
- 用內建資料集，或上傳自己的 CSV/圖片到 Drive。

```python
import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.utils import to_categorical

# 載入 MNIST 資料（60,000 訓練 + 10,000 測試）
(x_train, y_train), (x_test, y_test) = mnist.load_data()

# 正規化（0-255 → 0-1）
x_train = x_train.astype('float32') / 255.0
x_test = x_test.astype('float32') / 255.0

# 轉 one-hot 標籤（10 類別）
y_train = to_categorical(y_train, 10)
y_test = to_categorical(y_test, 10)

# 重塑資料（加通道維度）
x_train = x_train.reshape(-1, 28, 28, 1)
x_test = x_test.reshape(-1, 28, 28, 1)

print("訓練資料形狀:", x_train.shape)  # (60000, 28, 28, 1)
```

**自訂資料**：上傳圖片資料夾到 Drive，然後用 `tf.keras.utils.image_dataset_from_directory('/content/drive/MyDrive/my_data/', image_size=(224, 224))` 載入。

### 步驟 2：建構模型
- 用 Keras Sequential API（簡單線性堆疊）建 CNN 模型。

```python
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense, Dropout

model = Sequential([
    Conv2D(32, (3, 3), activation='relu', input_shape=(28, 28, 1)),
    MaxPooling2D((2, 2)),
    Conv2D(64, (3, 3), activation='relu'),
    MaxPooling2D((2, 2)),
    Flatten(),
    Dense(128, activation='relu'),
    Dropout(0.5),
    Dense(10, activation='softmax')  # 10 類輸出
])

model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy'])

model.summary()  # 顯示模型架構
```

### 步驟 3：訓練模型
- 用 `fit()` 訓練，指定 epochs（輪次）、batch_size（批次大小）。
- GPU 會自動加速！

```python
history = model.fit(x_train, y_train,
                    epochs=5,  # 訓練 5 輪
                    batch_size=128,
                    validation_data=(x_test, y_test),
                    verbose=1)  # 顯示進度
```

**輸出範例**：
```
Epoch 1/5
469/469 [==============================] - 10s 20ms/step - loss: 0.1234 - accuracy: 0.9650 - val_loss: 0.0567 - val_accuracy: 0.9820
...
Epoch 5/5
469/469 [==============================] - 9s 19ms/step - loss: 0.0234 - accuracy: 0.9930 - val_loss: 0.0301 - val_accuracy: 0.9900
```

- **監控**：用 TensorBoard 追蹤（進階）：
  ```python
  %load_ext tensorboard
  %tensorboard --logdir logs
  ```

### 步驟 4：評估與預測
```python
# 評估準確率
test_loss, test_acc = model.evaluate(x_test, y_test)
print(f"測試準確率: {test_acc:.4f}")

# 預測單張圖片
import matplotlib.pyplot as plt
import numpy as np

idx = 0
plt.imshow(x_test[idx].reshape(28, 28), cmap='gray')
plt.show()

pred = model.predict(x_test[idx:idx+1])
print("預測類別:", np.argmax(pred))
```

### 步驟 5：儲存與載入模型
- 存到 Drive，避免重跑。

```python
# 儲存整個模型
model.save('/content/drive/MyDrive/my_model.h5')

# 載入模型
loaded_model = tf.keras.models.load_model('/content/drive/MyDrive/my_model.h5')
```

---

## 四、進階：訓練更複雜模型（如 Stable Diffusion 或 LLM）

- **圖像生成（Stable Diffusion LoRA 微調）**：用 Hugging Face Diffusers 套件，掛載 Drive 存 checkpoint。範例命令：
  ```bash
  !pip install diffusers transformers accelerate
  # 然後跑訓練腳本（參考 CSDN 教程）
  ```
  適合訓練個人風格模型，需 10-20GB GPU。

- **大型語言模型（Gemma-2）**：用 Hugging Face Transformers 微調 NLP 任務（如中文抽取）。
  ```python
  !pip install transformers bitsandbytes accelerate
  from transformers import AutoModelForCausalLM, AutoTokenizer
  model = AutoModelForCausalLM.from_pretrained("google/gemma-2-2b", load_in_4bit=True)
  # 訓練用 Trainer API
  ```
  用 local_gemma 套件優化記憶體（適合 27B 模型）。

- **PyTorch 範例**：改用 `torch.nn` 建模型，`optimizer = torch.optim.Adam(model.parameters())`，然後 `for epoch in range(epochs): ...`。

**提示**：大模型訓練時，用 `torch.cuda.empty_cache()` 清記憶體；斷線後，從 checkpoint 繼續（用 `model.load_state_dict(torch.load('checkpoint.pth'))`）。

---

## 五、常見問題與提示

| 問題 | 解決 |
|------|------|
| **GPU 不可用** | 檢查 Runtime 設定，重啟 Runtime（Runtime > Restart）。 |
| **記憶體不足 (OOM)** | 減小 batch_size、用混合精度（tf.keras.mixed_precision.set_global_policy('mixed_float16')），或升級 Pro。 |
| **訓練中斷** | 定期存 checkpoint：`model.save_weights('checkpoint.h5')`。 |
| **上傳大檔案** | 用 Drive，或 !wget 下載資料集。 |
| **Colab AI 輔助** | 右上角點「AI」按鈕，輸入「幫我寫一個 CNN 模型」，它會生成程式碼！ |

---

## 六、學習資源推薦

| 類型 | 資源 |
|------|------|
| **官方教程** | [Google ML Crash Course](https://developers.google.com/machine-learning/crash-course)（互動練習） |
| **TensorFlow 入門** | [TensorFlow in Colab](https://www.tensorflow.org/tutorials) |
| **Hugging Face** | [Transformers 訓練指南](https://huggingface.co/docs/transformers/training) |
| **中文影片** | YouTube「彭彭 Python」或「Google Colab 機器學習」搜尋 |
| **進階** | [Gemma 微調教程](https://ai.google.dev/gemma/docs)（開源 LLM） |

---

## 結語：馬上動手！
1. 開 Colab，新建 Notebook。
2. 複製上面程式碼，一格一格跑（Shift + Enter）。
3. 改成自己的資料，試訓練準確率 >95%！

**完整範例 Notebook**：你可以去 [Google Colab 範例庫](https://colab.research.google.com/github/tensorflow/docs) 下載 MNIST 專案，或告訴我你的模型類型（e.g., 文字分類），我再給客製化程式碼。

有問題？直接問我，或在 Colab 用 AI 聊天產生程式！🚀
