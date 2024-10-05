<script setup lang="ts">
defineProps({
  image: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="icon-container relative inline-block">
    <img 
      class="w-6 h-6 object-contain hover:cursor-pointer" 
      :src="image" 
      :alt="iconName" 
    />
    <div
      class="popup-text absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-primary font-semibold rounded-sm px-2 py-1 text-sm whitespace-nowrap opacity-0 transition-all duration-300 ease-in-out"
    >
      {{ iconName }}
    </div>
  </div>
</template>

<style scoped>
.icon-container:hover .popup-text {
  opacity: 1;
  transform: translateX(-50%) translateY(-0.25rem);
}

.popup-text {
  pointer-events: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>