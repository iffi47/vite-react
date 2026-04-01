import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { fetchTodos, addTodoAsync, updateTodoAsync, deleteTodoAsync } from "../thunks/index.js";
import type { TodoState, Todo } from "../../types";

const initialTodos: Todo[] = [
 { id: "1", text: "Buy milk", isCompleted: true },
 { id: "2", text: "Go to the gym", isCompleted: true },
 { id: "3", text: "Learn React", isCompleted: false },
 { id: "4", text: "Learn TypeScript", isCompleted: false },
];

const todoSlice = createSlice({
 name: "todo",
 initialState: { todos: initialTodos } as TodoState,
 reducers: {
  addTodo: (state, action: PayloadAction<Todo>) => {
   state.todos.push(action.payload);
  },
  completeTodo: (state, action: PayloadAction<string>) => {
   state.todos = state.todos.map((todo) => {
    if (todo.text === action.payload) {
     return { ...todo, isCompleted: true };
    }
    return todo;
   });
  },
  deleteTodo: (state, action: PayloadAction<string>) => {
   state.todos = state.todos.filter((t) => t.text !== action.payload);
  },
 },
 extraReducers: (builder) => {
  builder
   // fetchTodos
   .addCase(fetchTodos.fulfilled, (state, action) => {
    state.todos = action.payload;
   })
   .addCase(fetchTodos.rejected, (state) => {
    state.todos = [];
   })
   // addTodoAsync
   .addCase(addTodoAsync.fulfilled, (state, action) => {
    state.todos.push(action.payload);
   })
   // updateTodoAsync
   .addCase(updateTodoAsync.fulfilled, (state, action) => {
    const index = state.todos.findIndex((t) => t.id === action.payload.id);
    if (index !== -1) {
     state.todos[index] = action.payload;
    }
   })
   // deleteTodoAsync
   .addCase(deleteTodoAsync.fulfilled, (state, action) => {
    state.todos = state.todos.filter((t) => t.id !== action.payload);
   });
 },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
