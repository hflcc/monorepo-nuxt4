import type { User } from '@repo/shared'

// Web1 应用特有的类型
export interface Web1SpecificData {
  web1Version: string;
  activeUser: User | null;
  config: {
    enableBetaFeatures: boolean;
  };
}
