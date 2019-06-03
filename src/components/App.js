import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./home/Home";
import AboutComponent from "./about/About";
import NavBarComponent from "./header/NavBar";
import NotFoundComponent from "./error/NotFound";
import CoursesComponent from "./course/CoursesComponent";
import ManageCourseComponent from "./course/ManageCourseComponent";

const AppComponent = () => (
  <div className="container-fluid">
    <NavBarComponent />
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route
        path="/course/:a([A-Za-z0-9-_]+)"
        component={ManageCourseComponent}
      />
      <Route path="/course" component={ManageCourseComponent} />
      <Route path="/courses" component={CoursesComponent} />
      <Route path="/about" component={AboutComponent} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
  </div>
);

export default AppComponent;
