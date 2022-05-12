import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  company: "Лучшая компания",
  position: "Лучший сотрудник",
  location: "Гродно, Беларусь",
};

const cvSlice = createSlice({
  name: "cv",
  initialState,
  reducers: {
    setCompany: (state, action) => {
      state.company = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    clearCV: () => initialState,
  },
});

export const { setCompany, setPosition, setLocation } = cvSlice.actions;

export default cvSlice.reducer;
