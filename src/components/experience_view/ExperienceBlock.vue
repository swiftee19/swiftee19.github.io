<script setup lang="ts">
import AccentedText from '../general/AccentedText.vue'

defineProps({
    ExperienceTitle: {
        type: String,
        required: true
    },
    ExperienceStartDate: {
        type: String,
        required: true
    },
    ExperienceEndDate: {
        type: String,
        required: true
    },
    ExperienceDescription: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="flex h-fit w-full justify-between relative pt-32">
        <div class="flex flex-col w-1/2 max-w-[50%]  text-wrap">
            <AccentedText class="relative">
                <span class="absolute -left-8 top-1/2 -translate-y-1/2 bg-text size-4 rounded-full z-10"></span> <!-- timeline bullet points -->
                <h1 class="text-4xl font-bold">{{ ExperienceTitle }}</h1>
            </AccentedText>
            <p class="text-lg text-stone-400">{{ ExperienceStartDate }} - {{ ExperienceEndDate }}</p>
        </div>
        <p id="description-text" class="w-1/2 text-lg" v-html="ExperienceDescription"></p>
    </div>
</template>