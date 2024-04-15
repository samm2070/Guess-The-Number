"use strict";

let number = Math.trunc(Math.random() * 5) + 1;
let score = 5;
let highScore = 0;
console.log(number);

const displyMsg = function (msg) {
  document.querySelector(".message").textContent = msg;
};

const dispalyScore = function (score) {
  document.querySelector(".score").textContent = score;
};

function playAgain() {
  document.querySelector(".left").textContent = "Click Play Again !";
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) displyMsg("⛔️ No number!");
  else if (guess === number) {
    displyMsg("🎉 Correct Number!");
    document.querySelector(".number").textContent = guess;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    // playAgain();

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (guess !== number) {
    displyMsg(guess > number ? `${guess} is too High` : `${guess} is too Low`);

    if (score > 1) {
      score--;
      dispalyScore(score);
    } else {
      displyMsg("💥 You lost the game!");
      dispalyScore(0);
      //   playAgain();
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 5;

  number = Math.trunc(Math.random() * 5) + 1;

  displyMsg("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
