import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import WeatherForecast from "../forecast/WeatherForecast";
import WeatherInput from "../input/WeatherInput";
import WeatherToday from "../today/WeatherToday";
import CityNotFound from "../notfound/CityNotFound";
import fetchAllWeather from "../../weather.gateway";
import "./main.scss";

const WeatherMain = () => {
  const [weatherData, setWeatherData] = useState({
    weatheres: {},
    forecastes: {},
    values: "",
    cities: [],
    error: false,
  });

  const handleInputChange = (e) => {
    setWeatherData({
      ...weatherData,
      values: e.target.value,
    });
  };

  const fetchSubmitWeather = (e) => {
    e.preventDefault();
    fetchAllWeather(weatherData.values)
      .then(([fetchWeather, fetchForecast]) => {
        setWeatherData({
          ...weatherData,
          weatheres: fetchWeather,
          forecastes: fetchForecast,
          values: "",
          cities: [[values, fetchWeather, fetchForecast], ...cities],
        });
      })
      .catch((errors) => {
        console.log(errors);
        setWeatherData({
          ...weatherData,
          error: true,
        });
      });
  };

  const handleChangeInfo = (weth, forec) => {
    setWeatherData({
      ...weatherData,
      weatheres: weth,
      forecastes: forec,
      error: false,
    });
  };

  const isEmpty = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

  const { values, error, cities, weatheres, forecastes } = weatherData;

  return (
    <Switch>
      <Route exact path="/">
        <div className="weather">
          <WeatherInput
            value={values}
            change={handleInputChange}
            submit={fetchSubmitWeather}
            changeInfo={handleChangeInfo}
            cities={cities}
          />
          {error ? <CityNotFound error={error} /> : null}
        </div>
        {!isEmpty(weatheres) ? <WeatherToday weatheres={weatherData.weatheres} /> : null}
      </Route>
      <Route path="/forecast">
        <Link to="/">
          <Button variant="contained" color="primary">
            Back home page
          </Button>
        </Link>
        {!isEmpty(forecastes) ? <WeatherForecast forecasts={forecastes.list} city={forecastes.city.name} /> : null}
      </Route>
    </Switch>
  );
};

export default WeatherMain;
