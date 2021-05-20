import apiDataModule from './fetch_weather';
import utilitiesModule from './utilities';
import renderWeatherData from './render';

const cityForm = document.querySelector('form');
const cityFormInput = document.getElementById('city-search');
const tempToggler = document.getElementById('temp');
const tempTogglerLabel = document.querySelector('.temp-label');
const utilityKey = utilitiesModule.utilityKey().apiKey;
let city = 'kampala'
let weatherData = apiDataModule.getData(city, utilityKey);

const toggleTemperature = () => {
  if(tempToggler.checked) {
    renderWeatherData.displayDetails(weatherData);
  }else{
    renderWeatherData.displayDetails(weatherData);
  }
};

tempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10))
cityForm.addEventListener('submit', event => {
  event.preventDefault();
  city = cityFormInput.value
  weatherData = apiDataModule.getData(city, utilityKey);
  renderWeatherData.displayDetails(weatherData);
})

renderWeatherData.displayDetails(weatherData);