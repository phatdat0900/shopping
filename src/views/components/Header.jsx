import React, { useRef, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "../components/Dropdown";

import logo from "../assets/images/Picture3.png";

const mainNav = [
  {
    display: "Trang chủ",
    path: "/",
  },
  {
    display: "Sản phẩm",
    path: "/catelog",
  },
  {
    display: "Phụ kiện",
    path: "/accessories",
  },
];
const DropdownItem = [
  {
    title: "Register",
    path: "/Register",
    cName: "dropdown-link",
  },
  {
    title: "Login",
    path: "/Login",
    cName: "dropdown-link",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);
  const [dropDown, setDropDown] = useState(false);
  const showdropDown = () => {
    if (dropDown === false) {
      setDropDown(true);
    } else {
      setDropDown(false);
    }
  };
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
  }, []);

  const menuLeft = useRef(null);

  const menuToggle = () => menuLeft.current.classList.toggle("active");

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={menuToggle}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <div className="header__menu__left" ref={menuLeft}>
            <div className="header__menu__left__close" onClick={menuToggle}>
              <i className="bx bx-chevron-left"></i>
            </div>
            {mainNav.map((item, index) => (
              <div
                key={index}
                className={`header__menu__item header__menu__left__item ${
                  index === activeNav ? "active" : ""
                }`}
                onClick={menuToggle}
              >
                <Link to={item.path}>
                  <span>{item.display}</span>
                </Link>
              </div>
            ))}
          </div>
          <div className="header__menu__right">
            <div className="header__menu__item header__menu__right__item">
              <i className="bx bx-search"></i>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <Link to="/cart">
                <i className="bx bx-shopping-bag"></i>
              </Link>
            </div>
            <div
              className="header__menu__item header__menu__right__item"
              onClick={showdropDown}
            >
              <i className="bx bx-user"></i>
            </div>
            {dropDown &&
              DropdownItem.map((item, index) =>
                item.gender == 1 ? (
                  <Link
                    className="catalog__filter__widget__content__item"
                    key={index}
                    to={`${item.path}`}
                  >
                    {item.title}
                  </Link>
                ) : null
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
