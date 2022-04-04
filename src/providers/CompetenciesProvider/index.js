import React, { useState, useEffect, useMemo } from "react";
import {
  CompetenciesStateContext,
  CompetenciesFiltersContext,
  CompetenciesFiltersActionsContext,
} from "../../contexts/CompetenciesContext";
import { getCompetenciesByLetter } from "../../api/ApiRequests";

const CompetenciesProvider = ({ children }) => {
  const [letter, setLetter] = useState("а");
  const [query, setQuery] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);
  const [competencies, setCompetencies] = useState(null);

  const loadCompetencies = async () => {
    setIsLoaded(false);
    const data = await getCompetenciesByLetter(letter);
    setCompetencies(data);
    setIsLoaded(true);
  };

  useEffect(() => {
    loadCompetencies();
  }, [letter, query]);

  const competenciesState = useMemo(
    () => ({
      competencies,
      isLoaded,
    }),
    [isLoaded]
  );

  const competenciesFiltersState = useMemo(
    () => ({
      letter,
      query,
    }),
    [letter, query]
  );

  const competenciesFiltersActions = useMemo(
    () => ({
      setLetter,
      setQuery,
    }),
    []
  );

  return (
    <CompetenciesStateContext.Provider value={competenciesState}>
      <CompetenciesFiltersContext.Provider value={competenciesFiltersState}>
        <CompetenciesFiltersActionsContext.Provider
          value={competenciesFiltersActions}
        >
          {children}
        </CompetenciesFiltersActionsContext.Provider>
      </CompetenciesFiltersContext.Provider>
    </CompetenciesStateContext.Provider>
  );
};

export default CompetenciesProvider;
