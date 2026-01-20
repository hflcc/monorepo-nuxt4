<script setup lang="ts">
import { useCounterStore } from '@/app/stores/counter'
import { useSharedAuthStore } from '@repo/shared/stores/auth'
import { APP_NAME, sayHello } from '@repo/shared'
import type { Web1SpecificData } from '@/types'

const counter = useCounterStore()
const auth = useSharedAuthStore()
const helloMessage = sayHello('Web1 User')
const localePath = useLocalePath()

const pageData: Web1SpecificData = {
  web1Version: '1.0.0',
  activeUser: null,
  config: { enableBetaFeatures: true }
}
</script>

<template>
  <div class="min-h-screen bg-green-50 p-8">
    <div class="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
      <h1 class="text-3xl font-bold text-green-600 mb-4">{{ $t('i18n_web1_name') }}</h1>

      <div class="mb-6 p-4 bg-green-100 rounded-lg">
        <h2 class="font-bold mb-2">{{ $t('i18n_shared_welcome') }}:</h2>
        <div v-if="auth.isLoggedIn">
          <p>User: {{ auth.user?.name }}</p>
          <el-button size="small" @click="auth.logout">Logout</el-button>
        </div>
        <div v-else>
          <el-button size="small" type="success" @click="auth.login('Web1 User')">Login</el-button>
        </div>
      </div>

      <p class="text-gray-600 mb-6">{{ helloMessage }}</p>

      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <span class="text-lg font-medium">Pinia Count (Web1): {{ counter.count }}</span>
          <el-button type="success" @click="counter.increment">Increment</el-button>
        </div>

        <div class="pt-6 border-t">
          <h2 class="text-xl font-semibold mb-3">Element Plus Components in Web1</h2>
          <div class="flex space-x-2">
            <el-tag type="success">Web1 App</el-tag>
            <el-tag>Nuxt 4</el-tag>
            <el-tag type="info">Shared Lib</el-tag>
          </div>
          <div class="mt-4">
            <el-alert title="Web1 is running successfully!" type="info" show-icon />
          </div>
        </div>

        <div class="mt-4 pt-4 border-t">
          <NuxtLink :to="localePath('/about')" class="text-green-500 hover:underline">{{ $t('i18n_web1_go_about') }}</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
