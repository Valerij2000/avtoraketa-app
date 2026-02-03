<template>
  <SectionWrapper>
    <n-space vertical size="large">
      <n-h2>{{ t("why.title") }}</n-h2>
      <n-text depth="3">
        {{ t("why.subtitle") }}
      </n-text>

      <n-space justify="space-between" wrap>
        <n-card
          v-for="item in cards"
          :key="item.key"
          :title="item.title"
          bordered
        >
          {{ item.text }}
        </n-card>
      </n-space>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import SectionWrapper from "../common/SectionWrapper.vue";

const { t } = useI18n();

const cards = computed(() => [
  {
    key: "noInvestments",
    title: t("why.cards.noInvestments.title"),
    text: t("why.cards.noInvestments.text"),
  },
  {
    key: "remote",
    title: t("why.cards.remote.title"),
    text: t("why.cards.remote.text"),
  },
  {
    key: "fullSupport",
    title: t("why.cards.fullSupport.title"),
    text: t("why.cards.fullSupport.text"),
  },
  {
    key: "earnings",
    title: t("why.cards.earnings.title"),
    text: t("why.cards.earnings.text"),
  },
]);
</script>

<style scoped>
.n-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.n-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
</style>
