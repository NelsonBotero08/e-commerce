import React from "react";

const CardPurchases = ({ infoPurchase }) => {
  return (
    <section>
      <header>
        <img src={infoPurchase.product.images[0].url} alt="" />
      </header>
      <p>{infoPurchase.product.createdAt.slice(0, 10)}</p>
      <h3>{infoPurchase.product.title}</h3>
      <p>{infoPurchase.quantity}</p>
      <h3>${infoPurchase.quantity * infoPurchase.product.price}</h3>
    </section>
  );
};

export default CardPurchases;
