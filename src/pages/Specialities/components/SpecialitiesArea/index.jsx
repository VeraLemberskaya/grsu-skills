import React from "react";
import SortingBar from "../SortingBar";
import SpecialitiesList from "../SpecialitiesList";
import { useState } from "react";
import { useFacultiesState } from "../../../../hooks/useFaculties";
import Loader from "../Loader";

const SpecialitiesArea = () => {
  const { isLoaded, setFacultyState } = useFacultiesState();
  console.log(useFacultiesState());
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInput(value) {
    setSearchValue(value);
    setFacultyState(null);
  }

  return (
    <div className="area">
      {isLoaded ? (
        <>
          <SortingBar
            searchValue={searchValue}
            handleSearch={handleSearchInput}
          />
          <SpecialitiesList searchValue={searchValue} />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SpecialitiesArea;
