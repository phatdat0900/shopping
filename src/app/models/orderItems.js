const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define(
  "orderitems",
  {
    orderItemsID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    productID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
    orderID: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
    productName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    color: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    size: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
