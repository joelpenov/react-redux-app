import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./home/Home";
import AboutComponent from "./about/About";
import NavBarComponent from "./header/NavBar";
import NotFoundComponent from "./error/NotFound";
import CoursesComponent from "./course/CoursesComponent";
// eslint-disable-next-line import/no-named-as-default
import ManageCourseComponent from "./course/ManageCourseComponent";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

const AppComponent = () => (
  <div className="container-fluid">
    <NavBarComponent />
    <Switch>
      <Route exact path="/" component={HomeComponent} />
      <Route
        path="/course/:slug([A-Za-z0-9-_]+)"
        component={ManageCourseComponent}
      />
      <Route path="/course" component={ManageCourseComponent} />
      <Route path="/courses" component={CoursesComponent} />
      <Route path="/about" component={AboutComponent} />
      <Route path="*" component={NotFoundComponent} />
    </Switch>
    <ToastContainer autoClose={3000} hideProgressBar />
  </div>
);

export default AppComponent;
