import React from "react";

import Fade from "react-reveal/Fade";

import { navigate } from "@reach/router";

import { Container } from "../../components/Container";

import { ReactComponent as InstagramIcon } from "../../assets/icon/instagram-2016.svg";
import { ReactComponent as TelegramIcon } from "../../assets/icon/telegram.svg";

import "./index.scss";

const pointer = { cursor: "pointer" };

export const Footer = () => (
  <Container small="small">
    <div className="footer">
      <div className="footer-container">
        <Fade>
          <div className="footer-contacts">
            <div>
              <p>г. Минск. ул. Бельского, 15, оф. 206/6</p>
            </div>
            <div>
              <p>Тел.: +375 20 765 42 61</p>
            </div>
            <div>
              <p>Gmail: event.dbl@gmail.com</p>
              <p>Copyright © 2020 DBL</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="footer-sites">
            <div className="links">
              <a href="https://www.instagram.com/Dbl_event/">
                <InstagramIcon style={pointer} />
              </a>
              <a href="https://t.me/irinaloiy">
                <TelegramIcon style={pointer} />
              </a>
            </div>
            <button
              className="footer-btn"
              onClick={() => navigate("/amenities")}
            >
              Заказать услугу
            </button>
          </div>
        </Fade>
      </div>
    </div>
  </Container>
);
