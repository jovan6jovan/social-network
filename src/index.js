import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { SomeProvider } from "./context/SomeContext";
import App from "./components/containers/App";

ReactDOM.render(
  <SomeProvider>
    <Router>
      <App />
    </Router>
  </SomeProvider>,
  document.getElementById("root")
);
