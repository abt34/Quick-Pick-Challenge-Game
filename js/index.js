const play = document.querySelector(".play-btn");
const guessnumbers = document.querySelectorAll(".guess-number");
const guessnum1 = document.querySelector(".guess1");
const guessnum2 = document.querySelector(".guess2");
const guessnum3 = document.querySelector(".guess3");
const message = document.querySelector(".message");
const timesee = document.querySelector(".timeleft");
const input1 = document.querySelector(".input1");
const input2 = document.querySelector(".input2");
const input3 = document.querySelector(".input3");
const submit = document.querySelector(".submit");
const image1 = document.querySelector(".image01");
const image2 = document.querySelector(".image02");
const image3 = document.querySelector(".image03");
const scorevalue = document.querySelector(".score-value");
const scorename = document.querySelector(".score-name");
const reset = document.querySelector(".reset-btn");
scorevalue.classList.add("hidden");
scorename.classList.add("hidden");
input1.classList.add("hidden");
input2.classList.add("hidden");
input3.classList.add("hidden");
submit.classList.add("hidden");
let score = 0;
// state variable for the game to stop working the play button
let playing = true;
// abc for imgnumber  and xyz for input
let a, b, c, x, y, z;
// function for play btn
const playbtn = function () {
  if (playing) {
    a = guessnum1.textContent = Math.trunc(Math.random() * 1000) + 1;
    b = guessnum2.textContent = Math.trunc(Math.random() * 1000) + 1;
    c = guessnum3.textContent = Math.trunc(Math.random() * 1000) + 1;
    console.log(a, b, c);
    playing = false; // playing btn is not working
    //////////////      working on the time interval
    let timeLeft = 1; //counting began from 3
    const timer = setInterval(() => {
      timesee.textContent = timeLeft;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        message.textContent = " Fill Up The Numbers ?";
        guessnum1.classList.add("hidden");
        guessnum2.classList.add("hidden");
        guessnum3.classList.add("hidden");
        image1.src = "img/hide.jpg";
        image2.src = "img/hide.jpg";
        image3.src = "img/hide.jpg";
        input1.classList.remove("hidden");
        input2.classList.remove("hidden");
        input3.classList.remove("hidden");
        submit.classList.remove("hidden");
      }
    }, 1000);
  }
  playing = false; // playing btn is not working
};
/// play button functionality
play.addEventListener("click", function () {
  playbtn();
});
// submit btn conditions
submit.addEventListener("click", function () {
  x = Number(document.querySelector(".input1").value);
  y = Number(document.querySelector(".input2").value);
  z = Number(document.querySelector(".input3").value);
  if (x === a) {
    score++;
    x === a ? (image1.src = "img/img1.jpg") : (image1.src = "img/x.jpg");
  } else if (y === b) {
    score++;
    y === b ? (image2.src = "img/img2.jpg") : (image2.src = "img/x.jpg");
  } else if (z === c) {
    score++;
    z === c ? (image3.src = "img/img2.jpg") : (image3.src = "img/x.jpg");
  }
  scorevalue.textContent = score;
  scorevalue.classList.remove("hidden");
  scorename.classList.remove("hidden");
});
///////////////////////// resr=et button functionality
reset.addEventListener("click", function () {
  image1.src = "img/img1.jpg";
  image2.src = "img/img2.jpg";
  image3.src = "img/img3.jpg";
  message.textContent = "Start Playing";
  scorevalue.classList.add("hidden");
  scorename.classList.add("hidden");
  input1.classList.add("hidden");
  input2.classList.add("hidden");
  input3.classList.add("hidden");
  submit.classList.add("hidden");
  playing = true;
});
