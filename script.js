let milliseconds = 0, seconds = 0, minutes = 0;
let timer = null;
let running = false;

function updateDisplay() {
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "0" + milliseconds : milliseconds;

    document.getElementById("display").innerText = `${m}:${s}:${ms}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds === 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            updateDisplay();
        }, 10);
    }
}

function pauseTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    milliseconds = seconds = minutes = 0;
    updateDisplay();
    document.getElementById("laps").innerHTML = "";
}

function recordLap() {
    if (running) {
        let lapTime = document.getElementById("display").innerText;
        let li = document.createElement("li");
        li.textContent = lapTime;
        document.getElementById("laps").appendChild(li);
    }
}

// Button events
document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", recordLap);
