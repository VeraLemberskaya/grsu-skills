import React from "react";
import Filter from "../Filter";
import SearchInput from "../SearchInput";
import Picker from "../Picker";

const SortingBar = () => {
  return (
    <>
      <div className="sorting-bar">
        <SearchInput />
        <Picker />
      </div>
      <Filter />
    </>
  );
};

export default SortingBar;
