<template>
  <n-space justify="space-between" align="center" class="header">
    <div class="logo">
      <n-h3>Autoraketa</n-h3>
    </div>
    <n-space>
      <n-button type="tertiary" @click="scrollTo('home')">Home</n-button>
      <n-button type="tertiary" @click="scrollTo('why-us')">Why Us</n-button>
      <n-button type="tertiary" @click="scrollTo('calc')">Calc</n-button>
      <n-button type="primary" @click="goToApply">Join</n-button>
    </n-space>
  </n-space>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToApply() {
  router.push("/apply");
}

// optional smooth scroll to sections
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.header {
  padding: 2vmin 5vmin;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}
.logo {
  font-weight: bold;
}
</style>
