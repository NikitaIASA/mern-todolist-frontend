import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";

export const getTasks = createAsyncThunk("getTasks", async () => {
  const { data } = await axios.get("/tasks");
  return data;
});

export const getTasksByStatus = createAsyncThunk("getTasksByStatus", async (status) => {
  const { data } = await axios.get(`/tasks?status=${status}`);
  return data;
});

export const removeTask = createAsyncThunk("removeTask", async (id) => {
  await axios.delete(`/tasks/${id}`);
});

export const addTask = createAsyncThunk("addTask", async (params) => {
  const { data } = await axios.post("/tasks", params);
  return data;
});

export const toggleTaskCompletion = createAsyncThunk("toggleTaskCompletion ", async (id) => {
  await axios.post(`/tasks/${id}`, id);
});

const initialState = {
  items: [],
  status: "loading",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    // GetAllTasks
    [getTasks.pending]: (state) => {
      state.status = "loading";
    },
    [getTasks.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.items = action.payload;
    },
    [getTasks.rejected]: (state) => {
      state.status = "error";
    },

    // DeleteTask
    [removeTask.pending]: (state, action) => {
      state.items = state.items.filter((obj) => obj._id !== action.meta.arg);
    },

    // AddNewTask
    [addTask.pending]: (state, action) => {
      state.status = "loading";
    },

    [addTask.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.items.push(action.payload);
    },

    [addTask.rejected]: (state, action) => {
      state.status = "error";
    },

    [toggleTaskCompletion.pending]: (state, action) => {
      state.status = "loading";
      const taskIndex = state.items.findIndex(task => task._id === action.meta.arg);
      state.items[taskIndex].completed =  !state.items[taskIndex].completed;  
    },

    [toggleTaskCompletion.fulfilled]: (state, action) => {
      state.status = "loaded";
    },

    [toggleTaskCompletion.rejected]: (state, action) => {
      state.status = "error";
    },


    [getTasksByStatus.pending]: (state) => {
      state.status = 'loading';
    },
    [getTasksByStatus.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.items = action.payload;
    },
    [getTasksByStatus.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
