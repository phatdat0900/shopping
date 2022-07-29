"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("sizes", {
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

      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
};
