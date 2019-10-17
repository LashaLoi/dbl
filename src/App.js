import React from "react";

import { useModal } from "./hooks/useModal";

import { Title } from "./modules/Title";
import { Header } from "./modules/Header";
import { Amenities } from "./modules/Amenities";
import { About } from "./modules/About";
import { Galery } from "./modules/Galery";
import { Footer } from "./modules/Footer";

import Sidebar from "./modules/Sidebar";

const App = () => {
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

export default App;
