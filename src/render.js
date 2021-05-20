const renderWeatherData = (() => {
  const weatherDetailsContainer = document.querySelector('.details');
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

  const displayDetails = (weatherData ) => {
    weatherData.then(data => {
      weatherDetailsContainer.innerHTML = `
      <p class="current-date">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>
      <h2>${data.city}, ${data.country}</h2>
      <p>Feels like ${convertToC(data.temperature)}°C</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind Speed: ${data.windSpeed} m/s</p>
      <p>Visibility: ${ convertVisibility(data.visibility) } km</p>`

    })
  }

  return { displayDetails };
})();

export { renderWeatherData as default };