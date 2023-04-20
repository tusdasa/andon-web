<script setup>
import { ref } from 'vue'

import ListUser from './ListUser.vue';

const activeName = ref('first')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div>
    <el-tabs v-model="activeName" type="card" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="User" name="first">

        <ListUser></ListUser>

      </el-tab-pane>
      <el-tab-pane label="Config" name="second">
        <h1>Config</h1>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<style scoped>
</style>
