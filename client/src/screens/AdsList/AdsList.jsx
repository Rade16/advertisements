import React, { useState, useEffect } from "react";
import "./AdsList.scss";

import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Filters from "../../components/Filters/Filters";
import Ad from "../../components/Ad/Ad";
const AdsList = () => {
  const [ad, setAd] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "http://localhost:5000/api/posts/all-posts"
      );

      setAd(response.data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="adsList">
      <div className="adsList__container">
        <Filters />
        <div className="adsList__list">
          {ad.map((obj) => (
            <Ad
              key={obj.id}
              id={obj.id}
              title={obj.title}
              price={obj.price}
              description={obj.description}
              username={obj.username}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdsList;
