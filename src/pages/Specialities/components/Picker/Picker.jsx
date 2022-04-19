import React, { useState } from "react";
import ArrowDown from "../../../../assets/icons/ArrowDown.svg";
import { useSelector } from "react-redux";
import Modal from "../Modal";
import "./index.css";

const Picker = () => {
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const faculty = useSelector((state) => state.faculties.faculty);
  const queryFilter = useSelector((state) => state.facFilters.query);

  return (
    <div className="picker">
      <div className="choose-faculty">
        <p>Выберите факультет</p>
      </div>
      <div className="faculty">
        <div className="img-box" onClick={() => setIsPickerOpen(true)}>
          <img src={ArrowDown} />
        </div>
        <p>{faculty ? faculty.name : queryFilter}</p>
      </div>
      <Modal isPickerOpen={isPickerOpen} setIsPickerOpen={setIsPickerOpen} />
    </div>
  );
};

export default Picker;
