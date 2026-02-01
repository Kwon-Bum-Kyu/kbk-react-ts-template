/**
 * 도메인 엔티티 타입 정의
 */

export interface User {
  id: number;
  email: string;
  name: string;
  created_at: Date;
  updated_at?: Date;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  created_at: Date;
  updated_at?: Date;
}
