import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { setSubject, removeSubject } from "../../../../redux/coursesSlice";

const SubjectsList = ({ semester }) => {
  const dispatch = useDispatch();
  const openedSubject = useSelector((state) => state.courses.subject);
  const isSubjectChosen = useSelector((state) => state.courses.isSubjectChosen);

  const handleSubjectClick = (subject) => {
    if (isSubjectChosen && openedSubject === subject) {
      dispatch(removeSubject());
    } else {
      dispatch(setSubject(subject));
    }
  };

  return (
    <ul className="profile-subject-list">
      {semester.map((subject) => {
        return (
          <li
            onClick={() => handleSubjectClick(subject)}
            key={subject.id}
            className={`${
              isSubjectChosen && openedSubject === subject ? "active" : ""
            } item subject`}
          >
            {subject.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SubjectsList;
