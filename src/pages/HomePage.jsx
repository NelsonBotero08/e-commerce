import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/Products.slice";
import ProductCard from "../components/HomePage/ProductCard";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import "./style/HomePage.css";
import CartPage from "./CartPage";

const HomePage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("all");
  const [priceRange, setPriceRange] = useState({
    from: 0,
    to: Infinity,
  });
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();

  useEffect(() => {
    const url = "http://localhost:8080/products";
    dispatch(getProductsThunk(url));
  }, []);

  const inputSearch = useRef();

  const handleSearch = () => {
    setSearchInput(inputSearch.current.value.toLowerCase().trim());
  };

  const callbackFilter = (prod) => {
    const filterName = prod.title.toLowerCase().includes(searchInput);
    const filterCategories =
      searchCategory === "all" ? true : searchCategory === prod.category.id;
    const price = +prod.price;
    const filterPrice = priceRange.from <= price && price <= priceRange.to;

    return filterName && filterCategories && filterPrice;
  };

  return (
    <div>
      <div className="filteres">
        <FilterPrice setPriceRange={setPriceRange} />
        <FilterCategory setSearchCategory={setSearchCategory} />
      </div>
      <div className="homepage">
        <div className="div__input--search">
          <input
            className="homepage__input--search"
            placeholder="Search Product"
            type="text"
            ref={inputSearch}
            onChange={handleSearch}
          />
        </div>
        <div className="products__card">
          {products?.filter(callbackFilter).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
