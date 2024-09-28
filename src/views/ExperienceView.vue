<script setup lang="ts">
import { ExperienceDataList } from '../components/experience_view/ExperienceData'
import ExperienceBlock from '../components/experience_view/ExperienceBlock.vue'

const sortedExperienceDataList = ExperienceDataList.sort((a, b) => {
    return new Date(b.ExperienceStartDate).getTime() - new Date(a.ExperienceStartDate).getTime()
})
</script>

<template>
    <main class="min-h-screen w-full py-20 overflow-y-clip flex items-center justify-center">
        <div class="w-4/5 flex flex-col items-center justify-between relative">
            <!-- timeline line -->
            <span class="absolute bottom-0 -left-[1.68rem] w-1.5 z-0 bg-gray rounded-b-lg"
                :style="{ height: 'calc(100% - 1.7rem)' }"></span>
            <div class="flex h-fit w-full justify-between relative">
                <div class="flex flex-col w-1/2 max-w-[50%]  text-wrap">
                    <div class="relative">
                        <!-- timeline bullet points -->
                        <span
                            class="absolute -left-8 top-1/2 -translate-y-1/2 bg-stone-400 size-4 rounded-full z-10"></span>
                        <h1 class="text-4xl font-bold text-stone-400">Upcoming</h1>
                    </div>
                </div>
                <p class="w-1/2 text-lg text-stone-400">Let's work together on building a better future!</p>
            </div>
            <ExperienceBlock v-for="(experience) in sortedExperienceDataList" :key="experience.id"
                :ExperienceTitle="experience.ExperienceTitle" :ExperienceStartDate="experience.ExperienceStartDate"
                :ExperienceEndDate="experience.ExperienceEndDate"
                :ExperienceDescription="experience.ExperienceDescription" />
        </div>
    </main>
</template>