<script setup lang="ts">
import SingleImageComponentForCarousel from './SingleImageComponentForCarousel.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Project } from './ProjectsData'
import AccentedText from '../general/AccentedText.vue'
import HoverableIcon from './HoverableIcon.vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
})
</script>

<template>
  <div class="pt-20 pb-10 h-fit max-w-full flex flex-col items-center gap-2">
    <AccentedText
      ><h1 class="text-7xl font-thin py-4">{{ project.title }}</h1></AccentedText
    >
    <div class="w-full h-fit relative overflow-hidden">
      <Swiper
        :modules="[Navigation]"
        :slides-per-view="1"
        :space-between="10"
        :loop="true"
        :navigation="true"
        class="h-fit w-full"
      >
        <SwiperSlide v-for="(image, index) in project.images" :key="index">
          <SingleImageComponentForCarousel :image="image" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="w-4/5 h-fit flex justify-between mt-4">
      <div class="flex flex-col w-[40%] gap-2">
        <p class="text-3xl text-secondary">Tech Stack</p>
        <div class="flex gap-2 flex-wrap">
          <HoverableIcon
            v-for="tech in project.technology_stack"
            :key="tech.id"
            :image="tech.image"
            :iconName="tech.name"/>
        </div>
      </div>
      <div class="flex flex-col w-[58%]">
        <p class="text-xl" v-html="project.description"></p>
      </div>
    </div>
  </div>
</template>
