import { createSlice } from "@reduxjs/toolkit";

export const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    course: null,
    semester: null,
    subject: null,
  },
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
  },
});

export const {
  setCourse,
  setSemester,
  setSubject,
  removeCourse,
  removeSemester,
  removeSubject,
} = coursesSlice.actions;

export default coursesSlice.reducer;
