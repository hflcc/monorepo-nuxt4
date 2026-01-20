<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { useSharedAuthStore } from '@repo/shared/stores/auth' // 或者直接使用，因为有 auto-import
import { APP_NAME, sayHello } from '@repo/shared'
import type { WebSpecificData } from '@/types'

const counter = useCounterStore()
const auth = useSharedAuthStore()
const helloMessage = sayHello('World')
const localePath = useLocalePath()

const pageData: WebSpecificData = {
  webTitle: 'Web Main Page',
  featuredUsers: [],
  isDarkMode: false
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">{{ $t('i18n_web_name') }}</h1>
      
      <div class="mb-6 p-4 bg-blue-50 rounded-lg">
        <h2 class="font-bold mb-2">{{ $t('i18n_shared_welcome') }}:</h2>
        <div v-if="auth.isLoggedIn">
          <p>Welcome, {{ auth.user?.name }} ({{ auth.user?.role }})</p>
          <el-button size="small" @click="auth.logout">Logout</el-button>
        </div>
        <div v-else>
          <p>Not logged in</p>
          <el-button size="small" type="primary" @click="auth.login('Admin User')">Login</el-button>
        </div>
      </div>

      <p class="text-gray-600 mb-6">{{ helloMessage }}</p>

      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <span class="text-lg font-medium">Pinia Count: {{ counter.count }}</span>
          <el-button type="primary" @click="counter.increment">Increment</el-button>
        </div>

        <div class="pt-6 border-t">
          <h2 class="text-xl font-semibold mb-3">Element Plus Components</h2>
          <div class="flex space-x-2">
            <el-tag>Nuxt 4</el-tag>
            <el-tag type="success">Vue 3</el-tag>
            <el-tag type="info">TypeScript</el-tag>
            <el-tag type="warning">Tailwind</el-tag>
          </div>
          <div class="mt-4">
            <el-alert title="Everything is working!" type="success" show-icon />
          </div>
        </div>
        
        <div class="mt-4 pt-4 border-t">
          <NuxtLink :to="localePath('/about')" class="text-blue-500 hover:underline">{{ $t('i18n_web_go_about') }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
