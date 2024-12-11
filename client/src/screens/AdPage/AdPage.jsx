import React, { useState, useEffect } from "react";
import "./AdPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import img from "../../assets/User/img.jpg";
import { useAuth } from "../../context/AuthContext";
const AdPage = (obj) => {
  const { id } = useParams();
  const [ad, setAd] = useState({});
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchAd = async () => {
      console.log(obj.id);
      console.log(obj);
      console.log(id);

      const response = await axios.get(
        `http://localhost:5000/api/posts/post/${id}`
      );
      console.log(response.data);
      setAd(response.data);
      console.log(response.data.images);
      if (response.data.images && response.data.images.length > 0) {
        console.log("Установлен путь к изображению:", response.data.images[0]);
        setMainImage(response.data.images[0]);
      }
    };
    fetchAd();
  }, []);
  console.log(ad);

  return (
    <div className="adPage">
      <div className="adPage__container">
        <div className="adPage__block">
          <div className="adPage__info">
            <div className="adPage__info-images">
              <img
                src={`http://localhost:5000${mainImage}`}
                alt=""
                className="adPage__info-images-img"
              />
            </div>
            <div className="adPage__thumbnails">
              {Array.isArray(ad.images) && ad.images.length > 0 ? (
                ad.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:5000${image}`}
                    alt={`Миниатюра ${index + 1}`}
                    className={`adPage__thumbnail ${
                      mainImage === image ? "active" : ""
                    }`}
                    onClick={() => setMainImage(image)}
                  />
                ))
              ) : (
                <p>Нет изображений</p>
              )}
            </div>
            <div className="adPage__info-geo">
              <p className="adPage__info-geo-title">Расположение</p>
              <p className="adPage__info-geo-text">Адрес: {ad.address}</p>
            </div>
            <div className="adPage__info-description">
              <p className="adPage__info-description-title">Описание</p>
              <p className="adPage__info-description-text">{ad.description}</p>
            </div>
          </div>
          <div className="adPage__sticky">
            <div className="adPage__sticky-container">
              <h1 className="adPage__sticky-title">{ad.title}</h1>
              <p className="adPage__sticky-price">{ad.price} ₽</p>
              <div className="adPage__sticky-user">
                <div className="adPage__sticky-user-info">
                  <p className="adPage__sticky-user-title">Автор объявления:</p>
                  <p className="adPage__sticky-user-name">{ad.username}</p>
                </div>
              </div>
              <div className="adPage__sticky-user-number">{ad.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
