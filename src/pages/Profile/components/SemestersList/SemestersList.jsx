import React from "react";
import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setSemester,
  removeSemester,
  removeSubject,
} from "../../../../redux/coursesSlice";
import SubjectsList from "../SubjectsList/SubjectsList";
import { countSemester } from "../../../../services/coursesService";
import { CSSTransition } from "react-transition-group";
import "./index.css";

const SemestersList = ({ course, indexCourse }) => {
  const dispatch = useDispatch();
  const openedSemester = useSelector((state) => state.courses.semester);
  const isSemesterChosen = useSelector(
    (state) => state.courses.isSemesterChosen
  );

  const handleSemesterClick = (semester) => {
    dispatch(removeSubject());
    if (isSemesterChosen && openedSemester === semester) {
      dispatch(removeSemester());
    } else {
      dispatch(setSemester(semester));
    }
  };

  return (
    <ul className="profile-semester-list">
      {course.map((semester, indexSem) => {
        return (
          <li>
            <div
              className={`${
                isSemesterChosen && openedSemester === semester ? "active" : ""
              } item semester`}
              onClick={() => {
                handleSemesterClick(semester);
              }}
            >{`Семестр ${countSemester(indexCourse, indexSem)}`}</div>
            <CSSTransition
              in={isSemesterChosen && openedSemester === semester}
              timeout={1000}
              classNames="subject-list"
              unmountOnExit
            >
              <SubjectsList semester={semester} />
            </CSSTransition>
          </li>
        );
      })}
    </ul>
  );
};

export default SemestersList;
