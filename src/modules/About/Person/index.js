import React from "react";

import Fade from "react-reveal/Fade";

import { useMediaQuery } from "react-responsive";

import { Container } from "../../../components/Container";

import "./index.scss";

export const Person = ({ title, desc, who, revert, url }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 850 });

  const card = (
    <Fade>
      <div className="about-page-card">
        <div className="about-page-card-cantainer">
          <div className="about-page-card-content">
            <div className="about-page-card-title">{title}</div>
            <div className="about-page-card-desc">{desc}</div>
          </div>
          <div className="about-page-card-who">{who}</div>
        </div>
      </div>
    </Fade>
  );

  const image = (
    <Fade>
      <div
        className="about-page-image"
        style={{
          background: `url(${url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90%",
          width: !isTabletOrMobile ? "35%" : "100%"
        }}
      >
        <div className="image-container">
          <div className="about-page-card-cantainer">
            <div className="about-page-card-content">
              <div className="about-page-card-title">{title}</div>
              <div className="about-page-card-desc">{desc}</div>
            </div>
            <div className="about-page-card-who">{who}</div>
          </div>
        </div>
      </div>
    </Fade>
  );

  return (
    <Container>
      <div className="about-page">
        {!revert ? (
          <>
            {image}
            {card}
          </>
        ) : (
          <>
            {card}
            {image}
          </>
        )}
      </div>
    </Container>
  );
};
