import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link className="nav-link" to="/admin/user">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            User
          </Link>
          <Link className="nav-link" to="/admin/product">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Product
          </Link>
          <Link className="nav-link" to="/admin/color">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Color
          </Link>
          <Link className="nav-link" to="/admin/order">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Order
          </Link>
        </div>
      </div>
      {/* <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Start Bootstrap
      </div> */}
    </nav>
  );
};

export default Sidebar;
