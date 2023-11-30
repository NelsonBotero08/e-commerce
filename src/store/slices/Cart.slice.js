import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    deleteItemCart: (state, action) => {
      return state.filter((prod) => prod.id !== action.payload);
    },
    setCart: (state, action) => action.payload,
  },
});

export const { addToCart, deleteItemCart, setCart } = cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1/cart";

export const getCartThunk = () => (dispatch) => {
  const url = `${baseUrl}`;
  axios
    .get(url, getConfigToken())
    .then((res) => dispatch(setCart(res.data)))
    .catch((e) => console.log(e));
};

export const addProductToCartThunk =
  (productId, quantity = 1) =>
  (dispatch) => {
    const url = `${baseUrl}`;
    const data = { productId, quantity };
    axios
      .post(url, data, getConfigToken())
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };

export const deleteProductFromCartThunk = (id) => (dispatch) => {
  const url = `${baseUrl}`;
  axios
    .post(url, getConfigToken())
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
};
