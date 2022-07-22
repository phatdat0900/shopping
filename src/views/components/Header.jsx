import React, { useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

import logo from "../assets/images/Picture3.png";
import { logOut } from "../redux/AuthSlice";
import { deleteAllItem } from "../redux/CartItemSlide";

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
    title: "Đăng ký",
    path: "/Register",
  },
  {
    title: "Đăng nhập",
    path: "/Login",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = mainNav.findIndex((e) => e.path === pathname);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }
  const handleClickCart = (e) => {
    if (!user) {
      alert("Vui lòng đăng nhập!");
      return false;
    } else {
      navigate("/cart");
    }
  };
  const refreshPage = () => {
    window.location.reload();
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);

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
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open, user]);

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
              <button
                className="bx bx-shopping-bag bg-white border-0"
                to="/cart"
                onClick={handleClickCart}
              ></button>
            </div>
            <div className="header__menu__item header__menu__right__item">
              <i
                className="bx bx-user"
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
              ></i>

              <Popper
                open={open}
                anchorEl={anchorRef.current}
                role={undefined}
                transition
                disablePortal
              >
                {({ TransitionProps, placement }) => (
                  <Grow
                    {...TransitionProps}
                    style={{
                      transformOrigin:
                        placement === "bottom" ? "center top" : "center bottom",
                    }}
                  >
                    <Paper>
                      <ClickAwayListener onClickAway={handleClose}>
                        {user ? (
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>
                              <span> Xin chào {user.fullName}</span>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                              <Link to={"/Profile"}>
                                <span>Thông tin cá nhân</span>
                              </Link>
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                dispatch(logOut());
                                navigate("/");
                                refreshPage();
                              }}
                            >
                              <span>Đăng xuất</span>
                            </MenuItem>
                          </MenuList>
                        ) : (
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            {DropdownItem.map((item, index) => (
                              <MenuItem key={index} onClick={handleClose}>
                                <Link to={item.path}>
                                  <span>{item.title}</span>
                                </Link>
                              </MenuItem>
                            ))}
                          </MenuList>
                        )}
                      </ClickAwayListener>
                    </Paper>
                  </Grow>
                )}
              </Popper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
