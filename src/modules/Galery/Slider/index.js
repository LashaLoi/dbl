import React from "react";

import Fade from "react-reveal/Fade";

import SliderComponent from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import { Container } from "../../../components/Container";

import "./index.scss";

export const Slider = ({ content }) => (
  <Container>
    <Fade>
      <div className="calery-page-container">
        <SliderComponent duration={2000} infinite autoplay={3000}>
          {content.map(article => (
            <div
              key={article.id}
              style={{
                background: `url(${article.url}) no-repeat center center`
              }}
            ></div>
          ))}
        </SliderComponent>
      </div>
    </Fade>
  </Container>
);
