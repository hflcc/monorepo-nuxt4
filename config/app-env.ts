export type AppEnv = "local" | "fat" | "uat" | "prod";
export type AppName = "web" | "web1";

type EnvConfig = {
  default: {
    apiBase: string;
    appName: string;
  };
  apps: Partial<
    Record<
      AppName,
      {
        apiBase?: string;
        appName?: string;
      }
    >
  >;
};

export const appEnvConfig: Record<AppEnv, EnvConfig> = {
  local: {
    default: {
      apiBase: "http://localhost:3000/api",
      appName: "monorepo",
    },
    apps: {
      web: {
        apiBase: "http://localhost:3000/api",
      },
      web1: {
        apiBase: "http://localhost:3001/api",
      },
    },
  },
  fat: {
    default: {
      apiBase: "https://fat.example.com/api",
      appName: "monorepo",
    },
    apps: {
      web: {
        apiBase: "https://fat.example.com/api",
      },
      web1: {
        apiBase: "https://fat-web1.example.com/api",
      },
    },
  },
  uat: {
    default: {
      apiBase: "https://uat.example.com/api",
      appName: "monorepo",
    },
    apps: {
      web: {
        apiBase: "https://uat.example.com/api",
      },
      web1: {
        apiBase: "https://uat-web1.example.com/api",
      },
    },
  },
  prod: {
    default: {
      apiBase: "https://api.example.com",
      appName: "monorepo",
    },
    apps: {
      web: {
        apiBase: "https://api.example.com",
      },
      web1: {
        apiBase: "https://web1-api.example.com",
      },
    },
  },
};

export const resolveAppRuntimeConfig = (appEnv: AppEnv, appName: AppName) => {
  const envConfig = appEnvConfig[appEnv] ?? appEnvConfig.local;
  const appConfig = envConfig.apps[appName];

  return {
    apiBase: appConfig?.apiBase ?? envConfig.default.apiBase,
    appName: appConfig?.appName ?? appName,
  };
};
