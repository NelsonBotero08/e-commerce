import React from "react";
import { deleteProductFromCartThunk } from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";
import "../style/CardPage/CardProduct.css";

const CartProduct = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteProductFromCartThunk(prod.id));
  };

  return (
    <section className="cardProduct">
      <header className="header__cardProduct">
        <img
          className="img__cardproduct"
          src={prod.product.images[0].url}
          alt=""
        />
        <article className="article__cardproduct">
          <h3 className="title__cardproduct">{prod.product.title}</h3>
          <section className="sectien__quantity--cardproduct">
            <button className="btn__plus--cardproduct">+</button>
            <span className="quantity__cardproduct">{prod.quantity}</span>
            <button className="btn__minus--cardproduct">-</button>
          </section>
          <section className="sectien__price--cardproduct">
            <span>$ {prod.product.price}</span>
          </section>
          <footer className="footer--cardproduct">
            <i onClick={handleDeleteItem} className="bx bx-trash"></i>
          </footer>
        </article>
      </header>
    </section>
  );
};

export default CartProduct;
