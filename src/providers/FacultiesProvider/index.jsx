import React, { useCallback, useContext } from "react";
import { useState, useEffect, useMemo, useReducer, createContext } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import {
  facultiesStateContext,
  facultiesFiltersContext,
} from "../../contexts/FacultiesContext";
import { getFaculties } from "../../api/ApiRequests";

// const ACTION_TYPES = {
//   setFaculty : "SET_FACULTY",
//   setFaculties : "SET_FACULTIES",
//   setLoading:"SET_LOADING",
// }

// function facultiesReducer(state, action) {
//   switch (action.type) {
//     case "SET_FACULTY":
//       return {
//         ...state,
//         faculty: action.payload,
//       };
//     case "SET_FACULTIES":
//       return {
//         ...state,
//         faculties: action.payload,
//       };
//     case "SET_LOADING":
//       return {
//         ...state,
//         isLoaded: action.payload,
//       };
//   }
// }

const FORM_TYPE = {
  daytime: "daytime",
  extramural: " extramural",
};

// const facultiesStateContext = createContext();
// const facultiesFiltersContext = createContext();

// export const useFacultiesState = () => useContext(facultiesStateContext);
// export const useFacultiesFilters = () => useContext(facultiesFiltersContext);

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [faculty, setFaculty] = useState(null);
  const [queryFilter, setQueryFilter] = useState("");
  const [educationFormFilter, setEducationFormFilter] = useState({
    daytime: false,
    extramural: false,
  });

  const setSearchQuery = useCallback((query) => {
    setQueryFilter(query);
  }, []);

  const setEducationForm = useCallback((formType) => {
    setEducationFormFilter({
      ...educationFormFilter,
      formType,
    });
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

  return (
    <facultiesStateContext.Provider value={facultiesStateValue}>
      <facultiesFiltersContext.Provider value={facultiesFilterValue}>
        {children}
      </facultiesFiltersContext.Provider>
    </facultiesStateContext.Provider>
    // <FacultiesContext.Provider value={facultiesStateValue}>
    //
    // </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
