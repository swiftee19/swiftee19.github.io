<script setup lang="ts">
import { ref } from 'vue'
import SingleImageComponentForCarousel from './SingleImageComponentForCarousel.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const images = ref<Array<string>>([
    '/javascript_icon.svg',
    '/linkedin_icon.svg',
    '/javascript_icon.svg',
    '/linkedin_icon.svg',
])
</script>

<template>
    <div class="pt-20 pb-10 h-screen max-w-full flex flex-col items-center gap-2">
        <h1 class="text-7xl font-thin py-4">Project Title</h1>
        <div class="w-full h-4/5  relative overflow-hidden">
            <Swiper :modules="[Navigation]" :slides-per-view="1" :space-between="10" :loop="true"
                :navigation="true" class="h-full w-full">
                <SwiperSlide v-for="(image, index) in images" :key="index">
                    <SingleImageComponentForCarousel :image="image" />
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="w-4/5 h-fit flex justify-between mt-4">
            <div class="flex flex-col w-[48%]">
                <p>Tech Stack</p>
                <p>Tech Stack Icons</p>
            </div>
            <div class="flex flex-col w-[48%]">
                <p>Images: {{ images }}</p>
                <p>Tech Stack Icons</p>
            </div>
        </div>
    </div>
</template>