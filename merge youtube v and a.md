ffmpeg merge video and audio
==========================================

```
ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a aac -map 0:v -map 1:a output.mp4
```

or

```
ffmpeg -i video.mp4 -i audio.m4a -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 output.mp4
```

The video use -f 160, the audio use -f 140 , this command can work.

