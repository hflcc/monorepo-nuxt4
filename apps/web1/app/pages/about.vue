<template>
  <div class="min-h-screen bg-green-50 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 class="text-3xl font-bold text-green-600 mb-4">{{ $t('i18n_web1_about_title') }}</h1>
      <p class="text-gray-600 mb-6">{{ $t('i18n_web1_about_description') }}</p>
      <NuxtLink :to="localePath('/')" class="text-green-500 hover:underline">{{ $t('i18n_web1_back_home') }}</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
</script>
