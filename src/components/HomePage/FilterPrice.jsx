import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "../style/HomePage/FilterPrice.css";

const FilterPrice = ({ setPriceRange }) => {
  const [expand, setExpand] = useState(true);
  const { register, handleSubmit, reset } = useForm();

  const handleExpand = () => {
    setExpand(!expand);
  };

  const submit = (data) => {
    const from = +data.from;
    const to = +data.to;
    setPriceRange({
      from,
      to: to === 0 ? Infinity : to,
    });
    reset({
      from: "",
      to: "",
    });
  };
  return (
    <div className="price">
      <div className="div__price--title">
        <h3>Price</h3>
        <i
          onClick={handleExpand}
          className={`bx ${expand ? "bx-chevron-up" : "bx-chevron-down"}`}
        ></i>
      </div>
      <hr className="separator" />
      <form
        className={` ${expand ? "form__price" : "form__price-down"}`}
        onSubmit={handleSubmit(submit)}
      >
        <label className="label__price">
          <span className="span__price">From</span>
          <input className="input__price" {...register("from")} type="number" />
        </label>
        <label className="label__price">
          <span className="span__price">To</span>
          <input className="input__price" {...register("to")} type="numbre" />
        </label>
        <div className="div__button--price">
          <button className="button__price">Filter price</button>
        </div>
      </form>
    </div>
  );
};

export default FilterPrice;
