import React from "react";
import "./index.css";
import Globus from "../../assets/icons/Globus.svg";
import LoginCard from "./components/LoginCard";
import LogoGRSU from "../../assets/icons/LogoGRSU.svg";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((state) => state.auth.user);

  if (user) return <Navigate to="/profile" />;
  return (
    <div className="page-login">
      <LoginCard />
      <div className="header-wrapper">
        <div className="header-block">
          <img className="logo" src={LogoGRSU} alt="GRSU" />
          <a className="link" href="https://www.grsu.by/" target="_blank">
            <img className="icon" src={Globus} alt="link" />
            <p>Перейти на сайт университета</p>
          </a>
        </div>
      </div>
      <div className="footer-block"></div>
    </div>
  );
};

export default Login;
