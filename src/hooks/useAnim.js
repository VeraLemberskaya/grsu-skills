import { useContext } from "react";
import AnimContext from "../Contexts/AnimContext";

export const useAnim = () => useContext(AnimContext);
