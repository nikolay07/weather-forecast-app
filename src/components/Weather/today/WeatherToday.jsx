import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./today.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { weatherInform } from "../../weather.data";
import PropTypes from "prop-types";

import {
  faCloud,
  faBolt,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faSun,
  faSmog,
} from "@fortawesome/free-solid-svg-icons";

const WeatherToday = ({ weatheres }) => {
  const {
    city,
    country,
    description,
    main,
    temp,
    humidity,
    wind,
    highestTemp,
    lowestTemp,
    date,
    sunset,
    sunrise,
  } = weatherInform(weatheres);

  const weatherShowIcon = {
    Thunderstorm: faBolt,
    Drizzle: faCloudRain,
    Rain: faCloudShowersHeavy,
    Snow: faSnowflake,
    Clear: faSun,
    Clouds: faCloud,
    Smog: faSmog,
  };
  const IconWeather = weatherShowIcon[main];
  const weatherDetails = [
    { name: "Hight", data: Math.floor(highestTemp) },
    { name: "Wind", data: wind + "mph" },
    { name: "Sunrise", data: sunrise },
    { name: "Low", data: Math.floor(lowestTemp) },
    { name: "Rain", data: humidity + "%" },
    { name: "Sunset", data: sunset },
  ];

  return (
    <div className="result-block">
      <div className="result">
        <div className="result__current">
          <div className="large-text">
            {city}, {country}
          </div>
          <div className="small-text">{date}</div>
          <div className="result__image">
            <div className="result__image_temp">
              <span className="temperature">{Math.floor(temp)}&#176;</span>
              <span className="small-text">{description}</span>
            </div>
            <div className="result__image_icon">
              <FontAwesomeIcon icon={IconWeather} />
            </div>
          </div>
        </div>

        {/* <div className="weather-detail">
          {weatherDetails.map((info) => {
            <div className="weather-detail-item" key={info.name}>
              <span className="small-text">{info.data}&#176;</span>
              <span className="text">{info.name}</span>
            </div>;
          })}
        </div> */}
        <div className="weather-detail">
          <div className="weather-detail-item">
            <span className="small-text">{Math.floor(highestTemp)}&#176;</span>
            <span className="text">Hight</span>
          </div>
          <div className="weather-detail-item">
            <span className="small-text">{wind}mph</span>
            <span className="text">Wind</span>
          </div>
          <div className="weather-detail-item">
            <span className="small-text">{sunrise}</span>
            <span className="text">Sunrise</span>
          </div>
          <div className="weather-detail-item">
            <span className="small-text">{Math.floor(lowestTemp)}&#176;</span>
            <span className="text">Low</span>
          </div>
          <div className="weather-detail-item">
            <span className="small-text">{humidity}%</span>
            <span className="text">Rain</span>
          </div>
          <div className="weather-detail-item">
            <span className="small-text">{sunset}</span>
            <span className="text">Sunset</span>
          </div>
        </div>
      </div>
      <Link to="/forecast">
        <Button variant="contained" color="primary">
          Forecast per 5 days
        </Button>
      </Link>
    </div>
  );
};

WeatherToday.propTypes = {
  weatheres: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    main: PropTypes.object,
    temp: PropTypes.number,
    humidity: PropTypes.number,
    wind: PropTypes.object,
    highestTemp: PropTypes.number,
    lowestTemp: PropTypes.number,
  }).isRequired,
};

export default WeatherToday;
