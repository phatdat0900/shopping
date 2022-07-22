const db = require("../../db");
const { QueryTypes } = require("sequelize");
const product = [];
const getProduct = async (req, res) => {
  db.query("SELECT *  FROM products;", { type: QueryTypes.SELECT })
    .then((data) => {
      console.log(data);
    })

    .catch((error) => console.log(error));
};
