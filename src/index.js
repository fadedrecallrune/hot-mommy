import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import "animate.css/animate.min.css";

import items from "./assets/data";
import rootReducer from './reducers'

const store = createStore(rootReducer, {
  items: items
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
