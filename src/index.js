import apiDataModule from './fetch_weather';
import utilitiesModule from './utilities';
import renderWeatherData from './render';

const cityForm = document.querySelector('form');
const cityFormInput = document.getElementById('city-search');
const tempToggler = document.getElementById('temp');
const tempTogglerLabel = document.querySelector('.temp-label');
const errorContainerElement = document.querySelector('.city-search__error');
const utilityKey = utilitiesModule.utilityKey().apiKey;
let city = 'kampala';
let weatherData = apiDataModule.getData(city, utilityKey);

window.onload = () => {
  renderWeatherData.displayDetails(weatherData);
};

const toggleTemperature = () => {
  if (tempToggler.checked) {
    renderWeatherData.displayDetails(weatherData);
  } else {
    renderWeatherData.displayDetails(weatherData);
  }
};

tempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10));
cityForm.addEventListener('submit', (event) => {
  event.preventDefault();
  city = cityFormInput.value;
  if (city === '' || city === null) {
    errorContainerElement.innerText = "City can't be blank, try again!";
    return;
  }
  weatherData = apiDataModule.getData(city, utilityKey);
  renderWeatherData.displayDetails(weatherData);
  cityFormInput.value = null;
});
