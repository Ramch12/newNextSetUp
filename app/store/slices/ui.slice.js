import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    theme: "dark",
    layout: "compact",
  },
  reducers: {
    setDarkTheme: (state, action) => {
      state.theme = "light";
      state.layout = "comprehensive";
    },
    setWhiteTheme: (state, action) => {
      (state.theme = "dark"), (state.layout = "compact");
    },
  },
});

export const {setDarkTheme, setWhiteTheme} = uiSlice.actions;
export default uiSlice.reducer;
