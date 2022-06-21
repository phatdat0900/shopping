import React from "react";
import Navbar from "../Navbar";

import Footer from "../Footer";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Collections = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div>
        <div>
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Collections;
