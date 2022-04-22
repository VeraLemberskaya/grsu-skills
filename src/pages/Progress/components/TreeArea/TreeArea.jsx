import React from "react";
import "./index.css";
import tree from "../../../../assets/images/TREE_SMALL.png";
import SubjectsList from "../SubjectsList";
import SemesterList from "../SemesterList";

const TreeArea = () => {
  return (
    <div className="tree-area">
      <SemesterList />
      <div className="tree-box">
        <SubjectsList />
        <img src={tree} alt="Progress Tree" />
      </div>
    </div>
  );
};

export default TreeArea;
