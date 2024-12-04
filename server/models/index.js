const sequelize = require("../db");
const { User } = require("./User");
const { Recipe } = require("./Recipe");
const { Favorite } = require("./Favorite");

User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

User.belongsToMany(Post, { through: Favorite, foreignKey: "user_id" });
Post.belongsToMany(User, { through: Favorite, foreignKey: "post_id" });

module.exports = {
  sequelize,
  User,
  Recipe,
  Favorite,
};
