import React, { useEffect, useState } from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import axios from "axios";

const Filer = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getData = async () => {
      axios.get("/catelog").then((res) => {
        setProduct(res.data);
      });
    };
    getData();
  }, []);
  return (
    <div className="catalog__content">
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {product.map((item, index) => (
          <ProductCard
            key={item.ProductID}
            id={item.ProductID}
            img={item.url}
            ProductName={item.productName}
            price={Number(item.Price)}
            discount={Number(item.discount)}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Filer;
