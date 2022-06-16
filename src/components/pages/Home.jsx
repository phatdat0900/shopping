import React from "react";
import Navbar from "../Navbar";
import Annoucement from "../Annoucement";
import Slider from "../Slider";
import Categories from "../Categories";
import Products from "../Products";
import Newletter from "../Newletter";
import Footer from "../Footer";
const Home = () => {
  return (
    <div>
      <Annoucement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newletter />
      <Footer />
    </div>
  );
};

export default Home;
