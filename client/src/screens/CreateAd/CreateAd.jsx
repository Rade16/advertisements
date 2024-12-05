import React, { useState } from "react";
import "./CreateAd.scss";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import img from "../../assets/img.svg";
const CreateAd = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/posts/create/${user.id}`,
        {
          title,
          description,
          address,
          price,
          email,
          phone,
          image: "",
          username: user.username,
        },

        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Ошибка при создании рецепта:", error);
    }
  };

  return (
    <div className="createAd">
      <div className="createAd__container">
        <h1 className="createAd__title">Создать объявление</h1>
        <p className="createAd__text">Об услуге</p>
        <form action="" onSubmit={handleSubmit}>
          <div className="createAd__line">
            <label htmlFor="" className="createAd__label">
              Стоимость
            </label>
            <input
              type="number"
              placeholder="10000000"
              className="createAd__input"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="createAd__line">
            <label htmlFor="" className="createAd__label">
              Название объявления
            </label>
            <input
              type="text"
              placeholder="Строительство дома под ключ за 11 дней"
              className="createAd__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="" className="createAd__textareaLabel">
              Описание
            </label>
            <textarea
              name=""
              id=""
              className="createAd__textarea"
              placeholder="Строительство дома под ключ за 11 дней"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="createAd__info">
            <p className="createAd__text">Фотографии</p>
            <div className="createAd__line">
              <label htmlFor="image" className="createAd__label">
                Добавить фотографии
              </label>
              <label htmlFor="image" className="createAd__imageLabel">
                <img src={img} alt="" className="createAd__image" />
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  placeholder="Строительство дома под ключ за 11 дней"
                  className="createAd__imageInput"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
            </div>
            <p className="createAd__text">Контакты</p>
            <div className="createAd__line">
              <label htmlFor="" className="createAd__label">
                Номер телефона
              </label>
              <input
                type="tel"
                placeholder="+7 (123) 456-78-90"
                className="createAd__input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="createAd__line">
              <label htmlFor="" className="createAd__label">
                Электронная почта
              </label>
              <input
                type="email"
                placeholder="email@mail.ru"
                className="createAd__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="createAd__line">
              <label htmlFor="" className="createAd__label">
                Адрес
              </label>
              <input
                type="text"
                placeholder=" Москва, пр-т Вернадского, 12К2с1"
                className="createAd__input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <button className="createAd__btn" type="submit">
              Создать объявление
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
