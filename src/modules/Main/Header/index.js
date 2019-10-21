import React from "react";

import { Parallax } from "react-parallax";

import scroll from "react-scroll";

import Fade from "react-reveal/Fade";

import { ReactComponent as Img } from "../../../assets/images/arrow_downward-24px.svg";

import "./index.scss";

const image1 =
  "https://cepia.ru/images/u/pages/10-let-kakaya-svadba-cover-298.jpg";

export const Header = () => (
  <Parallax blur={10} bgImage={image1} strength={1000} bgImageAlt="the image">
    <div className="header">
      <div className="header-container">
        <Fade>
          <div className="">Создаем незабываемые впечатления</div>{" "}
          <Img
            onClick={() =>
              scroll.animateScroll.scrollTo(window.innerHeight - 50)
            }
          />
        </Fade>
      </div>
    </div>
  </Parallax>
);
