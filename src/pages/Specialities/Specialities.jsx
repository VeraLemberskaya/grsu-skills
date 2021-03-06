import React, { useEffect } from "react";
import { GrsuSkillsLogoLight } from "../../components/GrsuSkillsLogo";
import "./index.css";
import SpecialitiesArea from "./components/SpecialitiesArea";
import { FooterBottom } from "../../components/FooterBottom";
import { TreesLeft, TreesRight } from "../../assets/images";
import Page from "../../components/Page";

const Specialities = () => {
  return (
    <Page>
      <div className="specialities-page">
        <header className="specialities-header">
          <GrsuSkillsLogoLight />
          <h1>Специальности</h1>
        </header>
        <main className="specialities-main">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula
            mi. Sed sodales, nibh at dignissim euismod, lectus lacus placerat
            elit, vel lobortis erat mi sed augue.
          </p>
          <img src={TreesLeft} className="bg trees-left" />
          <img src={TreesRight} className="bg trees-right" />
          <SpecialitiesArea />
        </main>
        <footer>
          <FooterBottom />
        </footer>
      </div>
    </Page>
  );
};

export default Specialities;
