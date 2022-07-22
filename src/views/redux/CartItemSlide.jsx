import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItem") !== null
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [];
const initialState = { value: items };
export const cartItem = createSlice({
  name: "cartItem",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const duplicate = findItem(state.value, newItem);
      if (duplicate.length > 0) {
        state.value = delItem(state.value, newItem);
        state.value = [
          ...state.value,
          {
            ...newItem,
            id: duplicate[0].id,
            quantity: newItem.quantity + duplicate[0].quantity,
          },
        ];
      } else {
        state.value = [
          ...state.value,
          {
            ...newItem,
            id:
              state.value.length > 0
                ? state.value[state.value.length - 1].id + 1
                : 1,
          },
        ];
      }
      localStorage.setItem("cartItem", JSON.stringify(sortItem(state.value)));
      console.log(state.value);
    },
    updateItem: (state, action) => {
      const itemUpdate = action.payload;
      const item = findItem(state.value, itemUpdate);
      if (item.length > 0) {
        state.value = delItem(state.value, itemUpdate);
        state.value = [
          ...state.value,
          {
            ...itemUpdate,
            id: item[0].id,
          },
        ];
      }

      localStorage.setItem("cartItem", JSON.stringify(sortItem(state.value)));
    },
    removeItem: (state, action) => {
      const item = action.payload;

      state.value = delItem(state.value, item);
      localStorage.setItem("cartItem", JSON.stringify(sortItem(state.value)));
    },

    clearAll: (state, action) => {
      state.value = [];
    },
  },
});
const findItem = (arr, item) =>
  arr.filter(
    (e) => e.ID === item.ID && e.color === item.color && e.size === item.size
  );

const delItem = (arr, item) =>
  arr.filter(
    (e) => e.ID !== item.ID || e.color !== item.color || e.size !== item.size
  );
const sortItem = (arr) =>
  arr.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0));

export const { addItem, updateItem, removeItem, clearAll } = cartItem.actions;
export default cartItem.reducer;
