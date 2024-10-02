<script setup lang="ts">
import ProjectComponent from '../components/projects_view/ProjectComponent.vue'
import {ProjectsData} from '../components/projects_view/ProjectsData'
</script>

<template>
  <main class="min-h-screen w-full flex flex-col items-center ">
    <ProjectComponent v-for="project in ProjectsData" :key="project.id" :project="project" />
  </main>
</template>