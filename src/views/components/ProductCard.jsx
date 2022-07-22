import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const numberWithCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <div className="product-card">
      <Link to={`/product/item=${props.id}`}>
        <div className="product-card__image">
          <img src={props.img} alt="" />
        </div>
        <h3 className="product-card__name">{props.ProductName}</h3>
        <div className="product-card__price">
          {numberWithCommas(props.price - (props.price * props.discount) / 100)}
          <span className="product-card__price__old">
            <del>{numberWithCommas(props.price)}</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button size="sm" icon="bx bx-cart" animate={true}>
          Xem chi tiêt
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
  discount: PropTypes.number.isRequired,
};

export default ProductCard;
