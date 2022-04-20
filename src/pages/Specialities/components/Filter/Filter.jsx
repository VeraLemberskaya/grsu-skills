import React, { useState, useEffect } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Overlay from "../../../../components/Overlay";
import FiltersDark from "../../../../assets/icons/FiltersDark.svg";
import Cross from "../../../../assets/icons/Cross.svg";
import {
  addFormFilter,
  removeFormFilter,
  addTermFilter,
  removeTermFilter,
  resetFilters,
} from "../../../../redux/faculties/facFilterSlice";

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { educationForms, educationTerms } = useSelector(
    (state) => state.facFilters.filters
  );
  const formFilters = useSelector((state) => state.facFilters.formFilters);
  const termFilters = useSelector((state) => state.facFilters.termFilters);
  const dispatch = useDispatch();

  return (
    <div className="filters">
      <Overlay
        state={isFilterOpen}
        clickHadler={() => {
          setIsFilterOpen(false);
        }}
      />
      <button
        className={`${
          formFilters.length || termFilters.length ? "opened" : "closed"
        } filter-btn`}
        onClick={() => setIsFilterOpen(true)}
      ></button>
      <div className={`filter-modal ${isFilterOpen ? "visible" : ""}`}>
        <div className="filter-header">
          <p>фильтры</p>
          <img
            src={FiltersDark}
            onClick={() => setIsFilterOpen(false)}
            className="filter-icon"
          />
        </div>
        <div className="filter-table">
          <div className="row headers"></div>
          <div className="table-education-form">
            <div className="table-header">Форма получения образования</div>
            <ul>
              {educationForms.map((form) => {
                return (
                  <li
                    onClick={() => {
                      formFilters.includes(form)
                        ? dispatch(removeFormFilter(form))
                        : dispatch(addFormFilter(form));
                    }}
                    className={`${
                      formFilters.includes(form) ? "active" : ""
                    } table-item`}
                  >
                    {form.split("(").join(" (")}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="table-form-term">
            <div className="table-header">Срок обучения (в годах)</div>
            <ul>
              {educationTerms.map((term) => (
                <li
                  onClick={() => {
                    termFilters.includes(term)
                      ? dispatch(removeTermFilter(term))
                      : dispatch(addTermFilter(term));
                  }}
                  className={`${
                    termFilters.includes(term) ? "active" : ""
                  } table-item`}
                >
                  {term}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          className="clear-btn"
          onClick={() => {
            dispatch(resetFilters());
          }}
        >
          Очистить
          <img src={Cross} />
        </button>
      </div>
    </div>
  );
};

export default Filter;
