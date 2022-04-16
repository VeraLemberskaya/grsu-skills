import React from "react";
import MainSectionCard from "../MainSectionCard";
import MainClouds from "../../../../assets/icons/MainClouds.svg";
import TreesSpecialities from "../../../../assets/icons/TreesSpecialities.png";
import TreesGlossary from "../../../../assets/icons/TreesGlossary.png";
import TreesProgress from "../../../../assets/icons/TreesProgress.png";
import { Link } from "react-router-dom";
import "./index.css";

const GuestMainSection = () => {
  return (
    <section className="main-section">
      <div className="container">
        <div className="university-card-block">
          <img src={MainClouds} alt="Clouds" />
          <a href="https://www.grsu.by/" target="_blank">
            <MainSectionCard
              title="Университет"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
              radius="5rem"
              height="12.375rem"
              fontWeight="400"
            />
          </a>
        </div>

        <div className="card-block specialities-card-block">
          <img src={TreesSpecialities} alt="Специальности" />
          <Link to="/specialities" state={{ animation: "slideInUp" }}>
            <MainSectionCard
              title="Специальности"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi."
              radius="1.25rem"
              height="19.1rem"
              paddingTop="2rem"
            />
          </Link>
        </div>

        <div className="card-block glossary-card-block">
          <img src={TreesGlossary} alt="Глоссарий" />
          <Link to="/glossary" state={{ animation: "slideInUp" }}>
            <MainSectionCard
              title="Глоссарий"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. "
              radius="1.25rem"
              height="16.25rem"
              paddingTop="2rem"
            />
          </Link>
        </div>

        <div className="card-block progress-card-block">
          <img src={TreesProgress} alt="Прогресс" />
          <Link to="/progress" state={{ animation: "slideInUp" }}>
            <MainSectionCard
              title="Прогресс"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi."
              radius="1.25rem"
              height="18.75rem"
              paddingTop="2rem"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GuestMainSection;
