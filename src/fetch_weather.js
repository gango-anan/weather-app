const getWeather = (url) => {
  fetch(url)
  .then(response => {
    if (!response.ok) {
      throw Error(response.statusText)
    }

    return response.json();
  })
  .then(data => console.log(data))
  .catch(error => {
    console.log('City note found.');
  });
}

export { getWeather as default };
