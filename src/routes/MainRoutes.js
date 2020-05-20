import React from "react";
import { Switch, Route } from "react-router-dom";

import HomeGuest from "../components/HomeGuest/HomeGuest";
import About from "../components/About/About";
import Terms from "../components/Terms/Terms";

const MainRoutes = () => (
  <Switch>
    <Route exact path="/" component={HomeGuest} />
    <Route exact path="/about-us" component={About} />
    <Route exact path="/terms" component={Terms} />
  </Switch>
);

export default MainRoutes;
