import React, { useState } from "react";
import {
  deleteProductFromCartThunk,
  updateItemCartThunk,
} from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";
import "../style/CardPage/CardProduct.css";
import ModalDeletCart from "../../pages/ModalDeletCart";
import ModalUpdateCart from "../../pages/ModalUpdateCart";

const CartProduct = ({ prod }) => {
  console.log(prod);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteProductFromCartThunk(prod.id));
    setModalDelete(true);
    setTimeout(() => {
      setModalDelete(false);
    }, 2000);
  };

  const handleIncrement = () => {
    dispatch(updateItemCartThunk(prod.id, prod.quantity + 1));
    setModalUpdate(true);
    setTimeout(() => {
      setModalUpdate(false);
    }, 2000);
  };

  const handleDecrement = () => {
    if (prod.quantity > 1) {
      dispatch(updateItemCartThunk(prod.id, prod.quantity - 1));
      setModalUpdate(true);
      setTimeout(() => {
        setModalUpdate(false);
      }, 2000);
    }
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
            <button
              className="btn__minus--cardproduct"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="quantity__cardproduct">{prod.quantity}</span>
            <button
              className="btn__plus--cardproduct"
              onClick={handleIncrement}
            >
              +
            </button>
          </section>
          <section className="sectien__price--cardproduct">
            <span>$ {prod.product.price}</span>
          </section>
          <footer className="footer--cardproduct">
            <i onClick={handleDeleteItem} className="bx bx-trash"></i>
          </footer>
        </article>
        <section className="section__modalDelete">
          {modalDelete && <ModalDeletCart />}
        </section>
        <section className="section__modalupdate">
          {modalUpdate && <ModalUpdateCart />}
        </section>
      </header>
    </section>
  );
};

export default CartProduct;
