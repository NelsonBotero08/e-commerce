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
    const url = "http://localhost:8080/purchases";
    axios
      .post(url, "", getConfigToken())
      .then((res) => {
        dispatch(setCart([]));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="cart-container">
      <div className="cartproduct-container">
        {cart.map((prod) => (
          <CartProduct key={prod.id} prod={prod} />
        ))}
      </div>
      <footer className="footer-container">
        <div className="div__footer">
          <div className="footer">
            <span className="footer__span">Total</span>
            <span className="footer__price">${total}</span>
          </div>

          <button className="footer__btn" onClick={handlePurchase}>
            Checkout
          </button>
        </div>
      </footer>
    </div>
  );
};

export default CartPage;
