import React, { useEffect } from "react";

import { Wedding } from "./Wedding/";

import { data1, data2, data3 } from "./mocks";

export const Amenities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Wedding title="Свадьбы" items={data1} />
      <Wedding title="ЧАСТНЫЕ СОБЫТИЯ" items={data2} />
      <Wedding title="КОРПОРАТИВНЫЕ СОБЫТИЯ" items={data3} />
      <div className="margin-50"></div>
    </>
  );
};
