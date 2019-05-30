import { render } from "react-dom";
import React from "react";

function Sample() {
  return <p>Hello App!</p>;
}

render(<Sample />, document.getElementById("react-app"));
