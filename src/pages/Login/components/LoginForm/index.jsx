import React from "react";
import { useForm } from "react-hook-form";
import MakeVisible from "../../../../assets/icons/MakeVisible.svg";
import MakeNotVisible from "../../../../assets/icons/MakeNotVisible.svg";
import { useState } from "react";

const LoginForm = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
        <input
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Пароль"
        />
        <img
          onClick={() => {
            setIsPasswordVisible((prev) => !prev);
          }}
          className={`visibility-icon ${isPasswordVisible ? "hide" : ""}`}
          src={isPasswordVisible ? MakeNotVisible : MakeVisible}
          alt="Make visible"
        />
      </div>
      <div className="error-block"></div>
      <button type="submit">Войти</button>
    </form>
  );
};

export default LoginForm;
