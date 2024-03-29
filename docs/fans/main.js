const MAX_FANS = 12;
const DELAY = 2000;

var audio = document.querySelector("#myAudio");
var btnAddFan = document.querySelector("#btnAddFan");

var state = {
    numFans: 0,
    audioPlaying: false
}

function togglePlay(element) {
    let action = null;
    if (element.getAttribute("moving") == "true") {
        element.setAttribute("moving", "false");
        element.classList.remove("animationFan");
        action = "STOPPING";
    }
    else {
        element.classList.remove("animationFan");
        void element.offsetWidth;
        element.classList.add("animationFan");
        element.setAttribute("moving", "true");
        action = "MOVING";
    }

    let amountMoving = atLeastOneMoving();

    if (amountMoving == 1 && action == "MOVING") {
        audio.currentTime = 0;
        audio.play();
    }
    else if (amountMoving == 0) {
        audio.pause();
    }
}

function atLeastOneMoving() {
    return [...document.querySelector("#game").childNodes].filter(x => x.getAttribute("moving") == "true").length;
}

btnAddFan.addEventListener('click', function () {
    if (state.numFans == MAX_FANS) return;

    state.numFans++;
    let p = document.createElement("p");
    p.classList.add("fan");
    p.setAttribute("moving", "false");
    p.addEventListener('click', (e) => togglePlay(e.target));
    document.querySelector("#game").appendChild(p);
});

setInterval(startMoveFan, DELAY);

function startMoveFan() {
    if (state.numFans > 0) {
        let numFan = getRandomInt(state.numFans);
        let fan = document.querySelector("#game").childNodes[numFan];
        if (fan.getAttribute("moving") == "false") {
            togglePlay(fan);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
