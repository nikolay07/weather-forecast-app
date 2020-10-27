import React from "react";
import WeatherMain from "./components/Weather/main/WeatherMain";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <WeatherMain />
    </BrowserRouter>
  );
};
export default App;
