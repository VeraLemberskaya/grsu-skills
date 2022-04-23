import React, { useEffect, useState } from "react";
import { getAllDisciplines } from "../../../../api/ApiRequests";
import "./index.css";
import { getSemesters } from "../../../../services/coursesService";
import { useDispatch, useSelector } from "react-redux";
import {
  setSemester,
  removeSemester,
  removeSubject,
} from "../../../../redux/coursesSlice";
import Overlay from "../../../../components/Overlay";

const SemesterList = () => {
  const dispatch = useDispatch();
  const openedSemester = useSelector((state) => state.courses.semester);
  const isSemesterChosen = useSelector(
    (state) => state.courses.isSemesterChosen
  );
  const [semesters, setSemesters] = useState(null);

  useEffect(async () => {
    const result = await getAllDisciplines();
    setSemesters(getSemesters(result));
  }, []);

  const handleSemesterClick = (semester) => {
    dispatch(removeSubject());
    if (isSemesterChosen && openedSemester === semester) {
      dispatch(removeSemester());
    } else {
      dispatch(setSemester(semester));
    }
  };

  return (
    <>
      <Overlay
        state={isSemesterChosen}
        clickHadler={() => {
          dispatch(removeSubject());
          dispatch(removeSemester());
        }}
      />
      <ul className="progress-semester-list">
        {semesters?.map((sem, index) => (
          <li
            className={`${
              isSemesterChosen && openedSemester === sem ? "active" : ""
            }`}
            onClick={() => {
              handleSemesterClick(sem);
            }}
            key={JSON.stringify(sem.name)}
          >
            Семестр {index + 1}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SemesterList;
