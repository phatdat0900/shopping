import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartItemSlide";
import axios from "axios";
import Button from "./Button";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(1);
  const [image, setImage] = useState([]);
  const [colors, setColor] = useState([]);
  const [sizes, setSize] = useState([]);
  const [onChangeColor, setOnChangeColor] = useState([]);
  const [onChangeSize, setOnChangeSize] = useState(undefined);
  const [previewImg, setPreviewImg] = useState(undefined);
  const [descriptionExpand, setDescriptionExpand] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "plus") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };
  const numberWithCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  useEffect(() => {
    const getData = async () => {
      setOnChangeColor([]);
      setOnChangeSize(undefined);
      setQuantity(1);
      axios.get(`/product/item=${id}`).then((res) => {
        setImage(res.data);
        setPreviewImg(res.data[0].url);
      });
      axios.get(`/product/getInfoItem${id}`).then((res) => {
        setProduct(res.data[0]);
      });
      axios.get(`/product/getColor${id}`).then((res) => {
        setColor(res.data);
        setOnChangeColor(res.data[0]);
      });
      axios.get(`/product/getSize${id}`).then((res) => {
        setSize(res.data);
      });
    };
    getData();
  }, [id]);

  useEffect(() => {}, [product]);

  const check = () => {
    if (onChangeColor === undefined) {
      alert("Vui lòng chọn màu sắc!");
      return false;
    }

    if (onChangeSize === undefined) {
      alert("Vui lòng chọn kích cỡ!");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          ID: product.ProductID,
          name: product.productName,
          color: onChangeColor.Name,
          size: onChangeSize,
          price: product.Price - (product.Price * product.discount) / 100,
          quantity: quantity,
          url: product.url,
          orderID: null,
        })
      );
    }
  };
  const goToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          ID: product.ProductID,
          name: product.productName,
          color: onChangeColor.Name,
          size: onChangeSize,
          price: product.Price - (product.Price * product.discount) / 100,
          quantity: quantity,
          url: product.url,
          orderID: null,
        })
      );
      return navigate("/cart");
    }
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          {image.map((item, index) => {
            if (onChangeColor.ColorID === item.ColorID) {
              return (
                <div
                  className="product__images__list__item"
                  key={index}
                  onClick={() => setPreviewImg(item.url)}
                >
                  <img src={item.url} alt="" />
                </div>
              );
            }
          })}
        </div>

        <div className="product__images__main">
          <img src={previewImg} alt="" />
        </div>
        <div
          className={`product-description ${descriptionExpand ? "expand" : ""}`}
        >
          <div className="product-description__title">Chi tiết sản phẩm</div>

          <div className="product-description__content">{product.detail}</div>

          <div className="product-description__toggle">
            <Button
              size="sm"
              onClick={() => setDescriptionExpand(!descriptionExpand)}
            >
              {descriptionExpand ? "Thu gọn" : "Xem thêm"}
            </Button>
          </div>
        </div>
      </div>

      <div className="product__info">
        <h1 className="product__info__title">{product.productName}</h1>
        <div className="product__info__item">
          <span className="product__info__item__price">
            {numberWithCommas(
              product.Price - (product.Price * product.discount) / 100
            ) + "đ"}
          </span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {colors.map((item, index) => (
              <div
                key={index}
                className="product__info__item__list__item"
                onClick={() => {
                  setOnChangeColor(item);
                }}
              >
                <div
                  className={`circle `}
                  style={{ backgroundColor: `${item.code}` }}
                ></div>
              </div>
            ))}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Kích cỡ</div>
          <div className="product__info__item__list">
            {sizes.map((item, index) => {
              if (onChangeColor.ColorID === item.ColorID) {
                if (item.quantity !== 0) {
                  return (
                    <div
                      key={index}
                      className="product__info__item__list__item"
                      onClick={() => {
                        setOnChangeSize(item.size);
                      }}
                    >
                      <span className="product__info__item__list__item__size">
                        {item.size}
                      </span>
                    </div>
                  );
                }
              }
            })}
          </div>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Số lượng</div>
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("minus")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateQuantity("plus")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="product__info__item">
          <Button onClick={() => addToCart()}>thêm vào giỏ</Button>
          <Button onClick={() => goToCart()}>mua ngay</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
