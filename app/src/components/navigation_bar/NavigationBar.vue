<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { NavigationBarButtonList } from './NavigationBarButtonList'
import { useRoute } from 'vue-router'
import NavigationBarButton from './NavigationBarButton.vue'
import getRandomGreetingMessage from './GreetingMessageList'
import GreetingMessageAlphabet from './GreetingMessageAlphabet.vue'
import { ContactListData } from '../footer_bar/ContactListData'
import ContactButton from '../footer_bar/ContactButton.vue'

const greetingMessage = getRandomGreetingMessage() + ', Visitor!'
const greetingMessageLetters = greetingMessage.split('')

const isScrolled = ref(false)
const navbarHeight = ref(0)

const route = useRoute()

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

watch(route, (newRoute) => {
  console.log(newRoute.path)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-screen flex justify-between items-center py-4 px-8 transition-colors duration-300 ease-in-out"
    :class="{ 'backdrop-blur-lg bg-black/30': isScrolled, 'bg-transparent': !isScrolled }"
  >
    <span class="hover:cursor-default">
      <GreetingMessageAlphabet
        v-for="(letter, index) in greetingMessageLetters"
        :key="index"
        :alphabet="letter"
      />
    </span>
    <div class="flex gap-6">
      <NavigationBarButton
        v-for="buttonData in NavigationBarButtonList"
        :key="buttonData.id"
        :buttonText="buttonData.buttonText"
        :viewDestination="buttonData.viewDestination"
        :currentRoute="route.path"
      />
    </div>
  </nav>
</template>


<style scoped>
nav {
  z-index: 1000;
}
</style>