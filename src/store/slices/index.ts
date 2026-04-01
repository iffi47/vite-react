/**
 * Barrel export for all slices
 */

export { default as todoReducer } from './todoSlice';
export { addTodo, completeTodo, deleteTodo } from './todoSlice';

export { default as loadingReducer } from './loadingSlice';
export { loadingStarted, loadingCompleted, loadingFailed } from './loadingSlice';

export { default as errorReducer } from './errorSlice';
export { setError, clearError } from './errorSlice';
