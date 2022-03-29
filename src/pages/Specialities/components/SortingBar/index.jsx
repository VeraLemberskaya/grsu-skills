import React from "react";
import { useState } from "react";
import SearchInput from "../SearchInput";
import Picker from "../Picker";
import Modal from "../Modal";

const SortingBar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => {
          setIsSearchOpen(false);
          setIsPickerOpen(false);
        }}
        className={`overlay ${isSearchOpen || isPickerOpen ? "visible" : ""}`}
      ></div>
      <div className="sorting-bar">
        <SearchInput
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        <Picker setIsPickerOpen={setIsPickerOpen} />
      </div>
      <Modal isPickerOpen={isPickerOpen} setIsPickerOpen={setIsPickerOpen} />
    </>
  );
};

export default SortingBar;
