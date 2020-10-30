import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import WeatherForecast from "../forecast/WeatherForecast";
import WeatherInput from "../input/WeatherInput";
import WeatherToday from "../today/WeatherToday";
import CityNotFound from "../notfound/CityNotFound";
import { connect } from "react-redux";
import { changeInput, inputHistory, fetchWeatherForecast } from "../../weather.actions";

import {
  weatherSelector,
  forecastSelector,
  valuesSelector,
  errorSelector,
  citiesSelector,
} from "../../weather.selectors";
import PropTypes from "prop-types";
import "./main.scss";

const WeatherMain = ({
  changeInput,
  inputHistory,
  fetchWeatherForecast,
  weatheres,
  forecastes,
  values,
  cities,
  error,
}) => {
  const handleInputChange = (e) => {
    changeInput(e.target.value);
  };

  const fetchSubmitWeather = (e) => {
    e.preventDefault();
    fetchWeatherForecast(values);
  };

  const handleChangeInfo = (wetherResSaved, forecastResSaved) => {
    inputHistory(wetherResSaved, forecastResSaved);
  };

  const isEmpty = (obj) => {
    return JSON.stringify(obj) === "{}";
  };

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
        {!isEmpty(weatheres) && !error ? <WeatherToday weatheres={weatheres} /> : null}
      </Route>
      <Route path="/forecast">
        {!isEmpty(forecastes) ? <WeatherForecast forecasts={forecastes} /> : <Redirect to="/" />}
      </Route>
    </Switch>
  );
};

const mapState = (state) => {
  return {
    weatheres: weatherSelector(state),
    forecastes: forecastSelector(state),
    values: valuesSelector(state),
    cities: citiesSelector(state),
    error: errorSelector(state),
  };
};
const mapDispatch = {
  changeInput,
  inputHistory,
  fetchWeatherForecast,
};

WeatherMain.propTypes = {
  changeInput: PropTypes.func.isRequired,
  fetchWeatherForecast: PropTypes.func.isRequired,
  weatheres: PropTypes.object.isRequired,
  forecastes: PropTypes.object.isRequired,
  values: PropTypes.string.isRequired,
  cities: PropTypes.array.isRequired,
  error: PropTypes.bool.isRequired,
};

export default connect(mapState, mapDispatch)(WeatherMain);
