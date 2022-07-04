const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("categoies", {
  CateID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  CateName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
  },
});
