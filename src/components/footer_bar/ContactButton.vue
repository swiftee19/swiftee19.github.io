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
  <a class="contact-button" :href="ContactLink" target="_blank" rel="noopener noreferrer">
    <img :src="ImagePath" alt="Contact Icon" />
    <p class="contact-description">{{ ContactDescription }}</p>
  </a>
</template>

<style scoped>
/* this is to override the basic styling of an anchor tag in main.css */
a:hover::after {
  transform: scaleX(0);
}

.contact-button {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: fit-content;
  width: fit-content;
}

.contact-button:hover .contact-description {
  font-size: 1rem;
}

.contact-description {
  font-size: 0;
  transition: font 0.3s;
  transform-origin: left;
}

img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
