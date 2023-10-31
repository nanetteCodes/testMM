// reducers/counterSlice.js
import {createSlice} from '@reduxjs/toolkit';

const sampleSlice = createSlice({
  name: 'counter',
  initialState: 0,
  reducers: {
    increment: state => {
      state += 1;
    },
    decrement: state => {
      state -= 1;
    },
  },
});

export const {increment, decrement} = sampleSlice.actions;

export default sampleSlice.reducer;
