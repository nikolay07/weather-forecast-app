import fetchAllWeather from "../components/weather.gateway";

export const WEATHER_CITY_INPUT = "WEATHER_CITY_INPUT/FORECAST";
export const WEATHER_INPUT = "WEATHER_INPUT/FORECAST";
export const WEATHER_ERROR = "WEATHER_ERROR/FORECAST";
export const WEATHER_INPUT_LIST = "WEATHER_INPUT_LIST/FORECAST";
export const WEATHER_DATA = "WEATHER_DATA/FORECAST";

export const changeInput = (values) => {
  return {
    type: WEATHER_INPUT,
    payload: {
      values,
      error: false,
    },
  };
};

export const recivedDataWeather = (weatherRes, forecastRes, values) => {
  return {
    type: WEATHER_DATA,
    payload: {
      weatherRes,
      forecastRes,
      values: "",
      cities: [values, weatherRes, forecastRes],
    },
  };
};

export const errorForecast = () => {
  return {
    type: WEATHER_ERROR,
    payload: { error: true, values: "" },
  };
};
export const inputHistory = (weatherRes, forecastRes) => {
  return {
    type: WEATHER_INPUT_LIST,
    payload: { weatherRes, forecastRes, error: false },
  };
};

export const fetchWeatherForecast = (city) => {
  const thunkAction = (dispatch) => {
    fetchAllWeather(city)
      .then(([weatherResponse, forecastResponse]) => {
        dispatch(recivedDataWeather(weatherResponse, forecastResponse, city));
      })
      .catch((error) => {
        console.log(error), dispatch(errorForecast());
      });
  };
  return thunkAction;
};
