// create store
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./slices/cartSLice";

// implement store
export const store = configureStore({
  // call reducers -> reducer implements all the functionalities
  reducer: {
    cart: cartReducer,
    cart: cartReducer,
  },
});
