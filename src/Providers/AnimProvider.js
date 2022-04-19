import React, { useState } from "react";
import AnimContext from "../Contexts/AnimContext";
import { ANIMATION } from "../constants/animation";

const AnimProvider = ({ children }) => {
  const [animation, setAnimation] = useState(ANIMATION.slideInDown);
  return (
    <AnimContext.Provider value={{ animation, setAnimation }}>
      {children}
    </AnimContext.Provider>
  );
};

export default AnimProvider;
