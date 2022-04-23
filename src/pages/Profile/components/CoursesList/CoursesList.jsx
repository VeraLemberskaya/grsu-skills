import React, { useEffect, useState } from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import {
  setCourse,
  removeCourse,
  removeSemester,
  removeSubject,
} from "../../../../redux/coursesSlice";
import SemestersList from "../SemestersList/SemestersList";
import { getAllDisciplines } from "../../../../api/ApiRequests";

const UserCources = () => {
  const [cources, setCources] = useState(null);
  const dispatch = useDispatch();
  const openedCourse = useSelector((state) => state.courses.course);
  const isCourseChosen = useSelector((state) => state.courses.isCourseChosen);

  useEffect(async () => {
    const result = await getAllDisciplines();
    setCources(result);
  }, []);

  const handleCourseClick = (course) => {
    dispatch(removeSemester());
    dispatch(removeSubject());
    if (isCourseChosen && openedCourse === course) {
      dispatch(removeCourse());
    } else {
      dispatch(setCourse(course));
    }
  };

  return cources ? (
    <ul className="profile-cource-list">
      {cources.map((course, indexCourse) => {
        return (
          <li>
            <div
              className={`${
                isCourseChosen && openedCourse === course ? "active" : ""
              } item cource`}
              onClick={() => {
                handleCourseClick(course);
              }}
            >{`Курс ${indexCourse + 1}`}</div>
            <CSSTransition
              in={isCourseChosen && openedCourse === course}
              timeout={500}
              classNames="semester-list"
              unmountOnExit
            >
              <SemestersList course={course} indexCourse={indexCourse} />
            </CSSTransition>
          </li>
        );
      })}
    </ul>
  ) : (
    <React.Fragment />
  );
};

export default UserCources;
