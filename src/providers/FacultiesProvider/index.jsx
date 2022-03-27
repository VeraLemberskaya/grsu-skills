import React, { useCallback } from "react";
import { useState, useEffect, useMemo } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import { getFaculties } from "../../api/ApiRequests";

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [faculty, setFaculty] = useState(null);

  const setFacultyState = useCallback(
    (fac) => {
      setFaculty(fac);
    },
    [faculty]
  );

  async function loadFaculties() {
    const result = await getFaculties();
    setFaculties(result);
    setFaculty(result[0]);
    setIsLoaded(true);
  }

  useEffect(() => {
    loadFaculties();
  }, []);

  const facultiesValue = useMemo(
    () => ({
      faculties,
      isLoaded,
      faculty,
      setFacultyState,
    }),
    [faculty, isLoaded]
  );

  return (
    <FacultiesContext.Provider value={facultiesValue}>
      {children}
    </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
