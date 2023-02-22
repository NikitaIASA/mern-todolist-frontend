import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completed: "",
  specialSelected: "",
  priority: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCompletedFilter(state, action) {
        state.completed = action.payload;
      },
      setSpecialSelectedFilter(state, action) {
        state.specialSelected = action.payload;
      },
      setPriorityFilter(state, action) {
        state.priority = action.payload;
      },
  },
});

export const { setCompletedFilter, setSpecialSelectedFilter, setPriorityFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
