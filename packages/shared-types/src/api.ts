/**
 * API Request/Response 타입 정의
 */

import type { User } from './entities';

// User API Types
export interface CreateUserRequest {
  email: string;
  name: string;
}

export interface UpdateUserRequest {
  email?: string;
  name?: string;
}

export interface UserListResponse {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
}

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
