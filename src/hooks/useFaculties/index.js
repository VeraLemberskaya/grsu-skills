import { useContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";

const useFaculties = () => {
  return useContext(FacultiesContext);
};

export default useFaculties;
