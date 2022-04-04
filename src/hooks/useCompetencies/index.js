import { useContext } from "react";
import CompetenciesContext, {
  CompetenciesStateContext,
  CompetenciesActionsContext,
  CompetenciesFiltersContext,
  CompetenciesFiltersActionsContext,
} from "../../contexts/CompetenciesContext";

export const useCompetenciesState = () => useContext(CompetenciesStateContext);
export const useCompetenciesActions = () =>
  useContext(CompetenciesActionsContext);
export const useCompetenciesFilters = () =>
  useContext(CompetenciesFiltersContext);
export const useCompetenciesFiltersActions = () =>
  useContext(CompetenciesFiltersActionsContext);

export const useCompetencies = () => useContext(CompetenciesContext);
