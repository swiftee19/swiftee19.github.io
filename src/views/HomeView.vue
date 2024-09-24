<script setup lang="ts">
import AccentedText from '@/components/general/AccentedText.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="flex-1 h-full w-full flex justify-center items-center gap-8 py-4 px-20">
    <div class="h-[70vh] w-[70%] flex flex-col justify-start items-start">
      <div class="w-full flex flex-col justify-start items-start">
        <div class="w-full flex items-center justify-center relative">
          <img class="rounded-full object-cover size-96" src="/kelvin.jpg" alt="profile picture">
        </div>
        <div class="flex gap-2 items-end pb-4">
          <div class="flex flex-col">
            <p class="text-3xl">Hi,</p>
            <p class="text-2xl">I’m</p>
          </div>
          <h1 class="text-8xl">
            <AccentedText>Irvin</AccentedText>!
          </h1>
        </div>
        <p class="text-2xl">
          I’m a tech lover who’s always exploring new and exciting tools and tech. I enjoy sharpening my skills and
          staying on top of trends. Curiosity drives me, and I love learning and working with others.
        </p>
        <p class="text-2xl">
          Check out some of my
          <RouterLink :to="`/projects`">projects</RouterLink>!
        </p>
      </div>
      <div class="h-full w-full py-4 flex justify-between items-start">
      <div class="h-full flex flex-col gap-4">

      </div>
    </div>
  </div>
</main></template>
