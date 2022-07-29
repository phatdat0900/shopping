import React from "react";
import Filer from "./Filer";
import { Routes, Route } from "react-router-dom";
import ProductList from "./ProductList";
const Display = () => {
  return (
    <Routes>
      <Route path="/" element={<Filer />} />
      <Route path="/CateID=:id" element={<ProductList />} />
    </Routes>
  );
};

export default Display;
