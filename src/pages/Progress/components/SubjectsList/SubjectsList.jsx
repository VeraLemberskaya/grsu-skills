import React, { useState } from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { createSubjectLists } from "../../../../services/coursesService";
import { setSubject, removeSubject } from "../../../../redux/coursesSlice";

const SubjectsList = () => {
  const dispatch = useDispatch();
  const isSemesterChosen = useSelector(
    (state) => state.courses.isSemesterChosen
  );
  const semester = useSelector((state) => state.courses.semester);
  const openedSubject = useSelector((state) => state.courses.subject);
  const isSubjectChosen = useSelector((state) => state.courses.isSubjectChosen);

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
        {subject.name}
      </li>
    ));
  };

  const { leftList, rightList } = createSubjectLists(semester);

  return isSemesterChosen ? (
    <div className="progress-subject-list">
      <ul className="left">{renderSubjects(leftList)}</ul>
      <ul className="right">{renderSubjects(rightList)}</ul>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default SubjectsList;
