import React, { useCallback, useContext } from "react";
import { useState, useEffect, useMemo, useReducer, createContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
  facultiesActionsContext,
  facultiesFiltersActionsContext,
} from "../../contexts/FacultiesContext";
import { getFaculties } from "../../api/ApiRequests";

export const FORM_TYPE = {
  daytime: "дневная",
  extramural: "заочная",
  both: "both",
};

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState(null);
  const [faculty, setFaculty] = useState(null);
  const [queryFilter, setQueryFilter] = useState("");
  const [educationFormFilter, setEducationFormFilter] = useState(
    FORM_TYPE.both
  );

  async function loadFaculties() {
    const result = await getFaculties();
    setFaculties(result);
    setFaculty(result[0]);
  }

  useEffect(() => {
    loadFaculties();
  }, []);

  const facultiesFilterState = useMemo(
    () => ({
      educationFormFilter,
    }),
    [educationFormFilter]
  );

  const facultiesState = useMemo(
    () => ({
      faculty,
      queryFilter,
    }),
    [faculty, queryFilter]
  );

  const facultiesActions = useMemo(
    () => ({
      setFacultyState: setFaculty,
      setSearchQuery: setQueryFilter,
    }),
    []
  );

  const facultiesFilterActions = useMemo(
    () => ({
      setEducationForm: setEducationFormFilter,
    }),
    []
  );

  return (
    <FacultiesContext.Provider value={faculties}>
      <facultiesStateContext.Provider value={facultiesState}>
        <facultiesActionsContext.Provider value={facultiesActions}>
          <facultiesFiltersContext.Provider value={facultiesFilterState}>
            <facultiesFiltersActionsContext.Provider
              value={facultiesFilterActions}
            >
              {children}
            </facultiesFiltersActionsContext.Provider>
          </facultiesFiltersContext.Provider>
        </facultiesActionsContext.Provider>
      </facultiesStateContext.Provider>
    </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
