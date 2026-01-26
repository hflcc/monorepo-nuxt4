export default defineEventHandler((event) => {
  console.log('Shared middleware logging request:', event.path)
})

