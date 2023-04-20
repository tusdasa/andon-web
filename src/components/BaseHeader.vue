<script setup>
import { useDark, useToggle } from '@vueuse/core'
import { RouterLink } from 'vue-router'
const isDark = useDark({
  selector: 'html',
  attribute: 'class',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark)
</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">管理控制台</el-menu-item>
    <el-sub-menu index="2">
      <template #title>菜单一</template>
      <el-menu-item index="2-1">操作一</el-menu-item>
      <el-menu-item index="2-2">操作二</el-menu-item>
      <el-menu-item index="2-3">操作三</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>菜单二</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="3z">
      <template #title>系统设置</template>
      <el-sub-menu index="2-1">
        <template #title>账户</template>
        <el-menu-item index="2-1-1">
          <RouterLink to="/user">账户管理</RouterLink>
        </el-menu-item>
        <el-menu-item index="2-1-2">角色管理</el-menu-item>
        <el-menu-item index="2-1-3">权限管理</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2-2">操作二</el-menu-item>
      <el-menu-item index="2-3">操作三</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>菜单二</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="5">Orders</el-menu-item>
    <el-menu-item h="full" @click="toggleDark()">
      <button class="el-menu-item el-button--primary is-circle">
        <el-icon>
          <Sunny />
        </el-icon>
      </button>
  </el-menu-item>
</el-menu></template>