const digitalClock = document.querySelector('.digital-clock');


setInterval(() => {
    const date = new Date();
    digitalClock.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 1000);