const digitalClock = document.querySelector('.digital-clock');


setInterval(() => {
    digitalClock.textContent = new Date().toLocaleTimeString();
}, 1000);