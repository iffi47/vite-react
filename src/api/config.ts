/**
 * API Configuration
 * Centralized configuration for all API calls
 */

export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000/api',
  TIMEOUT: 5000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
};

/**
 * Get full API URL for an endpoint
 * @param endpoint - The API endpoint path
 * @returns Full URL for the endpoint
 */
export const getApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
