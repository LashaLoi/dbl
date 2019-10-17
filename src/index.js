import React from "react";
import { render } from "react-dom";

import { App } from "./App";

import theme from "./styles/theme";
import { ThemeProvider } from "@material-ui/styles";

import "./styles/index.scss";

const root = (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

render(root, document.getElementById("root"));
