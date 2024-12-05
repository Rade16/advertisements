import React from "react";
import "./Ad.scss";

import img from "../../assets/Ad/img.jpg";

import { Link } from "react-router-dom";

const Ad = (obj) => {
  return (
    <Link to={`/ads/${obj.id}`} className="ad__link">
      <div className="ad">
        <div className="ad__container">
          <img src={img} alt="" className="ad__img" />
          <div className="ad__info">
            <div className="ad__info-product">
              <div className="ad__info-title">{obj.title}</div>
              <div className="ad__info-price">Цена: {obj.price} ₽</div>
              <div className="ad__info-description">{obj.description}</div>
            </div>
            <div className="ad__info-user">
              <p className="ad__info-user-name">{obj.username} </p>
              <p className="ad__info-user-btn">Позвонить</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ad;
