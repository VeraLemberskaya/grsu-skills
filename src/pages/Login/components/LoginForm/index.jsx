import React from "react";
import { useForm } from "react-hook-form";
import Visibility from "../../../../assets/icons/MakeVisible.svg";

const LoginForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: "onBlur" });
  return (
    <form className="login-form">
      <div className="input">
        <input name="login" type="text" placeholder="Логин" />
      </div>
      <div className="error-block"></div>
      <div className="input">
        <input name="password" type="password" placeholder="Пароль" />
        <img className="visibility-icon" src={Visibility} alt="Make visible" />
      </div>
      <div className="error-block"></div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
