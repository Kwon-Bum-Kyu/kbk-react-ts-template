import { pool } from '../lib/mysql';
import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { CreateUserRequest, UpdateUserRequest, User } from '@repo/shared-types';

export class UserRepository {
  async findAll(): Promise<User[]> {
    const [rows] = await pool.query<RowDataPacket[]>('SELECT id, email, name, created_at, updated_at FROM users');
    return rows as User[];
  }

  async findById(id: number): Promise<User | null> {
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT id, email, name, created_at, updated_at FROM users WHERE id = ?',
      [id]
    );
    return rows.length > 0 ? (rows[0] as User) : null;
  }

  async create(data: CreateUserRequest): Promise<User> {
    const [result] = await pool.query<ResultSetHeader>(
      'INSERT INTO users (email, name) VALUES (?, ?)',
      [data.email, data.name]
    );
    
    const newUser = await this.findById(result.insertId);
    if (!newUser) throw new Error('User creation failed');
    return newUser;
  }

  async update(id: number, data: UpdateUserRequest): Promise<User> {
    const updates: string[] = [];
    const values: any[] = [];

    if (data.email) {
      updates.push('email = ?');
      values.push(data.email);
    }
    if (data.name) {
      updates.push('name = ?');
      values.push(data.name);
    }

    if (updates.length === 0) {
      const user = await this.findById(id);
      if (!user) throw new Error('User not found');
      return user;
    }

    values.push(id);
    await pool.query(
      `UPDATE users SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    const updatedUser = await this.findById(id);
    if (!updatedUser) throw new Error('User not found after update');
    return updatedUser;
  }

  async delete(id: number): Promise<void> {
    await pool.query('DELETE FROM users WHERE id = ?', [id]);
  }
}