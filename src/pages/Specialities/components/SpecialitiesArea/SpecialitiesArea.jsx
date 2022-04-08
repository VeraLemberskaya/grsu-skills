import React, { useEffect } from "react";
import SpecialitiesList from "../SpecialitiesList";
// import { useFaculties } from "../../../../hooks/useFaculties";
import Loader from "../../../../components/Loader/Loader";
import Picker from "../Picker";
import Filter from "../Filter";
import SearchInput from "../SearchInput";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import { loadFaculties } from "../../../../redux/faculties/facultiesSlice";

const SpecialitiesArea = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFaculties());
  }, []);

  const faculties = useSelector((state) => state.faculties.faculties);

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
