const apiKey = `arP2GRtBCDB5Hi1AArGPD9HUjVIaKJN1`;
const apiBaseURL = `http://dataservice.accuweather.com`
let cityEnglishName = '';

export const getCityInfo = async cityName => {
    const cityInfo =  await fetch(apiBaseURL + `/locations/v1/search?q=${cityName}&apikey=${apiKey}`);
    
    const data = await cityInfo.json();
    cityEnglishName = data[0].EnglishName;

    return getWeatherConditions(data[0].Key);
}

const getWeatherConditions = async locationKey => {
    const weatherConditions = await fetch(apiBaseURL + `/currentconditions/v1/${locationKey}?apikey=${apiKey}`);

    const dataArray = await weatherConditions.json();
    const data = dataArray[0];

    return { cityEnglishName, data };
}