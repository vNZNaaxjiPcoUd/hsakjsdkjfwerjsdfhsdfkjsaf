yt-dlp
======


    sudo wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp

    sudo chmod a+rx yt-dlp

    wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O yt-dlp

    chmod a+rx yt-dlp

-F 	列出所有可供下載的格式及格式程式碼

-f [FORMAT] 	指定格式程式碼

| ID  EXT  RESOLUTION FPS CH | FILESIZE TBR PROTO | VCODEC  VBR ACODECABR ASR MORE INFO |
| ---- | ---- | --- |
| sb3  mhtml 48x27  0 | mhtml | images storyboard |
| sb2  mhtml 80x45  0 | mhtml | images  storyboard |
| sb1  mhtml 160x90 0 | mhtml | images  storyboard |
| sb0  mhtml 320x1800 | mhtml | images  storyboard |
| 233  mp4 audio only  | m3u8  | audio only  unknown Default |
| 234  mp4 audio only  | m3u8  | audio only  unknown Default |
| 139-drc m4a audio only2 | 8.84MiB 49k https | audio only  mp4a.40.549k 22k low, DRC, m4a_dash |
| 139  m4a audio only2 | 8.84MiB 49k https | audio only  mp4a.40.549k 22k low, m4a_dash |
| 140-drc m4a audio only2 |23.47MiB129k https | audio only  mp4a.40.2  129k 44k medium, DRC, m4a_dash |
| 140  m4a audio only2 |23.47MiB129k https | audio only  mp4a.40.2  129k 44k medium, m4a_dash |
| 602  mp4256x144  15 | ~ 18.51MiB102k m3u8  | vp09.00.10.08102k video only |
| 269  mp4256x144  30 | ~ 31.05MiB171k m3u8  | avc1.4D400C  171k video only |
| 160  mp4256x144  30 |15.40MiB 85k https | avc1.4D400C85k video only 144p, mp4_dash |
| 603  mp4256x144  30 | ~ 31.40MiB173k m3u8  | vp09.00.11.08173k video only |
| 229  mp4426x240  30 | ~ 56.68MiB313k m3u8  | avc1.4D4015  313k video only |
| 133  mp4426x240  30 |34.12MiB188k https | avc1.4D4015  188k video only 240p, mp4_dash |
| 604  mp4426x240  30 | ~ 57.92MiB319k m3u8  | vp09.00.20.08319k video only |
| 230  mp4640x360  30 | ~145.74MiB804k m3u8  | avc1.4D401E  804k video only |
| 134  mp4640x360  30 |74.27MiB410k https | avc1.4D401E  410k video only 360p, mp4_dash |
| 605  mp4640x360  30 | ~141.92MiB783k m3u8  | vp09.00.21.08783k video only |
| 231  mp4854x480  30 | ~306.22MiB  1689k m3u8  | avc1.4D401F 1689k video only |
| 135  mp4854x480  30 |  122.17MiB674k https | avc1.4D401F  674k video only 480p, mp4_dash |
| 606  mp4854x480  30 | ~226.81MiB  1251k m3u8  | vp09.00.30.08  1251k video only |
| 311  mp41280x720 60 | ~690.06MiB  3806k m3u8  | avc1.4D4020 3806k video only |
| 298  mp41280x720 60 |  518.81MiB  2862k https | avc1.4D4020 2862k video only 720p60, mp4_dash |
| 612  mp41280x720 60 | ~702.43MiB  3874k m3u8  | vp09.00.40.08  3874k video only |
| 312  mp41920x108060 | ~  1.18GiB  6686k m3u8  | avc1.64002A 6686k video only |
| 299  mp41920x108060 |  902.42MiB  4978k https | avc1.64002A 4978k video only 1080p60, mp4_dash |
| 617  mp41920x108060 | ~  1.12GiB  6345k m3u8  | vp09.00.41.08  6345k video only |
| 623  mp42560x144060 | ~  2.72GiB 15374k m3u8  | vp09.00.50.08 15374k video only |
| 628  mp43840x216060 | ~  5.02GiB 28343k m3u8  | vp09.00.51.08 28343k video only |






通常1080p以上品質的影片並不會自帶聲音
    所以要額外多加下載音訊檔案
    選定你想要的影片和音訊內容
    在2者之間的ID加上 + 這個符號
    示範如下

    yt-dlp -f 303+251 https://youtu.be/mimLMJO5o9o

    或用merge

    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a copy -map 0:v -map 1:a output.mp4


--extract-audio 	將影片檔案轉換為純音訊檔案

--audio-format [FORMAT] 	指定音訊格式 目前支援 mp3 / m4a / opus / wav / aac / flac / vorbis

--recode-video [FORMAT] 	指定影片格式 目前支援 mp4 / flv / ogg / webm / mkv / avi

--embed-subs 	嵌入字幕至影片中 僅適用於mp4 / webm / mkv

--concurrent-fragments [N] 	
    多線程下載 可以指定你想要的線程數
    如不使用此指令 預設線程數為1

--version 	確認當前yt-dlp版本

--update 	更新yt-dlp

--output 'X:\[PATH]' 	指定檔案輸出位置




    wget https://yt-dl.org/downloads/latest/youtube-dl

    chmod +x youtube-dl

    youtube-dl

    ./youtube-dl -f 22 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PLATwx1z00HscKbq4ImEJrOh_7EsAtv-iZ;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 

https://youtube.com/playlist?list=PLATwx1z00HscKbq4ImEJrOh_7EsAtv-iZ

https://www.youtube.com/watch?v=D8K8nbposnI

    ./youtube-dl -F https://www.youtube.com/watch?v=D8K8nbposnI


https://www.youtube.com/playlist?list=PLzNcE0R_T2fpJgrWKNyrsryxJQ4NkRgTq

    ./youtube-dl -f 251 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PL0jbufV9LjGrPNm4wCO85XCtAKLyQcEjc;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 



https://www.youtube.com/watch?v=nWb_X3ZJQjw&list=PLDgLLnSBXR_MdsJ_b_lXNKU9y8dTJZU08

    ./youtube-dl -f 140 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=PLDgLLnSBXR_MEiSCD8RDFPgNoCqkZPQz0;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; sleep 1; echo $'\07'; sleep 1; echo $'\07';


    ./youtube-dl -f 140 --max-sleep-interval 10 --min-sleep-interval 3 https://www.youtube.com/watch?list=RD2nry60MCU8U;echo $'\07'; sleep 1; echo $'\07'; sleep 1;  echo $'\07'; 

https://www.youtube.com/watch?v=2nry60MCU8U&list=RD2nry60MCU8U


p(youtubedl)


https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#readme

