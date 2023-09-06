"use client";

import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/conterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
