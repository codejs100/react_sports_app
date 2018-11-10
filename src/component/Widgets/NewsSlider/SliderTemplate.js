import React from "react";
import { Link } from "react-router-dom";
import Slick from "react-slick";
import style from "./Slider.module.css";

const SliderTemplate = props => {
  let templates = null;
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ...props.settings
  };

  switch (props.type) {
    case "featured": {
      templates = props.data.map((item, key) => {
        return (
          <div key={key}>
            <div className={style.featuredItem}>
              <div
                className={style.featuredImage}
                style={{
                  background: `url(/images/articles/${item.image})`
                }}
              />
              <Link to={`/articles/${item.id}`}>
                <div className={style.featuredCaption}>{item.title}</div>
              </Link>
            </div>
          </div>
        );
      });
      break;
    }
    default:
      templates = null;
  }

  return (
    <div>
      <Slick {...settings}>{templates}</Slick>
    </div>
  );
};

export default SliderTemplate;
