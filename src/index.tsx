// React
import React from "react";
// React DOM
import ReactDOM from "react-dom";
// CheckList
import { CheckList } from "./CheckList";

// Render the CheckList App
ReactDOM.render(<CheckList />, document.getElementById("root"));
if (module.hot) {
  module.hot.accept();
}
