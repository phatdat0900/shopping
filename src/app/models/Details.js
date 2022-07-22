const Sequelize = require("sequelize");
const db = require("../../db");

module.exports = db.define(
  "details",
  {
    DetailID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    ProductID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    ColorID: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    indexes: [
      {
        unique: true,
        fields: ["user_id", "count", "name"],
      },
    ],
  }
);
