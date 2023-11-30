import React from "react";
import { useNavigate } from "react-router-dom";
import "../style/HomePage/ProductCard.css";
import { addProductToCartThunk } from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product.id}`);
  };

  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(addProductToCartThunk(product.id));
  };
  return (
    <article className="producCard" onClick={handleNavigate}>
      <header className="header__producCard">
        <img
          className="header__producCard--img"
          src={product.images[0].url}
          alt={product.title}
        />
      </header>
      <section className="section__productCard">
        <div className="title__productCard">
          <h4 className="h4__productCard">{product.brand}</h4>
          <h3 className="h3__productCard">{product.title}</h3>
        </div>
        <div className="div__price">
          <span className="h4__productCard">Price</span>
          <span className="h3__productCard">${product.price}</span>
        </div>
        <i onClick={handleAddCart} className="bx bx-cart cart"></i>
      </section>
    </article>
  );
};

export default ProductCard;
