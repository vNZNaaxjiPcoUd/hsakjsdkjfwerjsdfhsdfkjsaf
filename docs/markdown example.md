# **Markdown** 完整語法範例
---

## 目錄（可點擊跳轉）
1. [markdown 原文](/markdown%20example.md)
1. [標題](#標題)
    1. [一級標題](#一級標題)
    2. [二級標題](#二級標題)
    1. [三級標題](#三級標題)
    1. [四級標題](#四級標題)
    1. [五級標題](#五級標題)
    1. [六級標題](#六級標題)
3. [段落與換行](#段落與換行)
4. [強調（粗體、斜體）](#強調)
5. [刪除線](#刪除線)
6. [引用](#引用)
7. [列表（無序、有序、任務）](#列表)
8. [連結](#連結)
9. [圖片](#圖片)
10. [程式碼](#程式碼)
11. [表格](#表格)
12. [水平線](#水平線)
13. [自動連結](#自動連結)
14. [轉義字符](#轉義字符)
15. [表情符號](#表情符號)
16. [腳註](#腳註)
17. [定義列表（部分支援）](#定義列表)
18. [折疊區塊（HTML）](#折疊區塊)
19. [數學公式（LaTeX）](#數學公式)
20. [高亮文字（==）](#高亮文字)

---

<a name="標題"></a>
## 1. 標題

```markdown
# 一級標題
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題
```

### 渲染效果
# 一級標題
## 二級標題
### 三級標題
#### 四級標題
##### 五級標題
###### 六級標題

---

<a name="段落與換行"></a>
## 2. 段落與換行

```markdown
這是一段文字。

這是另一段文字，前面有空行會變成新段落。  
行尾加兩個空格+Enter  
會產生換行（軟換行）。
```

### 渲染效果
這是一段文字。

這是另一段文字，前面有空行會變成新段落。  
行尾加兩個空格+Enter  
會產生換行（軟換行）。

---

<a name="強調"></a>
## 3. 強調（粗體、斜體）

```markdown
*斜體* 或 _斜體_
**粗體** 或 __粗體__
***粗斜體*** 或 ___粗斜體___
```

### 渲染效果
*斜體* 或 _斜體_  
**粗體** 或 __粗體__  
***粗斜體*** 或 ___粗斜體___

---

<a name="刪除線"></a>
## 4. 刪除線

```markdown
~~這是刪除線~~
```

### 渲染效果
~~這是刪除線~~

---

<a name="引用"></a>
## 5. 引用

```markdown
> 一級引用
>
> > 二級引用
> >
> > > 三級引用
```

### 渲染效果
> 一級引用
>
> > 二級引用
> >
> > > 三級引用

---

<a name="列表"></a>
## 6. 列表

### 無序列表
```markdown
- 項目 1
- 項目 2
  - 子項目 A
  - 子項目 B
* 也可以用 * 
+ 或是 +
```

### 有序列表
```markdown
1. 第一步
2. 第二步
   1. 子步驟 1
   2. 子步驟 2
3. 第三步
```

### 任務列表（Checkbox）
```markdown
- [x] 已完成
- [ ] 未完成
- [ ] 另一個未完成
```

### 渲染效果
- 項目 1
- 項目 2
  - 子項目 A
  - 子項目 B
* 也可以用 * 
+ 或是 +

1. 第一步
2. 第二步
   1. 子步驟 1
   2. 子步驟 2
3. 第三步

- [x] 已完成
- [ ] 未完成
- [ ] 另一個未完成

---

<a name="連結"></a>
## 7. 連結

```markdown
[顯示文字](https://example.com)
[顯示文字](https://example.com "標題提示")
```

### 參考式連結
```markdown
[Google][1]
[Facebook][fb]

[1]: https://google.com
[fb]: https://facebook.com "Facebook 官方"
```

### 渲染效果
[顯示文字](https://example.com)  
[顯示文字](https://example.com "標題提示")  
[Google][1]  
[Facebook][fb]

[1]: https://google.com
[fb]: https://facebook.com "Facebook 官方"

---

<a name="圖片"></a>
## 8. 圖片

```markdown
![替代文字](https://example.com/image.jpg)
![替代文字](https://example.com/image.jpg "圖片標題")
```

### 參考式圖片
```markdown
![Markdown Logo][logo]

[logo]: https://markdown.tw/images/208x128.png "Markdown"
```

### 渲染效果
![替代文字](https://example.com/image.jpg)  
![Markdown Logo][logo]

[logo]: https://markdown.tw/images/208x128.png "Markdown"

---

<a name="程式碼"></a>
## 9. 程式碼

### 行內程式碼
```markdown
使用 `print("Hello")` 輸出文字。
```

### 程式碼區塊（縮進）
```markdown
    def hello():
        print("Hello World")
```

### 程式碼區塊（圍欄式，推薦）
```markdown
```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
```
```

### 渲染效果
使用 `print("Hello")` 輸出文字。

    def hello():
        print("Hello World")

```python
def fibonacci(n):
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b
```

---

<a name="表格"></a>
## 10. 表格

```markdown
| 左對齊 | 置中 | 右對齊 |
|:-------|:----:|-------:|
| Apple  | Red  | $1     |
| Banana | Yellow| $2   |
```

### 渲染效果

| 左對齊 | 置中 | 右對齊 |
|:-------|:----:|-------:|
| Apple  | Red  | $1     |
| Banana | Yellow| $2   |

---

<a name="水平線"></a>
## 11. 水平線

```markdown
---
***
- - -
```

### 渲染效果
---
***
- - -

---

<a name="自動連結"></a>
## 12. 自動連結

```markdown
<https://example.com>
<user@example.com>
```

### 渲染效果
<https://example.com>  
<user@example.com>

---

<a name="轉義字符"></a>
## 13. 轉義字符

```markdown
\*這不是斜體\*  
\# 這不是標題  
\[這不是連結\](https://example.com)
```

### 渲染效果
\*這不是斜體\*  
\# 這不是標題  
\[這不是連結\](https://example.com)

---

<a name="表情符號"></a>
## 14. 表情符號（Emoji）

```markdown
:smile: :+1: :heart: :rocket:
```

### 渲染效果
:smile: :+1: :heart: :rocket:

---

<a name="腳註"></a>
## 15. 腳註

```markdown
這是內文[^1]，有腳註說明。

[^1]: 這是腳註內容，可以很長。
```

### 渲染效果
這是內文[^1]，有腳註說明。

[^1]: 這是腳註內容，可以很長。

---

<a name="定義列表"></a>
## 16. 定義列表（部分平台支援）

```markdown
Markdown
: 輕量級標記語言

HTML
: 超文本標記語言
```

### 渲染效果（GitHub 不支援，但某些編輯器支援）
Markdown  
: 輕量級標記語言

HTML  
: 超文本標記語言

---

<a name="折疊區塊"></a>
## 17. 折疊區塊（使用 HTML）

```markdown
<details>
<summary>點我展開</summary>

這是隱藏內容，可以放長說明、程式碼等。

```js
console.log("Hidden!");
```
</details>
```

### 渲染效果
<details>
<summary>點我展開</summary>

這是隱藏內容，可以放長說明、程式碼等。

```js
console.log("Hidden!");
```
</details>

---

<a name="數學公式"></a>
## 18. 數學公式（LaTeX，需平台支援如 GitHub）

```markdown
行內公式：$E = mc^2$

區塊公式：
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$
```

### 渲染效果
行內公式：$E = mc^2$

區塊公式：
$$
\int_0^\infty e^{-x^2} dx = \frac{\sqrt{\pi}}{2}
$$

---

<a name="高亮文字"></a>
## 19. 高亮文字（==，部分平台支援）

```markdown
這是 ==高亮文字== 效果。
```

### 渲染效果
這是 ==高亮文字== 效果。

---

## 完整範例文件（可直接複製使用）

```markdown
# Markdown 完整語法範例

## 強調
*斜體*、**粗體**、***粗斜體***、~~刪除線~~

## 列表
- 無序
  - 子層
- [x] 任務

1. 有序
   1. 子步

## 連結與圖片
[Google](https://google.com)  
![Logo](https://example.com/logo.png)

## 程式碼
`inline code`

```python
print("Hello Markdown!")
```

## 表格
| 名稱 | 年齡 |
|:----|----:|
| 小明 | 18  |

## 數學
$E = mc^2$

---
```

---

**提示**：
- 不同平台（如 GitHub、GitLab、Notion、Obsidian）支援程度略有差異。
- 建議使用 **Markdown 編輯器** 即時預覽（如 Typora、StackEdit）。
- 進階功能（如任務列表、表格對齊）在 GitHub 完全支援。

需要 **PDF 輸出範例** 或 **HTML 轉檔** 嗎？可以再告訴我！
