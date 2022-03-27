import React, { useRef } from "react";
import SortingBar from "../SortingBar";
import SpecialitiesList from "../SpecialitiesList";
import { useState, useEffect } from "react";
import useFaculties from "../../../../hooks/useFaculties";

const SpecialitiesArea = () => {
  const { isLoaded } = useFaculties();

  return (
    <div className="area">
      {isLoaded ? (
        <>
          <SortingBar />
          <SpecialitiesList />
        </>
      ) : (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default SpecialitiesArea;
