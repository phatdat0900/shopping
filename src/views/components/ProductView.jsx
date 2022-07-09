import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import Button from "./Button";

const ProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const [cartData, setCartData] = useState([]);
  const [product, setProduct] = useState(1);
  const [image, setImage] = useState([]);
  const [colors, setColor] = useState([]);
  const [sizes, setSize] = useState([]);
  const [onChangeColor, setOnChangeColor] = useState(undefined);
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

  useEffect(() => {
    const getData = async () => {
      axios.get(`/product/item=${id}`).then((res) => {
        setImage(res.data);
        setPreviewImg(res.data[0].url);
      });
      axios.get(`/product/getInfoitem${id}`).then((res) => {
        setProduct(res.data[0]);
      });
      axios.get(`/product/getColor${id}`).then((res) => {
        setColor(res.data);
        setOnChangeColor(res.data[0].ColorID);
      });
      axios.get(`/product/getSize${id}`).then((res) => {
        setSize(res.data);
      });
    };
    getData();
  }, [id]);

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
      let newItem = {
        name: product.productName,
        color: onChangeColor,
        size: onChangeSize,
        price: product.Price,
        quantity: quantity,
      };
      console.log(newItem);
    }
  };
  const goToCart = () => {
    let newItem = {
      name: product.productName,
      color: onChangeColor,
      size: onChangeSize,
      price: product.Price,
      quantity: quantity,
    };
    return navigate("/cart");
  };

  return (
    <div className="product">
      <div className="product__images">
        <div className="product__images__list">
          {image.map((item, index) => {
            if (onChangeColor === item.ColorID) {
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
          <span className="product__info__item__price">{product.Price}</span>
        </div>
        <div className="product__info__item">
          <div className="product__info__item__title">Màu sắc</div>
          <div className="product__info__item__list">
            {colors.map((item, index) => (
              <div
                key={index}
                className="product__info__item__list__item"
                onClick={() => {
                  setOnChangeColor(item.ColorID);
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
              if (onChangeColor === item.ColorID) {
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
