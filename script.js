let [centiSecond, second] = [0, 0];
let timeRef = document.querySelector(".timer-display");
let int = null;

document.getElementById("start-timer").addEventListener("click", () => {
  if (int !== null) {
    clearInterval(int);
  }
  int = setInterval(displayTimer, 10);
});

document.getElementById("stop-timer").addEventListener("click", () => {
  clearInterval(int);
});

document.getElementById("reset-timer").addEventListener("click", () => {
  clearInterval(int);
  [centiSecond, second] = [0, 0];
  timeRef.innerHTML = "000 : 00";
});

function displayTimer() {
  centiSecond += 1;
  if (centiSecond == 100) {
    centiSecond = 0;
    second++;
    if (second == 999) {
      second = 0;
    }
  }

  let cs = centiSecond < 10 ? "0" + centiSecond : centiSecond;
  let s = second < 10 ? "00" + second : second < 100 ? "0" + second : second;

  timeRef.innerHTML = `${s} : ${cs}`;
}
