import { render } from "react-dom";
import React from "react";
import HomeComponent from "./components/home/Home";
import { BrowserRouter as Router } from "react-router-dom";
import AppComponent from "./components/App";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

render(
  <Router>
    <AppComponent />
  </Router>,
  document.getElementById("react-app")
);
