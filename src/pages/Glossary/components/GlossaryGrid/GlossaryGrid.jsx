import React, { useEffect } from "react";
import "./index.css";
import Loader from "../../../../components/Loader";
import { divideCompetenciesOnColumns } from "../../../../services/competenciesService";
import { useSelector, useDispatch } from "react-redux";
import { loadCompetenciesByLetter } from "../../../../redux/compSlice";

const COMP_TYPE = {
  hard: "HARD",
  soft: "SOFT",
};

const GlossaryGrid = () => {
  const dispatch = useDispatch();
  console.log("render Glossary Grid");
  const isLoaded = useSelector((state) => state.competencies.isLoaded);
  const competencies = useSelector((state) => state.competencies.competencies);

  useEffect(() => {
    console.log("here in Grid");
    dispatch(loadCompetenciesByLetter());
  }, []);

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
