/**
 * Todo API Service
 * Handles all todo-related API calls
 */

import { getApiUrl, API_CONFIG } from '../config';
import type { TodoPayload, TodoResponse } from '../types';

export const todoService = {
  /**
   * Fetch all todos from the server
   */
  getTodos: async (): Promise<TodoResponse[]> => {
    const response = await fetch(getApiUrl('/todos'), {
      method: 'GET',
      headers: API_CONFIG.HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch todos: ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * Create a new todo
   */
  createTodo: async (todo: TodoPayload): Promise<TodoResponse> => {
    const response = await fetch(getApiUrl('/todos'), {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(todo),
    });

    if (!response.ok) {
      throw new Error(`Failed to create todo: ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * Update an existing todo
   */
  updateTodo: async (id: string, updates: Partial<TodoPayload>): Promise<TodoResponse> => {
    const response = await fetch(getApiUrl(`/todos/${id}`), {
      method: 'PATCH',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify(updates),
    });

    if (!response.ok) {
      throw new Error(`Failed to update todo: ${response.statusText}`);
    }

    return response.json();
  },

  /**
   * Delete a todo
   */
  deleteTodo: async (id: string): Promise<void> => {
    const response = await fetch(getApiUrl(`/todos/${id}`), {
      method: 'DELETE',
      headers: API_CONFIG.HEADERS,
    });

    if (!response.ok) {
      throw new Error(`Failed to delete todo: ${response.statusText}`);
    }
  },
};
