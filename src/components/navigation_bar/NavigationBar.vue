<script setup lang="ts">
import { NavigationBarButtonList } from './NavigationBarButtonList'
import NavigationBarButton from './NavigationBarButton.vue'
import getRandomGreetingMessage from './GreetingMessageList'

const greetingMessage = getRandomGreetingMessage()
</script>

<template>
  <nav>
    <span class="greeting">{{ greetingMessage }}, Visitor!</span>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.greeting {
  font-size: 1rem;
  margin-right: auto;
}

.buttons {
  display: flex;
  gap: 1rem;
}
</style>
