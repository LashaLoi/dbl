import React from "react";

import Fade from "react-reveal/Fade";

import { Container } from "../../components/Container";

import { ReactComponent as FacebookIcon } from "../../assets/images/facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/images/instagram-2016.svg";
import { ReactComponent as TelegramIcon } from "../../assets/images/telegram.svg";
import { ReactComponent as VKIcon } from "../../assets/images/vkcom.svg";

import "./index.scss";

export const Footer = () => (
  <Container small="small">
    <div className="footer">
      <div className="footer-container">
        <Fade>
          <div className="footer-contacts">
            <div>
              <p>ул. Арбат, 1а, Москва, Россия</p>
            </div>
            <div>
              <p>Тел.: +7 (495) 000-0000</p>
              <p>Факс: +7 (495) 000-0000</p>
              <p> info@mysite.ru</p>
            </div>
            <div>
              <p>© 2023 Хороший повод. Сайт создан на Wix.com</p>
            </div>
          </div>
        </Fade>
        <Fade>
          <div className="footer-sites">
            <div className="links">
              <FacebookIcon />
              <InstagramIcon />
              <TelegramIcon />
              <VKIcon />
            </div>
            <button className="card-btn">Заказать услугу</button>
          </div>
        </Fade>
      </div>
    </div>
  </Container>
);
