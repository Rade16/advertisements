import React from "react";
import "./CreateAd.scss";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";
import img from "../../assets/img.svg";
const CreateAd = () => {
  const { user } = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [address, setIngredients] = useState("");
  const [ image, setInstructions] = useState("");

  const token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/recipes/create/${user.id}`,
        {
          title,
          description,
          address,
          image: "" 

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
              type="text"
              placeholder="Стоимость 10.000.000р"
              className="createAd__input"
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
                />
              </label>
            </div>
            <p className="createAd__text">Контакты</p>
            <div className="createAd__line">
              <label htmlFor="" className="createAd__label">
                Номер телефона
              </label>
              <input
                type="text"
                placeholder="+7 (123) 456-78-90"
                className="createAd__input"
              />
            </div>
            <div className="createAd__line">
              <label htmlFor="" className="createAd__label">
                Электронная почта
              </label>
              <input
                type="text"
                placeholder="email@mail.ru"
                className="createAd__input"
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
              />
            </div>
            <button className="createAd__btn" type="submit">Создать объявление</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAd;
