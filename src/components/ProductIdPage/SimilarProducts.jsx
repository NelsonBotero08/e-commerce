import React, { useEffect } from "react";
import useFetch from "../../hook/useFetch";
import ProductCard from "../HomePage/ProductCard";
import "../style/ProductIdPage/SimilarProducts.css";

const SimilarProducts = ({ categoryId, idProduct }) => {
  const [categoryProduct, getCategoryProduct] = useFetch();

  useEffect(() => {
    if (categoryId) {
      const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
      getCategoryProduct(url);
    }
  }, [categoryId]);

  return (
    <div>
      <h1>Similar Products</h1>
      <div className="div__similar--product">
        {categoryProduct
          ?.filter((product) => product.id !== idProduct)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
