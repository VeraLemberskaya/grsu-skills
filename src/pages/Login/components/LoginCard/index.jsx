import React from "react";
import InfoIcon from "../../../../assets/icons/Info.svg";
import LoginForm from "../LoginForm";
import Tooltip from "../LoginTooltip";
import { useState } from "react";
import { GrsuSkillsLogoDark } from "../../../../components/GrsuSkillsLogo";
import { Link } from "react-router-dom";

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

        <Link to="/main">
          <button className="btn">Войти как гость</button>
        </Link>
        <GrsuSkillsLogoDark />
      </div>
    </div>
  );
};

export default LoginCard;
