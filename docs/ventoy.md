Ventoy ISO 開機工具
=====

Homepage https://www.ventoy.net/en/doc_start.html

## Linux GUI (WebUI)

-  1. Background

For convenience, Ventoy has provided a web browser-based GUI in Linux system since 1.0.36.  
The UI layout and usage have no difference with Ventoy2Disk.exe in Windows.  

Notes: If you run into problem, you can use Ventoy2Disk.sh to install or update Ventoy. Refer [usage](https://www.ventoy.net/en/doc_start.html#doc_linux_cli)

-  2. Screenshot

![](https://www.ventoy.net/static/img/webui_en.png)

-  3. Usage

- 3.1 How to use
1. run `sudo bash VentoyWeb.sh` in the terminal  
2. open browser and visit `http://127.0.0.1:24680`

Tip: Step 1 will print the http address in the terminal. In many distros you can just press `Ctrl` and click the link with your mouse meanwhile.  

By default, VentoyWeb.sh listen on 127.0.0.1:24680, and you can only visit it on the localhost.  
You can also specify the IP and port like this `sudo bash VentoyWeb.sh -H 192.168.0.100 -P 8080`  
Then you can visit the WebUI from another computer. This is very convenient in some cases.  
For example, you have a computer with Linux in it, but it doesn't have a GUI environment. You can run the script as above, and visit the WebUI from another computer (e.g. Windows) as long as they are connected on the internet.

- 3.2 How to close

1、Close the web browser  
2、In the terminal, press `Ctrl + c` to exit
