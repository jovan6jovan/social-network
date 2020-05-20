import React from "react";
import "./App.css";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainRoutes from "../../routes/MainRoutes";

const App = () => {
  return (
    <>
      <Header />
      <MainRoutes />
      <Footer />
    </>
  );
};

export default App;
