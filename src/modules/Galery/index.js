import React, { useEffect, useState } from "react";

import Fade from "react-reveal/Fade";

import FsLightbox from "fslightbox-react";

import { images } from "./images";

import "./index.scss";

// console.log(images);

export const Galery = () => {
  const [{ toggler, current }, setState] = useState({
    toggler: false,
    current: 1
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggle = current => {
    setState(state => ({
      toggler: !state.toggler,
      current
    }));
  };

  return (
    <>
      <div className="category">
        {images.map((item, i) => (
          <Fade key={i}>
            <img
              onClick={() => toggle(i + 1)}
              src={item}
              alt="superimg"
              className="category-image"
            />
          </Fade>
        ))}
      </div>
      <FsLightbox slide={current} toggler={toggler} sources={images} />
    </>
  );
};
