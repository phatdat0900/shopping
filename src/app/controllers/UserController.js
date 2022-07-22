const User = require("../models/Users");
const { QueryTypes } = require("sequelize");
const allUsers = async (req, res) => {
  const users = await User.findAll({
    raw: true,
  }).catch((error) => console.log(error));
  await res.send(users);
};

const saveUser = async (req, res) => {
  const data = {
    fullname: req.body.fullname,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
  };

  const user = await User.create({
    fullName: data.fullname,
    mail: data.email,
    userName: data.username,
    password: data.password,
  }).catch((error) => console.log(error));
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

  const user = await User.destroy({
    where: {
      id: id,
    },
  }).catch((error) => console.log(error));
  res.redirect("/admin/user");
};
const Login = async (req, res) => {
  data = {
    username: req.body.username,
    password: req.body.password,
  };
  error = {
    id: "WRONG_INFOR",
    message: "ban nhap sai mat khau hoac sai username",
  };
  const user = await User.findOne({
    where: {
      userName: data.username,
      password: data.password,
    },
    raw: true,
  }).catch((error) => console.log(error));
  if (user) {
    res.send(user);
  } else {
    res.send(error);
  }
};
module.exports = {
  allUsers,
  saveUser,
  getUser,
  editUser,
  deleteUser,
  Login,
};
