import codeToCountry from './country-code';

const renderWeatherData = (() => {
  const weatherDetailsContainer = document.querySelector('.details');
  const tempLabel = document.querySelector('.temp-label');
  const activeTemp = document.querySelector('.active-temp');
  const checkBox = document.getElementById('temp');
  const weatherIconContainer = document.querySelector('.weather-icon');
  const weatherFocus = document.querySelector('.weather-focus');
  const nowDate = new Date();

  const convertToC = (temp) => {
    const celisius = temp - 273.15;
    return Math.round(celisius);
  };

  const convertToF = (temp) => {
    const fahrenheit = (temp * (9 / 5)) - 459.67;
    return Math.round(fahrenheit);
  };

  const convertVisibility = (visibility) => Math.round(visibility / 1000);

  const toTempType = () => {
    const toTempType = checkBox.checked ? 'To °C' : 'To °F';
    return toTempType;
  };

  const tempType = () => {
    const tempType = checkBox.checked ? '°F' : '°C';
    return tempType;
  };

  const displayedTemp = (temp) => {
    const tempToDisplay = checkBox.checked ? convertToF(temp) : convertToC(temp);
    return tempToDisplay;
  };

  const displayDetails = (weatherData) => {
    weatherData.then((data) => {
      tempLabel.innerText = `${toTempType()}`;
      activeTemp.innerText = `${displayedTemp(data.temperature)}${tempType()}`;
      weatherDetailsContainer.innerHTML = `
      <p class="current-date">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>
      <h2>${data.city}, ${codeToCountry.countryName(data.country)}</h2>
      <p>Feels like ${displayedTemp(data.temperature)}${tempType()}</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind Speed: ${data.windSpeed} m/s</p>
      <p>Visibility: ${convertVisibility(data.visibility)} km</p>`;
      weatherIconContainer.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.icon}@2x.png" alt="weather-icon"></img>`;
      if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'rain') {
        weatherFocus.classList.add('rainy');
      } else if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'clouds') {
        weatherFocus.classList.add('cloudy');
      } else if (data.city.toLowerCase() !== 'kampala' && data.status.toLowerCase() === 'clear') {
        weatherFocus.classList.add('clear');
      }
    });
  };

  return { displayDetails };
})();

export { renderWeatherData as default };