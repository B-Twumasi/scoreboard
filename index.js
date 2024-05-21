const hpoint = document.querySelector(".home-score");
const gpoint = document.querySelector(".guest-score");
const hbtn1 = document.querySelector(".hbtn1");
const hbtn2 = document.querySelector(".hbtn2");
const hbtn3 = document.querySelector(".hbtn3");
const gbtn1 = document.querySelector(".gbtn1");
const gbtn2 = document.querySelector(".gbtn2");
const gbtn3 = document.querySelector(".gbtn3");
const newBtn = document.querySelector(".new-btn");
const endBtn = document.querySelector(".end-btn");
const homePoint = document.querySelector(".home-point");
const guestPoint = document.querySelector(".guest-point");
const message = document.querySelector(".message");
const h_btn = document.querySelectorAll(".h-btn");
const g_btn = document.querySelectorAll(".g-btn");
let isAlive = true;
let homeScore = 0;
let guestScore = 0;

hbtn1.addEventListener("click", function () {
  if (isAlive) {
    homeScore += 1;
    hpoint.textContent = homeScore;
  }
});
hbtn2.addEventListener("click", function () {
  if (isAlive) {
    homeScore += 2;
    hpoint.textContent = homeScore;
  }
});
hbtn3.addEventListener("click", function () {
  if (isAlive) {
    homeScore += 3;
    hpoint.textContent = homeScore;
  }
});

gbtn1.addEventListener("click", function () {
  if (isAlive) {
    guestScore += 1;
    gpoint.textContent = guestScore;
  }
});
gbtn2.addEventListener("click", function () {
  if (isAlive) {
    guestScore += 2;
    gpoint.textContent = guestScore;
  }
});
gbtn3.addEventListener("click", function () {
  if (isAlive) {
    guestScore += 3;
    gpoint.textContent = guestScore;
  }
});

endBtn.addEventListener("click", function () {
  if (homeScore > guestScore) {
    guestPoint.classList.remove("winner");
    homePoint.classList.add("winner");
    g_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    h_btn.forEach((x) => {
      x.style.backgroundColor = "green";
    });

    message.textContent = "HOME TEAM WINS";
    isAlive = false;
  } else if (homeScore === guestScore) {
    guestBG.classList.add("draw");
    g_btn.forEach((y) => {
      y.style.backgroundColor = "blueviolet";
    });
    homeBG.classList.add("draw");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "blueviolet";
    });
    message.textContent = "MATCH DRAW";
    isAlive = false;
  } else {
    homePoint.classList.remove("winner");
    guestPoint.classList.add("winner");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    g_btn.forEach((x) => {
      x.style.backgroundColor = "green";
    });
    message.textContent = "GUEST TEAM WINS";
    isAlive = false;
  }
});
newBtn.addEventListener("click", function () {
  if (!isAlive) {
    message.textContent = "";
    homeScore = 0;
    guestScore = 0;
    homePoint.classList.remove("winner");
    guestPoint.classList.remove("winner");
    h_btn.forEach((y) => {
      y.style.backgroundColor = "#1b244a";
    });
    g_btn.forEach((x) => {
      x.style.backgroundColor = "#1b244a";
    });
    guestPoint.classList.remove("draw");
    homePoint.classList.remove("draw");
    hpoint.textContent = homeScore;
    gpoint.textContent = guestScore;
  }
  isAlive = true;
});
