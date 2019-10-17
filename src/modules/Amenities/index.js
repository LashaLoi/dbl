import React from "react";

import Fade from "react-reveal/Fade";

import { Container } from "../../components/Container";

import { Logo } from "../Logo/";

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
            <button className="card-btn">Подробнее</button>
          </div>
        </div>
        <div className="image"></div>
      </div>
    </Fade>
  </Container>
);
