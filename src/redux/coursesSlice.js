import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCourseOpened: false,
  isSemesterChosen: false,
  isSubjectChosen: false,
  course: [],
  semester: [],
  subject: {},
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourse: (state, action) => {
      state.isCourseOpened = true;
      state.course = action.payload;
    },
    setSemester: (state, action) => {
      state.isSemesterChosen = true;
      state.semester = action.payload;
    },
    setSubject: (state, action) => {
      state.isSubjectChosen = true;
      state.subject = action.payload;
    },
    removeCourse: (state) => {
      state.isCourseOpened = false;
      state.course = [];
    },
    removeSemester: (state) => {
      state.isSemesterChosen = false;
      state.semester = [];
    },
    removeSubject: (state) => {
      state.isSubjectChosen = false;
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
