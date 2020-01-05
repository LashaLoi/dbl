import React from "react";

import Fade from "react-reveal/Fade";

import { navigate } from "@reach/router";

import { Parallax } from "react-parallax";

import { Container } from "../../../components/Container";

import BG from "../../../assets/images/Б3.jpg";

import "./index.scss";

export const Galery = () => {
  return (
    <Container>
      <div className="calery">
        <Parallax bgImage={BG} strength={300} bgImageAlt="the image">
          <div className="calery-container">
            <Fade>
              <div className="card left">
                <div className="card-container">
                  <div className="card-content">
                    <div className="card-title">ГАЛЕРЕЯ</div>

                    <div className="card-message">Незабываемые впечатления</div>
                  </div>
                  <button
                    className="card-btn"
                    onClick={() => navigate("/galery")}
                  >
                    Подробнее
                  </button>
                </div>
              </div>
            </Fade>
          </div>
        </Parallax>
      </div>
    </Container>
  );
};
