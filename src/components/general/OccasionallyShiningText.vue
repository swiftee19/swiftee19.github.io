<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  initialColor: {
    type: String,
    default: '#c7ffd8'
  },
  shiningColor: {
    type: String,
    default: '#D8B700'
  },
  shiningDuration: {
    type: Number,
    default: 2000 // in milliseconds
  },
  minShiningInterval: {
    type: Number,
    default: 5000 // in milliseconds
  },
  maxShiningInterval: {
    type: Number,
    default: 10000 // in milliseconds
  }
})

const color = ref(props.initialColor)
let interval: number = 0

const shine = () => {
  color.value = props.shiningColor
  setTimeout(() => {
    color.value = props.initialColor
  }, props.shiningDuration)

  clearInterval(interval)
  setRandomInterval()
}

const setRandomInterval = () => {
  const randomInterval =
    Math.floor(Math.random() * (props.maxShiningInterval - props.minShiningInterval + 1)) +
    props.minShiningInterval
  interval = setInterval(shine, randomInterval)
}

onMounted(() => {
  setRandomInterval()
})

onBeforeUnmount(() => {
  clearInterval(interval)
})
</script>

<template>
  <span :style="{ color: color }"><slot></slot></span>
</template>

<style scoped>
span {
  transition: color 1s;
}
</style>
