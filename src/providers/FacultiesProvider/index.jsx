import React from "react";
import { useState, useEffect, useMemo } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";
import { getFaculties } from "../../api/ApiRequests";

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function loadFaculties() {
    const result = await getFaculties();
    setFaculties(result);
    setIsLoaded(true);
  }

  useEffect(() => {
    loadFaculties();
  }, []);

  const facultiesValue = useMemo(
    () => ({
      faculties,
      isLoaded,
    }),
    [isLoaded]
  );

  return (
    <FacultiesContext.Provider value={facultiesValue}>
      {children}
    </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
