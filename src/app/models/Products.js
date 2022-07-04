const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("Products", {
  ProductID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  CateID: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  detail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  discount: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  Rating: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
});
