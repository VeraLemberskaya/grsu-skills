import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFilterValues } from "../../api/ApiRequests";

export const loadFilterValues = createAsyncThunk(
  "facFilters/loadFilterValues",
  async () => await getFilterValues()
);

// export const FORM_TYPE = {
//   daytime: "дневная",
//   extramural: "заочная",
//   both: "both",
//   extramuralDist: "заочная (дистанционная)",
//   extramuralShort: "заочная(сокращенная)",
// };

// const educationForms = [
//   FORM_TYPE.daytime,
//   FORM_TYPE.extramural,
//   FORM_TYPE.extramuralDist,
//   FORM_TYPE.extramuralShort,
// ];

// const educationTerms = [3.5, 4, 4.5, 5];

export const facFilterSlice = createSlice({
  name: "facFilters",
  initialState: {
    filters: {
      educationForms: null,
      educationTerms: null,
    },
    query: "",
    formFilters: [],
    termFilters: [],
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    removeQuery: (state) => {
      state.query = "";
    },
    addFormFilter: (state, action) => {
      state.formFilters.push(action.payload);
    },
    removeFormFilter: (state, action) => {
      state.formFilters.splice(state.formFilters.indexOf(action.payload), 1);
    },
    addTermFilter: (state, action) => {
      state.termFilters.push(action.payload);
    },
    removeTermFilter: (state, action) => {
      state.termFilters.splice(state.termFilters.indexOf(action.payload), 1);
    },
    resetFilters: (state) => {
      state.formFilters = [];
      state.termFilters = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFilterValues.fulfilled, (state, action) => {
      state.filters.educationForms = action.payload.titles;
      state.filters.educationTerms = action.payload.termsOfStudy;
    });
  },
});

export const {
  setQuery,
  removeQuery,
  addFormFilter,
  removeFormFilter,
  addTermFilter,
  removeTermFilter,
  resetFilters,
} = facFilterSlice.actions;

export default facFilterSlice.reducer;
