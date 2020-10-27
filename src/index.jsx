import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./index.scss";
import App from "./App";

const rootElement = document.querySelector("#root");

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
