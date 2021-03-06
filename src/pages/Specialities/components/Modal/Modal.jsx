import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFaculty } from "../../../../redux/faculties/facultiesSlice";
import Overlay from "../../../../components/Overlay";
import "./index.css";
import { CSSTransition } from "react-transition-group";

const Modal = ({ isPickerOpen, setIsPickerOpen }) => {
  const { faculties, faculty } = useSelector((state) => state.faculties);
  const dispatch = useDispatch();

  const handlePickerClick = (e) => {
    const id = e.target.dataset.id;
    const chosenFaculty = faculties.find((fac) => fac.id == id);
    setIsPickerOpen(false);
    dispatch(setFaculty(chosenFaculty));
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
      <Overlay
        state={isPickerOpen}
        clickHadler={() => {
          setIsPickerOpen(false);
        }}
      />
      <CSSTransition
        in={isPickerOpen}
        timeout={300}
        classNames="faculty-modal"
        mountOnEnter
        unmountOnExit
      >
        <div className="faculty-modal">
          <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
        </div>
      </CSSTransition>
      {/* <div className={`faculty-modal ${isPickerOpen ? "opened" : ""}`}>
        <ul onClick={handlePickerClick}>{renderedModalFaculties}</ul>
      </div> */}
    </>
  );
};

export default Modal;
