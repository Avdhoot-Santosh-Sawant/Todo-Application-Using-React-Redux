import { configureStore } from "@reduxjs/toolkit";
import counter from "./Counter";
import todoSlice from "./TodoSlice";

const store = configureStore({
  reducer: {
    counter: counter.reducer,
    todoSlice: todoSlice.reducer,
  },
});

export default store;
