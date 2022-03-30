import { createContext } from "react";

const FacultiesContext = createContext(null);
export const facultiesStateContext = createContext();
export const facultiesFiltersContext = createContext();
export const facultiesActionsContext = createContext();
export const facultiesFiltersActionsContext = createContext();

export default FacultiesContext;
