<script setup lang="ts">
import AccentedText from '@/components/general/AccentedText.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main class="min-h-screen w-full flex justify-center items-center py-20">
    <div class="w-full max-w-4xl flex flex-col justify-start items-start gap-8">
      <div class="w-full flex flex-col justify-start items-start gap-6">
        <div class="w-full flex items-center justify-center">
          <img class="rounded-full object-cover w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96" src="/irvin_cropped.jpg"
            alt="profile picture">
        </div>
        <div class="flex flex-col gap-2 items-start">
          <div class="flex gap-2 h-full items-end">
            <div class="flex flex-col">
              <p class="text-2xl md:text-3xl">Hi,</p>
              <p class="text-2xl md:text-3xl">I'm</p>
            </div>
            <h1 class="text-4xl md:text-6xl lg:text-8xl">
              <AccentedText>Irvin</AccentedText>!
            </h1>
          </div>
          <p class="text-lg md:text-xl lg:text-2xl mt-4">
            I'm a learner who's always about exploring new and exciting technologies. I enjoy sharpening my skills
            and
            staying on top of trends. Curiosity drives me, and I love learning and working with others.
          </p>
          <p class="text-lg md:text-xl lg:text-2xl mt-2">
            Check out some of my
            <RouterLink :to="`/projects`">projects</RouterLink>!
          </p>
        </div>
      </div>
    </div>
  </main>
</template>