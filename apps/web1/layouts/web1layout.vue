<template>
  <div class="web1-exclusive-layout">
    <header style="background: #fce4ec; padding: 1rem; text-align: center;">
      <h2>Web1 Custom Header</h2>
    </header>
    <main style="padding: 2rem; background: #fff8f9;">
      <slot />
    </main>
  </div>
</template>

<style scoped>
.web1-exclusive-layout {
  border: 4px dashed #f06292;
}
</style>

