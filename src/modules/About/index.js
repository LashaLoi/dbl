import React, { useEffect } from "react";

import { Person } from "./Person";

import { mocks } from "./mocks";

export const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {mocks.map(item => (
        <Person key={item.id} {...item} />
      ))}
    </>
  );
};
