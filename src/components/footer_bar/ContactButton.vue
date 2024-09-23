<script setup lang="ts">
defineProps({
  id: {
    type: String,
    required: true
  },
  ImagePath: {
    type: String,
    required: true
  },
  ContactDescription: {
    type: String,
    required: true
  },
  ContactLink: {
    type: String,
    required: true
  }
})
</script>

<template>
  <a class="contact-button flex justify-center items-center gap-2 relative" :href="ContactLink" target="_blank" rel="noopener noreferrer">
    <img :src="ImagePath" alt="Contact Icon" class="w-6 h-6" />
    <p class="contact-description text-0 hover:text-base transition-all duration-300">{{ ContactDescription }}</p>
  </a>
</template>


<style scoped>
/* to override the default styles of the anchor tag */
a:hover::after {
  transform: scaleX(0);
}

.contact-button:hover .contact-description {
  font-size: 1rem;
}
</style>
