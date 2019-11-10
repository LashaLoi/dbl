import React, { useEffect } from "react";

import uuid from "uuid";
import { Desc } from "./Desc";

import { Slider } from "../Galery/Slider";

export const mocks = [
  {
    id: uuid(),
    url:
      "https://ru.hellomagazine.com/thumb/755x550_0/images/2019/June/Nastya/xvoz18-zahod.jpg.pagespeed.ic.0DwjyqQOt4.jpg"
  },
  {
    id: uuid(),
    url:
      "https://www.wedding-magazine.ru/images/articles/53199/gallery/20181290_110315539621008_1055284051721584640_n.jpg"
  },
  {
    id: uuid(),
    url:
      "https://cdn4.rzn.info/data/image/newsadd/base/2018/11/184108_5be27f98369b1.jpg"
  }
];

const content = {
  title: "Some title",
  desc:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga necessitatibus illo voluptatum in reiciendis magni aperiam itaque reprehenderit at quia, explicabo enim eum! Architecto saepe est itaque placeat provident quisquam at. Explicabo nihil dignissimos eveniet ratione dicta itaque iusto sint distinctio mollitia quisquam delectus ipsa quod corporis repudiandae, aut odio!"
};

export const GaleryAbout = ({ id }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Slider content={mocks} />
      <Desc content={content} />
    </>
  );
};
