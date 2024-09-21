<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation_bar/NavigationBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />
</template>

<style scoped>
header {
  width: fit-content;
  height: fit-content;
}
</style>
