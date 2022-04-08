import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaculties } from "../../api/ApiRequests";

export const loadFaculties = createAsyncThunk(
  "faculties/loadFaculties",
  async () => {
    return await getFaculties();
  }
);

export const facultiesSlice = createSlice({
  name: "faculties",
  initialState: {
    faculties: null,
    faculty: null,
  },
  reducers: {
    setFaculty: (state, action) => {
      state.faculty = action.payload;
    },
    removeFaculty: (state) => {
      state.faculty = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload;
      state.faculty = action.payload[0];
    });
  },
});

export const { setFaculty, removeFaculty } = facultiesSlice.actions;

export default facultiesSlice.reducer;
