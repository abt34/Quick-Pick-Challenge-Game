document
  .querySelectorAll(".score, .error-msg,  .guess-number, .submit-btn ")
  .forEach((el) => {
    el.classList.add("display");
  });
document.querySelectorAll(" .input-display ").forEach((el) => {
  el.classList.add("display2");
});

let secretNumber1 = Math.trunc(Math.random() * 200) + 1;
let secretNumber2 = Math.trunc(Math.random() * 200) + 1;
let secretNumber3 = Math.trunc(Math.random() * 200) + 1;
let score = 0;
let myVar2;

const displayMessage = function (message) {
  document.querySelector(".error-msg").textContent = message;
  document.querySelector(".error-msg").classList.remove("display");
};

let seconds = 0;
let minutes = 0;

function updateCounter() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
    }
  }

  const formattedTime = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
  document.querySelector(".timer").textContent = formattedTime;
}

/* 






*/

document.querySelector(".play-btn").addEventListener("click", function () {
  document.querySelector(".num1").textContent = secretNumber1;
  document.querySelector(".num2").textContent = secretNumber2;
  document.querySelector(".num3").textContent = secretNumber3;

  myVar2 = setInterval(updateCounter, 1000); // Update every second
  document.querySelectorAll(".submit-btn").forEach((el) => {
    el.classList.remove("display");
  });

  document.querySelectorAll(" .input-display ").forEach((el) => {
    el.classList.remove("display2");
  });
  document.querySelectorAll(" .input-display ").forEach((el) => {
    el.classList.add("input-number");
  });

  const popup = document.querySelectorAll(".guess-number").forEach((el) => {
    setTimeout(() => {
      el.classList.remove("display");
    }, 0);
    setTimeout(() => {
      el.classList.add("display");
    }, 800);
  });

  document.querySelectorAll(".play").forEach((el) => {
    el.classList.add("display");
  });
});
/*




*/
document.querySelector(".submit-btn").addEventListener("click", function () {
  const guess1 = Number(document.querySelector(".input1").value);
  const guess2 = Number(document.querySelector(".input2").value);
  const guess3 = Number(document.querySelector(".input3").value);

  if (guess1 === secretNumber1) {
    score++;
    document.querySelector(".v1").classList.remove("display");
    document.querySelector(".v1").src = "./images/verified.png";
  } else {
    document.querySelector(".v1").classList.remove("display");
    document.querySelector(".v1").src = "./images/wrong.png";
  }
  if (guess2 === secretNumber2) {
    score++;
    document.querySelector(".v2").classList.remove("display");
    document.querySelector(".v2").src = "./images/verified.png";
  } else {
    document.querySelector(".v2").classList.remove("display");
    document.querySelector(".v2").src = "./images/wrong.png";
  }
  if (guess3 === secretNumber3) {
    score++;
    document.querySelector(".v3").classList.remove("display");
    document.querySelector(".v3").src = "./images/verified.png";
  } else {
    document.querySelector(".v3").classList.remove("display");
    document.querySelector(".v3").src = "./images/wrong.png";
  }

  document.querySelectorAll(".submit-btn, .guess-number").forEach((el) => {
    el.classList.add("display");
  });
  document.querySelectorAll(".score , .guess-number").forEach((el) => {
    el.classList.remove("display");
  });

  document.querySelector(".score-value").textContent = score;

  clearInterval(myVar2);
  seconds = 0;
  minutes = 0;
});

/* 










// */

document.querySelector(".reset-btn").addEventListener("click", function () {
  score = 0;
  // seconds = 0;
  // minutes = 0;
  secretNumber1 = Math.trunc(Math.random() * 200) + 1;
  secretNumber2 = Math.trunc(Math.random() * 200) + 1;
  secretNumber3 = Math.trunc(Math.random() * 200) + 1;

  document.querySelectorAll(".input1,.input2,.input3").forEach((el) => {
    el.value = "";
  });
  document.querySelector(".timer").textContent = "00:00";
  document.querySelectorAll(".input-display ").forEach((el) => {
    el.classList.remove("input-number");
  });
  document.querySelectorAll(" .input-display ").forEach((el) => {
    el.classList.add("display2");
  });

  document
    .querySelectorAll(
      ".score, .error-msg,  .verified, .guess-number, .submit-btn "
    )
    .forEach((el) => {
      el.classList.add("display");
    });

  document.querySelectorAll(".verified ").forEach((el) => {
    el.src.textContent = "";
  });

  // document.querySelector(".verified").src.textContent = "";
  document.querySelectorAll(".play ").forEach((el) => {
    el.classList.remove("display");
  });
});
