const form = document.querySelector('form');
const result = document.querySelector('.result');
const correctAnswers = ['B', 'B', 'B', 'B'];


form.addEventListener('submit', e => {
    e.preventDefault();
    let score = 0;
    correctAnswers.forEach((answer, index) => {
        if (form[`q${index+1}`].value === answer) score +=25;
    });
    form.reset();
    scrollTo(0, 0);
    result.classList.remove('d-none');

    let animatedScore = 0;
    const timer = setInterval(() => {
        result.querySelector('span.score').textContent = `${animatedScore}%`
        if (animatedScore < score) animatedScore++;
        else clearInterval(timer);
    }, 20);
});