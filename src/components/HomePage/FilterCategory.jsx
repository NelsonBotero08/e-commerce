import React, { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import "../style/HomePage/FilterCategory.css";

const FilterCategory = ({ setSearchCategory }) => {
  const [categories, getCategories] = useFetch();
  const [expand, setExpand] = useState(true);
  const handleExpand = () => {
    setExpand(!expand);
  };

  useEffect(() => {
    const url = "https://ecommersbackend-s8c9.onrender.com/categories";
    getCategories(url);
  }, []);

  const handleCategoryClick = (categoryName) => {
    setSearchCategory(categoryName);
  };

  return (
    <section className="categories">
      <div className="div__categories--title">
        <h3>Categories</h3>
        <i
          onClick={handleExpand}
          className={`bx ${expand ? "bx-chevron-up" : "bx-chevron-down"}`}
        ></i>
      </div>
      <hr className="separator" />
      <ul className={` ${expand ? "ul__categories" : "ul__categories-down"}`}>
        <li
          className="li__categories"
          onClick={() => handleCategoryClick("all")}
        >
          All categories
        </li>
        {categories?.map((category) => (
          <li
            className="li__categories"
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FilterCategory;
