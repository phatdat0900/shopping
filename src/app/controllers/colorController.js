const db = require("../../db");
const { QueryTypes } = require("sequelize");

const getAllColor = async (req, res) => {
  const { id } = req.params;

  db.query(`SELECT * FROM colors`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getAllColor,
};
