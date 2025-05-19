export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
}
export interface User {
    id: string;
    email: string;
    name: string;
}
export interface ErrorResponse {
    message: string;
    code?: string;
    details?: Record<string, unknown>;
}
