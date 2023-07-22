const digitalClock = document.querySelector('.digital-clock');


setInterval(() => {
    const date = new Date();
    digitalClock.textContent = date.toLocaleTimeString();
}, 1000);