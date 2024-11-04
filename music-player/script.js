let progress = document.getElementById("progress");
let song = document.getElementById("song");
const end = document.getElementById("end");
let playPauseIcon = document.getElementById("playPauseIcon");
let state = 0;

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    end.innerText = `${String(Math.floor(song.duration/60)).padStart(2, '0')}:${String(Math.floor(song.duration%60)).padStart(2, '0')}`;
}

function backward(){
    if(state){
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
    else{
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    }
    progress.value -=5;
    song.currentTime = progress.value;
}
    
function playPause(){
    if(playPauseIcon.classList.contains("fa-play")){
        song.play();
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
        state = 1;
    }
    else{
        song.pause();
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
        state = 0;
    }
}

function forward(){
    if(state){
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
    else{
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    }
        progress.value = parseInt(progress.value)+10;
        song.currentTime = progress.value;
}

progress.onchange = function(){
    if(state){
        song.currentTime = progress.value;
        playPauseIcon.classList.remove("fa-play");
        playPauseIcon.classList.add("fa-pause");
    }
    else{
        song.currentTime = progress.value;
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}