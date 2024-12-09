import React, { useState } from "react";
import "./Filters.scss";
const Filters = ({ onFilterChange }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const [openCategory, setOpenCategory] = useState(null);

  const categories = {
    Услуги: ["Строительство", "Уборка", "Обучение", "Ремонт", "IT"],
    Товары: ["Электроника", "Одежда", "Мебель", "Транспорт", "Авто"],
  };

  const handleCategoryToggle = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    setSelectedCategory(category);
    setSelectedSubcategory(""); // Сбрасываем подкатегорию при смене категории
  };

  const handleSubcategoryChange = (subcategory) => {
    setSelectedSubcategory(subcategory);
    onFilterChange({
      category: selectedCategory,
      subcategory,
      priceRange,
    });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    onFilterChange({
      category: selectedCategory,
      subcategory: selectedSubcategory,
      priceRange: {
        ...priceRange,
        [name]: value,
      },
    });
  };

  return (
    <div className="filters">
      <div className="filters__container">
        <div className="filters__categories">
          {Object.keys(categories).map((category) => (
            <div key={category} className="filters__categories-category">
              <h3
                onClick={() => handleCategoryToggle(category)}
                className={
                  selectedCategory === category
                    ? "filters__categories-category-name active"
                    : "filters__categories-category-name"
                }
              >
                {category}
              </h3>
              {openCategory === category && (
                <ul className="filters__categories-category-subcategories">
                  {categories[category].map((subcategory) => (
                    <li
                      key={subcategory}
                      onClick={() => handleSubcategoryChange(subcategory)}
                      className="filters__categories-category-subcategories-subcategory"
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="filters__price">
          <h3 className="filters__price-title">Стоимость, ₽</h3>
          <div className="filters__price-range">
            <input
              type="number"
              id="minPrice"
              name="min"
              placeholder="От"
              value={priceRange.min}
              onChange={handlePriceChange}
              className="filters__price-range-input"
            />

            <input
              type="number"
              id="maxPrice"
              name="max"
              placeholder="До"
              value={priceRange.max}
              onChange={handlePriceChange}
              className="filters__price-range-input"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
