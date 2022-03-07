import React from "react";
import "./index.css";
import Globus from "../../assets/icons/Globus.svg";
import LoginCard from "./components/LoginCard";

const Login = () => {
  return (
    <div className="page">
      <LoginCard />
      <div className="header-wrapper">
        <div className="header-block">
          <div className="logo"></div>
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
