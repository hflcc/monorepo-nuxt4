// 公共类型定义
export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
