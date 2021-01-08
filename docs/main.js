var audio = document.querySelector("#myAudio");
var btnAddFan = document.querySelector("#btnAddFan");

var playing = false;

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
    let p = document.createElement("p");
    p.classList.add("fan");
    p.addEventListener('click', 
    function(e)
    {
        togglePlay(e.target);
    }
    );
    document.querySelector("#mainContainer").appendChild(p);
});