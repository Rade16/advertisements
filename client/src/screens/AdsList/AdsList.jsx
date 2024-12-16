import React, { useState, useEffect } from "react";
import "./AdsList.scss";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
import Ad from "../../components/Ad/Ad";
import { useOutletContext } from "react-router-dom";

const AdsList = () => {
  const [ad, setAd] = useState([]); // Все объявления
  const [filteredAds, setFilteredAds] = useState([]); // Отфильтрованные объявления
  const { searchQuery } = useOutletContext(); // Получаем поисковый запрос из контекста

  // Состояния фильтров
  const [filterOptions, setFilterOptions] = useState({
    category: null,
    subcategory: null,
    priceRange: { min: null, max: null },
  });

  // Получаем все объявления
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/all-posts"
      );

      setAd(response.data);
      applyFilters(response.data); // Применяем фильтры после загрузки данных
    };

    fetchPosts();
  }, []);

  // Фильтрация по поиску и фильтрам
  useEffect(() => {
    applyFilters(ad);
  }, [searchQuery, filterOptions, ad]);

  // Общая функция фильтрации
  const applyFilters = (ads) => {
    let filtered = ads;

    // Применяем поиск по тексту
    if (searchQuery) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Применяем фильтры по категории
    if (filterOptions.category) {
      if (filterOptions.subcategory) {
        filtered = filtered.filter(
          (item) =>
            item.category === filterOptions.category &&
            item.subcategory === filterOptions.subcategory
        );
      } else {
        filtered = filtered.filter(
          (item) => item.category === filterOptions.category
        );
      }
    }

    // Применяем фильтры по диапазону цен
    if (filterOptions.priceRange.min || filterOptions.priceRange.max) {
      filtered = filtered.filter((item) => {
        const price = Number(item.price);
        return (
          (!filterOptions.priceRange.min ||
            price >= Number(filterOptions.priceRange.min)) &&
          (!filterOptions.priceRange.max ||
            price <= Number(filterOptions.priceRange.max))
        );
      });
    }

    setFilteredAds(filtered);
  };

  const handleFilterChange = (filterData) => {
    setFilterOptions(filterData);
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
