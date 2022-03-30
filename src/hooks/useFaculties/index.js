import { useContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
  facultiesActionsContext,
  facultiesFiltersActionsContext,
} from "../../contexts/FacultiesContext";
import { filterFaculties } from "../../services/facultiesService";

export const useFaculties = () => useContext(FacultiesContext);

export const useFacultiesState = () => useContext(facultiesStateContext);
export const useFacultiesFilters = () => useContext(facultiesFiltersContext);
export const useFacultiesActions = () => useContext(facultiesActionsContext);
export const useFacultiesFiltersActions = () =>
  useContext(facultiesFiltersActionsContext);

export const useFilterFaculties = () => {
  const faculties = useFaculties();
  const { faculty, queryFilter } = useFacultiesState();
  const { educationFormFilter } = useFacultiesFilters();
  return filterFaculties(faculties, faculty, queryFilter, educationFormFilter);
};
