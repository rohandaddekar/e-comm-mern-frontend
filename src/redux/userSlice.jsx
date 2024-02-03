import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userAccessToken: null,
  role: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.userAccessToken = action.payload.token;
      state.role = action.payload.role;
    },
    signOut: (state) => {
      state.userAccessToken = null;
      state.role = null;
    },
  },
});

export const { signIn, signOut } = userSlice.actions;

export default userSlice.reducer;
