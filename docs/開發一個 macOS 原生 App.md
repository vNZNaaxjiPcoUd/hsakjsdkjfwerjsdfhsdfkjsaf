開發一個 macOS 原生 App
====================

以下是 **在 macOS 上使用 Visual Studio Code (VS Code) 開發一個 macOS 原生 App（使用 Swift + SwiftUI 或 AppKit）** 的完整步驟指南。

---

## 前置條件

1. **macOS 系統**（建議 macOS 14 Sonoma 或更新）
2. **Xcode**（從 App Store 安裝，必須安裝才能使用 Swift 編譯器）
3. **VS Code**（從 [官方網站](https://code.visualstudio.com/) 下載安裝）
4. **Command Line Tools**（Xcode 會自動安裝，或手動執行：`xcode-select --install`）

---

## 步驟 1：安裝 VS Code 擴充套件

打開 VS Code，安裝以下擴充：

| 擴充名稱 | 功能 |
|--------|------|
| **CodeLLDB** | 除錯 Swift 程式 |
| **Swift for Visual Studio Code**（由 Swift Server 工作組維護） | Swift 語法高亮、語法檢查、自動完成 |

> 搜尋並安裝：
> - `vadimcn.vscode-lldb`（CodeLLDB）
> - `sswg.swift-lang`（Swift for VS Code）

---

## 步驟 2：建立一個 macOS App 專案

我們使用 **Swift Package Manager (SPM)** 建立一個 macOS App。

### 在終端機執行：

```bash
mkdir MyMacApp
cd MyMacApp

# 建立一個 macOS App 的 Swift Package
swift package init --type executable
```

> 注意：這會建立一個命令列工具。我們要改成 **macOS App**。

---

## 步驟 3：改成 macOS App 結構

### 1. 編輯 `Package.swift`

替換內容為：

```swift
// swift-tools-version:5.9
import PackageDescription

let package = Package(
    name: "MyMacApp",
    platforms: [.macOS(.v14)],
    products: [
        .app(name: "MyMacApp", targets: ["MyMacApp"])
    ],
    targets: [
        .executableTarget(
            name: "MyMacApp",
            swiftSettings: [
                .unsafeFlags(["-parse-as-library"])
            ]
        )
    ]
)
```

> `.app` 產品類型會讓 SwiftPM 打包成 `.app`

---

### 2. 建立 App 入口檔案

創建資料夾與檔案：

```bash
mkdir -p Sources/MyMacApp
touch Sources/MyMacApp/main.swift
touch Sources/MyMacApp/AppDelegate.swift
touch Sources/MyMacApp/ContentView.swift
```

---

### 3. 撰寫程式碼

#### `Sources/MyMacApp/main.swift`

```swift
import Cocoa

let app = NSApplication.shared
let delegate = AppDelegate()
app.delegate = delegate
_ = NSApplicationMain(CommandLine.argc, CommandLine.unsafeArgv)
```

---

#### `Sources/MyMacApp/AppDelegate.swift`

```swift
import Cocoa
import SwiftUI

class AppDelegate: NSObject, NSApplicationDelegate {
    var window: NSWindow!

    func applicationDidFinishLaunching(_ notification: Notification) {
        // 建立視窗
        window = NSWindow(
            contentRect: NSRect(x: 0, y: 0, width: 800, height: 600),
            styleMask: [.titled, .closable, .miniaturizable, .resizable],
            backing: .buffered,
            defer: false
        )
        window.center()
        window.title = "My Mac App"
        
        // 使用 SwiftUI 作為內容
        let contentView = ContentView()
        window.contentView = NSHostingView(rootView: contentView)
        
        window.makeKeyAndOrderFront(nil)
    }
}
```

---

#### `Sources/MyMacApp/ContentView.swift`

```swift
import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            Image(systemName: "star.fill")
                .font(.system(size: 60))
                .foregroundColor(.yellow)
            Text("Hello, macOS!")
                .font(.largeTitle)
                .padding()
            Button("點我！") {
                print("按鈕被點擊！")
            }
            .padding()
            .background(Color.blue)
            .foregroundColor(.white)
            .cornerRadius(8)
        }
        .padding()
        .frame(maxWidth: .infinity, maxHeight: .infinity)
    }
}
```

---

## 步驟 4：在 VS Code 中開啟專案

```bash
code .
```

VS Code 會自動偵測 Swift Package，啟用 Swift 擴充功能。

---

## 步驟 5：編譯與執行

### 方法 1：用終端機

```bash
swift run
```

> 會自動編譯並啟動 `.app`，顯示視窗！

---

### 方法 2：用 VS Code 除錯（推薦）

1. 按 `F5` 或點左側「Run and Debug」
2. 選擇 **「Launch MyMacApp」**
3. 若無配置，VS Code 會提示建立 `launch.json`

#### `.vscode/launch.json` 範例：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "lldb",
            "request": "launch",
            "name": "Debug MyMacApp",
            "program": "${workspaceFolder}/.build/debug/MyMacApp.app/Contents/MacOS/MyMacApp",
            "args": [],
            "cwd": "${workspaceFolder}",
            "preLaunchTask": "swift: Build Debug MyMacApp"
        }
    ]
}
```

#### `.vscode/tasks.json`（建置任務）

```json
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "swift: Build Debug MyMacApp",
            "type": "shell",
            "command": "swift build",
            "group": "build",
            "problemMatcher": "$swiftc"
        }
    ]
}
```

> 按 `F5` 即可 **除錯執行**，支援中斷點！

---

## 步驟 6：打包發佈（可選）

```bash
swift package archive
```

或手動打包：

```bash
# 建立 Release 建置
swift build -c release

# 複製成 .app
cp -r .build/release/MyMacApp.app ~/Desktop/MyMacApp.app
```

---

## 其他建議

| 功能 | 建議 |
|------|------|
| 圖示 | 加入 `Assets.xcassets/AppIcon.appiconset`（需用 Xcode 建立） |
| 簽名 | 使用 Xcode 開啟專案簽名 |
| 發佈 | 用 Xcode 建立 `.xcarchive` 並上傳 App Store |

---

## 總結：你已經成功！

| 步驟 | 完成 |
|------|------|
| 安裝 Xcode + VS Code + 擴充 | ✅ |
| 用 SwiftPM 建立 macOS App | ✅ |
| 用 SwiftUI 寫介面 | ✅ |
| 在 VS Code 除錯執行 | ✅ |

---

## 參考資源

- [Swift for VS Code](https://github.com/swiftlang/vscode-swift)
- [Apple SwiftUI 官方文件](https://developer.apple.com/documentation/swiftui)
- [Swift Package Manager 官方](https://swift.org/package-manager/)

---

如果你想要 **用 Objective-C + AppKit** 或 **加入圖示、選單列、通知**，也可以告訴我，我可以繼續幫你擴充！

需要我幫你產生完整專案壓縮檔結構嗎？
