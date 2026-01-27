<template>
  <div class="web-exclusive-layout">
    <aside style="background: #e0f7fa; padding: 1rem; float: left; width: 200px; min-height: 100vh;">
      <nav>
        <h3>Web Menu</h3>
        <ul>
          <li>Web Dashboard</li>
          <li>Web Settings</li>
        </ul>
      </nav>
    </aside>
    <div style="margin-left: 220px; padding: 1rem;">
      <header>
        <h2>Web Exclusive Layout</h2>
      </header>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.web-exclusive-layout {
  border: 4px solid #00acc1;
}
</style>

