import React from "react";

import Footer from "./Footer";
import Header from "./Header";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="main">
          <Layout />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
