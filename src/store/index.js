import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/Products.slice";
import cart from "./slices/Cart.slice";

const store = configureStore({
  reducer: {
    products,
    cart,
  },
});

export default store;
