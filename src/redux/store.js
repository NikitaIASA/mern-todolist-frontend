import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer } from "./slices/tasks";
import { authReducer } from "./slices/auth";
import { filterReducer } from "./slices/filter";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    filter: filterReducer,
  },
});

export default store;
