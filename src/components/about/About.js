import React from "react";
import { Link } from "react-router-dom";

const AboutComponent = props => (
  <main role="main" className="container">
    <div className="starter-template">
      <h1>Bootstrap starter template</h1>
      <p className="lead">
        Use this document as a way to quickly start any new project.
        <br /> All you get is this text and a mostly barebones HTML document.
        <Link to="/" className="btn btn-primary btn-lg">
          Home
        </Link>
      </p>
    </div>
  </main>
);

export default AboutComponent;
