import { createSlice } from "@reduxjs/toolkit";
import type { LoadingState } from "../types";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: false } as LoadingState,
  reducers: {
    loadingStarted: (state) => {
      state.loading = true;
    },
    loadingEnded: (state) => {
      state.loading = false;
    }
  }
});

export const { loadingStarted, loadingEnded } = loadingSlice.actions;
export default loadingSlice.reducer;