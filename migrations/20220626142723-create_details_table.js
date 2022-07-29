"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("details", {
      DetailID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ProductID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "products",
          key: "ProductID",
        },
      },
      ColorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "colors",
          key: "ColorID",
        },
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
};
