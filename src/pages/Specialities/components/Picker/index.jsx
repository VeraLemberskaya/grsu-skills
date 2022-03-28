import React from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useFacultiesState } from "../../../../hooks/useFaculties";
import { useFacultiesFilters } from "../../../../hooks/useFaculties";

const Picker = ({ setIsPickerOpen }) => {
  const { faculty } = useFacultiesState();
  const { queryFilter } = useFacultiesFilters();
  return (
    <div className="picker">
      <div className="choose-faculty">
        <p>Выберите факультет</p>
      </div>
      <div className="faculty">
        <img src={ArrowDown} onClick={() => setIsPickerOpen(true)} />
        <p>{faculty ? faculty.name : queryFilter}</p>
      </div>
    </div>
  );
};

export default Picker;
