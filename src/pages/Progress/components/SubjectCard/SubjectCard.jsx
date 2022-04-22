import React from "react";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";

const SubjectCard = () => {
  const subject = useSelector((state) => state.courses.subject);
  const isSubjectChosen = useSelector((state) => state.courses.isSubjectChosen);

  return (
    <CSSTransition
      in={isSubjectChosen}
      timeout={300}
      classNames="card"
      unmountOnExit
      mountOnEnter
    >
      <div className="progress-subject-card">
        <h3 className="subject-card-title">{subject.name}</h3>
        <p className="subject-card-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde quo
          dolore sint vel exercitationem rem fugiat aspernatur ipsa, molestiae
          itaque ab quia consectetur cumque? Perspiciatis sint quis harum
          aliquid nesciunt, quos provident placeat, mollitia consequuntur minima
          totam earum necessitatibus animi?
        </p>
      </div>
    </CSSTransition>
  );
};

export default SubjectCard;
