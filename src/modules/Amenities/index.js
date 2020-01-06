import React, { useEffect } from "react";

import Fade from "react-reveal/Fade";

import "./index.scss";

export const Amenities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="wedding-body">
        <Fade>
          <div className="wedding">
            <div className="wedding-title">Свадьбы</div>
            <div className="wedding-cards">
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/IMG.JPG")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Организация</div>
                <div className="card-message-1">
                  <p>Полная подготовка Вашей свадьбы на наших плечах:</p>
                  <div>- Помощь в подборе площадок и подрядчиков;</div>
                  <div>- Грамотное распределение бюджета;</div>
                  <div>- Разработка концепции и тайминга;</div>
                  <div>- Помощь в организации выездной регистарции;</div>
                  <div>
                    - Работа в день мероприятия: контроль и координация работы
                    подрядчиков и т.д.
                  </div>
                  <div>- Помощь в выборе и согласовании меню;</div>
                  <div>
                    - Подбор образов жениха и невесты (услуги стилиста);
                  </div>
                  <div>- Организации трансфера гостей</div>
                </div>
                <div className="card-price">500$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/IMG_0343.JPG")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Координация</div>
                <div className="card-message-1">
                  <p>
                    Для тех, кто хочет получить удовольствие от самостоятельной
                    подготовки:
                  </p>
                  <div>
                    - Работа в день мероприятия: контроль и координация работы
                    подрядчиков и т.д.
                  </div>
                  <div>- Составление тайминга;</div>
                  <div>- Помощь в организации выездной регистрации;</div>
                </div>
                <div className="card-price">150$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/sascheka_163.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">
                  Подготовка онлайн и координация
                </div>
                <div className="card-message-1">
                  <p>
                    У кого нет времени на множество встреч и консультаций или
                    для жителей не г. Минска:
                  </p>
                  <div>
                    - Работа в день мероприятия: контроль и координация работы
                    подрядчиков и т.д.
                  </div>
                  <div>- Помощь в подборе площадок и подрядчиков (онлайн)</div>
                  <div>- Разработка тайминга (онлайн)</div>
                  <div>
                    - Помощь в организации выездной регистрации (онлайн)
                  </div>
                  <div>- Грамотное распределение бюджета (онлайн)</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="wedding-body">
        <Fade>
          <div className="wedding">
            <div className="wedding-title">СОБЫТИЯ</div>
            <div className="wedding-cards">
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/M&D - 550.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Дни рождения Юбилеи</div>
                <div className="card-message-1">
                  <div>- Грамотное распределение бюджета;</div>
                  <div>- Подбор площадки и команды подрядчиков;</div>
                  <div>- Составление тайминга;</div>
                  <div>- Организация трансфера</div>
                  <div>- Работа в день мероприятия</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/M&D - 537.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Детские праздники</div>
                <div className="card-message-1">
                  <div>- Грамотное распределение бюджета;</div>
                  <div>- Подбор площадки и команды подрядчиков;</div>
                  <div>- Составление тайминга;</div>
                  <div>- Организация трансфера</div>
                  <div>- Работа в день мероприятия</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/Б3-153.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Мастер-классы</div>
                <div className="card-message-1">
                  <div>
                    - Подбор мастер-классов с учетом особенностей мероприятия;
                  </div>
                  <div>- Подбор площадки</div>
                  <div>- Работа в день мероприятия</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
      <div className="wedding-body">
        <Fade>
          <div className="wedding">
            <div className="wedding-title">КОРПОРАТИВНЫЕ МЕРОПРИЯТИЯ</div>
            <div className="wedding-cards">
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/M&D - 612.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Корпоратив</div>
                <div className="card-message-1">
                  <div>
                    - Подбор площадки (ресторан, загородный клуб, спа-комплекс,
                    усадьба или родной офис).
                  </div>
                  <div>- Оформление помещения.</div>
                  <div>
                    - Подготовка развлекательной программы. Мы можем разработать
                    ее в любом формате: тематические вечеринки, кулинарные
                    баттлы, мастер-классы, новогодние квесты, шоу-программы и
                    многое другое.
                  </div>
                  <div>- Организация фото- и видеосъемки.</div>
                  <div>- Организация точек питания.</div>{" "}
                  <div>- Встреча гостей.</div>
                  <div>- Координация мероприятия.</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/150.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Конференции/презентации</div>
                <div className="card-message-1">
                  <div>
                    - Ищем площадку – просторный конференц-зал или неожиданные
                    локации (загородная база отдыха, коворкинг).
                  </div>
                  <div>- Оснащаем место необходимым оборудованием.</div>
                  <div>- Приглашаем спикеров.</div>
                  <div>- Составляем тайминг.</div>
                  <div>
                    - Обеспечиваем транспорт, встречу и регистрацию гостей.
                  </div>
                  <div>- Подготавливаем сувенирную продукцию, материалы.</div>
                  <div>- Организуем кофе-брейки.</div>
                  <div>
                    - Подбираем профессиональных фотографов и операторов.
                  </div>
                  <div>Координируем работу персонала.</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
              <div className="wedding-card">
                <img
                  src={require("../../assets/images/M&D - 590.jpg")}
                  className="card-image"
                  alt="something"
                />
                <div className="card-title">Выпускные</div>
                <div className="card-message-1">
                  <div>
                    - Подбор площадки (ресторан, загородный клуб, спа-комплекс,
                    усадьба или родной офис).
                  </div>
                  <div>- Оформление помещения.</div>
                  <div>
                    - Подготовка развлекательной программы. Мы можем разработать
                    ее в любом формате: тематические вечеринки, кулинарные
                    баттлы, мастер-классы, новогодние квесты, шоу-программы и
                    многое другое.
                  </div>
                  <div>- Организация фото- и видеосъемки.</div>
                  <div>- Организация точек питания.</div>
                  <div>- Встреча гостей.</div>
                  <div>- Координация мероприятия.</div>
                </div>
                <div className="card-price">300$*</div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </>
  );
};
