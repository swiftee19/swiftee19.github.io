<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { NavigationBarButtonList } from './NavigationBarButtonList'
import NavigationBarButton from './NavigationBarButton.vue'
import getRandomGreetingMessage from './GreetingMessageList'
import GreetingMessageAlphabet from './GreetingMessageAlphabet.vue'

const greetingMessage = getRandomGreetingMessage() + ', Visitor!'
const greetingMessageLetters = greetingMessage.split('')

const isScrolled = ref(false)
const navbarHeight = ref(0)

const handleScroll = () => {
  if (window.scrollY > navbarHeight.value) {
    isScrolled.value = true
  } else {
    isScrolled.value = false
  }
}

onMounted(() => {
  const navbar = document.querySelector('nav')
  if (navbar) {
    navbarHeight.value = navbar.offsetHeight
  }
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-screen flex justify-end items-center py-4 px-8 transition-colors duration-300 ease-in-out"
    :class="{ 'backdrop-blur-lg bg-black/30': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <span class="mr-auto hover:cursor-default">
      <GreetingMessageAlphabet
        v-for="(letter, index) in greetingMessageLetters"
        :key="index"
        :alphabet="letter"
      />
    </span>
    <div class="buttons flex gap-6">
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
  z-index: 1000;
}
</style>