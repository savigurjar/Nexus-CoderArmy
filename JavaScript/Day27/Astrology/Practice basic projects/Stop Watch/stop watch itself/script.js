function update() {
  const stopwatch = document.getElementById("stopwatch");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");
  const result = document.getElementById("result");

  let hour = 0,
    minute = 0,
    second = 0;
  let timer = 0;

  // 1
  start.addEventListener("click", () => {
    if (timer) return;

    timer = setInterval(() => {
      second++;
      if (second == 60) {
        second = 0;
        minute++;
      }
      if (minute == 60) {
        minute = 0;
        hour++;
      }

      stopwatch.textContent = `${String(hour).padStart(2, "0")} : ${String(
        minute
      ).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;
    }, 1000);
  });

  //   2
  stop.addEventListener("click", () => {
    clearInterval(timer);
    timer = 0;
    result.textContent = `your total time is = ${String(hour).padStart(
      2,
      "0"
    )} : ${String(minute).padStart(2, "0")} : ${String(second).padStart(
      2,
      "0"
    )}`;
  });

  //   3
  reset.addEventListener("click", () => {
    clearInterval(timer);
    timer = 0;
    hour = minute = second = 0;
    stopwatch.textContent = "00:00:00";
    result.textContent = "";
  });
}
update();
