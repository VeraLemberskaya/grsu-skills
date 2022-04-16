import React, { useEffect } from "react";
import SearchBar from "../SearchBar";
import PaginationBar from "../PaginationBar";
import GlossaryGrid from "../GlossaryGrid";
import "./index.css";
import Loader from "../../../../components/Loader";
import { loadLetters } from "../../../../redux/compSlice";
import { useDispatch, useSelector } from "react-redux";

const GlossaryArea = () => {
  const letters = useSelector((state) => state.competencies.letters);
  const dispatch = useDispatch();

  useEffect(async () => {
    console.log(letters);
    console.log("here in area");
    if (!letters) dispatch(loadLetters());
  }, []);

  useEffect(() => {
    console.log(letters);
  });

  return (
    <div className="glossary-area">
      {letters ? (
        <>
          <SearchBar />
          <PaginationBar letters={letters} />
          <GlossaryGrid />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default GlossaryArea;
