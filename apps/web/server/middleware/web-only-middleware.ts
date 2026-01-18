export default defineEventHandler((event) => {
  console.log('Middleware: Web Only Middleware (web) - path:', event.path)
})
