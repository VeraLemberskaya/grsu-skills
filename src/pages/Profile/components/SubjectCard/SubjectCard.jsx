import React from "react";
import { useSelector } from "react-redux";
import "./index.css";
import { CSSTransition } from "react-transition-group";

const SubjectCard = () => {
  const subject = useSelector((state) => state.courses.subject);
  const isSubjectChosen = useSelector((state) => state.courses.isSubjectChosen);

  return (
    <CSSTransition
      in={isSubjectChosen}
      timeout={300}
      classNames="profile-subject-card"
      unmountOnExit
      mountOnEnter
    >
      <article className="profile-subject-card">
        <h3>{subject?.name}</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          inventore voluptas labore tenetur, aspernatur maiores consectetur enim
          nostrum impedit culpa repellendus saepe earum praesentium architecto,
          dicta qui! Et molestias facere veniam porro, consectetur sequi
          dignissimos repellat! Possimus assumenda sit illum!
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
          dolorum aut fuga sapiente. Exercitationem inventore dolorum magni,
          maxime repudiandae quia, sint molestiae deleniti voluptatibus,
          possimus earum perspiciatis animi ullam deserunt.
        </p>
      </article>
    </CSSTransition>
  );

  return isSubjectChosen ? (
    <article className="profile-subject-card">
      <h3>{subject?.name}</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
        inventore voluptas labore tenetur, aspernatur maiores consectetur enim
        nostrum impedit culpa repellendus saepe earum praesentium architecto,
        dicta qui! Et molestias facere veniam porro, consectetur sequi
        dignissimos repellat! Possimus assumenda sit illum!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam dolorum
        aut fuga sapiente. Exercitationem inventore dolorum magni, maxime
        repudiandae quia, sint molestiae deleniti voluptatibus, possimus earum
        perspiciatis animi ullam deserunt.
      </p>
    </article>
  ) : (
    <></>
  );
};

export default SubjectCard;
