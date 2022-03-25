import { createContext } from "react";

const FacultiesContext = createContext({
  faculties: null,
  isLoaded: false,
});

export default FacultiesContext;
