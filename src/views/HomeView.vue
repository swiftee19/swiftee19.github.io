<script setup lang="ts"></script>

<template>
  <main>
    <div class="profile-picture-container">
      <img
        src="/Yuta_Okkotsu_29-removebg-preview.png"
        alt="Profile Picture"
        class="profile-picture"
      />
    </div>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
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
  box-shadow: 0 0 10px var(--shadow-color);
  border-radius: 50px;
}

.profile-picture {
  height: 70vh;
}
</style>
