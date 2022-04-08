import React, { useState } from "react";
import "./index.css";
import { FORM_TYPE } from "../../../../redux/faculties/facFilterSlice";
import { useDispatch } from "react-redux";
import { setEducationForm } from "../../../../redux/faculties/facFilterSlice";
import Overlay from "../Overlay";
import FiltersDark from "../../../../assets/icons/FiltersDark.svg";
import FiltersLight from "../../../../assets/icons/FiltersLight.svg";
import Cross from "../../../../assets/icons/Cross.svg";

const educationForms = [
  FORM_TYPE.daytime,
  FORM_TYPE.extramural,
  FORM_TYPE.extramuralDist,
  FORM_TYPE.extramuralShort,
];

const educationTerms = [3.5, 4, 4.5, 5];

const Filter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="filters">
      <Overlay state={isFilterOpen} setState={setIsFilterOpen} />
      <button
        className={`filter-btn closed`}
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
              {educationForms.map((form) => (
                <li className="table-item">
                  <p>{form}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="table-form-term">
            <div className="table-header">Срок обучения (в годах)</div>
            <ul>
              {educationTerms.map((term) => (
                <li className="table-item">
                  <p>{term}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button className="clear-btn">
          Очистить
          <img src={Cross} />
        </button>
      </div>
    </div>
  );
};

// const Filter = () => {
//   const dispatch = useDispatch();

//   const handleFilterChange = (e) => {
//     dispatch(setEducationForm(e.target.value));
//   };

//   return (
//     <div className="filter-buttons">
//       <div className="radio">
//         <input
//           type="radio"
//           className="filter-radio"
//           id="both-radio"
//           name="filter"
//           value={FORM_TYPE.both}
//           onChange={handleFilterChange}
//           defaultChecked
//         />
//         <label htmlFor="both-radio">Все формы обучения</label>
//       </div>
//       <div className="radio">
//         <input
//           type="radio"
//           className="filter-radio"
//           id="daily"
//           name="filter"
//           value={FORM_TYPE.daytime}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="daily">Дневная</label>
//       </div>
//       <div className="radio">
//         <input
//           type="radio"
//           className="filter-radio"
//           id="extramural"
//           name="filter"
//           value={FORM_TYPE.extramural}
//           onChange={handleFilterChange}
//         />
//         <label htmlFor="extramural">Заочная</label>
//       </div>
//     </div>
//   );
// };

export default Filter;
