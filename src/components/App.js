import React from "react";
import { Route } from "react-router-dom";
import HomeComponent from "./home/Home";
import AboutComponent from "./about/About";
import NavBarComponent from "./Header/NavBar";

const AppComponent = () => (
  <div className="container-fluid">
    <NavBarComponent />
    <Route exact path="/" component={HomeComponent} />
    <Route path="/about" component={AboutComponent} />
  </div>
);

export default AppComponent;
