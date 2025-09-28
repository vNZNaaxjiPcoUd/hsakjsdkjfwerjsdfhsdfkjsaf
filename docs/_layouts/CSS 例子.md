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

### 说明
- **代码结构**：每个CSS示例都针对特定功能（字体、布局、动画等），可直接复制使用。
- **用途**：这些示例覆盖了CSS的基础和高级用法，适合初学者和进阶开发者。
- **扩展**：你可以根据需要调整属性值或结合HTML结构测试效果。
- 如果需要更具体或复杂的CSS示例（例如表单样式、导航栏、特定动画），请告诉我，我可以提供更详细的代码！
