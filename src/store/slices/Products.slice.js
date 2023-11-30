import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const ProductsSlice = createSlice({
  name: "products",
  initialState: null,
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = ProductsSlice.actions;

export default ProductsSlice.reducer;

export const getProductsThunk = (url) => (dispatch) => {
  axios
    .get(url)
    .then((res) => dispatch(setProducts(res.data)))
    .catch((e) => console.log(e));
};
