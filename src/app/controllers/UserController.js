const User = require("../models/Users");

const allUsers = async (req, res) => {
  await res.render("home");
};
const userForm = async (req, res) => {
  await res.render("create");
};
const saveUser = async (req, res) => {
  const { fullName, email, userName, password } = await req.body;
  const user = await User.create({
    fullName: fullName,
    email: email,
    userName: userName,
    password: password,
  }).catch((error) => console.log(error));
  console.log(user);

  res.redirect("/admin/user");
};
module.exports = {
  allUsers,
  userForm,
  saveUser,
};
