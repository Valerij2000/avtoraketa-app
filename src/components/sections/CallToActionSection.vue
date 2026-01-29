<template>
  <SectionWrapper>
    <n-space vertical align="center" size="large">
      <n-h2>Ready to start earning?</n-h2>

      <n-text depth="3">
        Leave your contact and we’ll explain everything in 10 minutes
      </n-text>

      <ButtonApply :text="buttonApplyText"></ButtonApply>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../common/SectionWrapper.vue";
import ButtonApply from "../common/ButtonApply.vue";

const buttonApplyText = "Join the team";
</script>
