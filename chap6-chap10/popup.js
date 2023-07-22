const popupButton = document.querySelector('.popup-button');
const popupWrapper = document.querySelector('.popup-wrapper');

popupButton.addEventListener('click', () => {
    popupWrapper.style.display = 'block';

    document.querySelector('.close-popup').addEventListener('click', () => {
        popupWrapper.style.display = 'none';
    });
}); 

popupWrapper.addEventListener('click', (e) => {
    if(e.target.classList.contains('popup-wrapper')) popupWrapper.style.display = 'none';
});

