import React from "react";

import Fade from "react-reveal/Fade";

import SliderComponent from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import { Container } from "../../../components/Container";

import "./index.scss";

const content = [
  {
    id: 2342134,
    url:
      "https://ru.hellomagazine.com/thumb/755x550_0/images/2019/June/Nastya/xvoz18-zahod.jpg.pagespeed.ic.0DwjyqQOt4.jpg"
  },
  {
    id: 1212213,
    url:
      "https://www.wedding-magazine.ru/images/articles/53199/gallery/20181290_110315539621008_1055284051721584640_n.jpg"
  },
  {
    id: 412341234,
    url:
      "https://cdn4.rzn.info/data/image/newsadd/base/2018/11/184108_5be27f98369b1.jpg"
  }
];

export const Slider = () => (
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
