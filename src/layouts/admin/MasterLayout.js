import React from "react";

import "../../assets/admin/css/styles.css";
import "../../assets/admin/js/scripts";

import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
// import routes from "../../routes/routes";
import Main from "../../components/admin/Main";

const MasterLayout = () => {
  return (
    <div className="sb-nav-fixed">
      <Navbar />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
