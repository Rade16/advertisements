import React, { useState } from "react";
import "./CreateAd.scss";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import img from "../../assets/img.svg";
const CreateAd = () => {
  const { user } = useAuth();
  if (!user) {
    return <div>Загрузка...</div>;
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");

  const [price, setPrice] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [images, setImages] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const token = localStorage.getItem("token");

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages((prevImages) => [...prevImages, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("address", address);
    formData.append("price", price);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("username", user.username);
    formData.append("category", selectedCategory);
    formData.append("subcategory", selectedSubcategory);

    images.forEach((image) => formData.append("images", image));

    try {
      const response = await axios.post(
        "http://localhost:5000/api/posts/create/" + user.id,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Объявление успешно создано!");
    } catch (error) {
      console.error("Ошибка при создании объявления:", error);
    }
  };

  const categories = {
    Услуги: ["Строительство", "Уборка", "Обучение", "Ремонт", "IT"],
    Товары: ["Электроника", "Одежда", "Мебель", "Транспорт", "Авто"],
  };

  return (
    <div className="createAd">
      <div className="createAd__container">
        <h1 className="createAd__title">Создать объявление</h1>
        <div className="createAd__line">
          <label className="createAd__label">Категория</label>
          <select
            className="createAd__input"
            value={selectedCategory}
            onChange={(e) => {
              const category = e.target.value;
              setSelectedCategory(category);
              setSelectedSubcategory("");
            }}
          >
            <option value="">Выберите категорию</option>
            {Object.keys(categories).map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="createAd__line">
          <label className="createAd__label">Подкатегория</label>
          <select
            className="createAd__input"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={!selectedCategory}
          >
            <option value="">Выберите подкатегорию</option>
            {selectedCategory &&
              categories[selectedCategory].map((subcategory) => (
                <option key={subcategory} value={subcategory}>
                  {subcategory}
                </option>
              ))}
          </select>
        </div>
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
                  multiple
                  placeholder="Строительство дома под ключ за 11 дней"
                  className="createAd__imageInput"
                  onChange={handleImageChange}
                />
              </label>
            </div>
            <div className="createAd__preview">
              {images.map((image, index) => (
                <p key={index}>{image.name}</p>
              ))}
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
