/**
 * API Request and Response Types
 */

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

export interface ApiError {
  message: string;
  status?: number;
  details?: unknown;
}

export interface TodoPayload {
  text: string;
  isCompleted?: boolean;
}

export interface TodoResponse {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
}
