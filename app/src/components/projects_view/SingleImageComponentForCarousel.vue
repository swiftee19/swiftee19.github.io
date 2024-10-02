<script setup lang="ts">
defineProps({
    image: String
})
</script>

<template>
    <div class="size-full object-contain flex-shrink-0 flex items-center justify-center">
        <img class="size-11/12 object-contain flex-shrink-0 rounded-md" :src="image" alt="image">
    </div>
</template>