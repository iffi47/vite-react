import { createSlice } from "@reduxjs/toolkit";
import { fetchTodos, addTodoAsync, updateTodoAsync, deleteTodoAsync } from "../thunks/index.js";
import type { LoadingState } from "../../types";

const loadingSlice = createSlice({
  name: "loading",
  initialState: { loading: { completed: true, successfull: false } } as LoadingState,
  reducers: {
    loadingStarted: (state) => {
      state.loading.completed = false;
    },
    loadingCompleted: (state) => {
      state.loading.completed = true;
      state.loading.successfull = true;
    },
    loadingFailed: (state) => {
      state.loading.completed = true;
      state.loading.successfull = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchTodos
      .addCase(fetchTodos.pending, (state) => {
        state.loading.completed = false;
      })
      .addCase(fetchTodos.fulfilled, (state) => {
        state.loading.completed = true;
        state.loading.successfull = true;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading.completed = true;
        state.loading.successfull = false;
      })
      // addTodoAsync
      .addCase(addTodoAsync.pending, (state) => {
        state.loading.completed = false;
      })
      .addCase(addTodoAsync.fulfilled, (state) => {
        state.loading.completed = true;
        state.loading.successfull = true;
      })
      .addCase(addTodoAsync.rejected, (state) => {
        state.loading.completed = true;
        state.loading.successfull = false;
      })
      // updateTodoAsync
      .addCase(updateTodoAsync.pending, (state) => {
        state.loading.completed = false;
      })
      .addCase(updateTodoAsync.fulfilled, (state) => {
        state.loading.completed = true;
        state.loading.successfull = true;
      })
      .addCase(updateTodoAsync.rejected, (state) => {
        state.loading.completed = true;
        state.loading.successfull = false;
      })
      // deleteTodoAsync
      .addCase(deleteTodoAsync.pending, (state) => {
        state.loading.completed = false;
      })
      .addCase(deleteTodoAsync.fulfilled, (state) => {
        state.loading.completed = true;
        state.loading.successfull = true;
      })
      .addCase(deleteTodoAsync.rejected, (state) => {
        state.loading.completed = true;
        state.loading.successfull = false;
      });
  },
});

export const { loadingStarted, loadingCompleted, loadingFailed } = loadingSlice.actions;
export default loadingSlice.reducer;
