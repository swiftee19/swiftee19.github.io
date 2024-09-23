<script setup lang="ts">
import AccentedText from '@/components/general/AccentedText.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex-1 h-full w-full flex justify-center items-center gap-8 py-4 px-20">
    <div class="relative p-2 bg-white flex justify-center items-center overflow-hidden object-contain shadow-sm rounded-3xl">
      <img
        src="/Yuta_Okkotsu.png"
        alt="Profile Picture"
        class="h-[70vh]"
      />
    </div>
    <div class="h-[70vh] w-[70%] flex flex-col justify-start items-start">
      <div class="text-container w-full flex flex-col justify-start items-start">
        <h1 class="text-5xl leading-[4rem]"><AccentedText>Welcome to my portofolio</AccentedText>!</h1>
        <p>
          I'm Irvin and I am a tech enthusiast. I am currently learning new
          and popular technologies while constantly improving my skills.
        </p>
        <p>I am a genuinely curious person and enjoy learning and collaborating.</p>
        <p>
          Feel free to take a look at some of my
          <RouterLink :to="`/projects`">projects</RouterLink>!
        </p>
      </div>
      <div class="h-full w-full py-4 flex justify-between items-start">
        <div class="h-full flex flex-col gap-4">
          
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
p {
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--text-color);
}
</style>
