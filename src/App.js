import React from "react";

import { useModal } from "./hooks/useModal";

import {
  Title,
  Header,
  Amenities,
  About,
  Galery,
  Footer,
  Sidebar
} from "./modules";

export const App = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Title setOpen={handleOpen} />
      <Sidebar open={open} setClose={handleClose} />
      <Header />
      <Amenities />
      <About />
      <Galery />
      <Footer />
    </>
  );
};
