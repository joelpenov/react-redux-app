import React from "react";
import { NavLink } from "react-router-dom";

const NavBarComponent = () => {
  const activeclassName = "active";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        penov.dev
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink
            className="nav-item nav-link"
            activeClassName={activeclassName}
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName={activeclassName}
            to="/courses"
          >
            Courses
          </NavLink>
          <NavLink
            className="nav-item nav-link"
            activeClassName={activeclassName}
            to="/about"
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBarComponent;
