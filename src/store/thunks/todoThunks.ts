/**
 * Todo Async Thunks
 * Handles all async todo operations using createAsyncThunk
 */

import { createAsyncThunk } from "@reduxjs/toolkit";
import { todoService } from "../../api/services";
import type { TodoPayload } from "../../api/types";

/**
 * Fetch all todos from the server
 */
export const fetchTodos = createAsyncThunk(
  "todo/fetchTodos",
  async (_, { rejectWithValue }) => {
    try {
      return await todoService.getTodos();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);

/**
 * Add a new todo
 */
export const addTodoAsync = createAsyncThunk(
  "todo/addTodo",
  async (todo: TodoPayload, { rejectWithValue }) => {
    try {
      return await todoService.createTodo(todo);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);

/**
 * Update an existing todo
 */
export const updateTodoAsync = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, updates }: { id: string; updates: Partial<TodoPayload> }, { rejectWithValue }) => {
    try {
      return await todoService.updateTodo(id, updates);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);

/**
 * Delete a todo
 */
export const deleteTodoAsync = createAsyncThunk(
  "todo/deleteTodo",
  async (id: string, { rejectWithValue }) => {
    try {
      await todoService.deleteTodo(id);
      return id;
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unknown error");
    }
  }
);
