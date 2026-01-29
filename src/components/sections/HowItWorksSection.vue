<template>
  <SectionWrapper>
    <n-h2>How it works</n-h2>

    <n-steps vertical :current="4">
      <n-step
        title="Find a client"
        description="Someone who wants to buy a car"
      />
      <n-step
        title="Send us the contact"
        description="Via website, Telegram or call"
      />
      <n-step
        title="We do all the work"
        description="Consulting, delivery, documents"
      />
      <n-step
        title="Get paid"
        description="Reward to your card after the deal"
      />
    </n-steps>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../common/SectionWrapper.vue";
</script>

<style scoped></style>
