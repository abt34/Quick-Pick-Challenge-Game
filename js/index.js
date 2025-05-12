"use strict";
const play = document.querySelector(".play-btn");
const guessnum1 = document.querySelector(".guess1");
const guessnum2 = document.querySelector(".guess2");
const guessnum3 = document.querySelector(".guess3");
const message = document.querySelector(".message");
const timesee = document.querySelector(".timeleft");

play.addEventListener("click", function () {
  const num = Math.trunc(Math.random() * 101);

  guessnum1.textContent = num * 2;
  guessnum2.textContent = num * 3;
  guessnum3.textContent = num * 4;
  ////////////// 
  let timeLeft = 3;
  const timer = setInterval(() => {
    timesee.textContent = timeLeft;
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(timer);
      message.textContent = "Time's up!";
    }
  }, 1000);
  //////////
});



