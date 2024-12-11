import React, { useState, useEffect } from "react";
import "./AdsList.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
import Ad from "../../components/Ad/Ad";
import { useOutletContext } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
const AdsList = () => {
  const [ad, setAd] = useState([]);
  const [filteredAds, setFilteredAds] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/all-posts"
      );

      setAd(response.data);
      setFilteredAds(response.data);
    };

    fetchPosts();
  }, []);

  const handleFilterChange = ({ category, subcategory, priceRange }) => {
    let filtered = ad;

    // Фильтрация по выбранной категории и подкатегории
    if (category) {
      if (subcategory) {
        filtered = filtered.filter(
          (item) =>
            item.category === category && item.subcategory === subcategory
        );
      } else {
        filtered = filtered.filter((item) => item.category === category);
      }
    }

    // Фильтрация по диапазону цен
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter((item) => {
        const price = Number(item.price);
        return (
          (!priceRange.min || price >= Number(priceRange.min)) &&
          (!priceRange.max || price <= Number(priceRange.max))
        );
      });
    }

    setFilteredAds(filtered);
  };

  return (
    <div className="adsList">
      <div className="adsList__container">
        <Filters onFilterChange={handleFilterChange} />
        <div className="adsList__list">
          {filteredAds.length > 0 ? (
            filteredAds.map((obj) => (
              <Ad
                key={obj.id}
                id={obj.id}
                title={obj.title}
                price={obj.price}
                description={obj.description}
                username={obj.username}
                images={obj.images}
              />
            ))
          ) : (
            <p>Нет доступных объявлений</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdsList;
