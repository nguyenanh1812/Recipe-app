import { configureStore } from "@reduxjs/toolkit";
import foodSlice from "./components/foodSlice";
export const store = configureStore({
    reducer: {
      foods: foodSlice,
    }
  });