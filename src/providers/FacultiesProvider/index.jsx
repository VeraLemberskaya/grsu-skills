import React, { useCallback, useContext } from "react";
import { useState, useEffect, useMemo, useReducer, createContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
} from "../../contexts/FacultiesContext";
import { getFaculties } from "../../api/ApiRequests";
import { getFilteredFaculties } from "../../services/facultiesService";

export const FORM_TYPE = {
  daytime: "дневная",
  extramural: "заочная",
  both: "both",
};

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [faculty, setFaculty] = useState(null);
  const [queryFilter, setQueryFilter] = useState("");
  const [educationFormFilter, setEducationFormFilter] = useState(
    FORM_TYPE.both
  );

  const setSearchQuery = useCallback((query) => {
    setQueryFilter(query);
  }, []);

  const setEducationForm = useCallback((formType) => {
    setEducationFormFilter(formType);
  }, []);

  const setFacultyState = useCallback((fac) => {
    setFaculty(fac);
  }, []);

  async function loadFaculties() {
    const result = await getFaculties();
    setFaculties(result);
    setFaculty(result[0]);
    setIsLoaded(true);
  }

  useEffect(() => {
    loadFaculties();
  }, []);

  const facultiesStateValue = useMemo(
    () => ({
      faculties,
      isLoaded,
      faculty,
      setFacultyState,
    }),
    [faculty, isLoaded]
  );

  const facultiesFilterValue = useMemo(
    () => ({
      queryFilter,
      educationFormFilter,
      setSearchQuery,
      setEducationForm,
    }),
    [queryFilter, educationFormFilter]
  );

  const filterFaculties = useCallback(() => {
    return getFilteredFaculties(
      faculties,
      faculty,
      queryFilter,
      educationFormFilter
    );
  }, [faculties, faculty, queryFilter, educationFormFilter]);

  return (
    <FacultiesContext.Provider value={filterFaculties}>
      <facultiesStateContext.Provider value={facultiesStateValue}>
        <facultiesFiltersContext.Provider value={facultiesFilterValue}>
          {children}
        </facultiesFiltersContext.Provider>
      </facultiesStateContext.Provider>
    </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
