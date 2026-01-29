<template>
  <section class="wrapper">
    <slot />
  </section>
</template>

<script setup></script>

<style scoped>
.wrapper {
  padding: 5vmin 3vmin;
  max-width: 90%;
  margin: 0 auto;

  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
