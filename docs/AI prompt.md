AI prompt
=========
[https://www.llama.com/docs/how-to-guides/prompting/#crafting-effective-prompts
](https://www.llama.com/docs/how-to-guides/prompting/#crafting-effective-prompts)

[https://docs.llamaindex.ai/en/stable/module_guides/models/prompts/](https://docs.llamaindex.ai/en/stable/module_guides/models/prompts/)

# 提示

[*連結到筆記本，*](https://github.com/meta-llama/llama-recipes/blob/main/recipes/quickstart/Prompt_Engineering_with_Llama_3.ipynb)*顯示本節討論的技術範例。*

提示工程是自然語言處理 (NLP) 中使用的一種技術，透過為他們提供有關手頭任務的更多上下文和資訊來提高語言模型的效能。它涉及創建提示，提示是為模型提供附加資訊或指導的簡短文本，例如它將生成的文本的主題或類型。透過使用提示，模型可以更好地了解預期的輸出類型，並產生更準確和相關的結果。在 Llama 2 中，上下文的大小（就標記數量而言）從 2048 個增加了一倍，達到 4096 個。

## 製作有效的提示

製作有效的提示是提示工程的重要組成部分。以下是一些創建提示的技巧，有助於提高語言模型的效能：

1. 清晰簡潔：您的提示應該易於理解，並為模型產生相關輸出提供足夠的資訊。避免使用可能使模型混淆的行話或技術術語。
2. 使用具體範例：在提示中提供具體範例可以幫助模型更好地理解預期的輸出類型。例如，如果您希望模型產生有關特定主題的故事，請包含一些有關背景、人物和情節的句子。
3. 改變提示：使用不同的提示可以幫助模型更了解手邊的任務，並產生更多樣化和創造性的輸出。嘗試使用不同的風格、語氣和格式來查看模型的反應。
4. 測試和最佳化：創建一組提示後，在模型上測試它們以查看其性能。如果結果不符合預期，請嘗試透過添加更多細節或調整語氣和風格來完善提示。
5. 使用回饋：最後，使用使用者或其他來源的回饋來不斷改進您的提示。這可以幫助您識別模型需要更多指導的領域並做出相應的調整。

## 明確指示

詳細、明確的指示比開放式提示產生更好的結果：您可以考慮使用規則和限制來給出明確的指令，以限制 Llama 2 如何回應您的提示。

風格化

`Explain this to me like a topic on a children's educational network show teaching elementary students.`

`I'm a software engineer using large language models for summarization. Summarize the following text in under 250 words:`

`Give your answer like an old timey private investigator hunting down a case step by step.`

格式化

`Use bullet points.`

`Return as a JSON object.`

`Use less technical terms and help me apply it in my work in communications.`

限制

`Only use academic papers.`

`Never give sources older than 2020.`

`If you don't know the answer, say that you don't know.`



以下是透過限制對最近創建的來源的回應來給出明確指示以提供更具體結果的範例：


`Explain the latest advances in large language models to me.`
`#  More likely to cite sources from 2017`

`Explain the latest advances in large language models to me. Always cite your sources.`
`Never cite sources older than 2020.`
`# Gives more specific advances and only cites sources from 2020`

## 使用零樣本和少樣本學習進行提示

鏡頭是您期望從大型語言模型中獲得哪種類型的提示和回應的範例或演示。該術語起源於在照片上訓練電腦視覺模型，其中一個鏡頭是模型用於對影像進行分類的範例或實例。

零樣本提示

像 Meta Llama 這樣的大型語言模型能夠遵循指令並產生回應，而無需事先查看任務範例。沒有範例的提示稱為「零樣本提示」。

`Text: This was the best movie I've ever seen! `
`The sentiment of the text is:`

`Text: The director was trying too hard.`
`The sentiment of the text is:`

少發提示

添加所需輸出的具體範例通常會產生更準確、一致的輸出。這種技巧稱為「少發提示」。在此範例中，產生的回應遵循我們所需的格式，提供更細緻的情緒分類器，給出正面、中性和負面回應置信度百分比。

`You are a sentiment classifier. For each message, give the percentage of positive/netural/negative. Here are some samples:`
`Text: I liked it`
`Sentiment: 70% positive 30% neutral 0% negative`
`Text: It could be better`
`Sentiment: 0% positive 50% neutral 50% negative`
`Text: It's fine`

`Sentiment: 25% positive 50% neutral 25% negative`

`Text: I thought it was okay`

`Text: I loved it!`

`Text: Terrible service 0/10`

## 基於角色的提示

根據所處理的個人或實體的角色或觀點建立提示。該技術可用於從語言模型產生更相關且更具吸引力的回應。

**優點：**

1. 提高相關性：基於角色的提示有助於語言模型理解所處理的人或實體的角色或觀點，這可以導致更相關和更有吸引力的回應。
2. 提高準確性：提供有關所處理的個人或實體的角色或觀點的附加上下文可以幫助語言模型避免犯錯或誤解。

**缺點：**

1. 需要付出努力：需要付出更多努力來收集和提供有關所處理的個人或實體的角色或觀點的必要資訊。

**例子：**

`You are a virtual tour guide currently walking the tourists Eiffel Tower on a night tour. Describe Eiffel Tower to your audience that covers its history, number of people visiting each year, amount of time it takes to do a full tour and why do so many people visit this place each year.`

## 思想鏈技術

涉及向語言模型提供一系列提示或問題，以幫助指導其思維並產生更連貫和相關的回應。此技術可用於從語言模型產生更周到且合理的回應。

**優點：**

1. 提高連貫性：幫助語言模型以邏輯和結構化的方式思考問題或問題，這可以導致更連貫和相關的回應。
2. 增加深度：提供一系列提示或問題可以幫助語言模型更深入、更徹底地探索某個主題，從而可能產生更有洞察力和資訊量的回應。

**缺點：**

1. 需要努力：思維鏈技術需要更多的努力來創建和提供必要的提示或問題。

**例子：**

`You are a virtual tour guide from 1901. You have tourists visiting Eiffel Tower. Describe Eiffel Tower to your audience. Begin with`
`1. Why it was built`
`2. Then by how long it took them to build`
`3. Where were the materials sourced to build`
`4. Number of people it took to build`
`5. End it with the number of people visiting the Eiffel tour annually in the 1900's, the amount of time it completes a full tour and why so many people visit this place each year.`
`Make your tour funny by including 1 or 2 funny jokes at the end of the tour.`


## 自我一致性

法學碩士是機率性的，因此即使使用思想鏈，一代也可能產生不正確的結果。自我一致性透過從多代中選擇最常見的答案來提高準確性（以更高的計算為代價）：

`John found that the average of 15 numbers is 40.`
`If 10 is added to each number then the mean of the numbers is?`
` Report the answer surrounded by three backticks, for example: ```123``` `

運行上述幾次並採用最常見的返回值作為答案將利用自洽方法。

## 檢索增強生成

常見事實通常可以從當今開箱即用的大型模型中獲得（即僅使用模型權重）。但不太可能提供更具體的數據，例如：

`What is the capital of  California?`
`# The capital of California is Sacramento...`

`What was the temperature in Menlo Park on December 12th, 2023?`
`# I'm just an AI, I don't have have access to real-time or historical weather data...`

檢索增強生成（RAG）描述了在提示中包含從外部資料庫檢索的資訊的做法。這是將事實納入 LLM 申請的有效方法，並且比微調更經濟，微調也可能對基礎模型的功能產生負面影響。

這可以像查找表一樣簡單，也可以像包含公司所有知識的向量資料庫一樣複雜：

`Given the following information about temperatures in Menlo Park:`
`2023-12-11 :  52 degrees Fahrenheit`
`2023-12-12 :  51 degrees Fahrenheit`
`2023-12-13 :  55 degrees Fahrenheit`
`What was the temperature in Menlo Park on 2023-12-12?`

`# Sure! The temperature in Menlo Park on 2023-12-12 was 51 degrees Fahrenheit.`

`What was the temperature in Menlo Park on 2023-07-18 ?`

`# Sorry, I don't have information about the temperature in Menlo Park on 2023-07-18. The information provided only includes temperatures for December 11th, 12th, and 13th of 2023.`

## 程式輔助語言模型

法學碩士本質上不擅長執行計算。雖然法學碩士不擅長算術，但他們非常擅長程式碼生成。程式輔助語言透過指示法學碩士編寫程式碼來解決計算任務來利用這一事實。

`Python code to calculate: ((-5 + 93 * 4 - 0) * (4^4 + -7 + 0 * 5))`

`Here is the Python code to calculate the given expression:`

`((-5 + 93 * 4 - 0) * (4**4 + -7 + 0 * 5))`

`# Calculate the expression inside the parentheses`
`a = -5 + 93 * 4 - 0`
`b = 4**4 + -7 + 0 * 5`

`# Multiply a and b`
`result = a * b`

`# Print the result`
`print(result)`

直接使用程式碼可以提供正確的結果。

## 限制無關令牌

一個常見的挑戰是產生沒有無關標記的回應（例如「當然！這裡有更多關於...的資訊」）。

透過組合角色、規則和限制、明確指令和範例，可以提示模型產生所需的回應。

`You are a robot that only outputs JSON.`
`You reply in JSON format with the field 'zip_code'.`
`Example question: What is the zip code of the Empire State Building? `
`Example answer: {'zip_code': 10118}`
`Now here is my question: What is the zip code of Menlo Park?`

`# "{'zip_code': 94025}"`

直接使用程式碼可以提供正確的結果。

## 減少幻覺

Meta 的[負責任使用指南](https://ai.meta.com/static-resource/responsible-use-guide/)是了解如何最好地提示和解決語言模型的輸入/輸出風險的重要資源。請參閱第 (14-17) 頁。

以下是語言模型如何產生幻覺的一些範例以及解決該問題的一些策略：

**範例1：**

語言模型被要求產生對其未經訓練的主題的問題的回應。語言模型可能會產生幻覺資訊或編造不準確或沒有證據支持的事實。

**修復：**要修復此問題，您可以為語言模型提供更多有關該主題的上下文或信息，以幫助其理解所詢問的內容並產生更準確的回應。您也可以要求語言模型為其提出的任何主張提供來源或證據，以確保其回應基於事實資訊。

**範例2：**

語言模型被要求產生需要特定觀點或觀點的問題的答案。語言模型可能會產生幻覺訊息或編造與所需觀點或觀點不一致的事實。

**修復：**要解決此問題，您可以向語言模型提供有關所需觀點或觀點的附加信息，例如所處理的個人或實體的目標、價值觀或信念。這可以幫助語言模型理解上下文並產生與所需的視角或觀點更一致的回應。

**範例3：**

語言模型被要求產生需要特定語氣或風格的問題的答案。語言模型可能會產生幻覺訊息或編造與所需語氣或風格不一致的事實。

**修復：**要修復此問題，您可以向語言模型提供有關所需語氣或風格的附加信息，例如受眾或溝通目的。這可以幫助語言模型理解上下文並產生與所需語氣或風格更一致的回應。

總的來說，避免語言模型產生幻覺的關鍵是為他們提供清晰準確的資訊和上下文，並仔細監控他們的反應，以確保它們符合你的期望和要求。
