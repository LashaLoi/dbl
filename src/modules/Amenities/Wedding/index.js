import React from "react";

import Fade from "react-reveal/Fade";

import "./index.scss";

export const Wedding = ({ items = [], title = "" }) => (
  <div className="wedding-body">
    <Fade>
      <div className="wedding">
        <div className="wedding-title">{title}</div>
        <div className="wedding-cards">
          {items.map(({ key, title, message }) => (
            <div className="wedding-card" key={key}>
              <div className="wedding-container">
                <div className="card-image"></div>
                <div className="card-body">
                  <div className="card-title">{title}</div>
                  <div className="card-message">{message}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  </div>
);
