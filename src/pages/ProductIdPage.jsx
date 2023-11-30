import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductIdCard from "../components/ProductIdPage/ProductIdCard";
import useFetch from "../hook/useFetch";

const ProductIdPage = () => {
  const { id } = useParams();

  const [product, getProduct] = useFetch();

  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${id}`;
    getProduct(url);
  }, [id]);

  return (
    <div>
      <ProductIdCard productId={product} />
    </div>
  );
};

export default ProductIdPage;
