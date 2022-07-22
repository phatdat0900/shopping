const express = require("express");
const router = express.Router();
const {
  allUsers,
  saveUser,
  getUser,
  editUser,
  deleteUser,
  Login,
} = require("../app/controllers/UserController");

const {
  getProduct,
  getFirstImgProductByrating,
  getBestRating,
  getByCate,
  getSingleProduct,
  getByProductID,
  getInfoProduct,
  getColor,
  getSize,
  getNotEqualByProductID,
  getAll,
  addProduct,
  getProductByID,
  updateProductByID,
} = require("../app/controllers/productsController");

const { allCate } = require("../app/controllers/CateCotroller");
const {
  add,
  get,
  update,
  updateOrder,
  deleteOrder,
} = require("../app/controllers/orderController");
const {
  addItem,
  deleteOrderItem,
  getOrderItem,
} = require("../app/controllers/orderItemsController");
const { getAllColor } = require("../app/controllers/colorController");
const {
  addDetail,
  getDetail,
  deleteDetail,
} = require("../app/controllers/DetailController");
const {
  addImg,
  getImg,
  deleteImg,
} = require("../app/controllers/ImageController");
const {
  addSize,
  getSizeByID,
  getOneSize,
  updateQuantity,
} = require("../app/controllers/sizeController");

router.get("/home", getFirstImgProductByrating);
router.get("/home_2", getBestRating);

router.get("/catelog", getProduct);
router.get("/catelog_getCate", allCate);
router.get("/catelog/CateID=:id", getByCate);

router.get("/product/item=:id", getByProductID);
router.get("/product/item!=:id", getNotEqualByProductID);
router.get("/product/getInfoitem:id", getInfoProduct);
router.get("/product/getColor:id", getColor);
router.get("/product/getSize:id", getSize);

router.get("/admin/user", allUsers);
router.post("/admin/user/create_user", saveUser);

router.post("/register", saveUser);
router.post("/login", Login);

router.post("/order", add);
router.post("/orderItems", addItem);

////admin
router.get("/admin/user/edit/:id", getUser);
router.put("/admin/user/edit/:id", editUser);

router.get("/admin/user/view/:id", getUser);

router.delete("/admin/user/:id", deleteUser);

router.get("/admin/order", get);
router.post("/admin/orderUpdate", updateOrder);

router.get("/admin/order/view/:id", getOrderItem);
router.post("/admin/deleteOrder", deleteOrder);
router.post("/admin/deleteOrderItem", deleteOrderItem);

router.get("/admin/product", getAll);
router.post("/admin/addProduct", addProduct);
router.get("/admin/product/edit/:id", getProductByID);
router.post("/admin/product/edit/:id", updateProductByID);

router.get("/admin/color", getAllColor);

router.get("/admin/detail/:id", getDetail);
router.post("/admin/addDetail", addDetail);
router.delete("/admin/deleteDetails/:id", deleteDetail);

router.get("/admin/getImage/:id", getImg);
router.post("/admin/addImage", addImg);
router.delete("/admin/deleteImg/:id", deleteImg);

router.get("/admin/getSize/:id", getSizeByID);
router.get("/admin/getOneSize/:id", getOneSize);
router.post("/admin/addSize", addSize);
router.post("/admin/updateQuantity", updateQuantity);

module.exports = router;
