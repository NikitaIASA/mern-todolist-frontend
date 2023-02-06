import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js'

export const getTasks = createAsyncThunk('getTasks', async () => {
  const {data} = await axios.get('/tasks');
  return data;
});

const initialState = {
  items: [],
  status: 'loading',
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.pending]: (state) => {
      state.status = 'loading';
    },
    [getTasks.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.items = action.payload;
    },
    [getTasks.rejected]: (state) => {
      state.status = 'error';
    },
  }
});

export const tasksReducer = tasksSlice.reducer;
