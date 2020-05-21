import React from "react";
import axios from "axios";

import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainRoutes from "../../routes/MainRoutes";
import FlashMessages from "../FlashMessages/FlashMessages";

axios.defaults.baseURL = "http://localhost:8080";

const App = () => {
  return (
    <>
      <FlashMessages />
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
