import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import "../style/LoginPage/FormLogin.css";
import useAuth from "../../hook/useAuth";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  const { register, handleSubmit, reset } = useForm();
  const { loginUser } = useAuth();
  const token = localStorage.getItem("token");

  const submit = (data) => {
    loginUser(data)
      .then(() => {
        setSuccessModalOpen(true);
        reset();
        setTimeout(() => {
          setSuccessModalOpen(false);
        }, 3000);
      })
      .catch(() => {
        setErrorModalOpen(true);
        setTimeout(() => {
          setErrorModalOpen(false);
        }, 3000);
      });
  };

  const handleSubmitLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    window.location.reload();
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
          <br />
          <h3>
            <Link to="/reset-password" className="link">
              Olvidé mi contraseña
            </Link>
          </h3>
        </section>
      </form>
      <form
        className={`logout ${token ? "logoutvisible" : ""}`}
        onSubmit={handleSubmitLogout}
      >
        <i className="bx bxs-user-circle"></i>
        <button className="btn__login">Logout</button>
      </form>
      {successModalOpen && (
        <div className="modal__createdUser">
          <div className="modal-content">
            <h2 className="content__h2--created">
              <i className="bx bx-check"></i>
              User Login
            </h2>
          </div>
        </div>
      )}
      {errorModalOpen && (
        <div className="modal__errorCreated">
          <div className="modal-content">
            <h2 className="content__h2--errorCreated">
              <i className="bx bx-x"></i>Unvalidated user or invalid credentials
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormLogin;
