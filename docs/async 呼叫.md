async 呼叫
==========



當你呼叫一個 `async` 函數 `B = A()` 時，變數 `B` 拿到的是一個 **Promise 物件**。要處理裡面的 `resolve`（成功）和 `reject`（失敗），主要有兩種方式：

### 方法一：使用 `.then()` 和 `.catch()`
這是最傳統的處理方式，不需要在另一個 `async` 環境下就能使用。

```javascript
async function A() {
  return new Promise((resolve, reject) => {
    const success = true; // 模擬成功或失敗
    if (success) {
      resolve("成功得到的資料");
    } else {
      reject("發生錯誤的原因");
    }
  });
}

// 呼叫 A()
const B = A();

B.then((data) => {
  // 這裡對應 resolve
  console.log("收到資料:", data);
})
.catch((error) => {
  // 這裡對應 reject
  console.error("抓到錯誤:", error);
});
```

---

### 方法二：使用 `await` 與 `try...catch` (推薦)
如果你是在另一個 `async` 函數內部呼叫 `A()`，這種寫法會讓程式碼看起來更像同步執行的邏輯，可讀性較高。

```javascript
async function caller() {
  try {
    // await 會直接取出 resolve 的值
    const result = await A(); 
    console.log("成功:", result);
  } catch (error) {
    // 如果 A 裡面執行了 reject，會直接跳到這裡
    console.error("失敗:", error);
  }
}

caller();
```

---

### 重點概念補充

1.  **`B` 到底是什麼？**
    當你執行 `B = A()` 時，`B` 是一個處於 `pending`（等待中）狀態的 Promise。它不會立刻給你結果，必須透過上述兩種方式來「拆解」它。

2.  **`async` 函數的特性：**
    *   在 `async` 函數中，`return "hello"` 等同於 `resolve("hello")`。
    *   在 `async` 函數中，`throw new Error("oops")` 等同於 `reject("oops")`。
    *   即使你手寫了 `return new Promise(...)`，`async` 依然會確保回傳值是一個 Promise。

3.  **如果沒寫 `.catch()` 或 `try...catch` 會怎樣？**
    如果 `A()` 執行了 `reject`，但你外層呼叫時沒有捕捉錯誤，瀏覽器或 Node.js 會跳出 **`Uncaught (in promise)`** 的紅字警告，這在正式專案中應該要避免。

**總結建議：**
*   如果你在 **全域** 或 **一般函數** 呼叫：用 `.then().catch()`。
*   如果你在 **async 函數** 內部呼叫：用 `await` 搭配 `try...catch`。
