import { NextFunction, Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { CreateUserRequest, UpdateUserRequest } from '@repo/shared-types';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.findAll();
      res.json({ success: true, data: users });
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const user = await this.userService.findById(id);
      if (!user) {
        res.status(404).json({ success: false, message: 'User not found' });
        return;
      }
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data: CreateUserRequest = req.body;
      const user = await this.userService.create(data);
      res.status(201).json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      const data: UpdateUserRequest = req.body;
      const user = await this.userService.update(id, data);
      res.json({ success: true, data: user });
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const id = parseInt(req.params.id);
      await this.userService.delete(id);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
