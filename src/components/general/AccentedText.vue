<template>
  <span><slot></slot></span>
</template>

<style scoped>
span {
  background: linear-gradient(90deg, var(--gold-color), var(--purple-color), var(--gold-color));
  background-size: 300%;
  background-clip: text;
  color: transparent;
  animation: slide 7s infinite alternate linear;
}

@keyframes slide {
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
