import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advertSlice";

export const store = configureStore({
  reducer: {
    adverts: advertsReducer,
  },
});
