import React, { useEffect } from "react";

import { Form } from "./Form";

export const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Form />
    </>
  );
};
