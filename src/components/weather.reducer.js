import { WEATHER_INPUT, WEATHER_ERROR, WEATHER_INPUT_LIST, WEATHER_DATA } from "./weather.actions";

const initialState = {
  weather: {},
  forecast: {},
  values: "",
  error: false,
  cities: [],
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_INPUT:
      return {
        ...state,
        values: action.payload.values,
        error: action.payload.error,
      };
    case WEATHER_DATA:
      return {
        ...state,
        weather: action.payload.weatherRes,
        forecast: action.payload.forecastRes,
        values: action.payload.values,
        cities: [action.payload.cities, ...state.cities],
      };

    case WEATHER_ERROR:
      return {
        ...state,
        error: action.payload.error,
        values: action.payload.values,
      };
    case WEATHER_INPUT_LIST:
      return {
        ...state,
        weather: action.payload.weatherRes,
        forecast: action.payload.forecastRes,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
