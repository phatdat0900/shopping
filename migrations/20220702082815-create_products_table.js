module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn("products", "CateID", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "categories",
          key: "CateID",
        },
      }),
    ]);
  },
};
