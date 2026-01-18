export const APP_NAME = 'Nuxt 3 Monorepo';

export function sayHello(name: string) {
  return `Hello, ${name} from shared!`;
}

export * from '../types'

