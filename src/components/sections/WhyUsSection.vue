<template>
  <SectionWrapper>
    <n-space vertical size="large">
      <n-h2>Why work with Autoraketa?</n-h2>
      <n-text depth="3">
        From the first day, you can start earning without risk or investment.
      </n-text>

      <n-space justify="space-between" wrap>
        <n-card title="No investments" bordered>
          You don’t buy cars or risk your money. Just bring your energy and
          motivation.
        </n-card>

        <n-card title="Remote work" bordered>
          Work from home, university, store, or even vacation. Just a phone and
          internet needed.
        </n-card>

        <n-card title="We handle everything" bordered>
          We take care of searching, negotiating, logistics, and paperwork. You
          just receive your reward.
        </n-card>

        <n-card title="High earnings" bordered>
          Start with 30,000 ₽ per deal and earn more as you become an active
          agent.
        </n-card>
      </n-space>
    </n-space>
  </SectionWrapper>
</template>

<script setup>
import SectionWrapper from "../common/SectionWrapper.vue";
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
