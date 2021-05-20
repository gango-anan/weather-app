const renderWeatherData = (() => {
  const weatherDetailsContainer = document.querySelector('.details');
  const nowDate = new Date();
  const displayDetails = (weatherData ) => {
    weatherData.then(data => {
      weatherDetailsContainer.innerHTML = `
      <p class="current-date">${nowDate.toLocaleTimeString()} , ${nowDate.toDateString()}</p>
      <h2>${data.city}, ${data.country}</h2>
      <p>Feels like ${data.temperature}°C</p>
      <p>Humidity: ${data.humidity}%</p>
      <p>Wind Speed: ${data.windSpeed} m/s</p>
      <p>Visibility: ${data.visibility} km</p>`

    })
  }

  return { displayDetails };
})();

export { renderWeatherData as default };