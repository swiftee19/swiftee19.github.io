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