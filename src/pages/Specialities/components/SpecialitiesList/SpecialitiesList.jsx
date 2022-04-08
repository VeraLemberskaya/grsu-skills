import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { selectFilteredFaculties } from "../../../../services/facultiesService";
import { useSelector } from "react-redux";

const SpecialitiesList = () => {
  const filteredFaculties = useSelector(selectFilteredFaculties);

  const renderTable = () => {
    return filteredFaculties.map((fac) => {
      return (
        <>
          {fac.name && <div className="faculty-name-row">{fac.name}</div>}
          {renderedSpecialities(fac.specialities)}
        </>
      );
    });
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
                    {form.title.split("(").join(" (")}
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
      {filteredFaculties ? (
        <>
          <div className="table">
            <div className="row table-header">
              <div key="1" className="f-col">
                Код специальности
              </div>
              <div key="2" className="s-col">
                название специальности
              </div>
              <div key="3" className="t-col">
                Форма получения образования
              </div>
              <div key="4" className="four-col">
                Срок обучения (в годах)
              </div>
            </div>
          </div>
          {renderTable()}
        </>
      ) : (
        <p className="text-not-found">По вашему запросу ничего не найдено</p>
      )}
    </div>
  );
};

export default SpecialitiesList;
