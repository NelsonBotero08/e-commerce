import React, { useEffect } from "react";
import CardPurchases from "../components/PurchasesPage/CardPurchases";
import useFetch from "../hook/useFetch";
import getConfigToken from "../utils/getConfigToken";

const PurchasesPage = () => {
  const [purchase, getPurchase] = useFetch();

  useEffect(() => {
    const url = "https://ecommersbackend-s8c9.onrender.com/purchases";
    getPurchase(url, getConfigToken());
  }, []);
  return (
    <div>
      <h2>My purchases</h2>
      {purchase?.map((infoPurchase) => (
        <CardPurchases key={infoPurchase.id} infoPurchase={infoPurchase} />
      ))}
    </div>
  );
};

export default PurchasesPage;
