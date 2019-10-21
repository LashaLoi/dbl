import React from "react";
import { Router as RouterComponent } from "@reach/router";

import { Main, Amenities } from "../modules";

export const Router = () => (
  <RouterComponent>
    <Main path="/" />
    <Amenities path="/amenities" />
  </RouterComponent>
);
