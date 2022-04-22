import React from "react";
import { FooterBottom } from "../../components/FooterBottom";
import "./index.css";
import { GrsuSkillsLogoDark } from "../../components/GrsuSkillsLogo";
import Page from "../../components/Page";
import TreeArea from "./components/TreeArea/TreeArea";
import SubjectCard from "./components/SubjectCard";

const Progress = () => {
  return (
    <Page>
      <div className="progress-page">
        <header>
          <GrsuSkillsLogoDark />
        </header>
        <section className="subject-card-section">
          <SubjectCard />
        </section>
        <main className="main-progress">
          <div className="bg-circle"></div>
          <TreeArea />
        </main>
        <FooterBottom />
      </div>
    </Page>
  );
};

export default Progress;
