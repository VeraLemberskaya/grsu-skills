import React from "react";
import { useForm } from "react-hook-form";
import MakeVisible from "../../../../assets/icons/MakeVisible.svg";
import MakeNotVisible from "../../../../assets/icons/MakeNotVisible.svg";
import { useState } from "react";
import useValidation from "./validation.js";
import "./index.css";
import { authenticateUser } from "../../../../api/ApiRequests";
import { useNavigate } from "react-router-dom";
import { useAuthActions } from "../../../../hooks/useAuth";

const LoginForm = () => {
  const { authorizeUser } = useAuthActions();
  const [loginError, setLoginError] = useState(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { login: loginValidation, password: passwordValidation } =
    useValidation();

  const navigate = useNavigate();

  const {
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const login = e.target.login.value;
    const password = e.target.password.value;
    try {
      const result = await authenticateUser(login, password);
      console.log(result);
      authorizeUser(result);
      navigate("/profile", { replace: true });
      if (loginError) setLoginError(null);
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <form className="login-form" onSubmit={handleFormSubmit}>
      <div className="input">
        <input
          {...register("login", loginValidation)}
          name="login"
          type="text"
          placeholder="Логин"
          maxLength="25"
          onKeyDown={() => {
            if (loginError) {
              setLoginError(null);
            }
          }}
        />
      </div>
      <div className="error-block">
        {errors?.login && <p>{errors?.login?.message || "Ошибка!"}</p>}
      </div>
      <div className="input">
        <input
          {...register("password", passwordValidation)}
          name="password"
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Пароль"
          onKeyDown={() => {
            if (loginError) {
              setLoginError(null);
            }
          }}
          maxLength="16"
        />
        <img
          onClick={() => {
            setIsPasswordVisible(true);
          }}
          src={MakeVisible}
          alt="Make Visible"
          className={`visibility-icon ${isPasswordVisible ? "" : "display"}`}
        />
        <img
          onClick={() => {
            setIsPasswordVisible(false);
          }}
          src={MakeNotVisible}
          alt="Make Not Visible"
          className={`visibility-icon hide ${
            isPasswordVisible ? "display" : ""
          }`}
        />
      </div>
      <div className="error-block">
        {errors?.password ? (
          errors?.password && <p>{errors?.password?.message || "Ошибка!"}</p>
        ) : loginError ? (
          <p>{loginError}</p>
        ) : (
          ""
        )}
      </div>
      <button type="submit" disabled={!isValid}>
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
