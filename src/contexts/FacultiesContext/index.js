import { createContext } from "react";

const FacultiesContext = createContext({
  faculties: null,
  isLoaded: false,
  faculty: null,
  setFacultyState: () => {},
});

export default FacultiesContext;
