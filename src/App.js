import React from "react";

import { useModal } from "./hooks/useModal";

import { Router } from "./router/index";

import { Title, Footer, Sidebar } from "./modules";

export const App = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Title setOpen={handleOpen} />
      <Sidebar open={open} setClose={handleClose} />
      <Router />
      <Footer />
    </>
  );
};
