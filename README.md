# Monorepo Nuxt 4 项目

这是一个基于 Nuxt 4 的高度工程化 Monorepo 项目，使用 pnpm workspaces 和 Turborepo 进行管理。项目采用 **Nuxt Layers** 架构，实现共享能力复用、应用解耦与一致的开发体验。

## 🛠 技术栈

- **框架**: [Nuxt 4](https://nuxt.com/)
- **包管理**: [pnpm](https://pnpm.io/)
- **任务管理**: [Turborepo](https://turbo.build/)
- **样式**: [Tailwind CSS](https://tailwindcss.com/)
- **状态管理**: [Pinia](https://pinia.vuejs.org/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)

## 📁 目录说明

```text
.
├── apps/                   # 应用目录
│   ├── web/                # 应用 1 (Nuxt 4)
│   │   └── tailwind.config.ts # web Tailwind 配置
│   └── web1/               # 应用 2 (Nuxt 4)
│       └── tailwind.config.ts # web1 Tailwind 配置
├── packages/               # 共享包目录
│   ├── core/               # 核心逻辑层 (Nuxt Layer)
│   │   ├── modules/        # 共享 Nuxt 模块
│   │   ├── plugins/        # 共享插件
│   │   ├── server/         # 共享服务器中间件
│   │   ├── stores/         # 共享 Pinia 仓库
│   │   ├── locales/        # 共享语言包
│   │   └── i18n-config.ts  # i18n 核心配置
│   ├── ui/                 # UI 层 (Nuxt Layer)
│   │   ├── assets/          # 共享样式资源
│   │   │   └── css/         # 全局基础样式
│   │   │       └── base.css # Tailwind 基础与公共样式
│   │   └── layouts/        # 共享布局
│   └── utils/              # 工具库 (Pure TypeScript)
│       ├── src/            # 通用工具函数
│       └── types/          # 全局类型定义
├── config/                 # 项目级配置
│   └── app-env.ts           # 多环境与应用运行时配置
├── package.json            # 根项目配置
├── pnpm-workspace.yaml     # pnpm 工作区配置
├── turbo.json              # Turborepo 任务流配置
└── README.md               # 项目文档
```

## 🚀 开发范式 (Development Paradigm)

### 1. 分层架构 (Layered Architecture)
本项目采用清晰的三层架构设计，实现了关注点分离：

- **Utils 层 (`packages/utils`)**: 最底层的纯 TypeScript 库，不依赖 Vue/Nuxt。提供通用的工具函数和类型定义。
- **Core 层 (`packages/core`)**: 核心业务逻辑层 (Nuxt Layer)。包含状态管理 (Pinia)、插件、服务端中间件、基础模块配置 (`modules/base.ts`) 与 i18n 基础配置。
- **UI 层 (`packages/ui`)**: 视觉表现层 (Nuxt Layer)。继承自 Core 层，提供布局 (Layouts) 与应用级视觉一致性。
- **应用层 (`apps/*`)**: 具体的业务应用。继承自 UI 层，只需关注该应用特有的页面和逻辑。

### 2. Nuxt Layers 继承机制
通过 Nuxt 4 的 `extends` 特性实现层级继承：
`App` -> `UI Layer` -> `Core Layer`

- **核心模块加载**: `packages/core/nuxt.config.ts` 统一引入 Pinia、Tailwind CSS、Element Plus、VueUse 与 i18n 等模块。
- **基础运行时配置**: `packages/core/modules/base.ts` 统一设置兼容日期、Devtools 与 TypeScript 严格模式。
- **配置继承**: 子应用自动继承上层配置，并可在自身 `nuxt.config.ts` 中覆盖。

### 3. 代码共享策略
- **工具/类型**: 放在 `packages/utils`，通过 `@repo/utils` 引入。
- **业务逻辑**: 通用 Store、Plugins、Server Middleware 放在 `packages/core`。
- **UI/布局**: 通用 Layouts 与共享 UI 放在 `packages/ui`。
- **样式开发**: `packages/ui/assets/css/base.css` 统一基础样式入口；各应用在 `apps/*/tailwind.config.ts` 维护 Tailwind 配置。

### 4. 国际化 (i18n) 策略
- **通用配置**: `packages/core/i18n-config.ts` 维护默认语言、策略等核心配置。
- **语言包**: 共享语言包在 `packages/core/locales`，应用可在 `nuxt.config.ts` 按需覆盖。

### 5. 别名约定
- `@` 或 `~`: 指向**当前应用**的根目录。
- `~~`: 指向整个 **Monorepo** 的根目录。
- `@repo/core` / `@repo/ui` / `@repo/utils`: 引用共享层。

### 6. 多环境运行时配置
- **环境变量**: 通过 `APP_ENV` 指定运行环境（`local` / `fat` / `uat` / `prod`）。
- **配置入口**: `config/app-env.ts` 统一维护多环境与应用级配置。
- **应用注入**: `apps/web` 与 `apps/web1` 在 `runtimeConfig.public` 中注入 `apiBase` 与 `appName`，并通过 `resolveAppRuntimeConfig` 解析。

## 📱 响应式样式说明

本项目使用 Tailwind CSS 的 `screens` 断点，按以下范围定义：

| 断点 | 范围 |
| :--- | :--- |
| `sm` | `max: 767px` |
| `md` | `min: 768px` 且 `max: 1199px` |
| `lg` | `min: 1200px` |

示例：
- `sm:text-sm`：仅在 0–767px 生效。
- `md:grid-cols-2`：仅在 768–1199px 生效。
- `lg:px-10`：仅在 1200px 及以上生效。

## ⌨️ 常用命令

| 命令 | 说明 |
| :--- | :--- |
| `pnpm install` | 安装所有依赖 |
| `pnpm dev` | 启动所有应用的开发服务器 |
| `pnpm build` | 构建所有应用 |
| `pnpm lint` | 运行 lint 检查 |
| `pnpm dev --filter web` | 仅启动 web 应用 |
| `pnpm dev --filter web1` | 仅启动 web1 应用 |
| `pnpm dev:local --filter web` | 以 local 环境启动 web |
| `pnpm build:local --filter web` | 以 local 环境构建 web |
| `pnpm build:fat --filter web` | 以 fat 环境构建 web |
| `pnpm build:uat --filter web` | 以 uat 环境构建 web |
| `pnpm build:prod --filter web` | 以 prod 环境构建 web |
| `pnpm dev:local --filter web1` | 以 local 环境启动 web1 |
| `pnpm build:local --filter web1` | 以 local 环境构建 web1 |
| `pnpm build:fat --filter web1` | 以 fat 环境构建 web1 |
| `pnpm build:uat --filter web1` | 以 uat 环境构建 web1 |
| `pnpm build:prod --filter web1` | 以 prod 环境构建 web1 |

## ⚠️ 注意事项

1.  **依赖安装**: 请务必在根目录下执行 `pnpm install`。若需给特定应用安装依赖，建议使用 `pnpm add <pkg> --filter <app-name>`。
2.  **Layer 开发**: 修改 `packages/core` 或 `packages/ui` 时，请注意 `package.json` 中的依赖关系。UI 层依赖 Core 层，应用层依赖 UI 层。
3.  **类型生成**: 首次运行或修改共享层后，若遇到类型错误，请确保在子应用中运行了 `pnpm postinstall` 或启动过 `pnpm dev` 以生成 `.nuxt` 类型文件。
4.  **配置冲突**: 子应用的 `nuxt.config.ts` 会覆盖上层 Layer 中的同名配置。

## 🤝 协作建议

- **纯函数/类型**: 优先放入 `packages/utils`。
- **通用业务逻辑**: 放入 `packages/core`。
- **通用 UI 组件**: 放入 `packages/ui`。
- **特定业务**: 仅在 `apps/` 下对应的应用中实现。
