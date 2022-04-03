import React from "react";
import "./index.css";
import { useFacultiesFiltersActions } from "../../../../hooks/useFaculties";
import { FORM_TYPE } from "../../../../providers/FacultiesProvider";

const Filter = () => {
  console.log("render Filter");
  const { setEducationForm } = useFacultiesFiltersActions();

  const handleFilterChange = (e) => {
    setEducationForm(e.target.value);
  };

  return (
    <div className="filter-buttons">
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="both-radio"
          name="filter"
          value={FORM_TYPE.both}
          onChange={handleFilterChange}
          defaultChecked
        />
        <label htmlFor="both-radio">Все формы обучения</label>
      </div>
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="daily"
          name="filter"
          value={FORM_TYPE.daytime}
          onChange={handleFilterChange}
        />
        <label htmlFor="daily">Дневная</label>
      </div>
      <div className="radio">
        <input
          type="radio"
          className="filter-radio"
          id="extramural"
          name="filter"
          value={FORM_TYPE.extramural}
          onChange={handleFilterChange}
        />
        <label htmlFor="extramural">Заочная</label>
      </div>
    </div>
  );
};

export default Filter;
