import React, { useState, useEffect } from "react";
import "./AdPage.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import img from "../../assets/User/img.jpg";
const AdPage = (obj) => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    const fetchRecipe = async () => {
      console.log(obj.id);
      console.log(obj);
      console.log(id);

      const response = await axios.get(
        `http://localhost:5000/api/posts/post/${id}`
      );
      console.log(response.data);
      setRecipe(response.data);
    };
    fetchRecipe();
  }, []);

  return (
    <div className="adPage">
      <div className="adPage__container">
        <div className="adPage__block">
          <div className="adPage__info">
            <div className="adPage__info-images">
              <img src={img} alt="" className="adPage__info-images-img" />
            </div>
            <div className="adPage__info-geo">
              <p className="adPage__info-geo-title">Расположение</p>
              <p className="adPage__info-geo-text">Адрес: {recipe.address}</p>
            </div>
            <div className="adPage__info-description">
              <p className="adPage__info-description-title">Описание</p>
              <p className="adPage__info-description-text">
                {recipe.description}
              </p>
            </div>
          </div>
          <div className="adPage__sticky">
            <div className="adPage__sticky-container">
              <h1 className="adPage__sticky-title">{recipe.title}</h1>
              <p className="adPage__sticky-price">{recipe.price} ₽</p>
              <div className="adPage__sticky-user">
                <div className="adPage__sticky-user-info">
                  <p className="adPage__sticky-user-title">Автор объявления:</p>
                  <p className="adPage__sticky-user-name">{recipe.username}</p>
                </div>
              </div>
              <div className="adPage__sticky-user-number">{recipe.phone}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdPage;
