import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAccessToken: null,
  cartId: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userAccessToken = action.payload.token;
      state.cartId = action.payload.cartId;
      state.role = action.payload.role;
    },
    signOut: (state) => {
      state.userAccessToken = null;
      state.cartId = null;
      state.role = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
