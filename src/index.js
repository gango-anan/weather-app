import apiDataModule from './fetch_weather';
import utilitiesModule from './utilities';
import renderWeatherData from './render';


const utilityKey = utilitiesModule.utilityKey().apiKey;
const weatherData = apiDataModule.getData('kampala', utilityKey);

renderWeatherData.displayDetails(weatherData);
