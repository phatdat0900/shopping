import React from "react";
import { Route, Routes } from "react-router-dom";
import Create from "./user/Create";
import Edit from "./user/Edit";
import User from "./user/User";

const Main = () => {
  return (
    <Routes>
      <Route path="/user/*" element={<User />} />
      <Route path="user/edit_user" element={<Edit />} />
      <Route path="user/create_user" element={<Create />} />
    </Routes>
  );
};

export default Main;
