
const allText = `<iframe id="Plys" 
src="https://www.youtube.com/embed/AAURL?loop=0&playlist=AAURL&autoplay=1&enablejsapi=1&playsinline=1" 
title="" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;

let nowID = ""; 
var player; 
let countdownInterval; 
    
function getID(url) {
    const regex = /[?&]v=([A-Za-z0-9_-]{11})|youtu\.be\/([A-Za-z0-9_-]{11})|\/shorts\/([A-Za-z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? (match[1] || match[2] || match[3]) : "no";
}
    
function handleID(id){
    if(id.length > 11){
        id = getID(id);
    }
    if (id.length === 11){
        const updateURL = allText.replaceAll('AAURL',id);
        document.getElementById("allT").innerHTML = updateURL ;
        nUrl = "https://h.jwint.net/c?"+nowID;
        document.getElementById("uID").innerHTML = `<a href="${nUrl}" style="color: #0A84FF;">${id}</a>` ;
    } else {
        document.getElementById("allT").innerHTML = "<h3 style='padding:20px; text-align:center;'>Hello World</h3>" ;
    }   
}

function extractMiddle(str) {
    const prefix = "FsdGVkX19JAx6y6XDUsl0czQsdOahaolUSW";
    const suffix = "TiT62peYwEcQqvk4bBB7Kb5cBGVAW";
    
    if (str.startsWith(prefix) && str.endsWith(suffix)) {
        nowID = str;
        return str.slice(prefix.length, -suffix.length);
    } else {
        return "nomatch";
    }
}

function checkUrlPara() {
    const lastPart = window.location.search.slice(1);
    if (lastPart === ""){
        document.getElementById("allT").innerHTML = "<h3 style='padding:20px; text-align:center;'>hello world!</h3>";
    } else {
        const pID = extractMiddle(lastPart);
        handleID(pID);
    }
}

checkUrlPara();

// 更新為時間到停止播放的倒數計時功能
function startTimer() {
    const inputElement = document.getElementById('minutes');
    const minutes = parseFloat(inputElement.value);
    const displayElement = document.getElementById('timerDisplay');

    // 如果輸入 0，立即停止播放
    if (minutes === 0) {
        displayElement.innerText = "已停止播放";
        if (player && player.pauseVideo) {
            player.pauseVideo();
        }
        return;
    }
    if (isNaN(minutes) || minutes < 0) {
        alert('請輸入有效的正數分鐘！');
        return;
    }

    // 清除舊的計時器
    clearInterval(countdownInterval);
    
    let timeLeft = Math.floor(minutes * 60);
    inputElement.value = ""; 
    
    updateDisplay(timeLeft, displayElement);

    // 每秒更新
    countdownInterval = setInterval(() => {
        timeLeft--;
        updateDisplay(timeLeft, displayElement);
        
        if (timeLeft <= 0) {
            clearInterval(countdownInterval);
            displayElement.innerText = "時間到，已停止播放";
            // 執行時間到的動作：暫停影片
            if (player && player.pauseVideo) {
                player.pauseVideo();
            }
        }
    }, 1000);
}

function updateDisplay(totalSeconds, element) {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    const formattedSeconds = s < 10 ? '0' + s : s;
    element.innerText = `將於 ${m}:${formattedSeconds} 後暫停播放`;
}

// ----------------------------------------------------
// YouTube API 邏輯
// ----------------------------------------------------
function onYouTubeIframeAPIReady() {
    if (document.getElementById('Plys')) {
        player = new YT.Player('Plys', {
            events: {
                'onReady': onPlayerReady
            }
        });
    }
}

function onPlayerReady(event) {
    console.log(event);
}

function setSpeed(speed) {
    if(player && player.setPlaybackRate) {
        player.setPlaybackRate(speed);
    }
}

function seekVideo(seconds) {
    if(player && player.getCurrentTime) {
        var currentTime = player.getCurrentTime();
        player.seekTo(currentTime + seconds, true);
    }
}

function changeVolume(amount) {
    if (player && player.getVolume && player.setVolume) {
        let currentVol = player.getVolume();
        let newVol = currentVol + amount;
        
        if (newVol > 100) newVol = 100;
        if (newVol < 0) newVol = 0;
        
        if (player.isMuted()) {
            player.unMute();
        }
        
        player.setVolume(newVol);
    }
}

let sPlay = 0;

function setPlayState(s=1, btn){
    if (!btn) {
        console.error("錯誤：btn 為 undefined。請確認 HTML 的 onclick 是否確實寫為 playVideo(this)");
        return;
    }
    
    if(s === 1){
        sPlay = 1;
        btn.innerText = "暫停";
    } else {
        sPlay = 0;
        btn.innerText = "播放";
    }
}

function playVideo(btn){
    if(sPlay === 0){
        if (player && player.playVideo){
            setPlayState(1, btn);
            player.playVideo();
        } else {
            console.log("player is not ready");
        }
    } else {
        if (player && player.pauseVideo){
            setPlayState(0, btn);
            player.pauseVideo();
        } else {
            console.log("player is not ready");
        }
    }
}

function pauseVideo(){
    if (player && player.pauseVideo){
        player.pauseVideo();
    } else{
        console.log("player is not ready");
    }
}

window['playVideo'] = playVideo;
window['pauseVideo'] = pauseVideo;
window['setSpeed'] = setSpeed;
window['seekVideo'] = seekVideo;
window['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
window['onPlayerReady'] = onPlayerReady;
window['player'] = player;
