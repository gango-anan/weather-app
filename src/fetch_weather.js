const apiDataModule = (() => {
  const errorContainer = document.querySelector('.city-search__error');
  const errorPage = document.querySelector('.error-page');
  const weatherDetails = document.querySelector('.weather-details');

  const displayError = () => {
    weatherDetails.classList.add('no-display');
    errorContainer.innerText = 'City not found.';
    errorPage.classList.remove('hide');
    errorPage.innerHTML = '<h1>404 ERROR</h1><h3>City not found</h3>';
  };

  const generateObject = (data) => ({
    temperature: data.main.temp,
    visibility: data.visibility,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    city: data.name,
    country: data.sys.country,
    icon: data.weather[0].icon,
    status: data.weather[0].main,
  });

  const getData = async (city, utilityKey) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${utilityKey}`, {
        mode: 'cors',
      });
      const data = await response.json();
      weatherDetails.classList.remove('no-display');
      errorContainer.innerText = '';
      errorPage.classList.add('hide');
      return generateObject(data);
    } catch (e) {
      return setTimeout(displayError, 200);
    }
  };

  return { getData };
})();

export { apiDataModule as default };
