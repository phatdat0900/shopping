import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MasterLayout from "./layouts/admin/MasterLayout";

import HomePage from "./components/HomePage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/admin/*" element={<MasterLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
