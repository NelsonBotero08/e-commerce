import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken.js";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => [...state, action.payload],
    deleteItemCart: (state, action) =>
      state.filter((prod) => prod.id !== action.payload),
    setCart: (state, action) => action.payload,
    updateItemCart: (state, action) => {
      const { id, quantity } = action.payload;
      return state.map((prod) =>
        prod.id === id ? { ...prod, quantity } : prod
      );
    },
  },
});

export const { addToCart, deleteItemCart, setCart, updateItemCart } =
  cartSlice.actions;

export default cartSlice.reducer;

const baseUrl = "https://ecommersbackend-s8c9.onrender.com/productCarts";

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
  const url = `${baseUrl}/${id}`;
  axios
    .delete(url, getConfigToken())
    .then((res) => {
      dispatch(deleteItemCart(id));
    })
    .catch((e) => console.log(e));
};

export const updateItemCartThunk = (id, quantity) => (dispatch) => {
  const url = `${baseUrl}/${id}`;
  const data = { quantity };
  axios
    .put(url, data, getConfigToken())
    .then((res) => {
      dispatch(updateItemCart({ id, quantity }));
    })
    .catch((e) => console.log(e));
};
