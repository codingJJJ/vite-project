import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

export type CounterState = {
  counter: number;
};

const initialState: CounterState = {
  counter: 0,
};

const globalSlice = createSlice<CounterState, SliceCaseReducers<CounterState>>({
  name: "global",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      state.counter += payload.counter;
    },
    decrement: (state, { payload }) => {
      state.counter -= payload.counter;
    },
  },
});

export default globalSlice.reducer;
