import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFaculties } from "../../api/ApiRequests";

export const loadFaculties = createAsyncThunk(
  "faculties/loadFaculties",
  async () => {
    return await getFaculties();
  }
);

const initialState = {
  faculties: null,
  faculty: null,
};

export const facultiesSlice = createSlice({
  name: "faculties",
  initialState,
  reducers: {
    setFaculty: (state, action) => {
      state.faculty = action.payload;
    },
    removeFaculty: (state) => {
      state.faculty = null;
    },
    clearFaculties: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadFaculties.fulfilled, (state, action) => {
      state.faculties = action.payload;
      state.faculty = action.payload[0];
    });
  },
});

export const { setFaculty, removeFaculty, clearFaculties } =
  facultiesSlice.actions;

export default facultiesSlice.reducer;
