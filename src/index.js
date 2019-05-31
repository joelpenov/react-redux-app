import { render } from "react-dom";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppComponent from "./components/App";
import configureStore from "./redux/reduxStoreConfig";
import { Provider } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const store = configureStore();

render(
  <Router>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </Router>,
  document.getElementById("react-app")
);
