import React from "react";
import { GrsuSkillsLogoLight } from "../../../../components/GrsuSkillsLogo";

const MainGuestHeader = () => {
  return (
    <header className="header">
      <div className="logo">
        <GrsuSkillsLogoLight />
      </div>
      <div className="main-title">
        <h1>Узнай больше</h1>
        <h3>о факультетах Гргу</h3>
        <h3></h3>
      </div>
    </header>
  );
};

export default MainGuestHeader;
