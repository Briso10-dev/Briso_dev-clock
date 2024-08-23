window.onload = () => {
//neccessary variables configurations
  let nInterval;
  const start = document.querySelector("div > button:nth-child(1)");
  const stop = document.querySelector("button:nth-child(2)");
 
  start.addEventListener("click", () => { //setting an event to display time by user
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
      //display format to always have 2 numbers as display
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
  //logic to be able to stop the time at any desired moment
  function stopTime() {
    clearInterval(nInterval);
    nInterval = null;
  }
  stop.addEventListener("click", stopTime);
};