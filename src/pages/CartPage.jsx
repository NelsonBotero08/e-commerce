import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, setCart } from "../store/slices/Cart.slice";
import "./style/CartPage.css";
import CartProduct from "../components/CardPage/CartProduct";
import getConfigToken from "../utils/getConfigToken";
import "../pages/style/CartPage.css";
import axios from "axios";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const total = cart.reduce((acc, cv) => {
    const price = Number(cv.product.price);
    return acc + price * cv.quantity;
  }, 0);

  const handlePurchase = () => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases";
    axios
      .post(url, "", getConfigToken())
      .then((res) => {
        console.log(res.data);
        dispatch(setCart([]));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="cart-container">
      <div className="cartproduct-container">
        {cart.map((prod) => (
          <CartProduct prod={prod} />
        ))}
      </div>
      <footer className="footer-container">
        <div className="div__footer">
          <span>Total</span>
          <span>${total}</span>
          <button onClick={handlePurchase}>Checkout</button>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
