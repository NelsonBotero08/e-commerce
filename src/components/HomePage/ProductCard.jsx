import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../style/HomePage/ProductCard.css";
import { addProductToCartThunk } from "../../store/slices/Cart.slice";
import { useDispatch } from "react-redux";
import ModalAddCart from "../../pages/ModalAddCart";
import ModalErrorAddToCart from "../../pages/ModalErrorAddToCart";

const ProductCard = ({ product }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [activeId, setActiveId] = useState(null);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/products/${product.id}`);
  };

  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.stopPropagation();
    dispatch(addProductToCartThunk(product.id));
    if (showSuccessModal && activeId) {
      setShowErrorModal(true);
      setTimeout(() => {
        setShowErrorModal(false);
      }, 2000);
    } else {
      setShowSuccessModal(true);
      setActiveId(product.id);
    }
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
      <section
        className={`modal__addtocart ${
          showSuccessModal && activeId === product.id ? "showmodal" : ""
        }`}
      >
        {showSuccessModal && activeId === product.id && <ModalAddCart />}
      </section>
      <section
        className={`modal__addtocart ${showErrorModal ? "showmodal" : ""}`}
      >
        {showErrorModal && activeId === product.id && showSuccessModal && (
          <ModalErrorAddToCart />
        )}
      </section>
    </article>
  );
};

export default ProductCard;
