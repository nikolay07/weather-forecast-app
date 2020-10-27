export const weatherSelector = (state) => {
  return state.weathers.weather;
};

export const forecastSelector = (state) => {
  return state.weathers.forecast;
};
export const valuesSelector = (state) => {
  return state.weathers.values;
};

export const errorSelector = (state) => {
  return state.weathers.error;
};

export const citiesSelector = (state) => {
  return state.weathers.cities;
};
