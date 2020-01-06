import React, { useCallback } from "react";
import scroll from "react-scroll";

import Fade from "react-reveal/Fade";

import { ReactComponent as Img } from "../../../assets/icon/arrow_downward-24px.svg";

import "./index.scss";

export const Header = () => {
  const scrollTo = useCallback(
    () => scroll.animateScroll.scrollTo(window.innerHeight - 50),
    []
  );

  return (
    <div
      style={{
        marginTop: "100px",
        background: `url(${require("../../../assets/images/MD.jpg")})`,
        backgroundSize: "cover"
      }}
    >
      <div className="header">
        <div className="header-container">
          <Fade>
            <div>Создаем незабываемые впечатления</div>
            <Img onClick={scrollTo} style={{ cursor: "pointer" }} />
          </Fade>
        </div>
      </div>
    </div>
  );
};
