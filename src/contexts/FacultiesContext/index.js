import { createContext } from "react";

const FacultiesContext = createContext({
  faculties: null,
  isLoaded: false,
  faculty: null,
  setFacultyState: () => {},
});
export const facultiesStateContext = createContext();
export const facultiesFiltersContext = createContext();

export default FacultiesContext;
