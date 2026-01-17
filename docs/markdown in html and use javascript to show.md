---
title: markdown in html and use javascript to show
layout: empty
srcMd: https://h.jwint.net/Google%20DDNS.html
---
<html lang="zh-TW">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Markdown 渲染</title>

  <!-- GitHub Markdown 風格 CSS -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css" />

  <!-- 程式碼高亮（可選，但強烈推薦） -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/styles/atom-one-dark.min.css" />

  <style>
    html, body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: #0d1117;
      color: #c9d1d9;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
    }

    .markdown-body {
      box-sizing: border-box;
      width: 100%;
      min-height: 100vh;
      margin: 0;
      padding: 2rem 1.5rem;          /* 上下 2rem，左右 1.5rem */
      background: #161b22;
      /* 移除 max-width，讓它盡量撐滿 */
    }

    /* 手機或窄螢幕再縮小一點邊距 */
    @media (max-width: 768px) {
      .markdown-body {
        padding: 1.5rem 1rem;
      }
    }

    /* 程式碼區塊稍微美化 */
    pre {
      background: #0d1117;
      padding: 1.5rem;
      border-radius: 8px;
      overflow-x: auto;           /* 避免程式碼太長時破版 */
    }

    #loading {
      text-align: center;
      padding: 4rem 1rem;
      color: #888;
      font-size: 1.2em;
    }

    .error {
      color: #ff6b6b;
      text-align: center;
      padding: 2rem 1rem;
    }

    /* 讓表格也能適應寬度 */
    .markdown-body table {
      width: 100%;
      border-collapse: collapse;
    }
  </style>
</head>
<body>

<div id="loading">正在載入 Markdown 內容...</div>
<div id="content" class="markdown-body" style="display:none;"></div>

<!-- Showdown.js -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/2.1.0/showdown.min.js"></script>
<!-- highlight.js 程式碼高亮 -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.10.0/highlight.min.js"></script>

<script>
// Markdown 來源 URL
const markdownUrl = 'https://h.jwint.net/DDNS%20for%20Google.md';

/*
const markdownText = `
# Showdown Markdown 範例

這是一個使用 **Showdown.js** 渲染 Markdown 的簡單頁面。

## 支援的功能

- **粗體**、_斜體_、~~刪除線~~
- [連結](https://github.com/showdownjs/showdown)
- 無序列表
  - 項目 1
  - 項目 2
- 有序列表
  1. 第一步
  2. 第二步
`;
*/

// 建立 Showdown 轉換器
const converter = new showdown.Converter({
  tables: true,
  tasklists: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  emoji: true,
  ghCompatibleHeaderId: true,
  parseImgDimensions: true,
  smoothLivePreview: true
});

async function loadAndRenderMarkdown() {
  try {
    const response = await fetch(markdownUrl);
    
    if (!response.ok) {
      throw new Error(`無法載入檔案 (HTTP ${response.status})`);
    }
    
    const markdownText = await response.text();
    
    // 轉換成 HTML
    const html = converter.makeHtml(markdownText);
    
    // 輸出到頁面
    document.getElementById('content').innerHTML = html;
    document.getElementById('content').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    
    // 高亮所有程式碼區塊
    hljs.highlightAll();
    
  } catch (error) {
    console.error('載入 Markdown 失敗:', error);
    document.getElementById('loading').innerHTML = 
      '<div class="error">載入失敗，請檢查網路或網址是否正確<br>' + 
      error.message + '</div>';
  }
}

// 執行載入
loadAndRenderMarkdown();
</script>
</body>
</html>
