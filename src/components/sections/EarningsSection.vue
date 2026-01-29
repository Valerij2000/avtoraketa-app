<template>
  <SectionWrapper>
    <n-h2>From 30,000₽ to 50,000₽ per deal depending on activity</n-h2>
    <n-h3>Your earnings</n-h3>

    <n-space vertical size="large">
      <n-slider v-model:value="deals" :min="1" :max="6" :step="1" />

      <n-text>
        Deals per month: <strong>{{ deals }}</strong>
      </n-text>

      <n-h1>
        {{ formattedEarnings }}
      </n-h1>
      <n-text depth="3"> More deals — higher reward </n-text>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionWrapper from "../common/SectionWrapper.vue";

const deals = ref(1);

const earnings = computed(() => {
  if (deals.value >= 4) return 50000;
  if (deals.value >= 2) return 40000;
  return 30000;
});

// presentation concern not business logic
const formattedEarnings = computed(() => {
  return `${earnings.value.toLocaleString()} ₽`;
});
</script>

<style scoped></style>
