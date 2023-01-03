"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    document.querySelector(".message").textContent = "⛔No Guess!";
  } else if (guess === secretNumber) {
    //document.querySelector(".message").textContent = "🎊Correct Guess!";
    displayMessage("🎊Correct Guess!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "rgb(82, 220, 82)";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector(".message").textContent =
      displayMessage(
        guess < secretNumber
          ? "⬇️Your guessed number is Smaller!"
          : "⬆️Your guessed number is Bigger!"
      );
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      //document.querySelector(".message").textContent = "👎You Lost the Game!";
      displayMessage("👎You Lost the Game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "⬇️Your guessed number is Smaller!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "👎You Lost the Game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent =
  //       "⬆️Your guessed number is Bigger!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "👎You Lost the Game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }

  document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    // document.querySelector(".message").textContent = "🤔 Start guessing...";
    displayMessage("🤔 Start guessing...");
    document.querySelector(".score").textContent = "20";

    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.backgroundColor = "black";
  });
});
