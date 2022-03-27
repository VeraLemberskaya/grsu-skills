import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import useFaculties from "../../../../hooks/useFaculties";

const SpecialitiesList = () => {
  const { faculty } = useFaculties();
  const specialities = faculty.specialities;

  const renderedSpecialities = specialities.map((spec) => {
    return (
      <Link to={`/specialities/${spec.name}`}>
        <li key={spec.id} className="row speciality">
          <div className="f-col">{spec.specialityCode}</div>
          <div className="s-col">{spec.name}</div>
          <div className="spec-form">
            {spec.educationForms.map((form) => {
              return (
                <div className="form-row">
                  <div className="t-col">{form.title}</div>
                  <div className="four-col">{form.termOfStudy}</div>
                </div>
              );
            })}
          </div>
        </li>
      </Link>
    );
  });

  return (
    <div className="specialities-list">
      <div className="table">
        <div className="row table-header">
          <div className="f-col">Код специальности</div>
          <div className="s-col">название специальности</div>
          <div className="t-col">Форма получения образования</div>
          <div className="four-col">Срок обучения (в годах)</div>
        </div>
      </div>
      {renderedSpecialities}
    </div>
  );
};

export default SpecialitiesList;
