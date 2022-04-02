import React from "react";
import "./index.css";
import { useFacultiesFiltersActions } from "../../../../hooks/useFaculties";
import { FORM_TYPE } from "../../../../providers/FacultiesProvider";

const Filter = () => {
  console.log("render Filter");
  const { setEducationForm } = useFacultiesFiltersActions();

  return (
    <div className="filter-buttons">
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="both-radio"
          name="form"
          value="both"
          onChange={() => setEducationForm(FORM_TYPE.both)}
          defaultChecked
        />
        <label htmlFor="both-radio">Все формы обучения</label>
      </div>
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="daily"
          name="form"
          value="daily"
          onChange={() => setEducationForm(FORM_TYPE.daytime)}
        />
        <label htmlFor="daily">Дневная</label>
      </div>
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="extramural"
          name="form"
          value="extramural"
          onChange={() => setEducationForm(FORM_TYPE.extramural)}
        />
        <label htmlFor="extramural">Заочная</label>
      </div>
    </div>
  );
};

export default Filter;