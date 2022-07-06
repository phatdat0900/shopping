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
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getFirstImgProductByrating = async (req, res) => {
  db.query(
    "SELECT DISTINCT products.ProductID,images.url FROM `products` INNER join details on products.ProductID=details.ProductID INNER JOIN images ON details.DetailID=images.DetailID GROUP BY products.ProductID limit 3",
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getBestRating = async (req, res) => {
  db.query(
    "SELECT DISTINCT products.ProductID,products.productName,products.Price,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN images ON details.DetailID=images.DetailID WHERE products.Rating >2 GROUP BY products.ProductID LIMIT 4",
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getByCate = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT DISTINCT products.ProductID,products.productName,products.Price,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN images ON details.DetailID=images.DetailID where products.CateID=${id} GROUP BY products.ProductID;`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getByProductID = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT products.ProductID,products.productName,products.Price,products.detail,colors.ColorID,colors.Name,colors.code,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN colors ON details.ColorID=colors.colorID INNER JOIN images ON details.DetailID=images.DetailID where products.ProductID = ${id};`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};
const getNotEqualByProductID = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT DISTINCT products.ProductID,products.productName,products.Price,products.detail,colors.ColorID,colors.Name,colors.code,images.url FROM products INNER join details on products.ProductID=details.ProductID INNER JOIN colors ON details.ColorID=colors.colorID INNER JOIN images ON details.DetailID=images.DetailID where products.ProductID <> ${id} GROUP BY products.ProductID LIMIT 8;`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getInfoProduct = async (req, res) => {
  const { id } = req.params;
  db.query(`SELECT *  FROM products where products.ProductID = ${id};`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const getColor = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT colors.ColorID, colors.Name, colors.code fROM products INNER join details on products.ProductID=details.ProductID INNER JOIN colors ON details.ColorID=colors.colorID where products.ProductID = ${id};`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};
const getSize = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT details.DetailID, details.ColorID,sizes.size,sizes.quantity fROM products INNER join details on products.ProductID=details.ProductID INNER JOIN sizes ON details.DetailID=sizes.DetailID where products.ProductID = ${id};`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

getBestRating();
module.exports = {
  getProduct,
  getFirstImgProductByrating,
  getBestRating,
  getByCate,
  getByProductID,
  getNotEqualByProductID,
  getInfoProduct,
  getColor,
  getSize,
};
