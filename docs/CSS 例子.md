CSS 例子
=======

以下是一些CSS的常见示例，展示不同场景下的样式应用，代码简洁且包含注释说明用途：

### 1. **基本样式设置**
```css
/* 设置字体、颜色和背景 */
body {
  font-family: Arial, sans-serif; /* 设置全局字体 */
  background-color: #f0f0f0; /* 背景色 */
  color: #333; /* 文本颜色 */
  margin: 0; /* 移除默认外边距 */
}

/* 样式化标题 */
h1 {
  color: #0066cc; /* 标题颜色 */
  text-align: center; /* 居中 */
  padding: 20px; /* 内边距 */
}
```

### 2. **盒模型（Box Model）**
```css
/* 设置元素的宽度、高度、边框、内边距和外边距 */
.box {
  width: 200px;
  height: 100px;
  border: 2px solid #333; /* 边框 */
  padding: 15px; /* 内边距 */
  margin: 20px; /* 外边距 */
  background-color: #e0e0e0;
  box-sizing: border-box; /* 包含边框和内边距在宽度内 */
}
```

### 3. **Flexbox布局**
```css
/* 使用Flexbox实现水平居中布局 */
.container {
  display: flex; /* 启用Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100vh; /* 占满视口高度 */
}

.container div {
  background-color: #ff9900;
  padding: 20px;
  border-radius: 5px; /* 圆角 */
}
```

### 4. **响应式设计（媒体查询）**
```css
/* 默认样式 */
.card {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* 阴影 */
}

/* 屏幕宽度小于600px时的样式 */
@media (max-width: 600px) {
  .card {
    max-width: 100%;
    padding: 10px;
    font-size: 14px;
  }
}
```

### 5. **伪类与动画**
```css
/* 鼠标悬停效果 */
.button {
  background-color: #0066cc;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease; /* 平滑过渡 */
}

.button:hover {
  background-color: #003366; /* 悬停时颜色变深 */
}

/* 简单动画 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 1s ease-in; /* 应用淡入动画 */
}
```

### 6. **Grid布局**
```css
/* 使用CSS Grid创建网格布局 */
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 三列等宽 */
  gap: 20px; /* 网格间距 */
  padding: 20px;
}

.grid-item {
  background-color: #66cc99;
  padding: 15px;
  text-align: center;
  border-radius: 5px;
}
```

### 示例HTML（搭配CSS使用）
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>CSS 示例</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>欢迎体验CSS</h1>
  <div class="box">盒模型示例</div>
  <div class="container">
    <div>Flexbox居中</div>
  </div>
  <div class="card">响应式卡片</div>
  <button class="button">点击我</button>
  <div class="grid-container">
    <div class="grid-item">网格1</div>
    <div class="grid-item">网格2</div>
    <div class="grid-item">网格3</div>
  </div>
</body>
</html>
```

--------

在CSS中，`display: grid;` 是一种用于创建网格布局的属性值，表示将一个元素设置为**网格容器**（Grid Container），其直接子元素会成为**网格项**（Grid Items），并按照网格布局的规则排列。

### 详细解释
- **`display: grid;` 的作用**：
  - 它激活了CSS Grid布局系统，允许你以二维（行和列）的方式组织内容。
  - 与Flexbox（一维布局，专注于行或列）不同，Grid布局适合需要同时控制行和列的复杂布局。

- **网格容器的行为**：
  - 应用`display: grid;`的元素会成为网格容器。
  - 其直接子元素会自动成为网格项，放置在网格的单元格中。
  - 你可以通过其他Grid相关属性（如`grid-template-columns`、`grid-template-rows`等）定义网格的结构。

### 基本示例
```css
.container {
  display: grid; /* 启用网格布局 */
  grid-template-columns: 100px 100px 100px; /* 定义3列，每列100px宽 */
  grid-template-rows: 50px 50px; /* 定义2行，每行50px高 */
  gap: 10px; /* 网格项之间的间距 */
}

.item {
  background-color: #66cc99;
  padding: 10px;
  text-align: center;
}
```

**对应的HTML**：
```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>
```

### 效果
- 上述代码会创建一个3列2行的网格布局，包含6个网格项（如果子元素数量少于网格单元格，剩余单元格为空）。
- 每个网格项会依次填充网格单元格（从左到右，从上到下）。
- `gap: 10px;` 在网格项之间添加10像素的间距。

### 常用Grid相关属性
1. **定义网格结构**：
   - `grid-template-columns`：定义列的数量和宽度（例如：`1fr 1fr`表示两列等宽）。
   - `grid-template-rows`：定义行的数量和高度。
   - `grid-gap` 或 `gap`：设置行和列之间的间距。

2. **自动布局**：
   - `grid-auto-columns` / `grid-auto-rows`：定义未显式指定尺寸的列/行的默认大小。
   - `grid-auto-flow`：控制网格项的放置顺序（`row`、`column`或`dense`）。

3. **对齐方式**：
   - `justify-items`：网格项在水平方向的对齐（`start`、`center`、`end`等）。
   - `align-items`：网格项在垂直方向的对齐。
   - `place-items`：`align-items`和`justify-items`的简写。

4. **网格项控制**：
   - `grid-column` / `grid-row`：指定网格项占据的列或行范围（例如：`grid-column: 1 / 3`表示跨两列）。
   - `grid-area`：为网格项命名或指定区域。

### 实际应用场景
- **网页布局**：创建复杂的页面布局，如导航栏、内容区和侧边栏。
- **响应式设计**：结合媒体查询和`fr`单位，实现灵活的网格布局。
- **卡片布局**：排列卡片、图片或内容块，保持整齐且等间距。

### 注意事项
- 如果不定义`grid-template-columns`或`grid-template-rows`，Grid会根据内容自动生成网格，但可能不如预期整齐。
- 浏览器支持：CSS Grid在现代浏览器（Chrome、Firefox、Safari、Edge）中支持良好，IE需使用前缀或备选方案。



-----

在CSS中，`display` 属性用于控制元素的显示方式和布局行为，是CSS布局的核心属性之一。以下是 `display` 属性的常见选项及其说明：

### 1. **块级元素（Block-Level）**
- **`block`**  
  - 元素独占一行，宽度默认占满父元素。
  - 支持设置宽度、高度、外边距和内边距。
  - 示例：`<div>`、`<p>`、`<h1>` 等默认是 `block`。
  ```css
  div {
    display: block;
  }
  ```

- **`inline-block`**  
  - 元素像内联元素一样在行内显示，但可以设置宽度、高度和内边距。
  - 不会独占一行，但保留块级元素的盒模型特性。
  ```css
  span {
    display: inline-block;
    width: 100px;
    height: 50px;
  }
  ```

### 2. **内联元素（Inline）**
- **`inline`**  
  - 元素在行内显示，不会换行。
  - 无法设置宽度和高度，尺寸由内容决定。
  - 示例：`<span>`、`<a>` 等默认是 `inline`。
  ```css
  a {
    display: inline;
  }
  ```

### 3. **弹性布局（Flexbox）**
- **`flex`**  
  - 将元素设置为弹性容器，其子元素按弹性盒模型排列（一维布局，行或列）。
  - 常用于响应式布局和对齐。
  ```css
  .container {
    display: flex;
    justify-content: center;
  }
  ```

- **`inline-flex`**  
  - 类似 `flex`，但容器本身作为内联元素显示，不独占一行。
  ```css
  .container {
    display: inline-flex;
  }
  ```

### 4. **网格布局（Grid）**
- **`grid`**  
  - 将元素设置为网格容器，其子元素按网格系统（二维布局，行和列）排列。
  - 适合复杂布局。
  ```css
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  ```

- **`inline-grid`**  
  - 类似 `grid`，但容器本身作为内联元素显示。
  ```css
  .container {
    display: inline-grid;
  }
  ```

### 5. **表格布局（Table）**
- **`table`**  
  - 元素表现为表格（类似 `<table>`）。
  ```css
  div {
    display: table;
  }
  ```

- **`table-row`**, **`table-cell`**, **`table-column`** 等  
  - 模拟表格的行、单元格、列等行为。
  ```css
  div {
    display: table-cell;
  }
  ```

- **`inline-table`**  
  - 类似 `table`，但作为内联元素显示。

### 6. **隐藏元素**
- **`none`**  
  - 元素完全不显示，且不占用空间（不同于 `visibility: hidden`）。
  ```css
  .hidden {
    display: none;
  }
  ```

### 7. **其他布局类型**
- **`list-item`**  
  - 元素表现为列表项（类似 `<li>`），通常带有项目符号。
  ```css
  div {
    display: list-item;
    list-style-type: disc;
  }
  ```

- **`contents`**  
  - 元素本身不显示，但其子元素正常显示（容器“消失”，子元素提升到父级）。
  ```css
  .wrapper {
    display: contents;
  }
  ```

- **`run-in`**（不常用，部分浏览器支持）  
  - 元素根据上下文决定是块级还是内联显示。

### 8. **现代布局扩展**
- **`flow-root`**  
  - 创建一个新的块级格式化上下文（BFC），常用于清除浮动或包含子元素。
  ```css
  .container {
    display: flow-root;
  }
  ```

### 9. **CSS子网格（Subgrid，较新特性）**
- **`subgrid`**  
  - 用于网格容器的子元素，继承父网格的网格线。
  - 必须在 `display: grid` 的容器中使用。
  ```css
  .subgrid {
    display: grid;
    grid-template-columns: subgrid;
  }
  ```

### 10. **其他实验性或不常用值**
- **`ruby`**, **`ruby-base`**, **`ruby-text`**  
  - 用于东亚文字的注音（ruby）布局。
- **`math`**（实验性）  
  - 用于数学公式布局。
- **`webkit-box`**（WebKit私有）  
  - 早期Flexbox实现，不推荐使用。

### 注意事项
- **浏览器兼容性**：大多数值（如 `block`、`flex`、`grid`）在现代浏览器中广泛支持，但 `subgrid`、`contents` 等新特性可能需要检查兼容性。
- **常见用途**：
  - `block` 和 `inline` 用于基本布局。
  - `flex` 和 `grid` 用于现代响应式设计。
  - `none` 用于隐藏元素。
- **结合其他属性**：`display` 常与 `flex-direction`、`grid-template-columns` 等配合使用。

### 示例综合应用
```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Display 示例</title>
  <style>
    .block { display: block; background: #f0f0f0; margin: 5px; }
    .inline { display: inline; background: #ffcc99; }
    .flex { display: flex; gap: 10px; background: #ccffcc; }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; background: #99ccff; }
  </style>
</head>
<body>
  <div class="block">块级元素</div>
  <span class="inline">内联元素</span>
  <span class="inline">另一个内联元素</span>
  <div class="flex">
    <div>Flex项1</div>
    <div>Flex项2</div>
  </div>
  <div class="grid">
    <div>Grid项1</div>
    <div>Grid项2</div>
    <div>Grid项3</div>
    <div>Grid项4</div>
  </div>
</body>
</html>
```

### 总结
- `display` 的主要选项包括 `block`、`inline`、`inline-block`、`flex`、`grid`、`none` 等。
- 每个值适用于不同场景：`block` 和 `inline` 适合传统布局，`flex` 和 `grid` 适合现代复杂布局，`none` 用于隐藏。

-----

在CSS中，**定位屬性**主要由 `position` 屬性以及相關的輔助屬性（如 `top`、`right`、`bottom`、`left`、`z-index` 等）控制，用於精確設置元素在頁面中的位置。以下是CSS定位屬性的詳細說明與示例：

### 1. **`position` 屬性**
`position` 屬性定義元素的定位方式，常用值如下：

- **`static`**（默認值）
  - 元素按正常文檔流（normal flow）排列，不受 `top`、`right` 等定位屬性影響。
  - 默認情況下，所有元素都是 `static`。
  ```css
  .static {
    position: static;
  }
  ```

- **`relative`**（相對定位）
  - 元素相對於其**正常位置**進行偏移，使用 `top`、`right`、`bottom`、`left` 設置偏移量。
  - 偏移後，原位置在文檔流中保留（不影響其他元素）。
  ```css
  .relative {
    position: relative;
    top: 10px; /* 向下偏移10px */
    left: 20px; /* 向右偏移20px */
  }
  ```

- **`absolute`**（絕對定位）
  - 元素脫離正常文檔流，相對於**最近的非 `static` 定位祖先元素**（或文檔根元素）定位。
  - 使用 `top`、`right` 等屬性精確控制位置。
  ```css
  .absolute {
    position: absolute;
    top: 50px;
    right: 20px;
  }
  ```

- **`fixed`**（固定定位）
  - 元素脫離正常文檔流，相對於**瀏覽器視口**（viewport）定位。
  - 即使頁面滾動，元素位置保持固定。
  ```css
  .fixed {
    position: fixed;
    bottom: 10px;
    right: 10px;
  }
  ```

- **`sticky`**（粘性定位）
  - 結合 `relative` 和 `fixed` 的特性：元素在正常文檔流中，但當滾動到某個閾值時，變為固定定位。
  - 必須搭配 `top`、`right` 等屬性。
  ```css
  .sticky {
    position: sticky;
    top: 0; /* 當元素頂部到達視口頂部時固定 */
  }
  ```

### 2. **輔助定位屬性**
以下屬性與 `position` 配合使用，控制元素的具體位置和層次：

- **`top`、`right`、`bottom`、`left`**
  - 定義元素相對於其定位參考點的偏移。
  - 適用於 `relative`、`absolute`、`fixed` 和 `sticky`。
  - 值可以是像素（`px`）、百分比（`%`）、或其他單位。
  ```css
  .absolute {
    position: absolute;
    top: 100px;
    left: 50%;
  }
  ```

- **`z-index`**
  - 控制元素在 Z 軸（層疊順序）上的堆疊順序，值越大越靠前顯示。
  - 僅適用於 `position` 為 `relative`、`absolute` 或 `fixed` 的元素。
  ```css
  .front {
    position: absolute;
    z-index: 10; /* 層級高，顯示在前面 */
  }
  .back {
    position: absolute;
    z-index: 5; /* 層級低，顯示在後面 */
  }
  ```

### 3. **示例代碼**
以下是一個結合多種定位方式的綜合示例：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>CSS 定位示例</title>
  <style>
    body {
      margin: 0;
      height: 200vh; /* 設置頁面高度以便滾動 */
    }
    .container {
      position: relative; /* 作為絕對定位的參考 */
      width: 300px;
      height: 200px;
      background: #f0f0f0;
      margin: 20px;
    }
    .relative {
      position: relative;
      top: 20px;
      left: 20px;
      background: #66cc99;
      width: 100px;
      height: 50px;
    }
    .absolute {
      position: absolute;
      top: 50px;
      right: 20px;
      background: #ff9900;
      width: 100px;
      height: 50px;
      z-index: 10;
    }
    .fixed {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background: #0066cc;
      color: white;
      padding: 10px;
      z-index: 20;
    }
    .sticky {
      position: sticky;
      top: 10px;
      background: #cc66cc;
      color: white;
      padding: 10px;
      width: 200px;
    }
  </style>
</head>
<body>
  <div class="sticky">我是粘性定位，滾動時固定在頂部</div>
  <div class="container">
    <div class="relative">相對定位</div>
    <div class="absolute">絕對定位</div>
  </div>
  <div class="fixed">固定定位（右下角）</div>
</body>
</html>
```

### 4. **效果說明**
- **相對定位**：`.relative` 元素向下向右偏移，但保留原位置。
- **絕對定位**：`.absolute` 元素相對於 `.container` 定位（因為 `.container` 是 `relative`）。
- **固定定位**：`.fixed` 元素始終固定在視口右下角，滾動不動。
- **粘性定位**：`.sticky` 元素在滾動到視口頂部時固定。

### 5. **常見應用場景**
- **`relative`**：微調元素位置，或作為絕對定位的參考容器。
- **`absolute`**：用於浮層、彈窗、或精確定位（如工具提示）。
- **`fixed`**：固定導航欄、返回頂部按鈕。
- **`sticky`**：粘性表頭、側邊欄，滾動時保持可見。
- **`z-index`**：控制彈窗、層疊圖層的顯示順序。

### 6. **注意事項**
- **脫離文檔流**：`absolute` 和 `fixed` 會讓元素脫離正常文檔流，可能影響其他元素布局。
- **父元素影響**：`absolute` 定位需要一個非 `static` 的父元素作為參考，否則相對於 `<body>`。
- **瀏覽器兼容性**：`sticky` 在舊版瀏覽器（如 IE）支持有限，需檢查兼容性。
- **單位選擇**：`top` 等屬性支持 `px`、`%`、`vw`、`rem` 等單位，根據需求選擇。

### 7. **進階提示**
- **居中技巧**：使用 `absolute` 結合 `left: 50%; top: 50%; transform: translate(-50%, -50%);` 實現元素精確居中。
- **層疊上下文**：`z-index` 只有在定位元素或創建新層疊上下文（如 `opacity` < 1 或 `transform`）時生效。
- **響應式設計**：結合媒體查詢調整定位屬性以適應不同設備。

------



