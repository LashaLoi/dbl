import React, { useState, useEffect } from "react";

import Fade from "react-reveal/Fade";
import uuid from "uuid";

import scroll from "react-scroll";

import { ReactComponent as Img } from "../../../assets/icon/arrow_downward-black.svg";

import "./index.scss";
import { useCallback } from "react";

const data = [
  {
    id: uuid(),
    who: "Степан и Яна",
    message:
      'Спасибо Вам огромное за работу. Без Вас бы все рухнуло) теперь, если меня спросят, нужен ли координатор по свадьбе, я однозначно отвечу что "ДА"! Нас с Вами очень повезло '
  },
  {
    id: uuid(),
    who: "Алексей и Варвара",
    message:
      "Одно из самых мудрых решений, которые мы приняли относительно нашей свадьбы – попросить Ваше агентство быть её организатором. Под их чутким всевидящим взором было все – от коробочки для колец и цветов в прическе невесты до тайминга, контроля работы всей большой команды и остальных важнейших вопросов организации. У нас не возникало вопросов, пройдет ли все успешно, потому что организаторы подарили нам спокойствие и уверенность на протяжении всего периода подготовки. Успокаивали, вдохновляли, поддерживали и были нашими друзьями, поэтому мы могли полностью им довериться и не переживать ни о чем. Организаторы помогли нам сделать наш день по-настоящему особенным!"
  },
  {
    id: uuid(),
    who: "Sasha Loi",
    message:
      'Мы очень рады, что обратились в агентство «ДБЛ». С нашей работой мы бы вообще ничего не успели... единственное, просто сходить и расписаться) Девчонки большие умнички) Благодаря им у нас получилась сказка! Было все продумано до мелочей, ну, и, конечно, было много сюрпризов! я была очень довольна, свадьба действительно получилась сказочно великолепной! Всем советовать буду))) Мы поняли, что с "ДБЛ" нет ничего невозможного!!!!'
  }
];

export const About = () => {
  const [current, setCurrent] = useState(0);

  const scrollTo = useCallback(
    () => scroll.animateScroll.scrollTo(window.innerHeight * 3 + 300),
    []
  );

  const updateCurrent = useCallback(() => {
    if (current === 2) {
      setCurrent(0);
      return;
    }

    setCurrent(current => current + 1);
  }, [current]);

  useEffect(() => {
    const interval = setInterval(updateCurrent, 5000);

    return () => clearInterval(interval);
  }, [updateCurrent]);

  return (
    <>
      <div className="contact-about">
        <div className="contact-main">О нас</div>
        {data.map((article, i) =>
          current === i ? (
            <Fade key={article.id}>
              <div className="who-container">
                <div className="who-cont">
                  <div className="message">{article.message}</div>
                  <div className="who">{article.who}</div>
                </div>
              </div>
            </Fade>
          ) : null
        )}
      </div>
      <div className="arrow">
        <Img onClick={scrollTo} />
      </div>
    </>
  );
};
