import React from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import "./index.css";
import SpecialitiesArea from "./SpecialitiesArea";
import FooterBootom from "../../components/FooterBottom";
import FooterCircles from "../../assets/images/Footer.svg";

const Specialities = () => {
  return (
    <div className="specialities-page">
      <header className="specialities-header">
        <GrsuSkillsLogoLight />
        <h1>Специальности</h1>
      </header>
      <main className="specialities-main">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi.
          Sed sodales, nibh at dignissim euismod, lectus lacus placerat elit,
          vel lobortis erat mi sed augue.
        </p>
        <SpecialitiesArea />
      </main>
      <footer>
        <FooterBootom circlesImage={FooterCircles} />
      </footer>
    </div>
  );
};

export default Specialities;
