import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "./index.css";

const SingleSpeciality = () => {
  const [inProp, setInProp] = useState(false);
  const { title } = useParams();

  return (
    <div>
      <button onClick={() => setInProp((prev) => !prev)}>Click</button>
      <CSSTransition
        in={inProp}
        classNames="example"
        timeout={300}
        unmountOnExit
      >
        <div className="ball"></div>
      </CSSTransition>
    </div>
  );
};

export default SingleSpeciality;
