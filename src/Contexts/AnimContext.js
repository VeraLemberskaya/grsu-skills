import { createContext } from "react";
import { ANIMATION } from "../constants/animation";

const AnimContext = createContext({
  animation: ANIMATION.slideInDown,
  setAnimation: (anim) => {},
});

export default AnimContext;
