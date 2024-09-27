<script setup lang="ts">
import { ExperienceDataList } from '../components/experience_view/ExperienceData'
import ExperienceBlock from '../components/experience_view/ExperienceBlock.vue'

const sortedExperienceDataList = ExperienceDataList.sort((a, b) => {
    return new Date(b.ExperienceStartDate).getTime() - new Date(a.ExperienceStartDate).getTime()
})
</script>

<template>
    <main class="min-h-screen w-full py-20 overflow-y-clip flex items-center justify-center">
        <div class="w-full flex flex-col px-40 items-center justify-between">
            <ExperienceBlock v-for="experience in sortedExperienceDataList" :key="experience.id"
                :ExperienceTitle="experience.ExperienceTitle" :ExperienceStartDate="experience.ExperienceStartDate"
                :ExperienceEndDate="experience.ExperienceEndDate" :ExperienceDescription="experience.ExperienceDescription"
                :ExperienceImages="experience.ExperienceImages" />
        </div>
    </main>
</template>