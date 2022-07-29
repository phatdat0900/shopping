const db = require("../../db");
const details = require("../models/Details");
const { QueryTypes } = require("sequelize");

// const getDetail = async (req, res) => {
//   const { id } = req.params;
//   const detail = await details
//     .findAll({
//       where: {
//         ProductID: id,
//       },
//       raw: true,
//     })
//     .catch((error) => console.log(error));
//   res.status(200).send(detail);
// };
const getDetail = async (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT details.DetailID,details.ProductID,details.ColorID,colors.Name,colors.code 
FROM details INNER join products 
ON products.ProductID=details.ProductID 
INNER JOIN colors 
ON details.ColorID=colors.colorID where products.ProductID = ${id};`,
    { type: QueryTypes.SELECT }
  )
    .then((data) => {
      res.send(data);
    })

    .catch((error) => console.log(error));
};

const addDetail = async (req, res) => {
  const data = req.body;

  const detail = await details
    .bulkCreate(data)
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const deleteDetail = async (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM images WHERE DetailID =${id} `, {
    type: QueryTypes.DELETE,
  })
    .then(
      db
        .query(`DELETE FROM sizes WHERE DetailID =${id} `, {
          type: QueryTypes.DELETE,
        })
        .then(
          db.query(`DELETE FROM details WHERE DetailID =${id} `, {
            type: QueryTypes.DELETE,
          })
        )
    )
    .catch((error) => console.log(error));
};

module.exports = {
  getDetail,
  addDetail,
  deleteDetail,
};
