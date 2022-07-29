"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("images", {
      imgID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      DetailID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "details",
          key: "detailID",
        },
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },
};
