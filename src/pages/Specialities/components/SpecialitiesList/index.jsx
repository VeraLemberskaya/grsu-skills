import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import useFaculties from "../../../../hooks/useFaculties";
import { findSpecialitiesByQuery } from "../../../../services/facultiesService";
import { useFacultiesState } from "../../../../hooks/useFaculties";

const SpecialitiesList = ({ searchValue }) => {
  const { faculty, faculties } = useFacultiesState();

  const renderTable = () => {
    if (faculty) {
      return renderedSpecialities(faculty.specialities);
    } else {
      const foundSpecialities = findSpecialitiesByQuery(faculties, searchValue);
      if (foundSpecialities) {
        return foundSpecialities.map((fac) => {
          return (
            <>
              <div className="faculty-name-row">{fac.name}</div>
              {renderedSpecialities(fac.specialities)}
            </>
          );
        });
      }
    }
  };

  const renderedSpecialities = (specialities) =>
    specialities.map((spec) => {
      return (
        <li key={spec.id} className="row speciality">
          <div className="f-col">{spec.specialityCode}</div>
          <Link to={`/specialities/${spec.name}`}>
            <div className="s-col">{spec.name}</div>
          </Link>
          <div className="spec-form">
            {spec.educationForms.map((form) => {
              return (
                <div className="form-row">
                  <div className="t-col">
                    {form.title.split("(").map((str) => `${str} `)}
                  </div>
                  <div className="four-col">{form.termOfStudy}</div>
                </div>
              );
            })}
          </div>
        </li>
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
      {renderTable()}
    </div>
  );
};

export default SpecialitiesList;
