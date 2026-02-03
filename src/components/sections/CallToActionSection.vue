<template>
  <SectionWrapper>
    <n-space vertical align="center" size="large">
      <n-h2>{{ t("cta.title") }}</n-h2>

      <n-text depth="3" class="subtitle">
        {{ t("cta.subtitle") }}
        <strong style="white-space: nowrap">
          {{ t("cta.subtitleStrong") }}
        </strong>
      </n-text>

      <ButtonApply :text="t('cta.button')"></ButtonApply>
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

<style scoped>
.subtitle {
  display: block;
  margin: 0 auto;
  text-align: center;
}
</style>
