import React, { useState } from "react";
import "./registration.scss";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Registration = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/registration`,
        {
          username,
          password,
          email,
          phone,
        }
      );
      navigate("/login");
      console.log(response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        const { errors } = error.response.data;
        if (Array.isArray(errors)) {
          alert(errors.join("\n"));
        } else {
          alert(error.response.data.message);
        }
      }
    }
  };

  return (
    <div className="registration">
      <div className="registration__container">
        <form className="registration__form" onSubmit={handleSubmit}>
          <h1 className="registration__title">Регистрация</h1>
          <input
            type="text"
            placeholder="Имя пользователя"
            className="registration__form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            className="registration__form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Номер телефона"
            className="registration__form-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="password"
            placeholder="Пароль"
            className="registration__form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="registration__form-btn">
            Зарегистрироваться
          </button>
          <div className="">
            <p className="registration__text">Уже есть аккаунт?</p>
            <button className="registration__link">
              <Link to="/login" className="registration__link">
                Войти
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
