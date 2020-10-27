/* eslint-disable react/jsx-filename-extension */
import React from "react";
import PropTypes from "prop-types";

const HoursForecast = ({ temp, month, day, hour, icon, description }) => {
  const iconUrl = `https://openweathermap.org/img/w/${icon}.png`;

  return (
    <div className="forecast-day">
      <span className="forecast-text">
        {day}.{month}
      </span>
      <span>{hour}</span>
      <span>{description}</span>
      <img className="forecast-icon" src={iconUrl} alt="icon" />
      <span>{temp}&#176;</span>
    </div>
  );
};

HoursForecast.propTypes = {
  temp: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  hour: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default HoursForecast;
