import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.svg";
import geo from "../../assets/Header/geo.svg";

import { useAuth } from "../../context/AuthContext";
const Header = () => {
  const { user, setUser } = useAuth();

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    alert("Вы вышли из аккаунта");
  };
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" className="header__logo-img" />
          </Link>
        </div>
        <div className="header__search">
          <div className="header__search-categories">Все категории</div>
          <input
            type="text"
            placeholder="Поиск объявлений..."
            className="header__search-input"
          />
        </div>
        <div className="header__user">
          <div className="header__geo">
            <img src={geo} alt="" className="header__geo-img" />
            <p className="header__geo-text">Москва</p>
          </div>

          {user ? (
            <div className="header__profile">
              <span>Привет, {user.username}!</span>
              <button onClick={handleLogout} className="header__profile-button">
                <img
                  src={""}
                  alt=""
                  className="header__profile-button-img"
                />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <div className="header__profile">Войти</div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
