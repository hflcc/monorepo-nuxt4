<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('i18n_web_about_title') }}</h1>
      <p class="text-gray-600 mb-6">{{ $t('i18n_web_about_description') }}</p>
      <NuxtLink :to="localePath('/')" class="text-blue-500 hover:underline">{{ $t('i18n_web_back_home') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
