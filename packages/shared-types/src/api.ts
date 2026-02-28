/**
 * API Request/Response 공통 타입 정의
 */

// Common API Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
}
