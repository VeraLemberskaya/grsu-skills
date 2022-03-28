import { useContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
} from "../../contexts/FacultiesContext";

// const useFaculties = () => {
//   return useContext(FacultiesContext);
// };

export const useFacultiesState = () => {
  return useContext(facultiesStateContext);
};
export const useFacultiesFilters = () => useContext(facultiesFiltersContext);

//export default useFaculties;
