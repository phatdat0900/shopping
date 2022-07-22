const db = require("../../db");
const sizes = require("../models/sizes");
const { QueryTypes } = require("sequelize");

const getSizeByID = async (req, res) => {
  const { id } = req.params;
  db.query(`Select * FROM sizes WHERE DetailID=${id}`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const getOneSize = async (req, res) => {
  const { id } = req.params;
  db.query(`Select * FROM sizes WHERE sizeID=${id}`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};
const addSize = async (req, res) => {
  const data = req.body;
  const size = await sizes
    .bulkCreate(data)
    .catch((error) => console.log(error));
};

const updateQuantity = async (req, res) => {
  const data = {
    quantity: req.body.quantity,
    sizeID: req.body.sizeID,
  };
  db.query(
    `UPDATE sizes SET quantity = ${data.quantity}  WHERE sizeID =${data.sizeID} `,
    {
      type: QueryTypes.UPDATE,
    }
  ).catch((error) => console.log(error));
};

module.exports = {
  getOneSize,
  getSizeByID,
  addSize,
  updateQuantity,
};
