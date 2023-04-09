//Inicia funcionalidades para la calculadora

function appendToResult(value) {
    document.getElementById("result").innerHTML += value;
}

function calculate() {
    var result = eval(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML = result;
}

function clearResult() {
    document.getElementById("result").innerHTML = "";
}

function clearAll() {
    clearResult();
}

//Inicia funcionalidades para el contador pomodoro

const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const timerDisplay = document.querySelector('.timer-display');

let timeLeft = 25 * 60;
let timerId;

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
  if (!timerId) {
    timerId = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(timerId);
        timerId = null;
      }
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timerId);
  timerId = null;
  timeLeft = 25 * 60;
  updateTimer();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);
