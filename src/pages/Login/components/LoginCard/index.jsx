import React from "react";
import InfoIcon from "../../../../assets/icons/Info.svg";
import LoginForm from "../LoginForm";
import Tooltip from "../LoginTooltip";
import { useState } from "react";

const LoginCard = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  return (
    <div className="login-card">
      <Tooltip visibility={isTooltipVisible} />
      <div>
        <div
          onMouseOut={() => {
            setIsTooltipVisible(false);
          }}
          onMouseOverCapture={() => {
            setIsTooltipVisible(true);
          }}
          className="info"
        >
          <img src={InfoIcon} alt="Info" />
        </div>
        <div className="title">
          <h1>ВХОД</h1>
          <h3>
            В систему
            <br />
            grsu.skills
          </h3>
        </div>
        <LoginForm />
        <button className="btn">Войти как гость</button>
        <div className="logo">
          <div className="logo-icon"></div>
          <p>grsu.skills</p>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
