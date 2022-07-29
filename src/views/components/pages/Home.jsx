import React, { useEffect, useState } from "react";

import Main from "../Main";
import Section, { SectionTitle, SectionBody } from "../Section";

import Slider from "../Slider";
import Grid from "../Grid";
import axios from "axios";
import ProductCard from "../ProductCard";
const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get("/home_2").then((res) => {
        setProduct(res.data);
      });
    };
    getData();
  }, []);
  return (
    <Main title="trang chủ">
      <Slider />
      <Section>
        <SectionTitle>top sản phẩm bán chạy trong tuần</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {product.map((item, index) => (
              <ProductCard
                id={item.ProductID}
                key={item.ProductID}
                img={item.url}
                ProductName={item.productName}
                price={Number(item.Price)}
                discount={Number(item.discount)}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Main>
  );
};

export default Home;
