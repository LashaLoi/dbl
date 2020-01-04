import React from "react";

import Fade from "react-reveal/Fade";
import uuid from "uuid";

import scroll from "react-scroll";
import SliderComponent from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import { ReactComponent as Img } from "../../../assets/images/arrow_downward-black.svg";

import { Container } from "../../../components/Container";

import "./index.scss";

const data = [
  {
    id: uuid(),
    who: "Irina loi",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio perspiciatis laudantium quam commodi voluptatum quasi numquam laboriosam, aut sint quas?"
  },
  {
    id: uuid(),
    who: "Aliaksei loi",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio perspiciatis laudantium quam commodi voluptatum quasi numquam laboriosam, aut sint quas? adipisicing elit. Optio perspiciatis laudantium quam commodi voluptatum quasi numquam laboriosam, aut sint quas?"
  },
  {
    id: uuid(),
    who: "Sasha Loi",
    message:
      "adipisicing elit. Optio perspiciatis laudantium quam commodi voluptatum quasi numquam laboriosam, aut sint quas?"
  }
];

export const About = () => {
  return (
    <Fade>
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100px",
          fontSize: "2rem"
        }}
      >
        О нас
      </div>
      <div className="calery-page-container column">
        <SliderComponent
          duration={2000}
          infinite
          autoplay={3000}
          previousButton={null}
          nextButton={null}
          touchDisabled
        >
          {data.map(article => (
            <div key={article.id} className="who-container">
              <div className="who-cont">
                <div className="message">{article.message}</div>
                <div className="who">{article.who}</div>
              </div>
            </div>
          ))}
        </SliderComponent>
      </div>
      <div className="arrow">
        <Img
          onClick={() =>
            scroll.animateScroll.scrollTo(window.innerHeight * 3 + 100)
          }
        />
      </div>
    </Fade>
  );
};
