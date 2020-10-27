import React from "react";
import "./style.scss";
import HoursForecast from "./HoursForecast";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const WeatherForecast = ({ forecasts }) => {
  let history = useHistory();
  const { city, list } = forecasts;
  return (
    <div className="forecast-main">
      <Button variant="contained" color="primary" onClick={history.goBack}>
        Back home page
      </Button>
      <h2 className="forecast-text">Weather forecast for {city.name}, next 5 days </h2>
      <div className="forecast-style">
        {list.map((item) => {
          return (
            <HoursForecast
              key={item.dt}
              temp={Math.floor(item.main.temp)}
              description={item.weather[0].description}
              icon={item.weather[0].icon}
              day={item.dt_txt.slice(8, 10)}
              month={item.dt_txt.slice(5, 7)}
              hour={item.dt_txt.slice(-8, -3)}
            />
          );
        })}
      </div>
    </div>
  );
};

WeatherForecast.propTypes = {
  forecasts: PropTypes.shape({
    city: PropTypes.object,
    list: PropTypes.array,
  }).isRequired,
};

export default WeatherForecast;
