<template>
  <SectionWrapper>
    <n-h2> {{ t("earnings.title") }} </n-h2>
    <n-h3>{{ t("earnings.subtitle") }}</n-h3>

    <n-space vertical size="large">
      <n-slider v-model:value="deals" :min="1" :max="12" :step="1" />

      <n-text>
        {{ t("earnings.dealsLabel") }}: <strong>{{ deals }}</strong>
      </n-text>

      <n-h1>
        {{ formattedEarnings }}
      </n-h1>
      <n-text depth="3"> {{ t("earnings.hint") }} </n-text>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../common/SectionWrapper.vue";

const { t } = useI18n();

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
  return `${earnings.value.toLocaleString()} ${t("earnings.currency")}`;
});
</script>

<style scoped></style>
