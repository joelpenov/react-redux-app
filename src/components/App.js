import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./home/Home";
import AboutComponent from "./about/About";
import NavBarComponent from "./Header/NavBar";
import NotFoundComponent from "./error/NotFound";
import CoursesComponent from "./course/CoursesComponent";

const AppComponent = () => (
  <div className="container-fluid">
    <NavBarComponent />
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/courses" component={CoursesComponent} />
      <Route path="/about" component={AboutComponent} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  </div>
);

export default AppComponent;
