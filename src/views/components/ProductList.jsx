import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import ProductCard from "./ProductCard";
import axios from "axios";
const ProductList = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      axios.get(`/catelog/CateID=${id}`).then((res) => {
        console.log(id);
        setProduct(res.data);
      });
    };

    getProduct();
  }, [id]);
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

export default ProductList;
