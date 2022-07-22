const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define("sizes", {
  sizeID: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  size: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  DetailID: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "details",
      key: "detailID",
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
