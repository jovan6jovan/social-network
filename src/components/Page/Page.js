import React, { useEffect } from "react";

import Container from "../Container/Container";

const Page = ({ children, title, wide }) => {
  useEffect(() => {
    document.title = `Socializr | ${title}`;
    window.scrollTo(0, 0);
  }, [title]);

  return <Container wide={wide}>{children}</Container>;
};

export default Page;
