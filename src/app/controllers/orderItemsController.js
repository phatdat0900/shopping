const db = require("../../db");
const orderItem = require("../models/orderItems");
const { QueryTypes } = require("sequelize");

const getOrderItem = async (req, res) => {
  const { id } = req.params;

  db.query(`SELECT * FROM orderitems where orderID =${id}`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const addItem = async (req, res) => {
  const data = req.body;
  const orderItems = await orderItem
    .bulkCreate(data)
    .catch((error) => console.log(error));
};

const deleteOrderItem = async (req, res) => {
  const id = req.body.id;
  db.query(`DELETE FROM orderitems WHERE orderID =${id} `, {
    type: QueryTypes.DELETE,
  })
  .catch((error) => console.log(error));
};

module.exports = {
  getOrderItem,
  addItem,
  deleteOrderItem,
};
