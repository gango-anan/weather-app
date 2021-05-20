const apiDataModule = (() => {
  const generateObject = (data) => {
    return {
      temperature: data.main.temp,
      visibility: data.visibility,
       humidity: data.main.humidity,
      windSpeed: data.wind.speed,
       city: data.name,
       country: data.sys.country,
       icon: data.weather[0].icon
    };
  };

   const getData = async (city, utilityKey) => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${utilityKey}`, {
        mode: 'cors',
      });
      const data = await response.json();
      return generateObject(data);
    } catch (e) {
      return setTimeout(console.log('invalid city'), 200);
    }
  };

  return { getData };

})();

export { apiDataModule as default };
