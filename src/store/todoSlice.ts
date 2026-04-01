import { createSlice } from "@reduxjs/toolkit";
import type { TodoState, Todo } from "../types";

const initialTodos: Todo[] = [
 { text: "Buy milk", isCompleted: true },
 { text: "Go to the gym", isCompleted: true },
 { text: "Learn React", isCompleted: false },
 { text: "Learn TypeScript", isCompleted: false },
];

const todoSlice = createSlice({
 name: "todos",
 initialState: { todos: initialTodos } as TodoState,
 reducers: {
  addTodo: (state, action) => {
   state.todos.push(action.payload);
  },
  completeTodo: (state, action) => {
   state.todos = state.todos.map((todo) => {
    if (todo.text === action.payload) {
     return { ...todo, isCompleted: true };
    }
    return todo;
   });
  },
  deleteTodo: (state, action) => {
   state.todos = state.todos.filter((t) => t.text !== action.payload);
  },
 },
});

export const { addTodo, completeTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;