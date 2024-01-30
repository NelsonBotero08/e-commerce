import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import("../style/ResetPassword/FormUpdatePassword.css");

const UpdatePassword = () => {
  const { handleSubmit, register, reset, watch } = useForm();
  const [passwordChanged, setPasswordChanged] = useState(false);
  const { code } = useParams();

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const submit = async ({ password }) => {
    await axios.post(`http://localhost:8080/users/reset_password/${code}`, {
      password,
    });
    setPasswordChanged(true);
    reset();
  };

  useEffect(() => {
    let timeout;
    if (passwordChanged) {
      timeout = setTimeout(() => {
        setPasswordChanged(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [passwordChanged]);

  return (
    <div className="container__updatePassword">
      <h1>Reset password</h1>
      <form className="form_password" onSubmit={handleSubmit(submit)}>
        <label className="labelPassword">Nueva Contraseña</label>
        <input
          className="inputPassword"
          {...register("password", { required: true })}
          type="password"
        />

        <label className="labelPassword">Confirmar Contraseña</label>
        <input
          className="inputPassword"
          {...register("confirmPassword", { required: true })}
          type="password"
        />

        {password && confirmPassword && password !== confirmPassword && (
          <p>Las contraseñas no coinciden.</p>
        )}

        <button className="btn__updatePassword" type="submit">
          Guardar Contraseña
        </button>
      </form>

      {passwordChanged && (
        <div className="modalUpdate">
          <div className="modalUpdatePassword">
            <p>Contraseña actualizada exitosamente.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdatePassword;
