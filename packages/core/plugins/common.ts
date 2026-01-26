export default defineNuxtPlugin((nuxtApp) => {
  console.log('Shared plugin loaded!')
  return {
    provide: {
      sharedHello: (msg: string) => `Hello from shared layer: ${msg}`
    }
  }
})

