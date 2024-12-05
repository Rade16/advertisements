import React from "react";
import "./Ad.scss";

import img from "../../assets/Ad/img.jpg";

import { Link } from "react-router-dom";

const Ad = ({ title, price, description }) => {
  return (
    <Link to="/ads/1" className="ad__link">
      <div className="ad">
        <div className="ad__container">
          <img src={img} alt="" className="ad__img" />
          <div className="ad__info">
            <div className="ad__info-product">
              <div className="ad__info-title">{title}</div>
              <div className="ad__info-price">Цена: {price}</div>
              <div className="ad__info-description">{description}</div>
            </div>
            <div className="ad__info-user">
              <p className="ad__info-user-name">Алиев Рафаэль Заурович </p>
              <p className="ad__info-user-btn">Позвонить</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Ad;
