import { useContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
} from "../../contexts/FacultiesContext";

export const useFilteredFaculties = () => useContext(FacultiesContext);

export const useFacultiesState = () => useContext(facultiesStateContext);
export const useFacultiesFilters = () => useContext(facultiesFiltersContext);
