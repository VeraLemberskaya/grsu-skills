import React from "react";
import "./index.css";

const Tooltip = ({ visibility }) => {
  return (
    <div className={`login-tooltip-wrapper ${visibility ? "visible" : ""}`}>
      <div className="login-tooltip">
        <div className="tooltip-text">
          <p>
            Данные своего личного аккаунта для входа в систему grsu.skills
            выдаются после поступления в университет.
          </p>
        </div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Tooltip;
