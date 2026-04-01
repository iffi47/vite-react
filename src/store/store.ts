/**
 * Redux Store Configuration
 * Central store setup with all slices and middleware
 */

import { configureStore } from '@reduxjs/toolkit';
import { todoReducer, loadingReducer, errorReducer } from './slices';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    loading: loadingReducer,
    error: errorReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['todo/fetchTodos/rejected', 'todo/addTodo/rejected'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
