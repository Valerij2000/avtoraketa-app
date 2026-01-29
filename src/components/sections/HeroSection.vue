<template>
  <SectionWrapper>
    <n-space vertical size="large">
      <n-h1> Earn from 30,000₽ per deal Become an Autoraketa agent </n-h1>

      <n-text depth="3">
        Ozon for cars — we handle the hard work, you earn.
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

<style scoped></style>
