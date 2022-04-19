import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  course: null,
  semester: null,
  subject: null,
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.course = action.payload;
    },
    setSemester: (state, action) => {
      state.semester = action.payload;
    },
    setSubject: (state, action) => {
      state.subject = action.payload;
    },
    removeCourse: (state) => {
      state.course = null;
    },
    removeSemester: (state) => {
      state.semester = null;
    },
    removeSubject: (state) => {
      state.subject = null;
    },
    clearCourses: () => {
      return initialState;
    },
  },
});

export const {
  setCourse,
  setSemester,
  setSubject,
  removeCourse,
  removeSemester,
  removeSubject,
  clearCourses,
} = coursesSlice.actions;

export default coursesSlice.reducer;
