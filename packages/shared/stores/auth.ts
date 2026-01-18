import { defineStore } from 'pinia'

export const useSharedAuthStore = defineStore('sharedAuth', {
  state: () => ({
    user: null as { name: string; role: string } | null,
    isLoggedIn: false
  }),
  actions: {
    login(name: string) {
      this.user = { name, role: 'admin' }
      this.isLoggedIn = true
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
    }
  }
})
