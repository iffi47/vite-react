import loadingReducer, { loadingCompleted } from "../store/slices/loadingSlice.ts";
import type { LoadingState } from "../types/index.ts";

function testLoadingSlice() {
  const state: LoadingState = {
    loading: { completed: false, successfull: false },
  };
  const next = loadingReducer(state, loadingCompleted());
  if (!next.loading.completed || !next.loading.successfull) {
    throw new Error("loadingCompleted should set completed and successfull to true");
  }
}

testLoadingSlice();
