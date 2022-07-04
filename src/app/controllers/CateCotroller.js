const categories = require("../models/Categories");

const allCate = async (req, res) => {
  const cate = await categories
    .findAll({
      raw: true,
    })
    .then((data) => res.send(data))
    .catch((error) => console.log(error));
};

module.exports = {
  allCate,
};
