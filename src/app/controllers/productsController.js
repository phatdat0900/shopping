const db = require("../../db");
const product = require("../models/Products");
const { QueryTypes } = require("sequelize");

const getProduct = async (req, res) => {
  const products = await db
    .query(
      "SELECT DISTINCT products.ProductID,products.productName,products.Price,colors.Name,colors.code,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN colors ON details.ColorID=colors.colorID INNER JOIN images ON details.DetailID=images.DetailID GROUP BY products.ProductID;",
      { type: QueryTypes.SELECT }
    )
    .then((data) => {
      res.status(200).send(data);
    })

    .catch((error) => console.log(error));
};

const getFirstImgProductByrating = async (req, res) => {
  db.query(
    "SELECT DISTINCT products.ProductID,images.url FROM `products` INNER join details on products.ProductID=details.ProductID INNER JOIN images ON details.DetailID=images.DetailID GROUP BY products.ProductID limit 3",
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.status(200).send(data);
    })

    .catch((error) => console.log(error));
};

const getBestRating = async (req, res) => {
  db.query(
    "SELECT DISTINCT products.ProductID,products.productName,products.Price,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN images ON details.DetailID=images.DetailID WHERE products.Rating >2 GROUP BY products.ProductID LIMIT 4",
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.status(200).send(data);
    })

    .catch((error) => console.log(error));
};

getBestRating();
module.exports = {
  getProduct,
  getFirstImgProductByrating,
  getBestRating,
};
