import React from "react";

import { navigate } from "@reach/router";

import scroll from "react-scroll";

import Fade from "react-reveal/Fade";

import { ReactComponent as Img } from "../../../assets/images/arrow_downward-black.svg";

import { Container } from "../../../components/Container";

import { Logo } from "../../Logo";

import "./index.scss";

export const Amenities = () => (
  <Container>
    <Fade>
      <div className="amenities-container">
        <div className="card">
          <div className="card-container">
            <div className="card-content">
              <div className="card-title">Услуги</div>
              <div className="card-logo">
                <Logo />
              </div>
              <div className="card-message">Воплоти мечты в реальность</div>
            </div>
            <button className="card-btn" onClick={() => navigate("/amenities")}>
              Подробнее
            </button>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </Fade>
    <div className="arrow-bottom">
      <Img
        onClick={() =>
          scroll.animateScroll.scrollTo(window.innerHeight * 2 + 20)
        }
      />
    </div>
  </Container>
);
