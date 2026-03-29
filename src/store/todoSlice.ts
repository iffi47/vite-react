import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: { todos: [] as {text: string, isCompleted: boolean}[] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    completeTodo:(state, action) =>{
      state.todos=  state.todos.map(todo => {
        if (todo.text === action.payload) {
          return {...todo, isCompleted: true};
        }
        return todo;
      });
    },
    deleteTodo:(state, action) =>{
      state.todos= state.todos.filter(t=> t.text !== action.payload);
    }
  }
});

export const { addTodo, completeTodo } = todoSlice.actions;
export default todoSlice.reducer;