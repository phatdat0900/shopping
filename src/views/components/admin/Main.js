import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Create from "./user/Create";
import Edit from "./user/Edit";
import User from "./user/User";
import View from "./user/View";

const Main = () => {
  return (
    <Routes>
      <Route path="/user/*" element={<User />} />
      <Route path="user/view/:id" element={<View />} />
      <Route path="user/edit/:id" element={<Edit />} />
      <Route path="user/create_user" element={<Create />} />
    </Routes>
  );
};

export default Main;
