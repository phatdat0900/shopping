import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catelog/*" element={<Catelog />} />
      <Route path="product/item=:id" element={<Product />} />
      <Route path="cart" element={<Cart />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="profile" element={<Profile />} />
    </Routes>
  );
};

export default Layout;
