import { createSlice } from "@reduxjs/toolkit";

const counter = createSlice({
  name: "counter",
  initialState: { count: 0},
  reducers: {
    increment(state) {
      state.count = state.count + 1;
    },
    decrement(state) {
      if (state.count != 0) {
        state.count = state.count - 1;
      }
    },
  },
});

export default counter;

export const { increment, decrement } = counter.actions;
