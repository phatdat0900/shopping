const User = require("../models/Users");

const allUsers = async (req, res) => {
  const users = await User.findAll({
    raw: true,
  }).catch((error) => console.log(error));
  await res.send(users);
};

const saveUser = async (req, res) => {
  const { fullName, mail, userName, password } = await req.body;
  const user = await User.create({
    fullName: fullName,
    mail: mail,
    userName: userName,
    password: password,
  }).catch((error) => console.log(error));
  res.redirect("/admin/user");
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findOne({
    where: {
      id: id,
    },
    raw: true,
  }).catch((error) => console.log(error));
  res.status(200).send(user);
};

const editUser = async (req, res) => {
  const { id } = await req.params;
  const data = req.body;
  const Select = { where: { id: id } };
  await User.update(data, Select).catch((error) => console.log(error));
  res.redirect("/admin/user");
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const user = await User.destroy({
    where: {
      id: id,
    },
  }).catch((error) => console.log(error));
  res.redirect("/admin/user");
};

module.exports = {
  allUsers,
  saveUser,
  getUser,
  editUser,
  deleteUser,
};
