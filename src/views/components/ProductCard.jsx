import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  return (
    <div className="product-card">
      <Link to={`/product/item=${props.id}`}>
        <div className="product-card__image">
          <img src={props.img} alt="" />
        </div>
        <h3 className="product-card__name">{props.ProductName}</h3>
        <div className="product-card__price">
          {props.price}
          <span className="product-card__price__old">
            <del>499000</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true}>
          chon mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  ProductName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
