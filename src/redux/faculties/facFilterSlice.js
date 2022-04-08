import { createSlice } from "@reduxjs/toolkit";

export const FORM_TYPE = {
  daytime: "дневная",
  extramural: "заочная",
  both: "both",
};

export const facFilterSlice = createSlice({
  name: "facFilters",
  initialState: {
    query: "",
    educationForm: FORM_TYPE.both,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    removeQuery: (state) => {
      state.query = "";
    },
    setEducationForm: (state, action) => {
      state.educationForm = action.payload;
    },
  },
});

export const { setQuery, removeQuery, setEducationForm } =
  facFilterSlice.actions;

export default facFilterSlice.reducer;
