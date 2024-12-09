const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Post = sequelize.define("post", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      return this.getDataValue("images")
        ? JSON.parse(this.getDataValue("images"))
        : [];
    },
    set(value) {
      this.setDataValue("images", JSON.stringify(value));
    },
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subcategory: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = { Post };
