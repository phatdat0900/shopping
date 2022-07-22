import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Color from "./color/Color";
import Order from "./order/Order";
import OrderItem from "./order/OrderItem";
import CreateProduct from "./product/CreateProduct";
import Product from "./product/Product";
import UpdateProduct from "./product/UpdatePoduct";
import ImgSize from "./product/Img";
import Create from "./user/Create";
import Edit from "./user/Edit";
import User from "./user/User";
import View from "./user/View";
import Size from "./product/Size";

const Main = () => {
  return (
    <Routes>
      <Route path="/user/*" element={<User />} />
      <Route path="user/view/:id" element={<View />} />
      <Route path="user/edit/:id" element={<Edit />} />
      <Route path="user/create_user" element={<Create />} />

      <Route path="/order/*" element={<Order />} />
      <Route path="order/view/:id" element={<OrderItem />} />

      <Route path="/product/*" element={<Product />} />

      <Route path="product/edit/:id" element={<UpdateProduct />} />
      <Route path="product/edit_img/:id" element={<ImgSize />} />
      <Route path="product/edit_size/:id" element={<Size />} />
      <Route path="product/create" element={<CreateProduct />} />

      <Route path="/color/*" element={<Color />} />
    </Routes>
  );
};

export default Main;
