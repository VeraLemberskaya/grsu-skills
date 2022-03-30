import React, { useState } from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useFacultiesState } from "../../../../hooks/useFaculties";
import { useFacultiesFilters } from "../../../../hooks/useFaculties";
import Modal from "../Modal";

const Picker = () => {
  console.log("render Picker");
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const { faculty, queryFilter } = useFacultiesState();
  return (
    <div className="picker">
      <div className="choose-faculty">
        <p>Выберите факультет</p>
      </div>
      <div className="faculty">
        <img src={ArrowDown} onClick={() => setIsPickerOpen(true)} />
        <p>{faculty ? faculty.name : queryFilter}</p>
      </div>
      <Modal isPickerOpen={isPickerOpen} setIsPickerOpen={setIsPickerOpen} />
    </div>
  );
};

export default Picker;
