import { UserRepository } from '../repositories/user.repository';
import { CreateUserRequest, UpdateUserRequest, User } from '@repo/shared-types';

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async findAll(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async findById(id: number): Promise<User | null> {
    return this.userRepository.findById(id);
  }

  async create(data: CreateUserRequest): Promise<User> {
    // Business logic validation could go here
    return this.userRepository.create(data);
  }

  async update(id: number, data: UpdateUserRequest): Promise<User> {
    return this.userRepository.update(id, data);
  }

  async delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
