import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app.vue',
    './app/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './plugins/**/*.{js,ts}',
    '../../packages/core/**/*.{vue,js,ts}',
    '../../packages/ui/**/*.{vue,js,ts}'
  ],
  theme: {
    screens: {
      sm: { max: '767px' },
      md: { min: '768px', max: '1199px' },
      lg: { min: '1200px' },
    },
    extend: {},
  },
  plugins: [],
}

