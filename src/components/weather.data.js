export const weatherInform = (data) => {
  const { name, sys, weather, main, clouds, wind } = data;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nocvember",
    "December",
  ];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDate = new Date();
  const date = `${days[currentDate.getDay()]} ${currentDate.getDate()} ${months[currentDate.getMonth()]}`;
  return {
    city: name,
    country: sys.country,
    description: weather[0].description,
    main: weather[0].main,
    temp: main.temp,
    highestTemp: main.temp_max,
    lowestTemp: main.temp_min,
    clouds: clouds.all,
    humidity: main.humidity,
    wind: wind.speed,
    date: date,
    sunset: new Date(sys.sunset * 1000).toLocaleTimeString().slice(0, 5),
    sunrise: new Date(sys.sunrise * 1000).toLocaleTimeString().slice(0, 5),
  };
};
