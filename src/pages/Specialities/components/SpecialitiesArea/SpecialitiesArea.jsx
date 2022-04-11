import React, { useEffect } from "react";
import SpecialitiesList from "../SpecialitiesList";
import Loader from "../../../../components/Loader/Loader";
import Picker from "../Picker";
import Filter from "../Filter";
import SearchInput from "../SearchInput";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { loadFaculties } from "../../../../redux/faculties/facultiesSlice";
import { loadFilterValues } from "../../../../redux/faculties/facFilterSlice";

const SpecialitiesArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFaculties());
    dispatch(loadFilterValues());
  }, []);

  const faculties = useSelector((state) => state.faculties.faculties);
  const filters = useSelector((state) => state.facFilters.filters);

  return (
    <div className="area">
      {faculties && filters.educationForms && filters.educationTerms ? (
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
