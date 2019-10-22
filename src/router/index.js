import React from "react";
import { Router as RouterComponent } from "@reach/router";

import { Main, Amenities, About, Galery } from "../modules";

export const Router = () => (
  <RouterComponent>
    <Main path="/" />
    <Amenities path="/amenities" />
    <About path="/about" />
    <Galery path="/galery" />
  </RouterComponent>
);
