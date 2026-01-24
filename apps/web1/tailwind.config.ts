import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    '../../packages/shared/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

