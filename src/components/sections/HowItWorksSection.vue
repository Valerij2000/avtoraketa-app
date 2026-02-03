<template>
  <SectionWrapper>
    <n-h2> {{ t("howItWorks.title") }} </n-h2>

    <n-steps vertical :current="4">
      <n-step
        v-for="step in steps"
        :key="step.key"
        :title="step.title"
        :description="step.description"
      />
    </n-steps>
  </SectionWrapper>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../common/SectionWrapper.vue";

const { t } = useI18n();

const steps = computed(() => [
  {
    key: "find",
    title: t("howItWorks.steps.find.title"),
    description: t("howItWorks.steps.find.description"),
  },
  {
    key: "send",
    title: t("howItWorks.steps.send.title"),
    description: t("howItWorks.steps.send.description"),
  },
  {
    key: "work",
    title: t("howItWorks.steps.work.title"),
    description: t("howItWorks.steps.work.description"),
  },
  {
    key: "paid",
    title: t("howItWorks.steps.paid.title"),
    description: t("howItWorks.steps.paid.description"),
  },
]);
</script>

<style scoped></style>
