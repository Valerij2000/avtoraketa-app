<template>
  <SectionWrapper>
    <n-h2>From 30,000₽ to 250,000₽ per deal depending on activity</n-h2>
    <n-h3>Your earnings</n-h3>

    <n-space vertical size="large">
      <n-slider v-model:value="deals" :min="1" :max="12" :step="1" />

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

const deals = ref(3);
const earningsOptions = [
  30000, 50000, 70000, 90000, 110000, 130000, 150000, 170000, 190000, 210000,
  230000, 250000,
];

const earnings = computed(() => {
  // clamp deals to available options
  const index = Math.min(deals.value - 1, earningsOptions.length - 1);
  return earningsOptions[index];
});

// presentation concern not business logic
const formattedEarnings = computed(() => {
  return `${earnings.value.toLocaleString()} ₽`;
});
</script>

<style scoped></style>
