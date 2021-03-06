import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { createSubjectLists } from "../../../../services/coursesService";
import { setSubject, removeSubject } from "../../../../redux/coursesSlice";
import { CSSTransition } from "react-transition-group";

const SubjectsList = () => {
  const dispatch = useDispatch();
  const isSemesterChosen = useSelector(
    (state) => state.courses.isSemesterChosen
  );
  const semester = useSelector((state) => state.courses.semester);
  const openedSubject = useSelector((state) => state.courses.subject);
  const isSubjectChosen = useSelector((state) => state.courses.isSubjectChosen);
  const prevSem = useRef(semester);

  const handleSubjectClick = (subject) => {
    if (isSubjectChosen && openedSubject === subject) {
      dispatch(removeSubject());
    } else {
      dispatch(setSubject(subject));
    }
  };

  const renderSubjects = (subList) => {
    return subList.map((subject) => (
      <li
        key={subject.id}
        className={`${
          isSubjectChosen && openedSubject === subject ? "active" : ""
        } subject`}
        onClick={() => {
          handleSubjectClick(subject);
        }}
      >
        <span>{subject.name}</span>
      </li>
    ));
  };

  const { leftList, rightList } = createSubjectLists(semester);

  return (
    <CSSTransition
      in={isSemesterChosen}
      timeout={500}
      classNames="sub-list"
      unmountOnExit
    >
      <div className="progress-subject-list">
        <ul className="left">{renderSubjects(leftList)}</ul>
        <ul className="right">{renderSubjects(rightList)}</ul>
      </div>
    </CSSTransition>
  );
};

export default SubjectsList;
