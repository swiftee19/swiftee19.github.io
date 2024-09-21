<script setup lang="ts">
defineProps({
  alphabet: {
    type: String,
    required: true
  }
})
</script>

<template>
  <span>{{ alphabet }}</span>
</template>

<style scoped>
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px) scale(1.5);
  }
  100% {
    transform: translateY(0);
  }
}

span {
  display: inline-block;
  font-size: 1.2rem;
  color: var(--text-color);
}

span:hover {
  cursor: default;
  animation: jump 0.5s;
  color: var(--gold-color);
}
</style>
