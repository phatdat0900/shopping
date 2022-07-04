const express = require("express");
const router = express.Router();
const {
  allUsers,
  saveUser,
  getUser,
  editUser,
  deleteUser,
} = require("../app/controllers/UserController");

const {
  getProduct,
  getFirstImgProductByrating,
  getBestRating,
} = require("../app/controllers/productsController");

const { allCate } = require("../app/controllers/CateCotroller");

router.get("/home", getFirstImgProductByrating);
router.get("/home_2", getBestRating);

router.get("/catelog", getProduct);
router.get("/catelog_getCate", allCate);

router.get("/admin/user", allUsers);
router.post("/admin/user/create_user", saveUser);

router.get("/admin/user/edit/:id", getUser);
router.put("/admin/user/edit/:id", editUser);

router.get("/admin/user/view/:id", getUser);

router.delete("/admin/user/:id", deleteUser);

module.exports = router;
