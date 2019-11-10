import React from "react";

import Fade from "react-reveal/Fade";

import { Parallax } from "react-parallax";

import { Container } from "../../../components/Container";

import { Logo } from "../../Logo";

import "./index.scss";

const image1 =
  "https://cepia.ru/images/u/pages/10-let-kakaya-svadba-cover-298.jpg";

export const Galery = () => {
  return (
    <Container>
      <div className="calery">
        <Parallax
          blur={10}
          bgImage={image1}
          strength={1000}
          bgImageAlt="the image"
        >
          <div className="calery-container">
            <Fade>
              <div className="card left">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">ГАЛЕРЕЯ</div>
                    <div className="card-logo">
                      <Logo />
                    </div>
                    <div className="card-message">Незабываемые впечатления</div>
                  </div>
                  <button className="card-btn">Подробнее</button>
                </div>
              </div>
            </Fade>
          </div>
        </Parallax>
      </div>
    </Container>
  );
};
