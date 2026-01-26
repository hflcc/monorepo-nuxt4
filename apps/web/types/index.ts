import type { User } from '@repo/utils'

// Web 应用特有的类型
export interface WebSpecificData {
  webTitle: string;
  featuredUsers: User[];
  isDarkMode: boolean;
}
