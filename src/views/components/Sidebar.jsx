import React, { useState, useEffect } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const Sidebar = () => {
  const [Catelog, setCatelog] = useState([]);
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    if (subnav === false) {
      setSubnav(true);
    } else {
      setSubnav(false);
    }
  };
  useEffect(() => {
    const getData = async () => {
      axios.get("/catelog_getCate").then((res) => {
        setCatelog(res.data);
      });
    };
    getData();
  }, []);
  return (
    <div className="catalog__filter__widget_content">
      <div
        className="catalog__filter__widget__content__item"
        onClick={showSubnav}
      >
        <h1>Nam</h1>
        {subnav ? <ArrowDropDown /> : <ArrowDropUp />}
      </div>
      {subnav &&
        Catelog.map((item) =>
          item.gender == 1 ? (
            <Link
              className="catalog__filter__widget__content__item"
              key={item.CateID}
              to={`CateID=${item.CateID}`}
            >
              {item.CateName}
            </Link>
          ) : null
        )}
      <div
        className="catalog__filter__widget__content__item"
        onClick={showSubnav}
      >
        <h1>Nữ</h1>
        {subnav ? <ArrowDropDown /> : <ArrowDropUp />}
      </div>
      {subnav &&
        Catelog.map((item) =>
          item.gender == 0 ? (
            <Link
              className="catalog__filter__widget__content__item"
              key={item.CateID}
              to={`CateID=${item.CateID}`}
            >
              {item.CateName}
            </Link>
          ) : null
        )}
    </div>
  );
};

export default Sidebar;
