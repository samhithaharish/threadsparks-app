// Example types - modify these according to your API responses
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  // Add other user fields as needed
}

export interface ErrorResponse {
  message: string;
  code?: string;
  details?: Record<string, unknown>;
}

// All types are exported from this file
