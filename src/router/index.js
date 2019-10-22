import React from "react";
import { Router as RouterComponent } from "@reach/router";

import { Main, Amenities, About } from "../modules";

export const Router = () => (
  <RouterComponent>
    <Main path="/" />
    <Amenities path="/amenities" />
    <About path="/about" />
  </RouterComponent>
);
