import React from "react";
import { useState, useEffect, useMemo } from "react";
import FacultiesContext from "../../contexts/FacultiesContext";

const FacultiesProvider = ({ children }) => {
  const [faculties, setFaculties] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  async function loadFaculties() {
    setIsLoaded(true);
    //put it into api requests
    try {
      return await fetch("https://localhost:7042/api/Faculties/faculties")
        .then((response) => response.json())
        .then((result) => setFaculties(result));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    loadFaculties();
    console.log(faculties);
  }, []);

  const facultiesValue = useMemo(
    () => ({
      faculties,
      isLoaded,
    }),
    [faculties, isLoaded]
  );

  return (
    <FacultiesContext.Provider value={facultiesValue}>
      {children}
    </FacultiesContext.Provider>
  );
};

export default FacultiesProvider;
