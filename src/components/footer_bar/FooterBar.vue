<script setup lang="ts">
import { ContactListData } from './ContactListData'
import ContactButton from './ContactButton.vue'
</script>

<template>
  <div class="w-full flex justify-center items-center py-4 gap-2">
    <div class="contact-container flex content-center items-center gap-8 p-4 bg-gray rounded-md shadow-md">
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
