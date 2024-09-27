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
    },
    ExperienceImages: {
        type: Array,
        required: true
    }
})
</script>

<template>
    <div class="flex h-fit w-full justify-between">
        <div class="flex flex-col w-1/2">
            <AccentedText>
                <h1 class="text-4xl font-bold">{{ ExperienceTitle }}</h1>
            </AccentedText>
            <p class="text-lg text-stone-400">{{ ExperienceStartDate }} - {{ ExperienceEndDate }}</p>
        </div>
        <div class="flex flex-col w-1/2">
            <p class="text-lg">{{ ExperienceDescription }}</p>
        </div>
    </div>
</template>