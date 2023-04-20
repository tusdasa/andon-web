<script setup>
import { storeToRefs } from 'pinia';
import { RouterView } from 'vue-router'
import BaseHeader from './components/BaseHeader.vue';
import BaseSide from './components/BaseSide.vue';
import Login from './views/auth/Login.vue';
import { userStore } from './stores/userStore'

let { isLogin } = storeToRefs(userStore());


</script>

<template>
  
  <Login v-show="!isLogin"></Login>
  <div class="common-layout" v-show="isLogin">
    <el-container>
      <el-aside>
        <BaseSide></BaseSide>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
</style>
