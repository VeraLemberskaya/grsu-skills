import React from "react";
import "./index.css";
import Loader from "../../../../components/Loader";
import { divideCompetenciesOnColumns } from "../../../../services/competenciesService";
import { useCompetenciesState } from "../../../../hooks/useCompetencies";

const COMP_TYPE = {
  hard: "HARD",
  soft: "SOFT",
};

const GlossaryGrid = () => {
  console.log("render Glossary Grid");

  const { competencies, isLoaded } = useCompetenciesState();

  const renderedColumns = () => {
    const createColumn = (col) => {
      return (
        <div className="column">
          {col.map((comp) => {
            return (
              <article key={comp.id} className="glossary-card">
                <h4 className="title">{comp.title}</h4>
                <p className="text-info">{comp.description}</p>
                <div
                  className={`skill-type ${
                    comp.type === COMP_TYPE.hard ? "hard" : "soft"
                  }`}
                >
                  {comp.type}
                </div>
              </article>
            );
          })}
        </div>
      );
    };

    return divideCompetenciesOnColumns(competencies).map((col) =>
      createColumn(col)
    );
  };

  return (
    <div className="glossary-grid">
      {isLoaded ? (
        <>
          {competencies.length ? (
            renderedColumns()
          ) : (
            <div className="text-not-found">
              <p>Упс!</p>
              <p> Похоже, по вашему запросу ничего не найдено!</p>
            </div>
          )}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GlossaryGrid;
