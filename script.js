const pomoBtn = document.querySelector("#pomo-btn");
const startBtn = document.querySelector("#start-btn");
const shortBtn = document.querySelector("#sb-btn");
const longBtn = document.querySelector("#lb-btn");
const timerText = document.querySelector("#timer-text");

const pauseBtn = document.createElement("button");
const resetBtn = document.createElement("button");
const timerBody = document.querySelector("#sp-btns");

let isPauseActive = false;
let isStartActive = false;

let isPomActive = true;
let isShortActive = false;
let isLongActive = false;

setButtonActive(pomoBtn, isPomActive);

function setButtonActive(btn, isActive) {
  if (isActive) {
    btn.style.backgroundColor = "#598099";
  } else {
    btn.style.backgroundColor = "#bb7b85";
  }
}

let mode = document.querySelector("#pomo-btn");
timerText.innerText = "25:00";

let isStarted = false;
let isPaused = false;

let seconds = 0;
let minutes = 0;
let timerInterval;

function countDown() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(timerInterval);
    isStarted = false;
    return;
  }
  if (seconds === 0) {
    minutes--;
    seconds = 60;
  }
  seconds--;

  if (seconds < 10) {
    secondsText = "0" + seconds.toString();
  } else {
    secondsText = seconds.toString();
  }

  if (minutes < 10) {
    minutesText = "0" + minutes.toString();
  } else {
    minutesText = minutes.toString();
  }

  if (minutes == 0) {
    return;
  }
  timerText.textContent = minutesText + ":" + secondsText;
}

startBtn.addEventListener("click", function () {
  if (isStarted) return;
  isStartActive = true;
  isPauseActive = false;
  setButtonActive(startBtn, isStartActive);
  setButtonActive(pauseBtn, isPauseActive);
  startBtn.style.display = "none";
  pauseBtn.style.display = "block";
  if (isPaused) {
    seconds = pasuedSec;
    minutes = pausedMin;
  }
  if (mode.textContent === "Pomodoro") {
    seconds = 0;
    minutes = 25;
  } else if (mode.textContent === "Short Break") {
    seconds = 0;
    minutes = 5;
  } else if (mode.textContent === "Long Break") {
    seconds = 0;
    minutes = 15;
  }

  isStarted = true;

  countDown();
  timerInterval = setInterval(countDown, 1000);

  timerBody.append(pauseBtn);
  timerBody.append(resetBtn);
  pauseBtn.textContent = "PAUSE";
  resetBtn.textContent = "RESET";
  pauseBtn.setAttribute("id", "pause-btn");
  resetBtn.setAttribute("id", "reset-btn");

  pauseBtn.style.display = "inline-block";
  resetBtn.style.display = "inline-block";
});

shortBtn.addEventListener("click", function () {
  if (isStarted) return;
  isStartActive = false;
  isPauseActive = false;
  setButtonActive(startBtn, isStartActive);
  setButtonActive(pauseBtn, isPauseActive);

  isPomActive = false;
  isShortActive = true;
  isLongActive = false;

  setButtonActive(shortBtn, isShortActive);
  setButtonActive(longBtn, isLongActive);
  setButtonActive(pomoBtn, isPomActive);
  timerText.innerText = "05:00";
  mode = document.querySelector("#sb-btn");
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
});

longBtn.addEventListener("click", function () {
  if (isStarted) return;
  isStartActive = false;
  isPauseActive = false;
  setButtonActive(startBtn, isStartActive);
  setButtonActive(pauseBtn, isPauseActive);

  isPomActive = false;
  isShortActive = false;
  isLongActive = true;

  setButtonActive(shortBtn, isShortActive);
  setButtonActive(longBtn, isLongActive);
  setButtonActive(pomoBtn, isPomActive);
  timerText.innerText = "15:00";
  mode = document.querySelector("#lb-btn");
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
});

pomoBtn.addEventListener("click", function () {
  if (isStarted) return;
  isStartActive = false;
  isPauseActive = false;
  setButtonActive(startBtn, isStartActive);
  setButtonActive(pauseBtn, isPauseActive);

  isPomActive = true;
  isShortActive = false;
  isLongActive = false;

  setButtonActive(shortBtn, isShortActive);
  setButtonActive(longBtn, isLongActive);
  setButtonActive(pomoBtn, isPomActive);
  timerText.innerText = "25:00";
  mode = document.querySelector("#pomo-btn");
  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
});

pauseBtn.addEventListener("click", function () {
  if (isStarted) {
    isStartActive = false;
    isPauseActive = true;
    setButtonActive(pauseBtn, isPauseActive);
    setButtonActive(startBtn, isStartActive);
    pauseBtn.style.display = "none";
    startBtn.style.display = "block";

    let pausedMin = minutes;
    let pasuedSec = seconds;

    clearTimeout(timerInterval);
    isStarted = false;
  }
});

resetBtn.addEventListener("click", function () {
  clearTimeout(timerInterval);
  isStarted = false;

  switch (mode.textContent) {
    case "Pomodoro":
      minutes = 25;
      seconds = 0;
      timerText.innerText = "25:00";
      break;
    case "Short Break":
      minutes = 5;
      seconds = 0;
      timerText.innerText = "05:00";
      break;
    case "Long Break":
      minutes = 15;
      seconds = 0;
      timerText.innerText = "15:00";
      break;
  }

  startBtn.style.display = "inline-block";
  pauseBtn.style.display = "none";
  resetBtn.style.display = "none";
});

//TODO JS
const taskInput = document.querySelector("#user-input");
const btn = document.querySelector("#add-btn");

btn.addEventListener("click", function () {
  let userInput = taskInput.value;
  if (userInput === "") return;

  const taskList = document.querySelector("#task-list");

  const taskItem = document.createElement("div");

  const span = document.createElement("span");
  span.textContent = userInput;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.addEventListener("click", function () {
    span.style.textDecoration = "line-through";
  });

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", function () {
    taskItem.remove();
  });

  taskItem.appendChild(span);
  taskItem.setAttribute("id", "task-list-item");
  taskItem.appendChild(doneBtn);
  taskItem.appendChild(removeBtn);

  doneBtn.setAttribute("id", "removeDone-btn");
  removeBtn.setAttribute("id", "removeDone-btn");
  taskList.appendChild(taskItem);

  taskInput.value = "";
});
