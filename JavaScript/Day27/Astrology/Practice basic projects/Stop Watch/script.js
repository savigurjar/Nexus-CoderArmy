function updateDisplay() {
    const startButton = document.querySelector(".start");
    const stopButton = document.querySelector(".stop");
    const resetButton = document.querySelector(".reset");
    const display = document.getElementById("display");
    const timeResult = document.getElementById("time-result"); // New element for showing time

    let hours = 0, minutes = 0, seconds = 0;
    let interval = 0;

    startButton.addEventListener("click", () => {
        if (interval) return; // Prevent multiple intervals from running

        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }

            display.textContent = `${String(hours).padStart(2, "0")} : ${String(
                minutes
            ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
        }, 1000);
    });

    stopButton.addEventListener("click", () => {
        clearInterval(interval);
        interval = 0; // Reset interval so "Start" can work again
        timeResult.textContent = `Your total time: ${String(hours).padStart(2, "0")} : ${String(
            minutes
        ).padStart(2, "0")} : ${String(seconds).padStart(2, "0")}`;
    });

    resetButton.addEventListener("click", () => {
        clearInterval(interval); // Stop the timer
        interval = 0; // Reset interval
        hours = minutes = seconds = 0; // Reset time values
        display.textContent = "00 : 00 : 00"; 
        timeResult.textContent = ""; // Clear the result display
    });
}

updateDisplay();
