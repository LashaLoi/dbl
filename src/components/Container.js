import React from "react";

export const Container = ({ children, small }) => (
  <div className={small ? "container-small" : "container"}>{children}</div>
);
