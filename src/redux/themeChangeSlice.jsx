import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};

export const themeChangeSlice = createSlice({
  name: "themeChange",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      document.querySelector("html").setAttribute("data-theme", state.theme);
    },
  },
});

export const { toggleTheme } = themeChangeSlice.actions;

export default themeChangeSlice.reducer;
