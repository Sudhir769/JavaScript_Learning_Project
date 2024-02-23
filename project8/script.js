let Timer = 60;
let TimerElement = document.querySelector("#panel2");

let randHit = 0;
let hitElement = document.querySelector("#panel1");

let score = 0;
let scoreElement = document.querySelector("#panel3");

let t = 0;
let targetElement = document.querySelector("#lower");
targetElement.addEventListener("click", (details) => {
    t = details.target.textContent;
    t = parseInt(t);
    updateScore();
});
function creteBubbles() {
    let bubble = "";
    for (let i = 1; i <= 60; i++) {
        let rom = Math.floor(Math.random() * 10) + 1;
        bubble += `<div id="ele">${rom}</div>`;
    }
    document.querySelector("#lower").innerHTML = bubble;
}
function updateHit() {
    randHit = Math.floor(Math.random() * 10) + 1;
    hitElement.textContent = randHit;
}

function updateTimer() {
    let tOut = setInterval(() => {
    if (Timer > 0) {
        Timer--;
        TimerElement.textContent = Timer;
    } else {
        clearInterval(tOut);
        endGame();
    }
    }, 1000);
}

function endGame() {
    let text = `<h1>Game Over</h1>  <br>`;
    targetElement.innerHTML = text;
}

function updateScore() {
    if (randHit == t) {
        score += 10;
        scoreElement.textContent = score;
        updateHit();
        creteBubbles();
    }
}
updateTimer();
updateHit();
creteBubbles();
updateScore();
