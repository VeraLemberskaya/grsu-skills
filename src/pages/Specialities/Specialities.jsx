import React, { useEffect } from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import "./index.css";
import SpecialitiesArea from "./components/SpecialitiesArea";
import { FooterBottom } from "../../components/FooterBottom";
import { TreesLeft, TreesRight } from "../../assets/images";
import { useLocation } from "react-router-dom";

const Specialities = () => {
  const animation = useLocation().state?.animation;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="specialities-page" style={{ animationName: animation }}>
      <header className="specialities-header">
        <GrsuSkillsLogoLight />
        <h1>Специальности</h1>
      </header>
      <main className="specialities-main">
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi.
          Sed sodales, nibh at dignissim euismod, lectus lacus placerat elit,
          vel lobortis erat mi sed augue.
        </p>
        <img src={TreesLeft} className="bg trees-left" />
        <img src={TreesRight} className="bg trees-right" />
        <SpecialitiesArea />
      </main>
      <footer>
        <FooterBottom />
      </footer>
    </div>
  );
};

export default Specialities;
