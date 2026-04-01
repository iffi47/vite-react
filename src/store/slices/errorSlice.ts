/**
 * Error State Slice
 * Handles error state management for the application
 */

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos, addTodoAsync, updateTodoAsync, deleteTodoAsync } from "../thunks/index.js";

interface ErrorState {
  error: string | null;
  details?: unknown;
}

const initialState: ErrorState = {
  error: null,
  details: undefined,
};

const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<{ error: string; details?: unknown }>) => {
      state.error = action.payload.error;
      state.details = action.payload.details;
    },
    clearError: (state) => {
      state.error = null;
      state.details = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.rejected, (state, action) => {
        state.error = "Failed to fetch todos";
        state.details = action.payload;
      })
      // addTodoAsync
      .addCase(addTodoAsync.rejected, (state, action) => {
        state.error = "Failed to add todo";
        state.details = action.payload;
      })
      // updateTodoAsync
      .addCase(updateTodoAsync.rejected, (state, action) => {
        state.error = "Failed to update todo";
        state.details = action.payload;
      })
      // deleteTodoAsync
      .addCase(deleteTodoAsync.rejected, (state, action) => {
        state.error = "Failed to delete todo";
        state.details = action.payload;
      })
      // Clear error on successful operations
      .addCase(fetchTodos.fulfilled, (state) => {
        state.error = null;
        state.details = undefined;
      })
      .addCase(addTodoAsync.fulfilled, (state) => {
        state.error = null;
        state.details = undefined;
      })
      .addCase(updateTodoAsync.fulfilled, (state) => {
        state.error = null;
        state.details = undefined;
      })
      .addCase(deleteTodoAsync.fulfilled, (state) => {
        state.error = null;
        state.details = undefined;
      });
  },
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;
