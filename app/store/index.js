import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth.slice";
import uiSlice from "./slices/ui.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiSlice,
  },
});
