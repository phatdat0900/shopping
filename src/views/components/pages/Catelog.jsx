import React, { useState, useEffect } from "react";
import Main from "../Main";
import Sidebar from "../Sidebar";
import Display from "../Display";
const Catelog = () => {
  return (
    <Main title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter">
          <Sidebar />
        </div>
        <Display />
      </div>
    </Main>
  );
};

export default Catelog;
