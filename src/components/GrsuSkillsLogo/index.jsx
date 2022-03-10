import React from "react";
import GrsuSkillsLight from "../../assets/icons/GrsuSkillsLight.svg";
import GrsuSkillsDark from "../../assets/icons/GrsuSkillsDark.svg";
import LogoLight from "../../assets/icons/LogoLight.svg";
import LogoDark from "../../assets/icons/LogoDark.svg";
import "./index.css";

export const GrsuSkillsLogoLight = () => {
  return (
    <div className="grsu-skills-logo light">
      {/* <div className="logo-icon"></div> */}
      <img src={LogoLight} alt="grsu.skills" className="logo-icon" />
      <img className="logo-text" src={GrsuSkillsLight} alt="grsu.skills" />
    </div>
  );
};

export const GrsuSkillsLogoDark = () => {
  return (
    <div className="grsu-skills-logo dark">
      {/* <div className="logo-icon"></div> */}
      <img src={LogoDark} alt="grsu.skills" className="logo-icon" />
      <img className="logo-text" src={GrsuSkillsDark} alt="grsu.skills" />
    </div>
  );
};
