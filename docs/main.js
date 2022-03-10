
const MAX_FANS = 12;
var audio = document.querySelector("#myAudio");
var btnAddFan = document.querySelector("#btnAddFan");

var playing = false;

var state = {
    numFans : 0
}

function togglePlay(element){
    if (playing){
        element.classList.remove("animationFan");
        audio.pause();
    }
    else {
        element.classList.remove("animationFan");
        void element.offsetWidth;
        element.classList.add("animationFan");
        audio.currentTime=0;
        audio.play();
    }
    playing=!playing;
}

btnAddFan.addEventListener('click', function(){
    if (state.numFans == MAX_FANS) return;
    
    state.numFans++;
    let p = document.createElement("p");
    p.classList.add("fan");
    p.addEventListener('click', (e) => togglePlay(e.target));
    document.querySelector("#game").appendChild(p);
});