import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./reducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});
