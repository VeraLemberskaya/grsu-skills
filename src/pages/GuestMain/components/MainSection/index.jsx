import React from "react";
import MainSectionCard from "../MainSectionCard";
import MainClouds from "../../../../assets/icons/MainClouds.svg";
import TreesSpecialities from "../../../../assets/icons/TreesSpecialities.svg";
import TreesGlossary from "../../../../assets/icons/TreesGlossary.svg";
import TreesProgress from "../../../../assets/icons/TreesProgress.svg";
import { Link } from "react-router-dom";

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
            />
          </a>
        </div>
        <Link to="/specialities" state={{ animation: "slideInUp" }}>
          <div className="card-block specialities-card-block">
            <img src={TreesSpecialities} alt="Специальности" />
            <MainSectionCard
              title="Специальности"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi."
              radius="1.25rem"
              height="19.1rem"
              paddingTop="2rem"
            />
          </div>
        </Link>
        <div className="card-block glossary-card-block">
          <img src={TreesGlossary} alt="Глоссарий" />
          <MainSectionCard
            title="Глоссарий"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. "
            radius="1.25rem"
            height="16.25rem"
            paddingTop="2rem"
          />
        </div>
        <div className="card-block progress-card-block">
          <img src={TreesProgress} alt="Прогресс" />
          <MainSectionCard
            title="Прогресс"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt purus id quam ullamcorper sodales. Maecenas ut vehicula mi."
            radius="1.25rem"
            height="18.75rem"
            paddingTop="2rem"
          />
        </div>
      </div>
    </section>
  );
};

export default GuestMainSection;
