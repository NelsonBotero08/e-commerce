import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import "../style/LoginPage/FormLogin.css";

const FormLogin = () => {
  const { register, handleSubmit, reset } = useForm();
  const { loginUser } = useAuth();
  const token = localStorage.getItem("token");

  const submit = (data) => {
    loginUser(data);

    reset({
      email: "",
      password: "",
    });

    setTimeout(function () {
      window.location.reload();
    }, 1500);
  };

  const handleSubmitLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");

    setTimeout(function () {
      window.location.reload();
    }, 500);
  };

  return (
    <div className="formLogin">
      <form
        className={`${token ? "logintvisible" : ""}`}
        onSubmit={handleSubmit(submit)}
      >
        <section className="section__form--login">
          <i className="bx bxs-user-circle"></i>
          <label className="label__email--login">
            <span className="span__email--login">Email</span>
            <input
              className="input__email--login"
              {...register("email")}
              type="email"
            />
          </label>
          <label className="label__password--login">
            <span className="span__email--login">Password</span>
            <input
              className="input__password--login"
              {...register("password")}
              type="password"
            />
          </label>
          <button className="btn__login">Login</button>
        </section>
      </form>
      <form
        className={`logout ${token ? "logoutvisible" : ""}`}
        onSubmit={handleSubmitLogout}
      >
        <i className="bx bxs-user-circle"></i>
        <button className="btn__login">Logout</button>
      </form>
    </div>
  );
};

export default FormLogin;
