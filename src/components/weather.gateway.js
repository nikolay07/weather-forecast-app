const fetchAllWeather = (citi) => {
  const APIkey = "732241cb6bbb0370c5838aaea83a91ff";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citi}&APPID=${APIkey}&units=metric`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${citi}&APPID=${APIkey}&units=metric`;
  return Promise.all([fetch(weatherUrl), fetch(forecastUrl)]).then(([res1, res2]) => {
    if (res1.ok && res2.ok) {
      return Promise.all([res1.json(), res2.json()]);
    }
    throw Error(res1.statusText, res2.statusText);
  });
};

export default fetchAllWeather;
