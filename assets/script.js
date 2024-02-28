window.onload = function() {
    var hours = 18;
    var minutes = 0;
    var seconds = 0;

    setInterval(function() {
        seconds++;
        if (seconds >= 60) {
            minutes++;
            seconds = 0;
        }
        if (minutes >= 60) {
            hours++;
            minutes = 0;
        }
        if (hours >= 24) {
            hours = 0;
        }

        document.querySelector('button:nth-child(1)').innerText = 
            (hours < 10 ? '0' : '') + hours + ':' +
            (minutes < 10 ? '0' : '') + minutes + ':' +
            (seconds < 10 ? '0' : '') + seconds;
    }, 1000);
};
