import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/Cart.slice";
import "./style/CartPage.css";

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

  console.log(cart);
  return (
    <div className="cart-container">
      <ul className="container">
        {cart?.map((prod) => (
          <li className="li__container" key={prod.id}>
            <section className="section__img--cart">
              <img
                className="img--cart"
                src={prod.product.images[0].url}
                alt={prod.product.title}
              />
            </section>
            <section>
              {prod.product.title}
              <button onClick={handleMinus}>-</button>
              {prod.quantity}
              <button onClick={handlePlus}>+</button>
              <h3>${prod.product.price}</h3>
              <i className="bx bx-trash"></i>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
