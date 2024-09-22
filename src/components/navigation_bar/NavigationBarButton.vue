<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps({
  buttonText: {
    type: String,
    required: true
  },
  viewDestination: {
    type: String,
    required: true
  }
})
</script>

<template>
  <RouterLink :to="viewDestination" class="navbar-button">{{ buttonText }}</RouterLink>
</template>

<style>
.navbar-button {
  position: relative;
  color: var(--text-color);
  text-decoration: none;
  transform-origin: left;
  transition: var(--transition-duration);
  font-size: 1.2rem;
}

.navbar-button:hover {
  cursor: pointer;
}

.navbar-button::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: var(--text-color);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform var(--transition-duration) var(--transition-timing-function);
}

.navbar-button:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
