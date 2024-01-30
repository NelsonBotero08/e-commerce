import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../style/ResetPassword/FormResetPassword.css";

const ResetPasswordForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async ({ email }) => {
    const frontBaseUrl = location.protocol + "//" + location.host;
    const body = { email, frontBaseUrl };
    try {
      await axios.post(
        "https://ecommersbackend-s8c9.onrender.com/users/reset_password",
        body
      );
      setEmailSent(true);
      reset();
    } catch (error) {
      setError("Error al enviar el correo electrónico.");
    }
  };

  useEffect(() => {
    let timeout;
    if (emailSent || error) {
      timeout = setTimeout(() => {
        setEmailSent(false);
        setError("");
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [emailSent, error]);

  return (
    <div className="container__Password">
      <h2>Restablecer Contraseña</h2>
      <form className="formPassword" onSubmit={handleSubmit(onSubmit)}>
        <div className="divpassword">
          <label>Email:</label>
          <input
            className="inputPassword"
            type="email"
            {...register("email", { required: true })}
          />
        </div>
        <button className="btn__password" type="submit">
          Enviar Solicitud
        </button>
      </form>
      <p>Ingresa el email para cambio de contraseña</p>
      {emailSent && (
        <div className="modalSend">
          <div className="modal-content__send">
            <h3>Email Enviado Exitosamente</h3>
          </div>
        </div>
      )}
      {error && (
        <div className="modalError">
          <div className="modal-content__error">
            <p>{error}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetPasswordForm;
