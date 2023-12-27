const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let reuslt = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

const randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
};

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      reuslt++;
      score.textContent = reuslt;
      hitPosition = null;
    }
  });
});

const moveMole = () => {
  timerId = setInterval(randomSquare, 500);
};

moveMole();

countDown = () => {
  currentTime--;
  timeLeft.innerHTML = currentTime;

  if (currentTime == 0) {
    clearInterval(countDownTimerId);
    clearInterval(timerId);
    alert(`GAME OVER!!!
Your final score is ${reuslt}`);
    confirm("Play again ?");
  }
};
let countDownTimerId = setInterval(countDown, 1000);
