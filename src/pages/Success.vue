<template>
  <SectionWrapper>
    <n-space vertical align="center" size="large">
      <n-h2>Application sent 🎉</n-h2>

      <n-text depth="3"> We’ll contact you within 10 minutes </n-text>

      <n-space>
        <n-button
          type="primary"
          tag="a"
          href="https://t.me/Pashkovskiyavto"
          target="_blank"
        >
          Go to Telegram
        </n-button>

        <router-link to="/">
          <n-button type="primary"> Go to Home Page </n-button>
        </router-link>
      </n-space>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../components/common/SectionWrapper.vue";
</script>
