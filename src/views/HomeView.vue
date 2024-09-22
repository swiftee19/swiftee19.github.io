<script setup lang="ts">
import AccentedText from '@/components/general/AccentedText.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="profile-picture-container">
      <img
        src="/Yuta_Okkotsu_29-removebg-preview.png"
        alt="Profile Picture"
        class="profile-picture"
      />
    </div>
    <div class="right-side-content-container">
      <div class="text-container">
        <h1 class="welcome-message"><AccentedText>Welcome to my portofolio</AccentedText>!</h1>
        <p>
          My name is <strong>Irvin</strong> and I am a tech enthusiast. I am currently learning new
          and popular technologies while constantly improving my skills.
        </p>
        <p>I am a genuinely curious person and enjoy learning and collaborating.</p>
        <p>
          Feel free to take a look at some of my
          <RouterLink :to="`/projects`">projects</RouterLink>!
        </p>
      </div>
      <div class="skills-container"></div>
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 5rem;
}

.profile-picture-container {
  position: relative;
  height: fit-content;
  width: fit-content;
  padding: 1rem;
  background-color: #faf0e6;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: contain;
  box-shadow: 0 0 10px var(--shadow-color);
  border-radius: 50px;
}

.profile-picture {
  height: 70vh;
}

.right-side-content-container {
  height: 70vh;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.text-container {
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
}

.welcome-message {
  position: relative;
  font-size: 2rem;
  line-height: 4rem;
  color: var(--text-color);
}

.skills-container {
  height: 100%;
  width: 100%;
  padding-block: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
}

p {
  font-size: 1.3rem;
  line-height: 2rem;
  color: var(--text-color);
}
</style>
