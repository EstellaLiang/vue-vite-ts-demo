<script setup lang="ts">
import {useRoute} from "vue-router";

const route = useRoute();
</script>

<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ route.fullPath }}</p>
  <nav>
    <RouterLink to="/">首页</RouterLink>
    <RouterLink to="/menu1/page1">菜单1/页面1</RouterLink>
  </nav>
  <main>
    <RouterView/>
  </main>
</template>

<style scoped>
</style>
