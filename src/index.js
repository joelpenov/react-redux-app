import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppComponent from "./components/App";
import configureStore from "./redux/storeConfig/reduxStoreConfig";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <AppComponent />
    </Router>
  </Provider>,
  document.getElementById("react-app")
);
