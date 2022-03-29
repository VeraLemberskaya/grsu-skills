import React from "react";
import { useFacultiesState } from "../../../../hooks/useFaculties";

const Modal = ({ isPickerOpen, setIsPickerOpen }) => {
  const {
    faculty,
    faculties,
    setFacultyState: setFaculty,
  } = useFacultiesState();

  const handlePickerClick = (e) => {
    const id = e.target.dataset.id;
    const chosenFaculty = faculties.find((fac) => fac.id == id);
    setIsPickerOpen(false);
    setFaculty(chosenFaculty);
  };

  const renderedModalFaculties = faculties.map((fac) => {
    if (faculty) {
      if (fac.id === faculty.id)
        return (
          <li className="active" data-id={fac.id} key={fac.id}>
            {fac.name}
          </li>
        );
    }
    return (
      <li key={fac.id} data-id={fac.id}>
        {fac.name}
      </li>
    );
  });

  return (
    <div className={`faculty-modal ${isPickerOpen ? "opened" : ""}`}>
      <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
    </div>
  );
};

export default Modal;
