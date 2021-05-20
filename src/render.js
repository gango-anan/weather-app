const renderWeatherData = (() => {
  const weatherDetailsContainer = document.querySelector('.details');
  const tempLabel = document.querySelector('.temp-label');
  const activeTemp = document.querySelector('.active-temp');
  const checkBox = document.getElementById('temp');
  const nowDate = new Date();

  const convertToC = (temp) => {
    const celisius = temp - 273.15;
    return Math.round(celisius);
  }

  const convertToF = (temp) => {
    const fahrenheit = (temp*9/5) - 459.67;
    return Math.round(fahrenheit);
  }

  const convertVisibility = (visibility) => {
    return Math.round(visibility/1000);
  }

  const tempType = () => {
    const tempType = checkBox.checked ? '°F' : '°C';
    return tempType;
  }

  const displayedTemp = (temp) => {
    const tempToDisplay = checkBox.checked ? convertToF(temp) : convertToC(temp);
    return tempToDisplay;
  }

  const displayDetails = (weatherData ) => {
    weatherData.then(data => {
      tempLabel.innerText = `${tempType()}`;
      activeTemp.innerText = `${displayedTemp(data.temperature)}${tempType()}`;
      weatherDetailsContainer.innerHTML = `
      <p class="current-date">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>
      <h2>${data.city}, ${data.country}</h2>
      <p>Feels like ${displayedTemp(data.temperature)}${tempType()}</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind Speed: ${data.windSpeed} m/s</p>
      <p>Visibility: ${ convertVisibility(data.visibility) } km</p>`;
    })
  }

  return { displayDetails };
})();

export { renderWeatherData as default };