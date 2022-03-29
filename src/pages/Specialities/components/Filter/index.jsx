import React from "react";
import { useFacultiesFilters } from "../../../../hooks/useFaculties";
import { FORM_TYPE } from "../../../../providers/FacultiesProvider";

const Filter = () => {
  const { setEducationForm } = useFacultiesFilters();
  return (
    <div className="filter-buttons">
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
    </div>
  );
};

export default Filter;
