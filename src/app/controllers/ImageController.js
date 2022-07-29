const db = require("../../db");
const { QueryTypes } = require("sequelize");

const getImg = async (req, res) => {
  const { id } = req.params;
  db.query(`Select * FROM images WHERE detailID=${id}`, {
    type: QueryTypes.SELECT,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((error) => console.log(error));
};

const addImg = async (req, res) => {
  const data = {
    detailID: req.body.detailID,
    url: req.body.url,
  };

  db.query(
    `INSERT INTO images (DetailID, url) VALUES (${data.detailID},'${data.url}')`,
    { type: QueryTypes.INSERT }
  ).catch((error) => console.log(error));
};

const deleteImg = async (req, res) => {
  const { id } = req.params;
  db.query(`DELETE FROM images WHERE imgID=${id}`, {
    type: QueryTypes.DELETE,
  }).catch((error) => console.log(error));
};
module.exports = {
  getImg,
  addImg,
  deleteImg,
};
