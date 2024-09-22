<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationBar from './components/navigation_bar/NavigationBar.vue'
import FooterBar from './components/footer_bar/FooterBar.vue'
</script>

<template>
  <header>
    <NavigationBar />
  </header>

  <RouterView />

  <footer>
    <FooterBar />
  </footer>
</template>

<style scoped>
header {
  width: fit-content;
  height: fit-content;
}

footer {
  width: 100%;
  height: fit-content;
  margin-bottom: 0;
}
</style>
