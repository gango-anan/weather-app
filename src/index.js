import apiDataModule from './fetch_weather';
import utilitiesModule from './utilities';
import renderWeatherData from './render';

const tempToggler = document.getElementById('temp');
const tempTogglerLabel = document.querySelector('.temp-label');
const utilityKey = utilitiesModule.utilityKey().apiKey;
const weatherData = apiDataModule.getData('kampala', utilityKey);

const toggleTemperature = () => {
  if(tempToggler.checked) {
    renderWeatherData.displayDetails(weatherData);
  }else{
    renderWeatherData.displayDetails(weatherData);
  }
};

tempTogglerLabel.addEventListener('click', () => setTimeout(toggleTemperature, 10))

renderWeatherData.displayDetails(weatherData);