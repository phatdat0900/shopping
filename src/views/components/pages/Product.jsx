import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Main from "../Main";
import Section, { SectionBody, SectionTitle } from "../Section";
import Grid from "../Grid";
import ProductCard from "../ProductCard";
import ProductView from "../ProductView";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get(`/product/item!=${id}`).then((res) => {
        setProduct(res.data);
      });
    };
    getData();
  }, [id]);
  return (
    <Main title="thông tin chi tiết">
      <Section>
        <SectionBody>
          <ProductView />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {product.map((item, index) => (
              <ProductCard
                id={Number(item.ProductID)}
                key={index}
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

export default Product;
