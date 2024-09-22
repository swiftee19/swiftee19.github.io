<script setup lang="ts">
import { ContactListData } from './ContactListData'
import ContactButton from './ContactButton.vue'
</script>

<template>
  <div class="footer">
    <div class="contact-container">
      <ContactButton
        v-for="contact in ContactListData"
        :key="contact.id"
        :id="contact.id"
        :ImagePath="contact.ImagePath"
        :ContactDescription="contact.ContactDescription"
        :ContactLink="contact.ContactLink"
      />
    </div>
  </div>
</template>

<style scoped>
.footer {
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 1rem;
  gap: 2rem;
}

.contact-container {
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  background-color: var(--gray-color);
  border-radius: 20px;
  box-shadow: 0 0 10px var(--shadow-color);
}
</style>
