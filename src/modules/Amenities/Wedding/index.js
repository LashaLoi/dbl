import React from "react";

import Fade from "react-reveal/Fade";

import "./index.scss";

export const Wedding = ({ items = [], title = "" }) => (
  <div className="wedding-body">
    <Fade>
      <div className="wedding">
        <div className="wedding-title">{title}</div>
        <div className="wedding-cards">
          {items.map(({ key, title, message, price = 100, src }) => (
            <div className="wedding-card" key={key}>
              <img src={src} className="card-image" alt="something" />
              <div className="card-title">{title}</div>
              <div className="card-message-1">{message}</div>
              <div className="card-price">{price}$</div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  </div>
);
