import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import cartItemSlide from "./CartItemSlide";

export const store = configureStore({
  reducer: {
    cartItem: cartItemSlide,
    user: authSlice,
  },
});
