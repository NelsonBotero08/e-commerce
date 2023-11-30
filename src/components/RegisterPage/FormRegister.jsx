import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import "../style/RegisterPage/FormRegister.css";

const FormRegister = () => {
  const { register, handleSubmit, reset } = useForm();
  const { registerUser } = useAuth();

  const submit = (data) => {
    registerUser(data);
  };
  return (
    <div className="formregister">
      <form className="form__register" onSubmit={handleSubmit(submit)}>
        <h2 className="title__register">User Registration</h2>
        <label className="label__register">
          <span className="span__register">First name</span>
          <input
            className="input__register"
            {...register("firstName")}
            type="text"
          />
        </label>
        <label className="label__register">
          <span className="span__register">Last name</span>
          <input
            className="input__register"
            {...register("lastName")}
            type="text"
          />
        </label>
        <label className="label__register">
          <span className="span__register">Email</span>
          <input
            className="input__register"
            {...register("email")}
            type="email"
          />
        </label>
        <label className="label__register">
          <span className="span__register">Password</span>
          <input
            className="input__register"
            {...register("password")}
            type="password"
          />
        </label>
        <label className="label__register">
          <span className="span__register">Phone</span>
          <input
            className="input__register"
            {...register("phone")}
            type="text"
          />
        </label>
        <button className="btn__register">Submit</button>
      </form>
    </div>
  );
};

export default FormRegister;
