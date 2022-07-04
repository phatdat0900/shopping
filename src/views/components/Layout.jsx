import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Catelog from "./pages/Catelog";
import Main from "./Main";
import Filer from "./Filer";

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="catelog/*" element={<Catelog />} />
      {/* <Route path="catelog/CateID:id" element={<Filer />} /> */}
    </Routes>
  );
};

export default Layout;
