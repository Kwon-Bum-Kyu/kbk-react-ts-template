import api from '@/utils/api';
import { API_ENDPOINTS } from '@/config/api';
import { ApiResponse } from '@/types/api';
import type { User } from '@repo/shared-types';
import { LoginRequest, LoginResponse } from '@/types/user';

export class AuthService {
  static async login(credentials: LoginRequest): Promise<ApiResponse<LoginResponse>> {
    const response = await api.post<LoginResponse>(API_ENDPOINTS.AUTH.LOGIN, credentials);

    if (response.success && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }

    return response;
  }

  static async logout(): Promise<ApiResponse<void>> {
    const response = await api.post<void>(API_ENDPOINTS.AUTH.LOGOUT);

    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');

    return response;
  }

  static async getProfile(): Promise<ApiResponse<User>> {
    return api.get<User>(API_ENDPOINTS.AUTH.PROFILE);
  }

  static async refreshToken(): Promise<ApiResponse<LoginResponse>> {
    const refreshToken = localStorage.getItem('refreshToken');

    if (!refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await api.post<LoginResponse>(API_ENDPOINTS.AUTH.REFRESH, {
      refreshToken,
    });

    if (response.success && response.data.token) {
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('refreshToken', response.data.refreshToken);
    }

    return response;
  }

  static isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  static getToken(): string | null {
    return localStorage.getItem('authToken');
  }
}