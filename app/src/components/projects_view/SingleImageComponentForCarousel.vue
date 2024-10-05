<script setup lang="ts">
defineProps({
    image: String
})
</script>

<template>
    <div class="w-full h-fit flex-shrink-0 flex items-center justify-center">
        <img class="w-4/5 h-auto max-h-[80vh] object-contain flex-shrink-0 rounded-md" :src="image" alt="project image">
    </div>
</template>