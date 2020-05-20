import React from "react";

const Container = ({ children, wide }) => (
  <div className={"container py-md-5 " + (wide ? "" : "container--narrow")}>
    {children}
  </div>
);

export default Container;
