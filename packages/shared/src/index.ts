export const APP_NAME = 'Nuxt 4 Monorepo';

export function sayHello(name: string) {
  return `Hello, ${name} from shared!`;
}

export * from '../types'

