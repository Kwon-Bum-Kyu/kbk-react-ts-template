import api from '@/utils/api';
import { API_ENDPOINTS } from '@/config/api';
import { ApiResponse, PaginatedResponse } from '@/types/api';
import { User, CreateUserRequest, UpdateUserRequest } from '@/types/user';

export class UserService {
  static async getUsers(params?: {
    page?: number;
    limit?: number;
    search?: string;
  }): Promise<ApiResponse<PaginatedResponse<User>>> {
    const searchParams = new URLSearchParams();

    if (params?.page) searchParams.append('page', params.page.toString());
    if (params?.limit) searchParams.append('limit', params.limit.toString());
    if (params?.search) searchParams.append('search', params.search);

    const endpoint = searchParams.toString()
      ? `${API_ENDPOINTS.USERS.LIST}?${searchParams.toString()}`
      : API_ENDPOINTS.USERS.LIST;

    return api.get<PaginatedResponse<User>>(endpoint);
  }

  static async getUserById(id: string): Promise<ApiResponse<User>> {
    return api.get<User>(API_ENDPOINTS.USERS.DETAIL(id));
  }

  static async createUser(userData: CreateUserRequest): Promise<ApiResponse<User>> {
    return api.post<User>(API_ENDPOINTS.USERS.CREATE, userData);
  }

  static async updateUser(id: string, userData: UpdateUserRequest): Promise<ApiResponse<User>> {
    return api.put<User>(API_ENDPOINTS.USERS.UPDATE(id), userData);
  }

  static async deleteUser(id: string): Promise<ApiResponse<void>> {
    return api.delete<void>(API_ENDPOINTS.USERS.DELETE(id));
  }

  static async uploadAvatar(id: string, file: File): Promise<ApiResponse<User>> {
    const formData = new FormData();
    formData.append('avatar', file);

    return api.post<User>(`${API_ENDPOINTS.USERS.UPDATE(id)}/avatar`, formData);
  }
}