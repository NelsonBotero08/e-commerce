import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/Cart.slice";
import "./style/CartPage.css";
import CartProduct from "../components/CardPage/CartProduct";

const CartPage = () => {
  const cart = useSelector((store) => store.cart);
  const [cartQuantity, setCartQuantity] = useState(1);

  const dispatch = useDispatch();

  const handlePlus = () => {
    setCartQuantity(cartQuantity + 1);
  };

  const handleMinus = () => {
    setCartQuantity(cartQuantity + 1);
  };

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const total = cart.reduce((acc, cv) => {
    const price = Number(cv.product.price);
    return acc + price * cv.quantity;
  }, 0);

  return (
    <div>
      <div className="cart-container">
        {cart.map((prod) => (
          <CartProduct prod={prod} />
        ))}
      </div>
      <footer>
        <span>Total</span>
        <span>{total}</span>
      </footer>
    </div>
  );
};

export default CartPage;
