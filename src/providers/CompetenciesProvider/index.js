import React, { useState, useEffect, useMemo } from "react";
import {
  CompetenciesStateContext,
  CompetenciesFiltersContext,
  CompetenciesFiltersActionsContext,
} from "../../contexts/CompetenciesContext";
import {
  getCompetenciesByLetter,
  getCompetenciesByQuery,
} from "../../api/ApiRequests";

const CompetenciesProvider = ({ children }) => {
  const [letter, setLetter] = useState("а");
  const [query, setQuery] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [competencies, setCompetencies] = useState(null);

  const loadCompetencies = async () => {
    setIsLoaded(false);
    let data;
    if (!query && letter) {
      data = await getCompetenciesByLetter(letter);
    } else {
      data = await getCompetenciesByQuery(query);
    }

    setCompetencies(data);
    setIsLoaded(true);
  };

  useEffect(() => {
    loadCompetencies();
  }, [letter]);

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
    [letter]
  );

  const competenciesFiltersActions = useMemo(
    () => ({
      setLetterState: (letter) => {
        setQuery(null);
        setLetter(letter);
      },
      setQueryState: (query) => {
        setQuery(query);
        setLetter("");
      },
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
