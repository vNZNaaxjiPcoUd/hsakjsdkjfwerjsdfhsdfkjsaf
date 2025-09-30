ffmpeg
======

# Readme.md

## backup in https://vnzn.jwint.net/hsakjsdkjfwerjsdfhsdfkjsaf/blob/ver22/docs/ffmpeg.md

# 轉成mp3
    ffmpeg -i in.m4a -codec:a libmp3lame out.mp3

# mp3 轉成mp4 libx264
    ffmpeg -loop 1 -i inpic.jpg -i audio.mp3 -c:v libx264 -c:a aac -shortest -vf "format=yuv420p" -threads 0 output.mp4

    ffmpeg -loop 1 -i inpic.jpg -i gu.m4a -c:v h264_videotoolbox -b:v 500k -g 600 -c:a aac -shortest -vf "format=yuv420p" out.mp4

### 合成 video(no audio) + audio
    ffmpeg -i in.mp4 -i in.m4a -c:v copy -c:a copy -shortest -threads 0 SpOut3.mp4

### 縮小檔案
    ffmpeg -i input.mp4 -vf scale=640:360 -c:v hevc_videotoolbox -b:v 500k -r 24 -c:a aac -b:a 96k output.mp4

    ffmpeg -i input.mp4 -vf scale=640:360 -c:v libx265 -crf 30 -preset veryslow -r 24 -c:a aac -b:a 96k output.mp4


### 連結 m4a
    ls *.m4a | while read -r file; do echo "file '$file'" >> files.txt; done
    ffmpeg -f concat -safe 0 -i files.txt -c copy output.m4a

    ffmpeg -f concat -safe 0 -i files.txt -c:a aac output2.m4a


### normalize
    ffmpeg -i gu.m4a -filter_complex "[0:a]loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=-24.1:measured_TP=0.2:measured_LRA=7.4:measured_thresh=-34.5:linear=true[normalized]" -map "[normalized]" -c:a aac -b:a 192k output.m4a


### 變小音檔案
    ffmpeg -i input.wav -c:a mp3 -ar 22050 -q:a 8 -ac 1 output2.mp3
    ffmpeg -i input.wav -c:a mp3 -q:a 9 -ac 1 output2.mp3
    ffmpeg -i input.wav -c:a mp3 -ar 22050 -q:a 9 output2.mp3
- ar > sampling rate
- q:a > VBR rate, 1-9, 9 is high compress
- ac > channel

----------------------
# GPU use
### 查看支援的GPU
    ffmpeg -encoders | grep videotoolbox

### h264_videotoolbox 用GPU壓縮 檔案會很大，
    ffmpeg -loop 1 -i myimage.png -i mysong.mp3 -c:v h264_videotoolbox -b:v 6000k -c:a aac -shortest -vf "format=yuv420p" output.mp4

    ffmpeg -loop 1 -i myimage.png -i mysong.mp3 -c:v h264_videotoolbox -b:v 800k -c:a aac -shortest -vf "format=yuv420p" output.mp4

### hevc_videotoolbox 有些不相容
    ffmpeg -loop 1 -i myimage.png -i mysong.mp3 -c:v hevc_videotoolbox -b:v 4000k -c:a aac -shortest -vf "format=yuv420p" output.mp4

# 用GPU壓縮 這個檔案會小一點，因為改為720P
    ffmpeg -loop 1 -i myimage.png -i mysong.mp3 -c:v h264_videotoolbox -b:v 800k -g 600 -c:a aac -b:a 96k -shortest -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2,format=yuv420p" output.mp4


### Ref
https://p.jwint.net/ffmpegprwp
https://blog.miniasp.com/post/2022/10/08/Useful-tool-FFmpeg

### cut sound
    ffmpeg -i sleepsound.m4a -ss 00:00:00 -t 01:00:00 -c:a copy output1.m4a

    ffmpeg -i sleepsoundsmall.m4a -codec:a libmp3lame sleepsoundsmall.mp3

## merge yutube video audio
video 160
audio 140

    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a aac -map 0:v -map 1:a output.mp4



----

# Work space

----

# mp3 to mp4

    ffmpeg -loop 1 -i pic.small.jpg -i xm.mp3 -c:a aac -c:v libx264 -shortest xm.mp4

    ffmpeg -loop 1 -i flow.small.jpg -i 59.m4a -c:a copy -c:v libx264 -shortest 59.mp4 ; vvbeep

    ffmpeg -f concat -safe 0 -i <(for f in 59Song/*.m4a; do echo "file '$PWD/$f'"; done) -c copy ./59.m4a



# merge yutube video audio

video 160 (-f 160)

audio 140 (-f 140)

    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a aac -map 0:v -map 1:a output.mp4

    ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a copy -map 0:v -map 1:a output.mp4

# to mp3
    ffmpeg -i audio.ogg -acodec mp3 newfile.mp3

# to mp4
    ffmpeg -i totoro.mkv -c:v libx264 -c:a aac ttt.mp4

# to mov
    ffmpeg -i ttr2.mp4 -c:v libx264 -pix_fmt yuv420p -crf 24 ttrr2.mov

# cut audio
    ffmpeg -i sleepsound.m4a -ss 00:00:00 -t 01:00:00 -c:a copy output1.m4a

    ffmpeg -i video.mp4 -ss 00:00:20 -t 00:22:23 outvideo.mp4

# multi m4a to one m4a
    ffmpeg -f concat -safe 0 -i <(for f in 59Song/*.m4a; do echo "file '$PWD/$f'"; done) -c copy ./59.m4a
    
    ffmpeg -f concat -safe 0 -i mylist.txt -c copy output.wav

# multi mp3 to one mp3
    cat file/*.mp3 > out.mp3

# to mp3
    ffmpeg -i sleepsoundsmall.m4a -codec:a libmp3lame sleepsoundsmall.mp3

# mp3 to mp4

    ffmpeg -loop 1 -i image.jpg -i audio.m4a -c:a copy -c:v libx264 -shortest out.mp4

    ffmpeg -loop 1 -i pic.jpg -i inaudio.mp3 -c:a aac -c:v libx264 -shortest out.mp4

# handle totoro

    ffmpeg -i ttt.mp4 -vf subtitles=totoro.mkv:si=1 uuu.mp4

    ffmpeg -i totoro.mkv -c:v libx264 -c:a aac  -vf subtitles=totoro.mkv vvv.mp4 

    ffmpeg -i ttr1.mp4 -c:v libx264 -c:a aac ttrr1.mp4

    ffmpeg -i totoro.mp4 -ss 50:00 -to 55:00 -codec copy ttr2.mp4

    ffmpeg -i ttr2.mp4 -c:v libxvid -c:a libmp3lame ttr2.avi

    ffmpeg -i ttr2.mp4 -video_size 1920x1080 -c:v mpeg4 -preset superfast -c:a libmp3lame -vtag xvid ttr22.avi


