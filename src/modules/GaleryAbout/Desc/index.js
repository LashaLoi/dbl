import React from "react";

import { Container } from "../../../components/Container";

import "./index.scss";

export const Desc = ({ content: { title, desc } }) => {
  return (
    <Container small>
      <div className="desc-container">
        <div className="desc-container-content">
          <div className="desc-container-title">{title}</div>
          <div className="desc-container-desc">{desc}</div>
        </div>
      </div>
    </Container>
  );
};
