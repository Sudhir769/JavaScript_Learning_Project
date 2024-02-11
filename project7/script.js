let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

let btns = ["magenta", "green", "yellow", "blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        started = true;
        levelup();
    }
});

function levelup() {
    userSeq = [];
    h2.innerHTML = `Level ${level}`;
    level++;
  let randNum = Math.floor(Math.random() * 3) + 1;
    let randColor = btns[randNum];

    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn) {
    btn.classList.add("gameFlash");
    setTimeout(function () {
        btn.classList.remove("gameFlash");
    }, 250);
}
function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function checkAns(i) {
    if (gameSeq[i] === userSeq[i]) {
        if (userSeq.length === gameSeq.length) {
        setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br>Press any key to start again`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);
    userSeq.push(btn.getAttribute("id"));
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}
