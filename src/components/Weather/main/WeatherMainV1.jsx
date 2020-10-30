import React, { useState } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import WeatherForecast from "../forecast/WeatherForecast";
import WeatherInput from "../input/WeatherInput";
import WeatherToday from "../today/WeatherToday";
import CityNotFound from "../notfound/CityNotFound";
import fetchAllWeather from "../../weather.gateway";
// import { date, weatherInform } from "../../weather.data";
import "./main.scss";

const WeatherMain = () => {
  const [values, setValues] = useState("");
  const [info, setInfo] = useState(null);
  const [error, setError] = useState(false);
  const [cities, setCities] = useState([]);

  const handleInputChange = (e) => {
    setValues(e.target.value);
  };

  const fetchSubmitWeather = (e) => {
    e.preventDefault();
    fetchAllWeather(values)
      .then(([fetchWeather, fetchForecast]) => {
        const sunset = new Date(fetchWeather.sys.sunset * 1000).toLocaleTimeString().slice(0, 5);
        const sunrise = new Date(fetchWeather.sys.sunrise * 1000).toLocaleTimeString().slice(0, 5);
        const weatherData = weatherInform(fetchWeather, fetchForecast, date, sunrise, sunset);
        setError(false);
        setInfo(weatherData);
        setCities([[values, weatherData], ...cities]);
        setValues("");
      })
      .catch((errors) => {
        console.log(errors);
        setError(true);
        setInfo(null);
      });
  };

  const handleChangeInfo = (city) => {
    setInfo(city);
    setError(false);
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
        {info ? <WeatherToday weather={info} /> : null}
      </Route>
      <Route path="/forecast">
        <Link to="/">
          <Button variant="contained" color="primary">
            Back home page
          </Button>
        </Link>
        {info ? <WeatherForecast forecasts={info.forecast} city={info.city} /> : null}
      </Route>
    </Switch>
  );
};

export default WeatherMain;
