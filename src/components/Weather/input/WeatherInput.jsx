import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input, Button } from "@material-ui/core";
import "./style.scss";

const WeatherInput = ({ submit, value, change, cities, changeInfo }) => {
  if (cities.length > 5) {
    cities.length = 5;
  }

  const cityArr = cities.map((el) => el[1]["name"]);
  const item = (value) => value[1]["name"];

  let a2 = cities.map((el) => !cityArr.includes(item(el)));
  let a3 = cities.reduce((acc, elem) => (cityArr.includes(item(elem)) ? acc : [...acc, elem]), []);

  return (
    <div className="city-search">
      <form className="search" onSubmit={submit}>
        <input className="search__input" type="text" value={value} placeholder="Enter city" onChange={change} />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={submit}
          style={{ width: "150px", borderRadius: "0 20px 20px 0", marginLeft: "3px" }}
        >
          Search
        </Button>
      </form>

      <div className="search__history">
        {cities.length ? (
          <ul className="search__history_list">
            {cities.map((citi) => {
              return (
                <li key={`my${citi[0]}`} onClick={() => changeInfo(citi[1], citi[2])}>
                  <Link to="/">{citi[0]}</Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

WeatherInput.propTypes = {
  submit: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
  changeInfo: PropTypes.func.isRequired,
};

export default WeatherInput;
