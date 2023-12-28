import React from "react";
import "../style/PurchasesPage/CardPurchases.css";

const CardPurchases = ({ infoPurchase }) => {
  return (
    <section className="section__purchases">
      <header className="header__purchases">
        <img
          className="img__purchases"
          src={infoPurchase.product.images[0].url}
          alt=""
        />
      </header>
      <p>{infoPurchase.product.createdAt.slice(0, 10)}</p>
      <h4>{infoPurchase.product.title}</h4>
      <p>{infoPurchase.quantity}</p>
      <h4>${infoPurchase.quantity * infoPurchase.product.price}</h4>
    </section>
  );
};

export default CardPurchases;
