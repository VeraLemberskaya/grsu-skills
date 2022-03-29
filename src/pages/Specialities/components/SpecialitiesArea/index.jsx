import React from "react";
import SortingBar from "../SortingBar";
import SpecialitiesList from "../SpecialitiesList";
import { useState } from "react";
import { useFacultiesState } from "../../../../hooks/useFaculties";
import Loader from "../Loader";
import Filter from "../Filter";

const SpecialitiesArea = ({ children }) => {
  const { isLoaded } = useFacultiesState();

  return (
    <div className="area">
      {isLoaded ? (
        <>
          {/* <SortingBar />
          <Filter />
          <SpecialitiesList /> */}
          {children}
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SpecialitiesArea;
