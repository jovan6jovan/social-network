import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import { SomeContext } from "../context/SomeContext";
import HomeGuest from "../components/HomeGuest/HomeGuest";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Terms from "../components/Terms/Terms";
import CreatePost from "../components/CreatePost/CreatePost";
import ViewSinglePost from "../components/ViewSinglePost/ViewSinglePost";

const MainRoutes = () => {
  const { loggedIn } = useContext(SomeContext);

  return (
    <Switch>
      <Route exact path="/" component={loggedIn ? Home : HomeGuest} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/post/:id" component={ViewSinglePost} />
    </Switch>
  );
};

export default MainRoutes;
