const db = require("../../db");
const { QueryTypes } = require("sequelize");

const get = async (req, res) => {
  db.query("SELECT * FROM orders", { type: QueryTypes.SELECT })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};
const add = async (req, res) => {
  const data = {
    userID: req.body.userID,
    phone: req.body.phone,
    address: req.body.address,
    totalPrice: req.body.totalPrice,
    status: req.body.status,
  };

  db.query(
    `INSERT INTO orders (userID, phone, address, totalPrice,status) VALUES (${data.userID},${data.phone},'${data.address}',${data.totalPrice},${data.status})`,
    { type: QueryTypes.INSERT }
  )
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const updateOrder = async (req, res) => {
  const id = req.body.id;
  db.query(`UPDATE orders SET status= 1 WHERE orderID =${id} `, {
    type: QueryTypes.UPDATE,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const deleteOrder = async (req, res) => {
  const id = req.body.id;
  db.query(`DELETE FROM orders WHERE orderID =${id} `, {
    type: QueryTypes.DELETE,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};
module.exports = {
  get,
  add,
  updateOrder,
  deleteOrder,
};
