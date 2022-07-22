import { createSlice } from "@reduxjs/toolkit";
const auth =
  localStorage.getItem("auth") !== null
    ? JSON.parse(localStorage.getItem("auth"))
    : null;
export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: auth,
  },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(state.user));
    },
    logOut: (state, action) => {
      state.user = null;
      localStorage.clear();
    },
  },
});

export const selectCurrentUser = (state) => state.auth.user;
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;
