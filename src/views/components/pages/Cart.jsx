import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import Button from "../Button";
import Main from "../Main";
import CartItem from "../CartItem";

import Button1 from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { clearAll } from "../../redux/CartItemSlide";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItem.value);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const [cartProducts, setCartProducts] = useState(cartItems);
  const [submitInput, setSubmitInput] = useState({
    phone: "",
    address: "",
  });
  const [totalProducts, setTotalProducts] = useState(0);

  const [price, setPrice] = useState(0);
  const [open, setOpen] = React.useState(false);

  const numberWithCommas = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const handleInput = (e) => {
    setSubmitInput({ ...submitInput, [e.target.name]: e.target.value });
  };

  const orderHandler = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    const data = {
      userID: user.id,
      phone: submitInput.phone,
      address: submitInput.address,
      totalPrice: price,
    };
    axios
      .post("/order", data)
      .then((res) => {
        {
          const product = cartItems.map((item) => {
            return {
              productID: item.ID,
              orderID: res.data[0],
              productName: item.name,
              color: item.color,
              size: item.size,
              quantity: item.quantity,
              price: item.price,
            };
          });

          axios.post("/orderItems", product).catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
    dispatch(clearAll());

    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setCartProducts(cartItems);
    setPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);
  return (
    <Main title="Gi??? h??ng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>B???n ??ang c?? {totalProducts} s???n ph???m trong gi??? h??ng</p>
            <div className="cart__info__txt__price">
              <span>Th??nh ti???n:</span>{" "}
              <span>{numberWithCommas(Number(price)) + " ??"}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button size="block" onClick={handleClickOpen}>
              ?????t h??ng
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title "
            >
              <DialogTitle id="form-dialog-title">
                TH??NG TIN KH??CH H??NG
              </DialogTitle>
              <DialogContent>
                <DialogContentText>H??y ??i???n ?????y ????? th??ng tin</DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="phone"
                  name="phone"
                  label="S??? ??i???n tho???i"
                  value={submitInput.phone}
                  onChange={handleInput}
                  type="phone"
                  fullWidth
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="address"
                  name="address"
                  label="?????a ch??? nh???n"
                  value={submitInput.address}
                  onChange={handleInput}
                  type="Address"
                  fullWidth
                />
              </DialogContent>
              <DialogActions>
                <Button1 onClick={handleClose} color="primary">
                  H???y
                </Button1>
                <Button1 onClick={orderHandler} color="primary">
                  ?????t mua
                </Button1>
              </DialogActions>
            </Dialog>
            <Link to="/catelog">
              <Button size="block">Ti???p t???c mua h??ng</Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Cart;
