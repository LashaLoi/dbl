import React from "react";

import { Container } from "../../../components/Container";

import { navigate } from "@reach/router";

import Fade from "react-reveal/Fade";

import "./index.scss";

const content = [
  {
    id: Date.now() + Math.random(1000000),
    title: "Some 1",
    desc: "Desc 1",
    url:
      "https://ru.hellomagazine.com/thumb/755x550_0/images/2017/may/marina/pippa-zahod22.jpg",
    link: "1"
  },
  {
    id: Date.now() + Math.random(1000000),
    title: "Some 22",
    desc: "Desc 2",
    url:
      "https://s3.cdn.teleprogramma.pro/wp-content/uploads/2018/10/4b42ea259a1993db45eea43ce553cd19.jpg",
    link: "2"
  },
  {
    id: Date.now() + Math.random(1000000),
    title: "Some 3",
    desc: "Desc 3",
    url:
      "https://img.tsn.ua/cached/1546420836/tsn-8ef996fbeaebf7621936189b51062f05/thumbs/x/e0/97/0c77d3cb375de550c8e25a8a31c797e0.jpeg",
    link: "3"
  },
  {
    id: Date.now() + Math.random(1000000),
    title: "Some 4",
    desc: "Desc 5",
    url: "https://www.dager.ru/img/budget/budget-svadbi93.jpeg",
    link: "4"
  }
];

export const Category = () => {
  return (
    <Container>
      <Fade>
        <div className="category">
          {content.map(({ id, title, desc, url, link }) => (
            <div
              key={id}
              className="category-card"
              style={{ background: `url(${url})`, backgroundSize: "cover" }}
            >
              <div
                className="category-card-super-content"
                onClick={() => navigate(`/galery/${link}`)}
              >
                <div className="category-title">{title}</div>
                <div className="category-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </Container>
  );
};
