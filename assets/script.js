window.onload = () => {
//neccessary 
  let nInterval;
  const start = document.querySelector("div > button:nth-child(1)");
  const stop = document.querySelector("button:nth-child(2)");

  start.addEventListener("click", () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    nInterval = setInterval(function () {
      seconds++;
      if (seconds == 60) {
        minutes++;
        seconds = 0;
      }
      if (minutes == 60) {
        hours++;
        minutes = 0;
      }
      if (hours == 24) {
        hours = 0;
      }
      document.querySelector("button:nth-child(1)").innerText =
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes +
        ":" +
        (seconds < 10 ? "0" : "") +
        seconds;
    }, 1000);
  });
  function stopTime() {
    clearInterval(nInterval);
    nInterval = null;
  }
  stop.addEventListener("click", stopTime);
};