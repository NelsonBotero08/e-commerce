import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hook/useAuth";
import "../style/RegisterPage/FormRegister.css";

const FormRegister = () => {
  const { register, handleSubmit, reset } = useForm();
  const { registerUser } = useAuth();
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [errorModalOpen, setErrorModalOpen] = useState(false);

  const submit = (data) => {
    const frontBaseUrl = location.protocol + "//" + location.host;
    const dataWithBaseUrl = { ...data, frontBaseUrl };
    registerUser(dataWithBaseUrl)
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
      {successModalOpen && (
        <div className="modal__createdUser">
          <div className="modal-content">
            <h2 className="content__h2--created">
              <i className="bx bx-check"></i>
              User created successfull
            </h2>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {errorModalOpen && (
        <div className="modal__errorCreated">
          <div className="modal-content">
            <h2 className="content__h2--errorCreated">
              <i className="bx bx-x"></i>Error creating user
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormRegister;
