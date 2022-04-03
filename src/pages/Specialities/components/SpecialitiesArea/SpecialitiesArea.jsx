import React from "react";
import SpecialitiesList from "../SpecialitiesList";
import { useFaculties } from "../../../../hooks/useFaculties";
import Loader from "../../../../components/Loader/Loader";
import Picker from "../Picker";
import Filter from "../Filter";
import SearchInput from "../SearchInput";
import "./index.css";

const SpecialitiesArea = () => {
  console.log("render SpecArea");
  const faculties = useFaculties();

  return (
    <div className="area">
      {faculties ? (
        <>
          <div className="sorting-bar">
            <SearchInput />
            <Picker />
          </div>
          <Filter />
          <SpecialitiesList />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SpecialitiesArea;
