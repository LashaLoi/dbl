import React from "react";
import { Router as RouterComponent } from "@reach/router";

import { Main, Amenities, About, Galery, Contact } from "../modules";

export const Router = () => (
  <RouterComponent>
    <Main path="/" />
    <Amenities path="/amenities" />
    <About path="/about" />
    <Galery path="/galery" />
    <Contact path="/contacts" />
  </RouterComponent>
);
