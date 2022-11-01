import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./features/global";
import type { CounterState } from "./features/global";

export type globalStore = {
  global: CounterState;
};

const store = configureStore<globalStore>({
  reducer: {
    global: globalSlice,
  },
});

export default store;
