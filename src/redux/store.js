import { configureStore } from "@reduxjs/toolkit";
import facultiesReducer from "./faculties/facultiesSlice";
import facFilterReducer from "./faculties/facFilterSlice";
import compSliceReducer from "./compSlice";
import coursesReducer from "./coursesSlice";
import cvReducer from "./cvSlice";

import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    faculties: facultiesReducer,
    facFilters: facFilterReducer,
    competencies: compSliceReducer,
    courses: coursesReducer,
    cv: cvReducer,
  },
});
