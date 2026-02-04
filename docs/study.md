study
=====


### document.querySelectorAll('.sub-tab-button').forEach(btn => btn.classList.remove('active')); 這什麼意思？
Model
這個 JavaScript 程式碼片段的意思是：
「找出網頁上所有具有 .sub-tab-button 這個 CSS 類別（class）的元素，並將它們身上的 active 類別移除。」
讓我們逐步分解這行程式碼：
document.querySelectorAll('.sub-tab-button')
document: 指的是整個 HTML 網頁文件。
querySelectorAll: 是一個方法，用來在文件中搜尋所有符合指定 CSS 選擇器（selector）的元素。
('.sub-tab-button'): 這是 CSS 選擇器，前面的點（.）表示它是一個類別名稱（class name）。所以，這部分會選出所有在 HTML 中 class 屬性裡包含 sub-tab-button 的元素（例如：<button class="sub-tab-button active">...</button>）。
結果: 這一部分會回傳一個包含所有找到的元素的列表（NodeList）。[1][2]
.forEach(btn => ...)
.forEach(): 是一個迴圈方法，它會遍歷（iterate）前面找到的元素列表，並對列表中的每一個元素執行一個動作。
(btn => ...): 這是一個箭頭函式（Arrow Function），表示要執行的動作。在每次迴圈中，當前被處理的元素會被賦值給變數 btn。
btn.classList.remove('active')
btn: 指的是目前迴圈正在處理的那個按鈕或其他元素。
classList: 是一個屬性，它允許你方便地操作元素的 CSS 類別清單。
.remove('active'): 是一個方法，它會從該元素（btn）的類別清單中，移除 active 這個類別名稱。[3][4]
總結來說，這個動作通常是用來「取消選中」或「停用」所有次分頁按鈕的活躍狀態，以便稍後將 active 類別添加到新的選中按鈕上，從而實現分頁或切換效果。