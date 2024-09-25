<script setup lang="ts">
import { ContactListData } from './ContactListData'
import ContactButton from './ContactButton.vue'
</script>

<template>
  <div class="flex w-full justify-center items-center pb-4">
    <div
      class="flex content-center items-center gap-8 p-4 bg-gray rounded-md shadow-md"
    >
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
