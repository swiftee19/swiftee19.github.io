<script setup lang="ts">
import { NavigationBarButtonList } from './NavigationBarButtonList'
import NavigationBarButton from './NavigationBarButton.vue'
import getRandomGreetingMessage from './GreetingMessageList'
import GreetingMessageAlphabet from './GreetingMessageAlphabet.vue'

const greetingMessage = getRandomGreetingMessage() + ', Visitor!'
const greetingMessageLetters = greetingMessage.split('')
</script>

<template>
  <nav class="w-screen flex justify-end items-center py-4 px-8 shadow-md">
    <span class="mr-auto hover:cursor-default">
      <GreetingMessageAlphabet
        v-for="(letter, index) in greetingMessageLetters"
        :key="index"
        :alphabet="letter"
      />
    </span>
    <div class="buttons flex gap-4">
      <NavigationBarButton
        v-for="buttonData in NavigationBarButtonList"
        :key="buttonData.id"
        :buttonText="buttonData.buttonText"
        :viewDestination="buttonData.viewDestination"
      />
    </div>
  </nav>
</template>
