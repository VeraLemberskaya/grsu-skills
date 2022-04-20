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

  useEffect(async () => {
    const result = await getAllDisciplines();
    setCources(result);
  }, []);

  const handleCourseClick = (course) => {
    dispatch(removeSemester());
    dispatch(removeSubject());
    if (openedCourse === course) {
      dispatch(removeCourse());
    } else {
      dispatch(setCourse(course));
    }
  };

  // const renderedCources = cources.map((course, indexCourse) => {
  //   return (
  //     <li>
  //       <div
  //         className={`${openedCourse === course ? "active" : ""} item cource`}
  //         onClick={() => {
  //           handleCourseClick(course);
  //         }}
  //       >{`Курс ${indexCourse + 1}`}</div>
  //       <CSSTransition
  //         in={openedCourse === course}
  //         timeout={500}
  //         classNames="semester-list"
  //         unmountOnExit
  //       >
  //         <SemestersList course={course} indexCourse={indexCourse} />
  //       </CSSTransition>
  //     </li>
  //   );
  // });

  return cources ? (
    <ul className="cource-list">
      {cources.map((course, indexCourse) => {
        return (
          <li>
            <div
              className={`${
                openedCourse === course ? "active" : ""
              } item cource`}
              onClick={() => {
                handleCourseClick(course);
              }}
            >{`Курс ${indexCourse + 1}`}</div>
            <CSSTransition
              in={openedCourse === course}
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
