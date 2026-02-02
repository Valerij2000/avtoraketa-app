<template>
  <SectionWrapper>
    <n-space vertical size="large">
      <n-h1> {{ t("hero.title") }} </n-h1>

      <n-text depth="3">
        {{ t("hero.subtitle") }}
      </n-text>

      <ButtonApply :text="t('hero.button')"></ButtonApply>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import SectionWrapper from "../common/SectionWrapper.vue";
import ButtonApply from "../common/ButtonApply.vue";

const { t } = useI18n();

const buttonApplyText = "Join the team";
</script>

<style scoped></style>
