import React, { useEffect, useState } from "react";
import SortingBar from "../SortingBar";
import SpecialitiesList from "../SpecialitiesList";
import { useFaculties } from "../../../../hooks/useFaculties";
import Loader from "../Loader";

const SpecialitiesArea = () => {
  console.log("render SpecArea");
  const faculties = useFaculties();

  return (
    <div className="area">
      {faculties ? (
        <>
          <SortingBar />
          <SpecialitiesList />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SpecialitiesArea;
