import React from "react";
import { deleteProductFromCartThunk } from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";

const CartProduct = ({ prod }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteProductFromCartThunk(prod.id));
  };

  return (
    <section>
      <header>
        <img src={prod.product.images[0].url} alt="" />
        <article>
          <h3>{prod.product.title}</h3>
          <span>{prod.quantity}</span>
          <section>
            <span>Price</span>
            <span>{prod.product.price}</span>
          </section>
          <footer>
            <i onClick={handleDeleteItem} className="bx bx-trash"></i>
          </footer>
        </article>
      </header>
    </section>
  );
};

export default CartProduct;
