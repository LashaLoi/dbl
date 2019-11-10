import React, { useEffect } from "react";

import { About } from "./About";
import { Amenities } from "./Amenities";
import { Galery } from "./Galery";
import { Header } from "./Header";

export const Main = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Amenities />
      <About />
      <Galery />
    </>
  );
};
