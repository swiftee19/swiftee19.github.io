<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  media: String
})

// Check if the media is an image
const isImage = computed(() => {
  if (!props.media) {
    return false
  }
  return /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(props.media)
})

// Check if the media is a video file
const isVideo = computed(() => {
  if (!props.media) {
    return false
  }
  return /\.(mp4|webm|ogg|mov)$/i.test(props.media)
})

// Check if the media is a YouTube link
const isYouTube = computed(() => {
  if (!props.media) {
    return false
  }
  // Check if the link is a YouTube video
  return /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/i.test(props.media)
})

// Extract YouTube video ID from the link to use in an embed iframe
const youTubeEmbedUrl = computed(() => {
  if (!props.media) return ''
  
  const videoId = props.media.split('v=')[1]?.split('&')[0] || props.media.split('/').pop();
  return `https://www.youtube.com/embed/${videoId}`
})
</script>

<template>
  <div class="w-full h-fit flex-shrink-0 flex items-center justify-center">
    <!-- Image rendering -->
    <img
      v-if="isImage"
      class="w-4/5 h-auto max-h-[80vh] object-contain flex-shrink-0 rounded-md"
      :src="media"
      alt="project image"
    />

    <!-- Local video file rendering -->
    <video
      v-if="isVideo"
      class="w-4/5 h-auto max-h-[80vh] object-contain flex-shrink-0 rounded-md"
      controls
    >
      <source :src="media" />
      Your browser does not support the video tag.
    </video>

    <!-- YouTube video rendering via iframe -->
    <iframe
      v-if="isYouTube"
      class="w-4/5 h-auto max-h-[80vh] object-contain flex-shrink-0 rounded-md"
      :src="youTubeEmbedUrl"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>
  </div>
</template>
