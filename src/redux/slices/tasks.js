import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getTasksStart: state => {
      state.loading = true;
      state.error = null;
    },
    getTasksSuccess: (state, { payload }) => {
      state.loading = false;
      state.tasks = payload;
    },
    getTasksFailure: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action) => {
      const { id, task } = action.payload;
      const index = state.tasks.findIndex(task => task._id === id);
      state.tasks[index] = task;
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      state.tasks = state.tasks.filter(task => task._id !== id);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;

export const {
  getTasksStart,
  getTasksSuccess,
  getTasksFailure,
  addTask,
  updateTask,
  deleteTask,
} = tasksSlice.actions;