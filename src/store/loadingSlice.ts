import { createSlice } from "@reduxjs/toolkit";
import type { LoadingState } from "../types";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: {completed: true, successfull: false}  } as LoadingState,
  reducers: {
    loadingStarted: (state) => {
      state.loading.completed = false;
    },
    loadingCompleted: (state) => {
      state.loading.completed = true;
      state.loading.successfull= true;
    },
    loadingFailed: (state) => {
      state.loading.completed= false;
      state.loading.successfull= false
    }
  }
});

export const { loadingStarted, loadingCompleted, loadingFailed } = loadingSlice.actions;
export default loadingSlice.reducer;