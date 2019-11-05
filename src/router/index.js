import React from "react";
import { Router as RouterComponent } from "@reach/router";

import {
  Main,
  Amenities,
  About,
  Galery,
  GaleryAbout,
  Contact
} from "../modules";

export const Router = () => (
  <RouterComponent>
    <Main path="/" />
    <Amenities path="/amenities" />
    <About path="/about" />
    <Galery path="/galery" />
    <GaleryAbout path="/galery/:id" />
    <Contact path="/contacts" />
  </RouterComponent>
);
