<template>
  <div class="shared-layout-container">
    <header style="background: #eee; padding: 1rem; border-bottom: 2px solid #ccc;">
      <h1>Shared Header (from Layer)</h1>
    </header>
    <main style="padding: 2rem;">
      <slot />
    </main>
    <footer style="margin-top: 2rem; padding: 1rem; border-top: 1px solid #ddd; font-size: 0.8rem;">
      <p>Shared Footer © 2026 - Nuxt Layer</p>
    </footer>
  </div>
</template>

<style scoped>
.shared-layout-container {
  font-family: sans-serif;
  min-height: 100vh;
}
</style>

