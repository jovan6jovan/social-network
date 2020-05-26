import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import StateContext from "../context/StateContext";
import HomeGuest from "../components/HomeGuest/HomeGuest";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";
import Terms from "../components/Terms/Terms";
import CreatePost from "../components/CreatePost/CreatePost";
import ViewSinglePost from "../components/ViewSinglePost/ViewSinglePost";

const MainRoutes = () => {
  const { loggedIn } = useContext(StateContext);

  return (
    <Switch>
      <Route exact path="/" component={loggedIn ? Home : HomeGuest} />
      <Route exact path="/about-us" component={About} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/create-post" component={CreatePost} />
      <Route exact path="/post/:id" component={ViewSinglePost} />
      <Route exact path="/profile/:username" component={Profile} />
    </Switch>
  );
};

export default MainRoutes;
