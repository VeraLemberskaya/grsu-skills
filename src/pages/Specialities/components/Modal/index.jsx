import React from "react";
import {
  useFaculties,
  useFacultiesState,
  useFacultiesActions,
} from "../../../../hooks/useFaculties";
import Overlay from "../Overlay";

const Modal = ({ isPickerOpen, setIsPickerOpen }) => {
  console.log("render modal");
  const faculties = useFaculties();
  const { faculty } = useFacultiesState();
  const { setFacultyState: setFaculty } = useFacultiesActions();

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
    <>
      <Overlay state={isPickerOpen} setState={setIsPickerOpen} />
      <div className={`faculty-modal ${isPickerOpen ? "opened" : ""}`}>
        <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
      </div>
    </>
  );
};

export default Modal;
