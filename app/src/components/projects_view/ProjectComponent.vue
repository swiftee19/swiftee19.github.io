<script setup lang="ts">
import SingleImageComponentForCarousel from './SingleImageComponentForCarousel.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import type { Project } from './ProjectsData'

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
    <div class="pt-20 pb-10 h-screen max-h-fit max-w-full flex flex-col items-center gap-2">
        <h1 class="text-7xl font-thin py-4">{{ project.title }}</h1>
        <div class="w-full  relative overflow-hidden">
            <Swiper :modules="[Navigation]" :slides-per-view="1" :space-between="10" :loop="true" :navigation="true"
                class="h-full w-full">
                <SwiperSlide v-for="(image, index) in project.images" :key="index">
                    <SingleImageComponentForCarousel :image="image" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="w-4/5 h-fit flex justify-between mt-4">
            <div class="flex flex-col w-[40%]">
                <p class="text-3xl">Tech Stack</p>
                <p></p>
            </div>
            <div class="flex flex-col w-[58%]">
                <p class="text-2xl">{{ project.description }}</p>
            </div>
        </div>
    </div>
</template>