import React, { useState } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/logo.svg";
import geo from "../../assets/Header/geo.svg";
import logout from "../../assets/Header/logout.svg";
import { useAuth } from "../../context/AuthContext";
const Header = ({ onSearch }) => {
  const { user, setUser } = useAuth();
  const [searchQuery, setSearchQuery] = useState("");
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("token");
    alert("Вы вышли из аккаунта");
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
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
          {/* <div className="header__search-categories">Все категории</div> */}
          <input
            type="text"
            placeholder="Поиск объявлений..."
            className="header__search-input"
            value={searchQuery}
            onChange={handleInputChange}
          />
        </div>
        <div className="header__user">
          {user ? (
            <div className="header__authProfile">
              <Link to="/create">
                <div className="header__authProfile-post">
                  Создать объявление
                </div>
              </Link>
              <span className="header__authProfile-text">{user.username}</span>
              <button onClick={handleLogout} className="header__profile-button">
                <img src={logout} alt="" className="header__authProfile-img" />
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
