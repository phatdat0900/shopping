import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import Product from "./pages/Product";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catelog/*" element={<Catelog />} />
      <Route path="product/item=:id" element={<Product />} />
    </Routes>
  );
};

export default Layout;
