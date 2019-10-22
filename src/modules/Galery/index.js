import React, { useEffect } from "react";

import { Slider } from "./Slider";
import { Category } from "./Category";

export const Galery = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider />
      <Category />
    </>
  );
};
