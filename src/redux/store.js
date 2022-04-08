import { configureStore } from "@reduxjs/toolkit";
import facultiesReducer from "./faculties/facultiesSlice";
import facFilterReducer from "./faculties/facFilterSlice";

import authReducer from "./authSlice";

export default configureStore({
  reducer: {
    auth: authReducer,
    faculties: facultiesReducer,
    facFilters: facFilterReducer,
  },
});
