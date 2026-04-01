/**
 * Global Types and Interfaces for the Application
 * Centralized location for all TypeScript interfaces and types
 */

// ==================== State Interfaces ====================

/**
 * Todo Item Interface
 * Represents a single todo item in the application
 */
export interface Todo {
  id?: string;
  text: string;
  isCompleted: boolean;
}

/**
 * Loading State Interface
 * Represents the global loading state
 */
export interface LoadingState {
  loading: {
    completed:boolean,
    successfull: boolean
  };
}

/**
 * Todo State Interface
 * Represents the todos slice of the Redux store
 */
export interface TodoState {
  todos: Todo[];
}

/**
 * Root State Interface
 * Represents the entire Redux store state
 */
export interface RootState {
  loading: LoadingState;
  todo: TodoState;
}

// ==================== Component Props Interfaces ====================

/**
 * TodoList Component Props
 * Props for the TodoList component
 */
export interface TodoListProps {
  todo: Todo;
}

/**
 * TodoFieldForm Component Props
 * Props for the TodoFieldForm component (currently empty, can extend if needed)
 */
export interface TodoFieldFormProps {}

/**
 * Todos View Component Props
 * Props for the Todos view component (currently empty, can extend if needed)
 */
export interface TodosProps {}

// ==================== API Response Interfaces ====================

/**
 * API Todo Response
 * Response structure from the server API
 */
export interface ApiTodoResponse extends Todo {
  id: string;
}

/**
 * API Error Response
 * Standard error response from the API
 */
export interface ApiErrorResponse {
  message: string;
  code?: string;
}
