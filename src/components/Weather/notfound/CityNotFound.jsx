/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFrown } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

const CityNotFound = () => {
  return (
    <div className="notfound">
      <span className="notfound-icon">
        <FontAwesomeIcon icon={faFrown} />
      </span>
      <span className="notfound-text">City was not found..</span>
    </div>
  );
};

export default CityNotFound;
