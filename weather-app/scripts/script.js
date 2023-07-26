import { getCityInfo } from "./forecast.js";

// const { WeatherIcon, IsDayTime, Temperature } = data;


const searchForm = document.querySelector('.search-city');
const timeImg = document.querySelector('.time-img');
const conditionIcon = document.querySelector('.condition-icon');
const uiCityName = document.querySelector('.city-name');
const currentTemp = document.querySelector('.current-temp');

// const getStoredData = () => {
//         getCityInfo(localStorage.getItem('city') || 'Nairobi').then(data => updateUI(data)
//         ).catch(error => console.log(error.message));
// }
(function(){
    getCityInfo(localStorage.getItem('city') || 'Nairobi').then(data => updateUI(data)
    ).catch(error => console.log(error.message));
})()

searchForm.addEventListener('submit', e => {
    console.log('I am event listener');
    e.preventDefault();
    const city = searchForm.city.value.trim();
    searchForm.reset();
    getCityInfo(city).then(data => updateUI(data)
    );
    // .catch(error => console.log(error.message));
});

const updateUI = data => {
    console.log('I am update UI');
    console.log(data);
    const { WeatherIcon, IsDayTime, Temperature } = data.data;
    uiCityName.textContent = data.cityEnglishName;
    currentTemp.textContent = Temperature.Metric.Value+'°C';
    conditionIcon.setAttribute('src', `/weather-app/img/icon/${WeatherIcon}.svg`);
    timeImg.setAttribute('src', `/weather-app/img/${IsDayTime ? 'day.jpg' : 'night.jpg'}`);
    localStorage.setItem('city', data.cityEnglishName);
}