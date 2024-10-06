<script setup lang="ts">
import { computed } from 'vue'
import type { Project } from './ProjectsData'
import HoverableIcon from './HoverableIcon.vue'

const props = defineProps({
  project: {
    type: Object as () => Project,
    required: true
  }
})

const isGitHubLinkAvailable = computed(() => {
  return !!props.project.github_repository_link // returns true if the link is available
})

const isProjectLinkAvailable = computed(() => {
  return !!props.project.demo_link // returns true if the link is available
})

const openGitHubLink = () => {
  window.open(props.project.github_repository_link, '_blank')
}

const openProjectLink = () => {
  window.open(props.project.demo_link, '_blank')
}
</script>

<template>
  <div class="flex flex-col gap-2" v-if="isGitHubLinkAvailable || isProjectLinkAvailable">
    <p class="text-3xl text-secondary">See More</p>
    <div class="flex gap-2">
      <button @click="openGitHubLink">
        <HoverableIcon
          v-if="isGitHubLinkAvailable"
          iconName="Github Repository"
          :image="'/github_icon_dark_mode.svg'"
        />
      </button>
      <button
        class="bg-primary px-2 py-1 rounded-md text-white font-semibold border-2 border-primary transition hover:bg-white hover:text-primary"
        v-if="isProjectLinkAvailable"
        @click="openProjectLink"
      >
        Start Demo
      </button>
    </div>
  </div>
</template>
