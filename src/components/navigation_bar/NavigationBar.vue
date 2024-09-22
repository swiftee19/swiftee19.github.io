<script setup lang="ts">
import { NavigationBarButtonList } from './NavigationBarButtonList'
import NavigationBarButton from './NavigationBarButton.vue'
import getRandomGreetingMessage from './GreetingMessageList'
import GreetingMessageAlphabet from './GreetingMessageAlphabet.vue'

const greetingMessage = getRandomGreetingMessage() + ', Visitor!'
const greetingMessageLetters = greetingMessage.split('')
</script>

<template>
  <nav>
    <span class="greeting">
      <GreetingMessageAlphabet
        v-for="(letter, index) in greetingMessageLetters"
        :key="index"
        :alphabet="letter"
      />
    </span>
    <div class="buttons">
      <NavigationBarButton
        v-for="buttonData in NavigationBarButtonList"
        :key="buttonData.id"
        :buttonText="buttonData.buttonText"
        :viewDestination="buttonData.viewDestination"
      />
    </div>
  </nav>
</template>

<style scoped>
nav {
  width: 100vw;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  box-shadow: 0 2px 4px var(--shadow-color);
}

span:hover {
  cursor: default;
}

.greeting {
  margin-right: auto;
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
