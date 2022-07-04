import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import MasterLayout from "./layouts/admin/MasterLayout";

import HomePage from "./components/HomePage";
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/admin/*" element={<MasterLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
