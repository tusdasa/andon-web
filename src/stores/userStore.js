import { ref } from 'vue'
import { defineStore } from 'pinia'

export const userStore = defineStore('userStore', () => {
  let isLogin = ref(false)
  function login() {
    isLogin.value = true
    return isLogin
  }

  return { isLogin, login }
})
