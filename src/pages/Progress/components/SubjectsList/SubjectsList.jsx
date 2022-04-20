import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";

const SubjectsList = () => {
  const dispatch = useDispatch();
  const semester = useSelector((state) => state.courses.semester);

  const renderSubjects = (subList) => {
    return subList.map((subject) => (
      <li key={subject.id} className="subject">
        {subject.name}
      </li>
    ));
  };

  const createSubjectLists = (sem) => {
    const midIndex = Math.floor(sem?.length / 2);
    const leftList = sem?.slice(0, midIndex);
    const rightList = sem?.slice(midIndex);
    return { leftList, rightList };
  };

  const { leftList, rightList } = createSubjectLists(semester);

  createSubjectLists(semester);

  return semester ? (
    <div className="progress-subject-list">
      <ul className="left">{renderSubjects(leftList)}</ul>
      <ul className="right">{renderSubjects(rightList)}</ul>
    </div>
  ) : (
    <React.Fragment />
  );
};

export default SubjectsList;
